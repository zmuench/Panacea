# PANACEA

Clinical documentation and residency planning tools.

| App | Path | What it does |
|---|---|---|
| Hx | `/hx/` | HPI builder: chief complaint → pertinent positives/negatives → HPI |
| Px | `/px/` | Exam builder: focused exams by complaint, plus ICU, comprehensive neuro and NIHSS |
| Tracing | `/tracing/` | EKG dictation through Dubin’s five steps (rate, rhythm, axis, hypertrophy, infarction) with hover example strips; writes the full read and impression |
| Silhouette | `/silhouette/` | Chest X-ray read: film check, then ABCDE with an absent/present prompt for each finding and schematic hover diagrams (after Herring’s Learning Radiology); writes the report and impression |
| Dispo | `/dispo/` | ED MDM and discharge instructions |
| Consult | `/consult/` | Consult call prep by service: what they'll ask, call script, note line |
| Admit | `/admit/` | ICU and floor H&P: 100+ problems with checklist plans (built from ICU Protocols, updated to current guidance), presentation-based suggestions, pertinent-data prompts, antibiotic selector by source, FAST HUGS BID / floor checklist; sends the patient to ICU Rounder |
| ICU Rounder | `/icu-rounder/` | Daily ICU rounds and problem-based A/P, with CPOT, RASS and CAM-ICU calculators |
| Spectrum | `/spectrum/` | ID consults: HPI with complaint-specific questions, chart review and prior cultures; cultures and antimicrobial days; daily ID note with a rounding checklist by consult reason; bugs and drugs reference |
| Sweep | `/sweep/` | Morning ICU considerations, system by system |
| Ether | `/ether/` | Anesthesia pre-op: chart review with structured ECG, echo, cath, device, PFT studies; ASA/RCRI/STOP-BANG/Apfel, anesthetic plan, landscape two-column OR card, pre-op note |
| Primer | `/primer/` | Daily ICU curriculum: one lesson a day with readings, orders, evidence and a self-check |
| Core | `/core/` | Daily EM curriculum through Tintinalli’s 9th ed.: chapter checklist, PDF linked on-device, workup/treatment/dispo, self-check |
| Rhythm | `/rhythm/` | Daily EKG curriculum through Dubin: readings checklist, your PDF linked on-device, practice 12-lead cases |
| Rhythm 2 | `/rhythm2/` | Daily ECG curriculum through Chizner’s ECG Interpretation Made Ridiculously Simple, ending with 55 practice ECGs |
| Systole | `/systole/` | Daily clinical cardiology curriculum through Chizner’s Clinical Cardiology Made Ridiculously Simple, for the cardiology sub-I |
| Nenya | `/nenya/` | EM residency rank list |

Every app is a single static HTML file. No build step and no server.
Nothing entered is sent anywhere. ICU Rounder, Sweep, Px, Consult, Spectrum, Ether, Primer, Rhythm, Rhythm 2, Systole, Core and Nenya save to the browser on the device you use. Sync across devices is set up once per device in the Sync section at the bottom of the PANACEA page.
Do not enter names, MRNs, or dates of birth.
