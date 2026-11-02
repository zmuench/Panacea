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
| A/P | `/ap/` | Assessment and plan writer, problem-based or system-based (format remembered per device; system-based sorts problems, chronic included, into Neuro/psych, CV, Pulm, Renal/FEN, GI/liver, ID, Heme/onc, Endo, Other boxes you can drag between and reorder, and prints each system as a heading with its problems under it, repeat plan lines and home meds merged across the system), ending with an ICU Checklist (FAST HUGS BID with Admit's options, suggested from the problem list; optional in problem-based); Send to ICU Rounder adds the patient (bed, age, sex, admit date, code status, allergies, summary as one-liner, chronic problems as PMH, each problem or stack with its checked plan) to ICU Rounder on the device, as Admit does, in two pages (pick the presentation and all problems, then Write A/P opens a separate page for the assessments and plans; ← Problems or the back gesture returns): `# Problem` header, an italic assessment paragraph built step by step (presentation, pertinent history, findings, treatment so far, assessment) with tap-in prompts per problem, then the bulleted plan; problems are arranged on a drag board (drag a problem onto another box to combine, between boxes to split, drag box labels to reorder; press and hold on touch) into stacks (stacked headers, one shared presentation/findings/treatment, per-problem history and assessment, one merged plan with home meds deduplicated by drug class); uses Admit's problem library, plans and home-med templates, a Type 4 (shock/hypoperfusion) respiratory failure problem, plus 35 chronic conditions (cardiac, pulmonary, psychiatric, substance use, neuro, immunosuppression, transplant, HIV, gout) with evidence-based continue/hold rules for home meds that switch automatically when shock, bleeding, AKI, infection, encephalopathy, bradycardia, seizure or hyponatremia is on the list, each with a sourced key-points popover; copies with italics and bullets |
| ICU Rounder | `/icu-rounder/` | Daily ICU rounds and problem-based A/P, with CPOT, RASS and CAM-ICU calculators |
| Spectrum | `/spectrum/` | ID consults: HPI with complaint-specific questions, grouped consult reasons (general ones like bacteremia, sepsis, hospital fever, stewardship, beta-lactam allergy and OPAT, plus syndrome-specific ones), chart review and prior cultures; drafted summary statement with impression and recommendation menus by consult reason; cultures and antimicrobial days; lines, catheters and hardware review (device days, site exam, removal rules flagged against blood cultures); daily ID note with a rounding checklist by consult reason; bugs and drugs reference |
| Sweep | `/sweep/` | Morning ICU considerations, system by system |
| Tidal | `/tidal/` | Ventilator management: initial settings by physiology, ABG-driven adjustments, troubleshooting, and liberation, from Owens’ The Ventilator Book |
| Ether | `/ether/` | Anesthesia pre-op: chart review with structured ECG, echo, cath, device, PFT studies; ASA/RCRI/STOP-BANG/Apfel, anesthetic plan, landscape two-column OR card, pre-op note |
| Constellation | `/constellation/` | Combine workup findings (labs, imaging, ECG, exam, exposures) and see the diseases classically associated with that combination; weighted to and cited from Tintinalli’s Emergency Medicine, 9th ed. |
| Primer | `/primer/` | Daily ICU curriculum: one lesson a day with readings, orders, evidence and a self-check |
| Core | `/core/` | Daily EM curriculum through Tintinalli’s 9th ed.: chapter checklist, PDF linked on-device, workup/treatment/dispo, self-check |
| Rhythm | `/rhythm/` | Daily EKG curriculum through Dubin: readings checklist, your PDF linked on-device, practice 12-lead cases |
| Rhythm 2 | `/rhythm2/` | Daily ECG curriculum through Chizner’s ECG Interpretation Made Ridiculously Simple, ending with 55 practice ECGs |
| Systole | `/systole/` | Daily clinical cardiology curriculum through Chizner’s Clinical Cardiology Made Ridiculously Simple, for the cardiology sub-I |
| Nenya | `/nenya/` | EM residency rank list |

Every app is a single static HTML file. No build step and no server.
Nothing entered is sent anywhere. A/P (only when sent to ICU Rounder), ICU Rounder, Sweep, Px, Consult, Spectrum, Ether, Primer, Rhythm, Rhythm 2, Systole, Core and Nenya save to the browser on the device you use. Sync across devices is set up once per device in the Sync section at the bottom of the PANACEA page.
Do not enter names, MRNs, or dates of birth.
