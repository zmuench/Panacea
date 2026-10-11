# PANACEA

Clinical documentation and residency planning tools.

| App | Path | What it does |
|---|---|---|
| Hx | `/hx/` | HPI builder: chief complaint → pertinent positives/negatives → HPI |
| Px | `/px/` | Exam builder: focused exams by complaint, plus ICU, comprehensive neuro and NIHSS |
| Dispo | `/dispo/` | ED MDM and discharge instructions |
| Consult | `/consult/` | Consult call prep by service: what they'll ask, call script, note line |
| ICU Rounder | `/icu-rounder/` | Daily ICU rounds and problem-based A/P |
| Sweep | `/sweep/` | Morning ICU considerations, system by system |
| Primer | `/primer/` | Daily ICU curriculum: one lesson a day with readings, orders, evidence and a self-check |
| Nenya | `/nenya/` | EM residency rank list |

Every app is a single static HTML file. No build step and no server.
Nothing entered is sent anywhere. ICU Rounder, Sweep, Px, Consult, Primer and Nenya save to the browser on the device you use.
Do not enter names, MRNs, or dates of birth.
