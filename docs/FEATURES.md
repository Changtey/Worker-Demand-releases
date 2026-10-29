# Features

[Home](../README.md) · [User guide](USER_GUIDE.md) · [Latest changes](LATEST_CHANGES.md)

**Screens captured for desktop 1.4.21 and Android 1.4.21 · 2026-10-29.**

- **Optional day columns:** show or hide Worked and Days left separately, with saved choices. Saved day figures never change entered days or hold up a Work Demand. Missing figures stay unknown.
- **Selected area only until required saves finish:** the active tab's Panchayat or Village owns downloads until matching Job Card and worker records, eKYC, ABPS and Aadhaar Availability answers are saved. Other public, private and Muster Roll downloads wait, then resume. Changing area or tab changes the next read and keeps progress. Recent complete records are reused, including after a retry.
- **Required worker checks first:** Job Cards and matching worker details, then eKYC, ABPS and Aadhaar Availability. Extra checks follow; day reports and work lists come last. A selected work keeps its own checks, and work selection remains optional.
- **Saved workers appear sooner:** checked households appear as each group is saved. Partial downloads remain incomplete. Repeated requests share the same area work, and extra reports wait for 15 seconds without activity. A current demand check can request a report it needs sooner.
- **Smoother saved lists:** the Job Cards list and totals share a read. Background changes finish the active read before one follow-up, keeping the search, displayed page and open households. Search covers the complete saved list, including matching inactive workers and failed checks.

- **Area download counts:** see the measured percentage and saved counts for Job Cards, workers, workdays, Work Codes and reported Work Order numbers. Completed Aadhaar reads say **Download completed**, with separate Yes, No and unselected-answer counts in setup, Settings and the selected area. No and unselected answers keep their completed download status during routine rechecks. Those workers still need Yes before Work Demand; other eligible workers can continue. Unknown totals, unread pages and old answers remain clear.

- **Long downloads:** occasional menu reads help keep the signed-in connection active while worker reports are downloading. Slow pages have a longer waiting time. Pauses, account changes and sign-out stop these reads. A portal sign-in request is shown clearly; completed records are kept.

## First setup and daily records

- **Menus stay available:** open every app menu before portal sign-in, during setup or after portal sign-out. Setup stays in Browser. Portal checks and entry still need the right signed-in account.
- **Work Demand opens after setup:** an old starting-screen choice cannot send the app to another tool.
- **One guided workspace:** Login area → Sign in → Work areas → Download records. Each step uses one page. During sign-in, the official portal gets the full workspace with a small step heading.
- **Personal default login page:** choose your State, Financial Year, District and Block on **Login area**. **Save and open login page** applies those choices in Browser and moves to **Sign in**. Enter the official User ID, password and CAPTCHA yourself.
- **Secure saving after sign-in:** choose to save the login pair on the Login area form. The original User ID and password are saved securely only after a confirmed sign-in. Failed logins keep the earlier saved pair. CAPTCHA is never saved. Save, Update and Login details remain available in Browser.
- **One-time work-area selection:** save the Panchayats or Villages assigned to your data entry work under your own app account. Add or remove places later in Settings.
- **Choose record downloads:** Step 4 has a choice for each record type. Choose **Download selected records**, **Download later**, or **Skip remaining and continue**. Downloaded records and skipped records have separate labels, and partial checked counts are kept. Return through **Settings → Portal login → Manage record downloads** to download skipped items. Choices stay saved for each app account. Missing records still need checking before Work Demand approval.
- **Clear first-use message:** setup explains that the app may be slow at first while it reads and checks records. Later work is usually faster because the same area's saved records are reused. New areas and slow portal pages can still take time.
- **Reasons for stopped progress:** missing worker checks name their Village. Worker reads explain unreadable Yes or No answers, unmatched worker details, missing Job Cards and member lists that did not load. A disagreeing Muster Roll summary keeps its warning while checked source reports are saved and reused on retry.
- **Daily background updates:** selected record types keep updating while the app is open and connected. After you continue, deferred records are downloaded automatically when the app is idle. Your current area comes first. Completed records are reused, portal entry takes priority, and a deliberate pause is kept. Personal sign-in and report Security Codes still need your answer. Some answers share one portal page and may be saved together. A completed first setup is kept during later updates.
- **Keep saved work during updates:** settings, selected areas, downloaded records, drafts and securely saved login details stay outside installation files. Normal app updates retain them and do not repeat completed first setup.
- **Windows app updates:** from version 1.4.18, one **Update now** choice downloads and checks the file, starts installation and opens the updated app after installation. A failed download or start can be tried again without reopening the app. Earlier versions need version 1.4.18 installed once to receive this updater.
- **Reuse completed worker checks:** eKYC, ABPS and Aadhaar Availability can reuse matching saved positive proof for the same worker and Job Card. Missing or unverified answers are retried. A changed identity or an explicit new-check request still needs a new read.

Saved selections do not change official permissions. Source downloads do not submit demands or create paid PDF copies.

- **Record download progress:** request rows and open requests show a clear bar and measured percentage. Unknown totals stay unknown. Pauses, failures and sign-in problems keep their status; 100% still needs the existing record checks to finish.

| Feature | Desktop | Android |
| --- | --- | --- |
| Google office sign-in | Yes | Uses an assigned login code instead |
| Personal DEO Android access | Login code and My areas are grouped separately. Choose your own code, copy it or read the saved areas. A 4 to 16 digit number, letters or symbols can be used. Extra help and code disabling stay under More code options | Sign in with the code and choose from the assigned areas |
| Create login code for My Areas | Review saved Panchayats and Villages without choosing each place again. Keep current phone areas, reuse existing assignments and continue to the personal login-code step. Missing records, unavailable choices and different Financial Years are explained | Use the personal code after it is saved; Secretary codes stay separate |
| Secretary access | Create and manage assigned area codes | Sign in with the code and view assigned records |
| Remove my assigned areas | Select your own Panchayats or Villages under My phone and confirm removal. Other users' areas, saved records, Secretary accounts and login codes are kept | Removed assignments leave your phone area list; a remaining whole Panchayat can still include its shared Villages |
| Job Cards and members | Village records, household groups, search, saved checks and days left | Assigned worker list with Job Card numbers |
| Worker filters | Status, work history, identity and payment checks | Available worker check choices in the phone list |
| Days and dates | Individual worker values and bulk editing | Individual worker days, request dates and a large Apply Days to All button |
| Work Demand | One menu for Received requests and manual entry. Shared checks and portal entry; received requests keep their phone updates, corrections, reports and decisions | Prepare, review, send and follow requests; available changes depend on status |
| Check demand | Check workers, dates, days, selected work and reported issues | Review the assigned workers and request before sending to the office |
| Automatic request records | An incoming Android request queues its exact Panchayat or Village and Financial Year. Recent records are reused; missing records and checks download in the background | Send the request using its assigned area; no extra desktop area selection is needed |
| Received worker checks | The open Android request's Village gets first priority for Aadhaar availability, ABPS and other worker checks, including during a visit to Browser for sign-in. Create demand choices are kept | Keep the original request and its worker details |
| Entry progress | One progress count, three work counts and the current member. Pause, Resume and Stop stay visible while scrolling. Other counts, worker results, demand details and help open when needed; uncertain saving stays clear | Follow the received request in History |
| Send to Browser again | Reopen the complete checked list after an error or stop. Original days and dates stay; saved demands are skipped and uncertain results stay held for checking | The received request keeps its saved status |
| Edit a stopped request | Prepared and tested with fictional records; needs its online update before use. Change unsent workers, days and dates, save, check and send again. Saved demands stay unchanged; uncertain results must be checked first | Updated worker choices can be shared after the online update is enabled |
| Your work | Unfinished requests, selected-area priority, clear counts and the last entry needing attention | Uses its own phone home and History |
| Check problems | Read-only checks for app tools, saved records, selected area, portal sign-in and Received requests | Follow the phone's connection messages |
| Record backups | Checked daily copies while the desktop app is open; manual copies and a separate recovery check in Settings | Phone records and login details are separate |
| Earlier entry records | A repeated Send keeps the current portal page; choose Check saved list again to read earlier results | Earlier requests remain visible in History |
| Final demand check | Check every selected worker's Job Card, name, days and work dates in the saved portal list; show success only when all match | Portal verification is handled on desktop |
| Submission summaries | Completion pop-up with separate counts for members processed, entry steps finished, saved demands confirmed and failed entries; named issues, safe retry and 20 saved run summaries per app account on this PC | An unreadable final list does not turn finished entry steps into failures. Older summaries show an entry-step count only when it was recorded. Confirmed results stay successful after browser cleanup |
| Official portal Browser | Open the portal and follow checked entry | Official portal entry is handled by the desktop office workflow |
| Request PDF and Excel | Download the saved request's reports | Follow the request in History |
| Muster Roll Reports | Area choices and the available attendance report tools | Desktop feature |
| Balance and Recharge | Work Demand automation reserves 1 before entry and deducts it after saved work is confirmed. Zero available Balance blocks new runs and unfunded retries, then opens Recharge and keeps the current work. Failed runs release their reservation. Low-balance report choices have a Recharge shortcut | Secretary request preparation stays free; office charges are handled on desktop |
| Saved choices | Areas, Financial Year, filters, list size and menus | Assigned area and worker choices |
| Sidebar menus | Short tool descriptions, clear selected menu, Arrange menus shortcut and an icon-only view | Uses its own phone navigation |
| Saved records while offline | Reuse available saved records; current checks may need a connection | Keep phone drafts and waiting requests; access and sending checks still apply |

## Simple daily work

Desktop and Android use short labels, clear work steps and details that open when needed. Work Demand opens after setup and remembers Create demand or Received requests. Desktop sends checked demands to VBGRAMG; Android sends requests to the office. Settings use Work, App and Account groups with a section chooser on narrow screens. All existing checks, filters, reports, data and permissions remain in place.

## Worker checks

The desktop Job Cards list shows **Eligible**, **Not eligible**, **Not yet checked** or **Data unavailable** for each saved worker. Every required check must pass before **Eligible** appears. Optional day figures do not add a new requirement. These labels describe saved records; **Check demand** still performs the checks needed for the current request.

Android shows **Status: Active**, **Status: Inactive** or **Status: Unknown** beside eKYC when choosing workers, entering days and reviewing a request. Set **Worker filters → Active member → All** to include inactive workers. Android can read public portal reports directly for selected assigned workers. Use **Check portal**, then the worker's information button for **Worker details**, including each answer's source and check time. It reads explicit eKYC, active or inactive status, offered identity and payment checks, complete worked days and confirmed family days left. Missing, incomplete or access-protected reports keep the saved copy with a clear message. Phone checks do not use Balance or submit official records.

The app shows saved answers and whether they are current. Electronic identity verification (**eKYC**) and the Aadhaar Based Payment System (**ABPS**) are shown separately from Aadhaar availability. Statuses such as inactive, deleted, missing or old remain meaningful. Missing information is never counted as a confirmed answer.

Filters help organise the list. They do not waive the checks needed for portal entry. Members of a Job Card share its annual days left; this is optional information, not a separate allowance for each worker or a limit on the days entered in the app.

Received requests show **Queued**, **Downloading**, **Ready**, **Partial data**, **Failed**, or **Attention required** for their records. Ready means the required saved records are current; the demand still needs its own check. Inactive workers and workers with missing identity or payment answers stay saved and searchable. Missing answers stay unknown. Private reports need a permitted VBGRAMG sign-in in the desktop app. Downloads respect a deliberate pause, keep completed records, and retry temporary failures without submitting demands.

## Locations across India

The app uses the portal's current State, District, Block, Panchayat and Village lists. It uses the Financial Years and areas offered to the current account. Examples in pictures are fictional and are not built-in location restrictions. Live coverage of every State has not been established by these screen checks.

Work Demand, Secretary login codes and Job Cards share stable area choices. Worker updates and Android request checks reuse the unchanged area lists. Update lists keeps the earlier choices visible while reading. A late reply for an earlier selection cannot replace the area you just chose.

Downloads follow the selected Panchayat or Village and Financial Year in the tab being used. All other areas wait until its required worker records are saved, even during a failed read's retry delay. A whole Panchayat includes its current offered Villages. Hidden tabs cannot replace the choice. Browser keeps the area from the screen just used during sign-in. Downloads keep completed records and respect a deliberate pause.

The Panchayat or Village you are currently working on gets the first turn for downloads and worker checks, even outside the routine setup areas. A whole Panchayat gives its Villages the first turn. Changing area changes the next read and keeps completed records. Portal account limits, offered locations and deliberate pauses still apply. Each open app copy keeps its own portal sign-in and progress message.

Work Demand member lists and Work Order choices finish their current read before checking newer saved records. Background progress does not repeatedly restart the same read. Returning to Work Demand checks the latest lists; a Village still downloading is checked again automatically. Entered days and dates are kept.

During desktop Work Demand entry, matching Panchayat and Village choices stay selected as Job Cards and members change. The app clears the previous Registration ID using the portal's own choice when available. It restores an area only if the portal clears it, and keeps the checks that prevent old worker values carrying into another household. Received requests and manual entries use the same steps.

## What these previews prove

The gallery shows the current Android and desktop screens with separate fictional records. No real account, login code or official submission appears in the pictures. Android pictures show the app screens at phone size; they do not prove that the app was installed on a phone. Desktop pictures show a narrow window. The Browser picture shows its controls without a real official website.

Check the linked release notes for tested systems and remaining limits. Windows publisher signing is still pending for the current test release.

Published app downloads, source previews, installed versions and live portal results are separate. See [latest changes](LATEST_CHANGES.md) for the current distinction. The public repository contains guides and downloads; it does not contain office records or the app's private building files.
