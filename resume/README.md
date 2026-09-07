# ATS resume generator

This folder is the source of truth for **Youness JELLOULI** resumes.

When you send a job offer (paste the description, attach a file, or drop a URL), the agent:

1. Reads `profile.yaml` (your real experience only)
2. Writes a tailored spec in `jobs/<company-role>.yaml`
3. Generates ATS-safe files in `output/`:
   - `.docx` — best for most applicant tracking systems
   - `.pdf` — single-column, selectable text, no tables or icons
   - `.txt` — fallback plain-text version

## Generate the baseline resume

```bash
pip install -r resume/requirements.txt
python3 resume/generate.py --from-profile --out-name Youness-Jellouli --copy-public-pdf
```

## Generate a tailored resume

```bash
python3 resume/generate.py --input resume/jobs/<slug>.yaml
```

## ATS rules used here

- One column, Calibri, standard headings
- No tables, text boxes, photos, icons, or graphics
- Keywords taken from the job offer and matched to real skills
- Facts only: no invented jobs, dates, degrees, or metrics
