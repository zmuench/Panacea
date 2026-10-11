# PANACEA

Clinical documentation and residency planning tools.

| App | Path | What it does |
|---|---|---|
| Hx | `/hx/` | HPI builder: chief complaint → pertinent positives/negatives → HPI |
| Px | `/px/` | Exam builder: focused exams by complaint, plus ICU, comprehensive neuro and NIHSS |
| Dispo | `/dispo/` | ED MDM and discharge instructions |
| Consult | `/consult/` | Consult call prep by service: what they'll ask, call script, note line |
| ICU Rounder | `/icu-rounder/` | Daily ICU rounds and problem-based A/P |
| Spectrum | `/spectrum/` | ID consults: HPI, cultures and antimicrobial days, daily ID note, bugs and drugs reference |
| Sweep | `/sweep/` | Morning ICU considerations, system by system |
| Primer | `/primer/` | Daily ICU curriculum: one lesson a day with readings, orders, evidence and a self-check |
| Core | `/core/` | Daily EM curriculum through Tintinalli’s 9th ed.: chapter checklist, PDF linked on-device, workup/treatment/dispo, self-check |
| Rhythm | `/rhythm/` | Daily EKG curriculum through Dubin: readings checklist, your PDF linked on-device, typed answers per page |
| Nenya | `/nenya/` | EM residency rank list |

Every app is a single static HTML file. No build step and no server.
Nothing entered is sent anywhere. ICU Rounder, Sweep, Px, Consult, Spectrum, Primer, Rhythm, Core and Nenya save to the browser on the device you use.
Do not enter names, MRNs, or dates of birth.
