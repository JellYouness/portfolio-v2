# ATS resume generator

This folder is the source of truth for **Youness JELLOULI** resumes.

The PDF layout matches his official resume: centered serif name, icon contact row, underlined section titles, company on the left, dates on the right.

When you send a job offer, the agent writes a tailored spec in `jobs/` and generates:

- `.pdf` — official visual layout
- `.docx` — Word version of the same structure
- `.txt` — plain-text fallback

## Generate the baseline resume

```bash
pip install -r resume/requirements.txt
python3 resume/generate.py --from-profile --out-name Youness-Jellouli --copy-public-pdf
```


## Generate a tailored resume

```bash
python3 resume/generate.py --input resume/jobs/<slug>.yaml
```

## Layout rules

- One column, serif type, official section titles
- Job title on its own line; company left, dates/location right
- Blue links for live projects; **Tech:** line under roles
- Facts only: no invented jobs, dates, degrees, or metrics
