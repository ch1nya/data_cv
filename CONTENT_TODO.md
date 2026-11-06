# Content follow-up

Prioritized list of missing items for `data_cv`. Unknown optional data stays `null` in `src/content.ts` and is not rendered.

## Blocks the page

- Contact email is set to `chiniakinivan@gmail.com` (carried over from the source site). Confirm it is the address the owner wants public, or replace it.
- Confirm the MBA graduation year: owner stated 2023; the source site listed 2024. Currently 2023.

## Strengthens the application

- Positioning chosen: **B. Data science for ageing populations and health-tech innovation** (default applied; owner may switch to A or C).
- Thesis findings the owner is comfortable stating publicly (effect sizes, main correlations, key conclusions). Currently the page describes method and sample only.
- Whether a thesis PDF or abstract can be linked (would populate `proposal`/a new asset field).
- Real data/code evidence: GitHub repos, Kaggle, course certificates, or a Python/R re-analysis of the thesis data. Currently the Skills section lists only SPSS and what is stated in the brief.
- Any Python, R, SQL or ML skills the owner actually has, so they can be added to the Skills chips.
- Photo: `portrait.png` is carried over; confirm it is the image the owner wants public.
- CV PDF: not present; the site hides the download button until supplied (put file in `public/` and set `cv`).
- ORCID, Google Scholar and a confirmed LinkedIn URL: currently only GitHub and LinkedIn are linked.
- Location wording and whether to show the funding note publicly.

## Nice to have

- A small OG image in the design system (name plus `~/ch1nya/data_cv`) instead of reusing `portrait.png`.
- Additional verified profile links.
- Any talks, awards or courses the owner wants listed.

Verified profile links remain in `src/content.ts`.
