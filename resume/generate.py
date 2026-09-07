#!/usr/bin/env python3
"""Render an ATS-friendly resume (DOCX, PDF, HTML, TXT) from a YAML spec."""

from __future__ import annotations

import argparse
import html
import shutil
import subprocess
import sys
from pathlib import Path

try:
    import yaml
except ImportError:
    sys.exit("Missing PyYAML. Run: pip install -r resume/requirements.txt")

try:
    from docx import Document
    from docx.enum.text import WD_ALIGN_PARAGRAPH, WD_LINE_SPACING
    from docx.oxml import OxmlElement
    from docx.oxml.ns import qn
    from docx.shared import Cm, Pt, RGBColor
except ImportError:
    sys.exit("Missing python-docx. Run: pip install -r resume/requirements.txt")

ROOT = Path(__file__).resolve().parent
OUTPUT = ROOT / "output"
CONTACT_FILE = ROOT / "profile.yaml"


def load_yaml(path: Path) -> dict:
    with path.open(encoding="utf-8") as fh:
        data = yaml.safe_load(fh)
    if not isinstance(data, dict):
        raise ValueError(f"Expected a mapping in {path}")
    return data


def set_run_font(run, name: str = "Calibri", size: float = 11, bold: bool = False, color: str | None = None):
    run.bold = bold
    run.font.name = name
    run._element.rPr.rFonts.set(qn("w:eastAsia"), name)
    run.font.size = Pt(size)
    if color:
        run.font.color.rgb = RGBColor.from_string(color)


def add_bottom_border(paragraph):
    p_pr = paragraph._p.get_or_add_pPr()
    p_bdr = OxmlElement("w:pBdr")
    bottom = OxmlElement("w:bottom")
    bottom.set(qn("w:val"), "single")
    bottom.set(qn("w:sz"), "12")
    bottom.set(qn("w:space"), "1")
    bottom.set(qn("w:color"), "222222")
    p_bdr.append(bottom)
    p_pr.append(p_bdr)


def set_paragraph_spacing(paragraph, before=0, after=4, line=1.08):
    paragraph.paragraph_format.space_before = Pt(before)
    paragraph.paragraph_format.space_after = Pt(after)
    paragraph.paragraph_format.line_spacing = line
    paragraph.paragraph_format.line_spacing_rule = WD_LINE_SPACING.MULTIPLE


def configure_styles(doc: Document) -> None:
    normal = doc.styles["Normal"]
    normal.font.name = "Calibri"
    normal.font.size = Pt(10.5)
    normal._element.rPr.rFonts.set(qn("w:eastAsia"), "Calibri")
    heading = doc.styles["Heading 2"]
    heading.font.name = "Calibri"
    heading.font.size = Pt(11.5)
    heading.font.bold = True
    heading.font.color.rgb = RGBColor.from_string("111111")
    heading.paragraph_format.space_before = Pt(8)
    heading.paragraph_format.space_after = Pt(2)
    heading.paragraph_format.line_spacing = 1.0
    bullet = doc.styles["List Bullet"]
    bullet.font.name = "Calibri"
    bullet.font.size = Pt(10.5)
    bullet.paragraph_format.space_before = Pt(0)
    bullet.paragraph_format.space_after = Pt(0)


def add_section_heading(doc: Document, text: str):
    p = doc.add_paragraph()
    p.style = doc.styles["Heading 2"]
    if p.runs:
        p.runs[0].text = text.upper()
        set_run_font(p.runs[0], size=11.5, bold=True, color="111111")
    else:
        run = p.add_run(text.upper())
        set_run_font(run, size=11.5, bold=True, color="111111")
    set_paragraph_spacing(p, before=8, after=2, line=1.0)
    add_bottom_border(p)
    return p


def contact_lines(contact: dict) -> list[str]:
    top = " | ".join(
        p
        for p in [
            contact.get("location"),
            contact.get("email"),
            contact.get("phone"),
        ]
        if p
    )
    bottom = " | ".join(
        p
        for p in [
            contact.get("linkedin"),
            contact.get("github"),
            contact.get("website"),
        ]
        if p
    )
    return [line for line in (top, bottom) if line]


def contact_line(contact: dict) -> str:
    return " | ".join(contact_lines(contact))


def build_docx(spec: dict, contact: dict, dest: Path) -> None:
    doc = Document()
    for section in doc.sections:
        section.top_margin = Cm(1.0)
        section.bottom_margin = Cm(1.0)
        section.left_margin = Cm(1.4)
        section.right_margin = Cm(1.4)
        section.page_width = Cm(21.0)
        section.page_height = Cm(29.7)

    configure_styles(doc)

    name = doc.add_paragraph()
    name.alignment = WD_ALIGN_PARAGRAPH.CENTER
    set_paragraph_spacing(name, before=0, after=0, line=1.0)
    name_run = name.add_run(contact.get("full_name", "Youness JELLOULI"))
    set_run_font(name_run, size=20, bold=True, color="111111")

    headline = spec.get("headline") or contact.get("headline")
    if headline:
        h = doc.add_paragraph()
        h.alignment = WD_ALIGN_PARAGRAPH.CENTER
        set_paragraph_spacing(h, before=2, after=2, line=1.0)
        hr = h.add_run(headline)
        set_run_font(hr, size=11, bold=False, color="333333")

    for line in contact_lines(contact):
        contact_p = doc.add_paragraph()
        contact_p.alignment = WD_ALIGN_PARAGRAPH.CENTER
        set_paragraph_spacing(contact_p, before=0, after=0, line=1.0)
        cr = contact_p.add_run(line)
        set_run_font(cr, size=9.5, color="333333")

    if spec.get("summary"):
        add_section_heading(doc, "Professional Summary")
        s = doc.add_paragraph()
        set_paragraph_spacing(s, before=1, after=2, line=1.12)
        sr = s.add_run(str(spec["summary"]).strip())
        set_run_font(sr, size=10.5)

    if spec.get("skills"):
        add_section_heading(doc, "Skills")
        for group in spec["skills"]:
            p = doc.add_paragraph()
            set_paragraph_spacing(p, before=0, after=1, line=1.08)
            cat = p.add_run(f"{group['category']}: ")
            set_run_font(cat, size=10.5, bold=True)
            items = group.get("items") or []
            val = p.add_run(", ".join(items))
            set_run_font(val, size=10.5)

    if spec.get("experience"):
        add_section_heading(doc, "Experience")
        for job in spec["experience"]:
            header = doc.add_paragraph()
            set_paragraph_spacing(header, before=5, after=0, line=1.05)
            title = header.add_run(job.get("title", ""))
            set_run_font(title, size=11, bold=True)
            company_bits = [job.get("company"), job.get("location"), job.get("dates")]
            company_line = " · ".join(b for b in company_bits if b)
            if company_line:
                rest = header.add_run(f"  |  {company_line}")
                set_run_font(rest, size=10.5)

            for bullet in job.get("bullets") or []:
                bp = doc.add_paragraph(style="List Bullet")
                set_paragraph_spacing(bp, before=0, after=0, line=1.08)
                br = bp.add_run(str(bullet).strip())
                set_run_font(br, size=10.5)

    if spec.get("projects"):
        add_section_heading(doc, "Projects")
        for project in spec["projects"]:
            header = doc.add_paragraph()
            set_paragraph_spacing(header, before=3, after=0, line=1.05)
            name_run = header.add_run(project.get("name", ""))
            set_run_font(name_run, size=11, bold=True)
            extra = project.get("extra")
            if extra:
                er = header.add_run(f"  |  {extra}")
                set_run_font(er, size=10, color="333333")
            for bullet in project.get("bullets") or []:
                bp = doc.add_paragraph(style="List Bullet")
                set_paragraph_spacing(bp, before=0, after=0, line=1.08)
                br = bp.add_run(str(bullet).strip())
                set_run_font(br, size=10.5)

    if spec.get("education"):
        add_section_heading(doc, "Education")
        for edu in spec["education"]:
            p = doc.add_paragraph()
            set_paragraph_spacing(p, before=2, after=0, line=1.05)
            r = p.add_run(edu.get("degree", ""))
            set_run_font(r, size=10.5, bold=True)
            extra = edu.get("extra")
            if extra:
                er = p.add_run(f"  |  {extra}")
                set_run_font(er, size=10, color="333333")

    if spec.get("languages"):
        add_section_heading(doc, "Languages")
        p = doc.add_paragraph()
        set_paragraph_spacing(p, before=1, after=0)
        r = p.add_run(" · ".join(spec["languages"]))
        set_run_font(r, size=10.5)

    dest.parent.mkdir(parents=True, exist_ok=True)
    doc.save(dest)


def build_txt(spec: dict, contact: dict, dest: Path) -> None:
    lines = [
        contact.get("full_name", "Youness JELLOULI"),
        spec.get("headline") or contact.get("headline", ""),
        contact_line(contact),
        "",
    ]
    if spec.get("summary"):
        lines += ["PROFESSIONAL SUMMARY", str(spec["summary"]).strip(), ""]
    if spec.get("skills"):
        lines.append("SKILLS")
        for group in spec["skills"]:
            items = ", ".join(group.get("items") or [])
            lines.append(f"{group['category']}: {items}")
        lines.append("")
    if spec.get("experience"):
        lines.append("EXPERIENCE")
        for job in spec["experience"]:
            lines.append(f"{job.get('title', '')} | {job.get('company', '')} · {job.get('location', '')} · {job.get('dates', '')}")
            for bullet in job.get("bullets") or []:
                lines.append(f"- {str(bullet).strip()}")
            lines.append("")
    if spec.get("projects"):
        lines.append("PROJECTS")
        for project in spec["projects"]:
            extra = f" | {project['extra']}" if project.get("extra") else ""
            lines.append(f"{project.get('name', '')}{extra}")
            for bullet in project.get("bullets") or []:
                lines.append(f"- {str(bullet).strip()}")
            lines.append("")
    if spec.get("education"):
        lines.append("EDUCATION")
        for edu in spec["education"]:
            lines.append(f"{edu.get('degree', '')}" + (f" | {edu['extra']}" if edu.get("extra") else ""))
        lines.append("")
    if spec.get("languages"):
        lines += ["LANGUAGES", " · ".join(spec["languages"]), ""]
    dest.write_text("\n".join(lines).strip() + "\n", encoding="utf-8")


def esc(value: str) -> str:
    return html.escape(value or "")


def build_html(spec: dict, contact: dict, dest: Path) -> None:
    skill_html = ""
    for group in spec.get("skills") or []:
        items = ", ".join(group.get("items") or [])
        skill_html += f"<p><strong>{esc(group['category'])}:</strong> {esc(items)}</p>\n"

    exp_html = ""
    for job in spec.get("experience") or []:
        bullets = "".join(f"<li>{esc(str(b).strip())}</li>" for b in (job.get("bullets") or []))
        loc = " · ".join(part for part in [job.get("company"), job.get("location"), job.get("dates")] if part)
        list_html = f"<ul>{bullets}</ul>" if bullets else ""
        exp_html += f"""
        <div class="block">
          <p class="role"><strong>{esc(job.get('title', ''))}</strong>
            <span> | {esc(loc)}</span></p>
          {list_html}
        </div>
        """

    proj_html = ""
    for project in spec.get("projects") or []:
        extra = esc(project.get("extra") or "")
        bullets = "".join(f"<li>{esc(str(b).strip())}</li>" for b in (project.get("bullets") or []))
        extra_span = f" <span>| {extra}</span>" if extra else ""
        list_html = f"<ul>{bullets}</ul>" if bullets else ""
        proj_html += f"""
        <div class="block">
          <p class="role"><strong>{esc(project.get('name', ''))}</strong>{extra_span}</p>
          {list_html}
        </div>
        """

    edu_html = ""
    for edu in spec.get("education") or []:
        extra_inline = f" <span>| {esc(edu.get('extra', ''))}</span>" if edu.get("extra") else ""
        edu_html += f"<p class='role'><strong>{esc(edu.get('degree', ''))}</strong>{extra_inline}</p>"

    contact_html = "".join(f'<p class="contact">{esc(line)}</p>' for line in contact_lines(contact))
    languages = " · ".join(spec.get("languages") or [])
    summary = esc(str(spec.get("summary") or "").strip())
    headline = esc(spec.get("headline") or contact.get("headline") or "")
    name = esc(contact.get("full_name", "Youness JELLOULI"))

    markup = f"""<!DOCTYPE html>
<html lang="{esc(spec.get('meta', {}).get('language', 'en'))}">
<head>
  <meta charset="utf-8" />
  <title>{name} — Resume</title>
  <style>
    @page {{ size: A4; margin: 0.9cm 1.25cm; }}
    * {{ box-sizing: border-box; }}
    body {{
      font-family: Calibri, Arial, Helvetica, sans-serif;
      font-size: 10pt;
      color: #111;
      line-height: 1.18;
      margin: 0;
    }}
    h1 {{
      font-size: 20pt;
      text-align: center;
      margin: 0;
      letter-spacing: 0.3px;
    }}
    .headline, .contact {{
      text-align: center;
      margin: 1px 0;
    }}
    .contact {{ font-size: 9.5pt; color: #333; }}
    h2 {{
      font-size: 11pt;
      text-transform: uppercase;
      border-bottom: 1px solid #222;
      margin: 6px 0 3px;
      padding-bottom: 1px;
      letter-spacing: 0.4px;
    }}
    p {{ margin: 0 0 2px; }}
    ul {{ margin: 1px 0 3px 16px; padding: 0; }}
    li {{ margin: 0; }}
    .dates {{ font-size: 9.5pt; color: #333; margin: 0 0 1px; }}
    .role {{ margin: 4px 0 0; }}
    .block {{ margin-bottom: 1px; }}
  </style>
</head>
<body>
  <h1>{name}</h1>
  <p class="headline">{headline}</p>
  {contact_html}
  <h2>Professional Summary</h2>
  <p>{summary}</p>
  <h2>Skills</h2>
  {skill_html}
  <h2>Experience</h2>
  {exp_html}
  <h2>Projects</h2>
  {proj_html}
  <h2>Education</h2>
  {edu_html}
  <h2>Languages</h2>
  <p>{esc(languages)}</p>
</body>
</html>
"""
    dest.write_text(markup, encoding="utf-8")


def build_pdf(html_path: Path, dest: Path) -> None:
    chrome = shutil.which("google-chrome-stable") or shutil.which("google-chrome") or shutil.which("chromium")
    if not chrome:
        raise RuntimeError("Chrome/Chromium is required to print the PDF")
    dest.parent.mkdir(parents=True, exist_ok=True)
    cmd = [
        chrome,
        "--headless=new",
        "--disable-gpu",
        "--no-sandbox",
        "--disable-dev-shm-usage",
        f"--print-to-pdf={dest}",
        "--no-pdf-header-footer",
        html_path.resolve().as_uri(),
    ]
    subprocess.run(cmd, check=True, stdout=subprocess.PIPE, stderr=subprocess.PIPE)
    try:
        from pypdf import PdfReader

        pages = len(PdfReader(dest).pages)
        print(f"PDF pages: {pages}")
    except Exception:
        pass


def default_spec_from_profile(profile: dict) -> dict:
    contact = profile["contact"]
    skills = profile["skills"]
    return {
        "meta": {"slug": "baseline", "job_title": "Full Stack Developer", "language": "en"},
        "headline": contact.get("headline"),
        "summary": profile["summary_bank"]["fullstack"],
        "skills": [
            {"category": "Programming Languages", "items": skills["languages"]},
            {"category": "Frontend", "items": skills["frontend"]},
            {"category": "Backend", "items": skills["backend"]},
            {"category": "Databases", "items": skills["databases"]},
            {"category": "Cloud / DevOps", "items": skills["cloud_devops"]},
            {"category": "AI / Tools", "items": skills["ai"]},
            {"category": "Methods", "items": skills["methods"]},
        ],
        "experience": [
            {
                "title": job["title"],
                "company": job["company"],
                "location": job["location"],
                "dates": f"{job['start']} – {job['end']}",
                "bullets": job["bullets"][:3],
            }
            for job in profile["experience"]
        ],
        "projects": [
            {
                "name": project["name"],
                "extra": ", ".join(project.get("stack") or [])
                + (f" | {project['url']}" if project.get("url") else ""),
                "bullets": project.get("bullets") or [],
            }
            for project in profile["projects"][:5]
        ],
        "education": [
            {
                "degree": edu["degree"],
                "extra": " · ".join(
                    part
                    for part in [
                        edu.get("school"),
                        edu.get("location"),
                        f"{edu.get('start')} – {edu.get('end')}",
                    ]
                    if part
                ),
            }
            for edu in profile["education"]
        ],
        "languages": [f"{lang['name']} ({lang['level']})" for lang in profile.get("languages_spoken") or []],
    }


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(description="Generate an ATS-friendly resume")
    parser.add_argument("--input", type=Path, help="Tailored YAML spec (resume/jobs/<slug>.yaml)")
    parser.add_argument("--from-profile", action="store_true", help="Build a baseline resume from profile.yaml")
    parser.add_argument("--out-name", help="Output filename stem, without extension")
    parser.add_argument("--copy-public-pdf", action="store_true", help="Copy PDF to public/Youness-Jellouli.pdf")
    return parser.parse_args()


def main() -> None:
    args = parse_args()
    profile = load_yaml(CONTACT_FILE)
    contact = profile["contact"]

    if args.input:
        spec = load_yaml(args.input)
        slug = args.out_name or spec.get("meta", {}).get("slug") or args.input.stem
    elif args.from_profile:
        spec = default_spec_from_profile(profile)
        slug = args.out_name or "Youness-Jellouli"
    else:
        sys.exit("Provide --input resume/jobs/<slug>.yaml or --from-profile")

    OUTPUT.mkdir(parents=True, exist_ok=True)
    stem = OUTPUT / slug
    docx_path = stem.with_suffix(".docx")
    html_path = stem.with_suffix(".html")
    txt_path = stem.with_suffix(".txt")
    pdf_path = stem.with_suffix(".pdf")

    build_docx(spec, contact, docx_path)
    build_txt(spec, contact, txt_path)
    build_html(spec, contact, html_path)
    build_pdf(html_path, pdf_path)

    if args.copy_public_pdf:
        public_pdf = ROOT.parent / "public" / "Youness-Jellouli.pdf"
        shutil.copyfile(pdf_path, public_pdf)
        print(f"Copied PDF to {public_pdf}")

    print("Wrote:")
    for path in (docx_path, pdf_path, txt_path, html_path):
        print(f"  {path}")


if __name__ == "__main__":
    main()
