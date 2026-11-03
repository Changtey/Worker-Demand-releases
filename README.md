# VBGRAMG DEO Assistant & Worker Demand

**Prepare worker requests on Android. Check Work Demands and manage records on Windows or Linux.**

VBGRAMG DEO Assistant helps Data Entry Operators (DEOs) organise Job Cards, workers, work requests and Muster Roll reports. The companion **Worker Demand** Android app lets DEOs and Panchayat Secretaries prepare requests from their assigned areas.

Portal setup has two steps: **Select login area → Sign in**. A confirmed sign-in opens **Work Demand → Create demand**. Work-area selection and record downloads are separate tools.

The desktop downloads one area at a time. The Panchayat or Village in the active tab goes first. Changing area keeps saved progress, and other queued areas continue one by one afterward. Settings shows the download order and each area's status.

**Settings → Factory reset** deletes all local app records, downloads, settings, areas, drafts, local history, recovery copies and saved sign-ins for every app account on this computer. Read the confirmation, tick the warning and choose **Reset app and restart** to begin again at first setup. Cancel keeps your data. Online account records, balance, official portal records and files exported outside the app stay in place.

Changing area wakes downloads straight away. The next area starts after the previous read stops, without waiting for the regular background check. If records were deleted or downloads were paused, the message explains how to start again.

Downloads also follow the area opened in Browser. The order is **Job Card numbers → household and worker details → Aadhaar Authentication, Aadhaar Seeding, ABPS and eKYC → worked days and days left → other records → actual Aadhaar Availability confirmation**. Other areas wait, and saved progress is kept when you switch.

When all four worker checks are Yes, the worker shows **Aadhaar Availability: Yes** and you can prepare Work Demand straight away. The app remembers that this comes from the four checks. The separate Work Demand form is checked later; its actual Yes or No replaces the temporary answer. An actual No blocks that worker and shows the reason. Download counts include actual reads only.

Switching Panchayat or Village gives the new choice the next turn, including a place visited earlier. Required worker checks keep priority after its public lists finish. Area lists continue automatically while the previous page finishes.

The progress bar names the selected Panchayat or Village. A compact **Download overview** names the area currently downloading, its measured progress, and paused and queued areas. Longer lists open with **more**. The display updates automatically, and paused downloads resume after the priority area finishes. Deliberate pauses are kept.

The app avoids finding the same area and Job Cards again for every household. It still checks each worker. On the last household page, new answers, readable day figures and the download result save together. A failed save cannot leave a new completion result behind.

When the complete registration and issued-card lists agree, required worker checks can start before the remaining household detail pages. The Village stays unfinished until the final checks pass. Saved-record updates refresh the visible counts sooner and keep your selected area.

Day figures use the **125-day Job Card total**: calculate days left from days worked, or days worked from days left. A saved current total avoids a separate portal request. Job Cards, worker details and all four worker checks come first. Day figures follow, then Work Codes and reported Work Order numbers in one complete list shared across the Panchayat's Villages. The separate Aadhaar Availability confirmation comes last.

The selected Panchayat or Village downloads automatically, first and alone, and unfinished work retries on its own. **Recheck data** asks for fresh information for the selected Panchayat or Village and year. Confirmed **Aadhaar Availability: Yes** answers are kept for the same worker and Job Card, including during a recheck.

**Settings → Manage downloaded data** shows each area's download status, last saved date and record counts. Every Panchayat and Village has **Download**, **Recheck** and **Delete** buttons. Download continues missing records; Recheck asks for fresh information for the chosen year. Saved records are shared across the app. Use **Select All – Fully Downloaded**, **Partial**, **Interrupted/Incomplete**, **Queued**, or **Select All**, then adjust any ticks. Choose **Delete Selected** or **Remove from Queue** and confirm once. Queue removal keeps saved data. A missing Village list does not block Panchayat deletion.

**Delete Selected** pauses all downloads automatically, waits for the current page and its saved progress, then deletes the reviewed downloaded records after checking a private recovery copy. Downloads stay paused after reopening until you choose to start them again.

[Get the apps](#download) · [User guide](docs/USER_GUIDE.md) · [Features](docs/FEATURES.md) · [Latest changes](docs/LATEST_CHANGES.md)

The desktop shows download counts for the selected area, including after reopening. A stopped download explains the reason and offers **Download records again**. Completed records are reused.

Progress reads family records together to avoid repeated lookups. Worker-check counts follow the same matching rules as the worker reader. If a name or worker number changes, earlier answers stay saved and show that an update is needed.

| For the office | For the phone |
| --- | --- |
| **VBGRAMG DEO Assistant · Windows and Linux** | **Worker Demand · Android** |
| Find Job Cards, check workers and dates, review requests and prepare attendance reports. | Choose assigned workers, enter their requested days and send a request to the office. |
| Use your own office account and the portal's current area lists. | Use the private login code assigned by your DEO. |

## Download

Published downloads: desktop **1.4.27**, Android **1.4.27**.

| Device | Download |
| --- | --- |
| Windows 64-bit | [Download 1.4.27](https://github.com/Changtey/Worker-Demand-releases/releases/download/v1.4.27/VBGRAMG-DEO-Assistant-1.4.27-Setup.exe) |
| Linux Debian / Ubuntu | [Download 1.4.27](https://github.com/Changtey/Worker-Demand-releases/releases/download/v1.4.27/VBGRAMG-DEO-Assistant-1.4.27-Linux-x64.deb) |
| Linux AppImage | [Download 1.4.27](https://github.com/Changtey/Worker-Demand-releases/releases/download/v1.4.27/VBGRAMG-DEO-Assistant-1.4.27-Linux-x64.AppImage) |
| Android APK | [Download 1.4.27](https://github.com/Changtey/Worker-Demand-releases/releases/download/v1.4.27/Worker-Demand-1.4.27.apk) |

[Release notes and checksums](https://github.com/Changtey/Worker-Demand-releases/releases/tag/v1.4.27).

Check the linked release notes for tested systems and remaining limits. Windows publisher signing is still pending for the current test release.

## Watch and practise

The tutorial was refreshed on **3 November 2026**. Follow real app screens, slow spoken instructions and captions. All names, places and dates in the lesson are samples.

| Learn your way | Open |
| --- | --- |
| Tutorial: 9 short lessons, 6 minutes 21 seconds | [Watch the tutorial](https://changtey.github.io/Worker-Demand-releases/learn/classroom.html) |
| Guided practice with sample workers | [Try the practice app](https://changtey.github.io/Worker-Demand-releases/learn/practice.html) |
| Clear desktop and Android pictures | [Open full-size screenshots](https://changtey.github.io/Worker-Demand-releases/learn/screenshots.html) |
| Video file | [Open or download the tutorial](https://changtey.github.io/Worker-Demand-releases/videos/VBGRAMG-Tutorial-Simple-English.mp4) |

Watch a lesson, pause to read the screen, then try the steps. The practice copy ends at **Check demand**. It cannot send records to the office or the official work website.

The tutorial covers setup, area choices, Android requests, office review, days and dates, saved results, reports and settings. Read the result carefully: finishing entry steps is different from confirming that a demand was saved.

[Tutorial captions](https://changtey.github.io/Worker-Demand-releases/videos/VBGRAMG-Tutorial-Simple-English.srt) · [Written script](https://changtey.github.io/Worker-Demand-releases/videos/tutorial-transcript.txt) · [Lesson times](https://changtey.github.io/Worker-Demand-releases/videos/Tutorial-Simple-English-chapters.txt)

[Watch the earlier 60-second introduction](https://changtey.github.io/Worker-Demand-releases/#watch). Its 80–90% figure is the creator's estimate; actual results vary. The introduction uses CC0 public-domain music. The new tutorial has spoken instructions without music. The apps are free to download; some computer tasks use Balance. Read the current costs in the user guide.

## Follow your daily work

Open **Work Demand** at any time, including before portal sign-in. All app menus stay available during setup and downloads. Follow **Area → Workers → Work → Days and dates → Review and send → Result**. The last Create demand or Received requests choice is kept. Extra information opens when needed, and problems stay clear. Portal checks and entry still need the right signed-in account. Android uses **Send to office** for phone requests.

## What you can do

Work Demand can try temporary browser problems again before filling starts. **Try again** and **Continue remaining entries** keep earlier results. Any worker with an uncertain Proceed result stays held for checking in that run. In a later run, VBGRAMG's saved demands decide whether the worker is entered again.

On first use, sign in to VBGRAMG in **Browser** and save your assigned Panchayats or Villages. You can continue when essential worker details and checks are ready, before every download reaches 100%. Your default login page and work areas are kept for your account. Change areas later in Settings. Daily background updates continue, while matching completed eKYC, ABPS and confirmed Aadhaar Availability checks keep their original check dates.

- Find Job Cards, household members, saved worker checks and days left.
- Search by name or Job Card; filter by active status, Aadhaar availability, identity checks and Aadhaar payment checks.
- Prepare each worker's requested days and dates, then use **Check demand** to find issues.
- Days worked and days remaining are information only. Missing, old, zero or small saved totals do not block creating, approving or sending a request, or reduce the days you enter.
- See confirmed submission counts and named worker issues after desktop entry. Retry failed entries safely and reopen the saved completion summary later.
- Receive Received requests, prepare their area records automatically in the background, review changes and start entry in the desktop Browser.
- Give a DEO personal Android access or assign separate Secretary access.
- Reuse saved Panchayats and Villages from My Areas when creating your personal Android login code.
- On Android, check selected workers directly against public portal reports. See eKYC, active status, days worked and confirmed family days left, with each answer's source and check time.
- Prepare Muster Roll reports, save area choices and arrange your menus.
- Check your **Balance** and open **Recharge** when a task needs more. Your current work and report choices are kept.

The app follows the portal's offered **State → District → Block → Panchayat → Village** lists and Financial Years. It is designed for use across India. The example areas below do not limit where it can be used; checking these examples is not proof that every State has been tested.

## See the app

**Current source preview · 2026-11-03.** Desktop source 1.4.28; Android source 1.4.27. The desktop pictures include newer changes that are not in the downloads above. The same Android version number does not prove that a source screen matches an older APK.

All 15 pictures use fictional records. **Android** pictures show the current Android screens at phone size. **Desktop preview** pictures show the current desktop app in a narrow window; they do not mean that desktop tools are available in Android. Open any picture for the full size. The pictures do not show a real office account or an official submission.

<table>
<tr>
<td width="33%" valign="top"><b>01. Your Android home</b><br><sub>Android</sub><br><a href="docs/screenshots/01-dashboard.png"><img src="docs/screenshots/01-dashboard.png" width="260" alt="Android: 01. Your Android home"></a><br>See assigned areas and start a work request.</td>
<td width="33%" valign="top"><b>02. Personal Android access</b><br><sub>Desktop preview</sub><br><a href="docs/screenshots/02-android-login.png"><img src="docs/screenshots/02-android-login.png" width="260" alt="Desktop preview: 02. Personal Android access"></a><br>Review Panchayats and Villages already saved in My Areas, then continue to your personal Android login code. This narrow desktop preview uses fictional records.</td>
<td width="33%" valign="top"><b>03. Secretary access</b><br><sub>Desktop preview</sub><br><a href="docs/screenshots/03-secretary-access.png"><img src="docs/screenshots/03-secretary-access.png" width="260" alt="Desktop preview: 03. Secretary access"></a><br>Assign a Panchayat or Village and create a Secretary login code.</td>
</tr>
<tr>
<td width="33%" valign="top"><b>04. First setup and your login page</b><br><sub>Desktop preview</sub><br><a href="docs/screenshots/04-integrated-browser.png"><img src="docs/screenshots/04-integrated-browser.png" width="260" alt="Desktop preview: 04. First setup and your login page"></a><br>Two setup steps: Select login area and Sign in. Work Demand Creation opens after a confirmed portal sign-in. Setup does not ask for work areas or record downloads. This narrow desktop preview uses fictional choices; the official website is not pictured.</td>
<td width="33%" valign="top"><b>05. Review a phone request</b><br><sub>Android</sub><br><a href="docs/screenshots/05-android-work-demand.png"><img src="docs/screenshots/05-android-work-demand.png" width="260" alt="Android: 05. Review a phone request"></a><br>Review workers and their requested days, then use Send to office. This sends a phone request for DEO review; it does not create an official portal demand.</td>
<td width="33%" valign="top"><b>06. Secretary request history</b><br><sub>Android</sub><br><a href="docs/screenshots/06-secretary-work-demand.png"><img src="docs/screenshots/06-secretary-work-demand.png" width="260" alt="Android: 06. Secretary request history"></a><br>Find requests and follow the status returned by the office.</td>
</tr>
<tr>
<td width="33%" valign="top"><b>07. Job Card households</b><br><sub>Desktop preview</sub><br><a href="docs/screenshots/07-job-card-holders.png"><img src="docs/screenshots/07-job-card-holders.png" width="260" alt="Desktop preview: 07. Job Card households"></a><br>Find household heads and open the members of a Job Card. Swipe the table for more columns.</td>
<td width="33%" valign="top"><b>08. Choose workers and days</b><br><sub>Android</sub><br><a href="docs/screenshots/08-worker-list.png"><img src="docs/screenshots/08-worker-list.png" width="260" alt="Android: 08. Choose workers and days"></a><br>Choose workers and days. Check portal reads their public reports on the phone. Open a worker&#x27;s information button for answers, sources and check times.</td>
<td width="33%" valign="top"><b>09. Worker filters</b><br><sub>Desktop preview</sub><br><a href="docs/screenshots/09-worker-search.png"><img src="docs/screenshots/09-worker-search.png" width="260" alt="Desktop preview: 09. Worker filters"></a><br>Keep the list compact with saved status and identity check choices.</td>
</tr>
<tr>
<td width="33%" valign="top"><b>10. Preview, save and print a demand</b><br><sub>Desktop preview</sub><br><a href="docs/screenshots/10-work-demand-entry.png"><img src="docs/screenshots/10-work-demand-entry.png" width="260" alt="Desktop preview: 10. Preview, save and print a demand"></a><br>Review selected workers, full Job Cards, dates and totals before portal entry. Save PDF or Print a draft copy. Nothing is sent by making a copy. This is a narrow desktop preview with fictional records.</td>
<td width="33%" valign="top"><b>11. Check demand issues</b><br><sub>Desktop preview</sub><br><a href="docs/screenshots/11-check-demand.png"><img src="docs/screenshots/11-check-demand.png" width="260" alt="Desktop preview: 11. Check demand issues"></a><br>See the worker and the required check needing attention. eKYC and ABPS remain required; optional seeding and day figures do not block a demand.</td>
<td width="33%" valign="top"><b>12. Record download progress</b><br><sub>Desktop preview</sub><br><a href="docs/screenshots/12-worker-management.png"><img src="docs/screenshots/12-worker-management.png" width="260" alt="Desktop preview: 12. Record download progress"></a><br>Follow the measured record download percentage on a received request. Saved checks set the percentage; record download progress does not mean a demand was submitted.</td>
</tr>
<tr>
<td width="33%" valign="top"><b>13. Muster Roll Reports</b><br><sub>Desktop preview</sub><br><a href="docs/screenshots/13-muster-reports.png"><img src="docs/screenshots/13-muster-reports.png" width="260" alt="Desktop preview: 13. Muster Roll Reports"></a><br>Choose Panchayats and Villages for the official attendance reports.</td>
<td width="33%" valign="top"><b>14. Manage downloaded data</b><br><sub>Desktop preview</sub><br><a href="docs/screenshots/14-settings.png"><img src="docs/screenshots/14-settings.png" width="260" alt="Desktop preview: 14. Manage downloaded data"></a><br>Download, recheck or delete from any row. Select by status for bulk actions. Saved records are shared across the app. Remove from Queue keeps saved data. This is a narrow desktop preview.</td>
<td width="33%" valign="top"><b>15. Your Android account</b><br><sub>Android</sub><br><a href="docs/screenshots/15-my-account.png"><img src="docs/screenshots/15-my-account.png" width="260" alt="Android: 15. Your Android account"></a><br>Check your role and assigned area, or sign out. Android follows the phone system colours.</td>
</tr>
</table>

## Start here

In **Work Demand**, use **Your work** to find unfinished requests and **Check problems** for the next useful action. **Settings → Records → Record backups** keeps checked local copies. See the preview or release status above to know which app files contain these features.

1. Install the matching desktop or Android download above.
2. On desktop, sign in with your Google account and choose your current area and Financial Year.
3. Use **Android access** for your personal Android access or a Secretary's assigned access. Share the code privately.
4. In Android, enter the assigned code, choose workers, enter days and dates, review, then choose **Send to office**. The request goes to the office.
5. In desktop, open **Work Demand**. Choose **Received requests** or **Create demand**. Check the workers and resolve the reported issues before the next portal action.

From Windows version 1.4.18, choose **Update now** once to download, check, install and reopen the updated app. Saved records and login details are kept. Install this version once to receive the improved updater; older installed versions still use their earlier update steps. Linux and Android keep their normal installation steps.

Active worker downloads use occasional portal-menu reads to help keep the connection active. Slow report pages get more time. If the portal requires sign-in again, your completed records are kept while you sign in personally.

Checked households appear as they are saved, while unfinished downloads stay clearly marked. Repeated area requests share work. Extra reports start after 15 seconds without activity and yield when you return. The Job Cards screen searches all saved households and keeps its current page during background updates. Missing worker checks never show **Eligible**.

You can start work after your selected areas' worker and workday records are checked. Muster Roll source reports continue in the background. The Notifications bell links to unfinished reports. Pending Aadhaar questions stay clearly marked and do not become approved answers.

### Try one request

**On Android:** Choose workers → enter the days → press **Apply Days to All** if everyone needs the same number → **Continue** → review → **Send to office**.

**In the office:** Open the received request → check the area, workers and dates → **Check demand** → correct any issues → review before **Send to VBGRAMG**.

**For attendance reports:** Open **Muster Roll Reports** on desktop → choose Panchayats and Villages → review the report choices → save the finished PDF or Excel file.

The [step-by-step guide](docs/USER_GUIDE.md) has short tutorials for the Browser, worker checks, Android access, requests, reports and settings.

## Know what has been saved

A phone draft stays on the phone. A submitted phone request goes to the DEO for review. **Check demand** checks details; it does not submit an official Work Demand. Starting portal entry is a separate action. The portal's **Proceed** can save an official demand. After entry, the app checks every selected worker's full Job Card, name, requested days and work dates in the saved portal list. **Work Demand completed and verified** appears only when every worker matches. An unfinished final check offers **Check saved list again**, which sends no new demand. A separate final **Submit**, where offered, stays under your control.

Use only areas and records you are authorised to access. Enter the portal Security Code yourself. Never share login codes, passwords or office records in public issues or screenshots.

## Current changes

**3 November 2026 source change (later) — VBGRAMG decides repeated workers**

- This PC's own entry records no longer stop a worker by themselves, whether the earlier entry was today, this week or before. For a worker this PC entered before on some of the chosen days, entry first reads View Demand Details on the portal for that household. Only these workers are read first; other workers are entered at the same speed as before.
- If VBGRAMG shows a demand on the same or overlapping days, the worker is skipped and shown as **Already has a demand on VBGRAMG — skipped**, with the portal's dates. This is not a problem that needs your check, and it is never charged. The same demand on the same dates is kept as **Already entered**, and the final list check confirms it.
- If VBGRAMG shows no such demand, the worker is entered again, even if this PC entered the worker before. An earlier reply that was never confirmed counts the same way from 10 minutes after it, because a slow portal may still save it within that time. The earlier record on this PC is then marked as not on the portal.
- When automatic saved-demand checks are on, a demand already on VBGRAMG for overlapping days is also skipped this way instead of stopping entry for a check.
- Safeguards that hold a worker for your check instead: an entry from this PC that is still being sent, or whose reply was unclear less than 10 minutes ago; two members of the household with the same name when VBGRAMG shows a demand for that name, because the saved list shows names only; and a form with a separate final Submit, whose saved demands cannot be read there. A worker whose reply is unclear in the current run stays held until it is checked. If the portal answers Proceed with a message that a demand already exists, that worker stops for your check.
- Workers this PC never entered are not read first, so entry keeps its speed for them.
- A worker entered again after VBGRAMG no longer shows an earlier demand is not charged a second time.
- **Check demand** no longer leaves out a worker for an earlier entry from this PC. It lists such workers and says that entry checks VBGRAMG first. This replaces the leave-out described in the earlier 3 November entry about **Check demand** below.
- Checked with automated tests and in the real desktop app, on fictional records and pages only. Not yet checked with a live run.

**3 November 2026 source improvement — Print, Find and the usual keyboard keys**

- The Browser toolbar has a **🖨 Print** button for every page. It, and **Ctrl+P**, open the normal Windows print box for the page you see. The Work Allocation page keeps its own print window with every row.
- **Ctrl+F** or the **⌕** button finds words on the Browser page and shows how many match. **Alt+←**, **Alt+→**, **F5**, **Ctrl+R** and **Ctrl+L** work as in a normal web browser; reloading still asks first.
- On other app screens, **Ctrl+P** prints the open screen without the side menu, and **Ctrl+F** goes to the screen's search box first, then finds words on the screen.
- Copy, Cut, Paste, Select all, Undo and Redo keep working everywhere. A right-click menu now offers them in text boxes and on selected words.
- While the print box for a portal page is open, background portal reads wait instead of failing. Printing and finding never save, send or submit anything.
- Checked in the real desktop app with fictional pages, and with automated tests on fictional records. Not yet checked on the live portal or with a real printer.

**3 November 2026 source improvement — workers who already have a demand are left out at Check demand, and entry shows its time**

- **Check demand** now leaves out a worker who already has a demand for some of the chosen days, when that demand was entered from this PC and the portal saved it. The check lists each one with the earlier dates and what to do: choose dates after the earlier demand if the worker needs more days. Entry then runs only the other workers, so these workers no longer appear under **Need your check**. Before, entry stopped each of them for a check.
- An exact repeat of the same dates is still skipped by entry as already entered. An earlier entry whose result was not confirmed still needs your check, because it may or may not be saved.
- The Work Demand progress panel now shows **Time so far** and **Time left** during entry, and **Time taken** when entry finishes.
- The time report saved on this PC after each entry now also counts the sign-in checks, page reads, the portal's own reply time and the short wait for the page to settle. It only measures. It does not change any step, so the next live run shows where the remaining time goes.
- On 3 November, the faster Job Card change from 2 November was used on the live portal for 224 workers in one Village. The portal showed its success message for all 224, with 0 failed entries, in 7 minutes 44 seconds. Choosing each household took 0.39 seconds on average, compared with 1.76 seconds the evening before.
- The two new features were checked with automated tests on fictional records and pages. Not yet checked with a live run.

**2 November 2026 source improvement (night) — a safe, faster Job Card change**

- The household is found by its full Registration ID (Job Card number) and checked. The worker is then found by name inside that household. Two members with the same name in one household still stop entry for a personal check.
- When the next worker is in the same Panchayat and Village, the app now picks the next Registration ID directly again, without choosing the Panchayat and Village. This is used only when the portal's copied dates land on the requested worker's own line, with exactly the same dates and days. This was the case that worked on the live portal on 2 November.
- If the copied dates land on another member's line, or differ in any way, the app opens a fresh form and chooses the area again, as in the evening fix. It never empties another member's line on screen and continues.
- If entry stops right after the direct choice, before the copied line is checked, the next try opens a fresh form first.
- Households, and the members inside each household, are entered in the order that allows the direct choice most often, one Panchayat and Village at a time. The list on screen keeps its order. With the saved lists from 1 and 2 November, this would allow the direct choice for about 99 of every 100 household changes (1,018 of 1,027), compared with about half before. Any household whose saved member order does not match the portal simply uses a fresh form.
- Checked with automated tests on fictional pages, including a page that copies the live portal's reply. Not yet checked with a live run.

**2 November 2026 source fix (evening) — the faster Job Card change below is withdrawn**

- On the live portal, the faster Job Card change stopped entry with "The portal returned another member's dates or days that do not match a saved confirmation". It happened 4 times in 3 runs in 2 Villages, each time on the first worker of a new household. The app had emptied the last worker's dates from another member's row on screen, but after **Proceed** the portal showed them again in that row.
- Work Demand entry is back to the earlier, proven way: before each new household, the app clears the previous Registration ID with the portal's own empty choice, or opens a fresh form. This takes a little longer for each household. The Panchayat and Village are still kept when the portal allows it.
- Printing the Work Allocation list is unchanged.
- Checked with automated tests on fictional pages, including a new page that copies the live portal's reply. With the withdrawn code it stopped with the same message; now it enters the worker correctly. Not yet checked with a live run.

**2 November 2026 source improvement — faster Job Card changes and printing the Work Allocation list**

- After each saved worker, Work Demand entry now picks the next Registration ID directly and keeps the Panchayat and Village selected, as shown in the 2 November recording. Before, each new household started a fresh form, and the Panchayat, Village and Registration ID were all chosen again. The area is chosen again only for another area or when the portal clears it.
- The portal can show the last worker's dates and days again in the same row of the next household. The app clears such a row only when every value exactly matches what it just sent. Anything else makes it open a fresh form, as before. The worker, dates, days, success message and repeat-entry checks are unchanged.
- On the Work Allocation page, a **🖨 Print** button in the Browser toolbar and **Ctrl+P** open a print window with a preview of the real pages, printer, paper size, layout and copies, and the normal Windows print box. The print has the area details and every row, including rows below the screen, on as many pages as needed. Printing only reads the page; nothing is saved, allocated or submitted.
- Checked with automated tests on fictional pages only, including three workers across two Job Cards in one Village, a change to another area, and a 60-row list printed over 3 pages. Not yet checked on the live portal: a live run across several Job Cards, and printing a live Work Allocation list on a real printer.

**2 November 2026 source improvement — Balance notices and a visible app update**

- Each Work Demand charge now leaves a **Balance used for Work Demand** notice in the bell: the Balance used, for how many saved and checked workers, the area, any part owed and the Balance left. A new one also shows as a Windows notification. **Mark as read** removes it.
- **Update now** on Windows shows a small installer window while the update installs, then opens the updated app by itself. Before, the app closed and nothing showed for about 40 seconds. This applies from the next update, including updates started from 1.4.27.

**2 November 2026 source improvement — Muster Roll Reports read faster and steadier, on a simpler screen**

- Report pages no longer wait for files from other websites, such as the portal's translation plugin, or for fonts. The Security Code picture still loads. Report tables are read as soon as the page text is ready, without waiting for pictures.
- A Muster Roll page that does not open is tried twice more. One Muster Roll that still fails no longer stops the rest of its Panchayat. The message names it, and trying again opens only the unread ones, because recent checked copies are reused. After three failures in a row, the app leaves the rest of that Panchayat for later and keeps checked records.
- Progress checks during long reads no longer count every saved worker again each second, so the app stays quick.
- The Security Code now comes first. **Generate** opens the portal report page before anything else, so any code is answered before the save box opens, before balance is held and before reading starts. **Check portal now** does the same check earlier. You still type the answer yourself; the app does not solve or send it on its own. If the portal asks again during a long read, the taskbar button blinks and other screens show a reminder.
- The screen now has three steps instead of six, one balance line, a line that says why **Generate** is not ready yet, one progress area, and a searchable list of saved copies that shows 50 at a time.
- Checked with automated tests on fictional pages and records only. Live portal speed has not been timed. This source preview does not replace the published installation files.

**2 November 2026 source improvement — the Work Allocation check works with a busy Panchayat, and entry is split into parts**

- Since 31 October 2026, every Work Allocation check in the saved run summaries ended with "The Work Allocation worker list could not be checked completely", from 18 workers up to 298. No worker was compared, so even 102 correctly entered workers showed as not confirmed.
- The likely cause: the Work Allocation list shows every demand waiting in the Panchayat, including demands entered by other people. The app stopped reading the whole list when any one row looked unusual, for example a blank footer row under the list, a hidden box in a date cell, or another person's row whose days did not fit its dates. Each of these alone caused exactly this message in fictional copies of the page. Which one the live page has is not known yet; no copy of the live page was saved.
- Now a row the app cannot read clearly holds only the worker it may belong to. Every other worker is still compared by full Registration No., name, days and work dates. Two households under one Registration No. stay two different members. A page still loading is read again for up to 15 seconds. If a check still stops, the run keeps a short rule name, such as "pager", without any page text, so the next problem can be found quickly.
- Before entry starts, the app reads how many people already wait for Work Allocation in the selected Panchayat. It only reads. It then tells you how the list will be split, for example 298 workers in 3 parts: 100, 100 and 98, and stops after each part before the portal has to refuse a worker.
- Each pause is one short step: "Part 1 of 3 done: 100 workers entered and confirmed. Allocate work to them on the portal, then press Continue." Work Allocation for the Panchayat stays open in Browser. **Continue** reads the waiting count again first and stays stopped if the portal is still full. You still choose the work and dates and allocate work yourself.
- If the count cannot be read, for example when Work Allocation shows only one Village, entry continues until the portal's own notice, as before.
- Checked with automated tests on fictional pages and records only, including a 102-worker list over three pages beside 20 other demands. Not yet checked on the live portal: the live list's exact layout, the live waiting count and a full live run with parts. This source preview does not replace the published installation files.

**1 November 2026 source improvement — Work Allocation pause checked, faster entry and login area**

- Before entry pauses for Work Allocation, the app now checks the workers it already entered in the Work Allocation list while they are still there. Before, allocating work removed them from that list, so the run could never be confirmed and its Balance stayed held.
- When the portal shows its "allocate them first" box, a worker it did not save waits for Work Allocation instead of being held for checking. A worker it did save stays saved. If the app cannot tell, it checks View Demand Details before trying that worker again.
- After the portal opens its main menu, the saved household is not chosen again, and repeated sign-in checks with nothing in between are gone. The checks right before choosing, filling and Proceed stay.
- Opening the saved login area reads the login form fewer times. If a slow portal ignores a Financial Year, District or Block choice, the app makes the same choice once more before asking you.
- Checked with automated tests on fictional pages only. Live portal speed has not been timed.

**1 November 2026 source improvement — the last Aadhaar Availability answers no longer wait an hour, and each Job Card page is opened once**

- On 1 November 2026, Aadhaar Availability stopped at a few workers short in several areas, for example 65 of 70. The last 5 workers in that area were finished almost 10 hours later, in about 2 seconds, after the app was opened again.
- The cause: while the app read the Work Demand form in the background, the portal page you were using was still loading. The slow portal took several seconds. The app took that loading page as a sign-out and stopped. It then saved the unfinished check as finished, with the note "Some saved active workers were missing from the opened member lists", and waited one hour before trying the area again. This one-hour wait also held the area you had selected.
- Now a page that is still loading is not a sign-out. The app waits a few seconds and goes on with the same check. If a check stops part way, the Job Cards already read stay saved and the rest are read on the next turn, without the one-hour wait. That note now appears only when the portal's member list really did not show a saved worker.
- If a whole check finishes and some answers are still missing, the selected Panchayat or Village is tried again within two minutes. Other areas still wait one hour.
- Days worked and the Aadhaar Availability answer are on the same Work Demand form page. Before, the app opened each Job Card there twice: once for days worked and once for Aadhaar Availability. On the slow portal that took about 3 seconds and then about 2 seconds for each Job Card. Now, when both are needed, the app reads both in one visit to each Job Card.
- eKYC, ABPS, Aadhaar Seeding and Aadhaar Authentication were already read together from one signed-in report, 50 workers to a page. The list of Job Cards and workers still comes from the public Job Card pages, which also show registration and work history that the signed-in report does not show. Both run at the same time.
- The app still stops at once after a real sign-out, an expired session or a changed login, and keeps completed records. It never guesses an answer.
- This has been checked with automated tests on fictional records only. It has not yet been checked on the live portal. This source preview does not replace the published installation files.

**1 November 2026 source improvement — the login page gets your District and Block again when the portal is slow**

- On the evening of 1 November 2026, the login page opened with "Select District" and "Select Block", and the saved User ID and password did not fill. When the app chose the Financial Year, the portal took more than a second to reload the page with the District list. The app's built-in browser waited only a fixed 1.2 seconds, found the District list still empty and stopped.
- Now, after each choice, the app waits until the portal's new page is ready, for up to 20 seconds. Then it chooses the District and Block from your saved login area. The saved User ID and password then fill as before. You still enter the Security Code and press Login yourself.
- When the app opens and the saved portal page is still loading, or is moving to the login page because the portal session ended, the app now waits for it and then chooses your saved area. Before, it gave up at once.
- When the portal session ends while you work, the app now opens your saved login area once by itself, so you only need to enter the Security Code. It does not do this on a page asking for a one-time password, after a rejected login, or while you are typing on the portal.
- If the portal does not answer in time, the app still stops and asks you to choose the missing part on the portal. That message now stays on screen instead of being replaced by the general sign-in message. It never guesses another place.
- This has been checked with automated tests on fictional pages, including the actual desktop browser with a portal that takes 2.5 seconds for each list. The app's area steps were also checked on the live public login page in a separate test browser. Reopening the area after a live portal session ends has not yet been checked on the live portal. This source preview does not replace the published installation files.

**1 November 2026 source improvement — Work Demand entry says the real reason it stopped after Proceed**

- After Proceed, the app now watches what the portal page does. If the page sent nothing within 10 seconds, entry stops at once and says so. It shows the portal's own form-check message when there is one, for example a missing answer. Nothing was sent for that member, so it is listed under Failed entries and Try again can enter it.
- If the portal received Proceed but did not answer in time, or answered without "Data Entered Successfully", the message says which one happened and quotes any portal message. That member stays held for your check because it may already be saved.
- Portal messages are kept short, long numbers are hidden, and they stay with that run on this PC.
- This has been checked with automated tests on fictional pages, including the real desktop browser. It has not yet been checked on the live portal. This source preview does not replace the published installation files.

**1 November 2026 source improvement — Work Demand entry continues when the portal opens its main menu after Proceed**

- From about 5 PM on 1 November 2026, entry stopped after one member in every area tried. After Proceed, the portal sometimes opened its Programme Officer main menu instead of returning to the Work Demand form. The app did not expect that page, so it held each member as "saving not confirmed" and stopped.
- Now, if the portal shows its usual success message ("Data Entered Successfully"), on the form or on the main menu, the app accepts it. It opens Work Demand again, chooses the same area and Job Card, and goes on to the next member. Proceed is never pressed again for a member.
- If the main menu opens without the success message, entry still stops and holds that member for your check. If the portal leaves its message box on another page, the app tells you to read it and press OK on the portal.
- A run that stops with members not yet entered now says "Entry stopped" and how many members are not entered yet. It no longer says "Data entry finished".
- This has been checked with automated tests on fictional pages only. It has not yet been checked on the live portal. The final saved-list check in Work Allocation is a separate problem and is not fixed by this change. This source preview does not replace the published installation files.

**1 November 2026 source improvement — saved login details fill again on a later login page**

- Before this change, the saved User ID and password filled the login page only once while the app was open. If the portal session ended and the same login page came back for the same area, the fields stayed empty with the message "The portal could not prepare the saved User ID".
- Now every new login page fills the saved User ID and password again. You still enter the Security Code and press Login yourself.
- If the portal does not keep the saved User ID, the app stops and does not try again by itself. Press Reload or choose your Block again to try once more, or type the User ID and password yourself. The message goes away when you leave the login page.
- This has been checked with automated tests on fictional pages in the actual desktop browser. The live portal and installed builds need their own checks. This source preview does not replace the published installation files.

**1 November 2026 source improvement — clearer stops during Work Demand entry**

- When one portal page step does not finish, entry now says what happened. For example: the portal changed the page, the page took too long to load, or the page could not load. "The built-in portal browser is unavailable" now means only that the app lost its own link to the browser.
- If the portal changes the page, or a page loads slowly or not at all, before any dates or days are filled, entry tries that worker again on its own after 2, 5 and 10 seconds. It uses the same unsent entry record. Nothing is tried again after filling starts or after Proceed.
- This works the same for every State, District, Block, Panchayat and Village. The app keeps a short private list of failed portal page steps. It holds fixed step names only: no addresses, names, form values or passwords.
- This has been checked with automated tests on fictional pages only. Live portal work and installed builds need their own checks. This source preview does not replace the published installation files.

**1 November 2026 source improvement — work keeps going in the background**

- Started Work Demand entry, record downloads, worker checks and Muster Roll (official worker attendance list) report reading keep their normal speed when you minimize the desktop app, switch to another program or open another app tab. Before this change, a hidden app screen and a hidden report window slowed to about one step a second.
- Pause entry, Stop after this worker and download pauses still work as before. Closing the app or letting the computer sleep still stops the work.
- This has been checked with fictional pages in the actual desktop app. Live portal work and installed builds need their own checks. This source preview does not replace the published installation files.

**31 October 2026 source improvements — faster checked Work Demand entry**

- Automatic entry checks the current browser, sign-in and area together. It uses fewer repeated reads and waits for changing pages to finish. A changed page, account or sign-in cannot reuse an earlier answer.
- Related form checks share one complete read. Before filling, the live form must still match. Before each Proceed, the full Job Card, worker, area, dates and days must match the request again. Personal edits stay protected.
- Small area checks read the current choices without copying the full Job Card list. Optional household days are read once during each form action and read afresh next time. Fields, choices and Proceed marked unavailable are refused, including when a whole group is disabled or the page changes just before entry.
- A batch checks saved entry records together when starting. Each worker still has separate duplicate protection before entry. Workers of the same Job Card stay together, with their own dates and days.
- Repeated checks reuse the app's private browser connection. A lost, incomplete or refused reply does not cause the app to send the same command again. An idle connection is replaced safely before the next command. Worker checks and saved-detail visits are kept.
- A ready Work Demand form no longer waits for an unfinished background image before the app can read it. Browser checks have a short deadline. An expired command cannot run later on another page. The portal's success message and current worker details are still checked. A genuine Pause is kept.
- Progress separates **Waiting to start** and **Entering now** from completed, failed and uncertain entries. Existing Pause, Resume, Stop, safe retries and saved-list checks remain available.
- These changes have been checked with isolated fictional records, including the actual desktop browser. Actual live portal speed, installed builds and official saved results need their own checks. This source preview does not replace the published installation files.

**1 November 2026 source improvements — redesigned screens**

- Android Home is one status line and one card for each area. A short list shows waiting requests and saved drafts only when there are some. The repeated heading, the step count on Home and the two count boxes are gone.
- Choosing workers is simpler. A worker shows a tag only when something needs attention. One line above the list says when every listed worker is active with eKYC complete. **Apply Days to All** sits beside the days box. The Review screen shows the total days and a warning icon for any worker who needs a check.
- Tablets and large windows keep Android pages in a centred column. On a wide screen, choosing workers also shows a side panel with your selection.
- On desktop, the menu items are one line each, the footer is one line, and the menu opens as a drawer below 900 pixels wide. Tick boxes look the same everywhere. The six Work Demand steps are one slim row on phones and tablets. Settings area records give **Download** the main place and make **Recheck** and **Delete** quiet text buttons.
- Fixed at tablet width: the Work Order choice no longer covers its label, and **Filters** and **Add worker** are no longer cut off. The draft Work Demand copy shows workers as readable cards on a phone.
- Both apps now have a language choice: English, Hindi and Garo. Hindi is a first draft and covers the main Android flow and the desktop menu, top bar, footer and Work Demand page. Garo has no words yet, so the app shows English and says it is a draft translation until a Garo speaker has confirmed the text.
- These changes were checked with isolated fictional records. They are in the newer source only. Installed apps, published downloads, device checks and official portal results need their own checks.
- The area records panel and download status are one small card with a download percentage for the area and for each record. The four worker checks (eKYC, ABPS, Aadhaar seeding and Aadhaar authentication) are shown as one pass, followed by Aadhaar Availability. The status no longer blinks when a retry flips for a moment. These are display changes; the download order and the portal reads are unchanged.

**3 November 2026 source improvement — welcome tour for new users**

- After the first sign-in on the desktop app, a short Welcome tour (six screens) opens once over Create demand. Skip tour or Start using the app closes it for good. Settings → Help → Take the welcome tour shows it again. The web preview never opens it by itself. Checked with fictional records only.

**3 November 2026 source improvement — quicker area choices**

- Long place lists have a **Type to find…** box. Typing any part of a name narrows the list. Up to six matches show as buttons, and Enter chooses the only match left. Spaces, brackets and dashes do not matter, and names in any script can be found.
- On Create demand, a District, Block, Panchayat or Village is chosen for you when it is the only one offered. Two or more are never guessed, and a place you clear by hand stays cleared.
- **Recent Villages** is now on Create demand too.
- The list note says when the lists were saved, for example "Lists saved today at 9:12 am".
- All six levels (State, Financial Year, District, Block, Panchayat, Village) stay, so it works for every State. Checked with fictional lists only.

**3 November 2026 source improvement — the first five steps download together**

- Job Cards and workers, eKYC, ABPS, Aadhaar Seeding and Aadhaar Authentication now download at the same time. The four worker checks start as soon as the list of Job Cards and workers is saved. Before, they often waited until every household page was read.
- If the app and the signed-in reader both want the same Village, the second one no longer waits for the whole download. It starts its checks as soon as the workers are saved.
- Safety stays the same. Every check is matched only to a saved worker. If the checks stop because you chose another area or the login ended, the household pages stop too, and everything already read stays saved.
- Checked with fictional records only.

**1 November 2026 source improvements — Panchayat lists read once per download**

- The Panchayat's issued Job Card list, its registration register and its two summary reports are read once per download, instead of again for every Village. In a fictional Panchayat with 4 Villages, portal page loads fell from 54 to 15. These copies last five minutes; during an **Update** only copies read after the Update are used.
- If the selected area's saved records cannot be read for a moment, other areas keep waiting instead of starting early. An error in one area is saved as failed and the other downloads continue.
- A Work Demand form that fails to open is tried again within two minutes for the selected area. Other areas still wait one hour.
- Checked with fictional records only. Live portal speed has not been timed.

**1 November 2026 source improvements — less waiting work for the selected area**

- While the selected Panchayat or Village waits for its signed-in worker checks, the repeated fallback check slows down: 1, 2, 4, 8 and 16 seconds, then every 30 seconds. Before, it ran about every 2 seconds, even while signed out. A newly saved worker answer or choosing the area again still starts the next step at once.
- When the selected Village's Job Cards and workers are saved, the eKYC, ABPS, Aadhaar Seeding and Aadhaar Authentication reader starts at once instead of waiting up to one minute. Other areas keep their order. Checked with fictional records; live portal speed has not been timed.
- Updating worker checks from Work Demand no longer ends a deliberate download pause. The selected area still downloads; other areas stay paused until **Resume downloads**, **Try again** or **Recheck data**.
- A public Job Card list that pauses for an area change or a deliberate pause now stops at once and is saved as **paused**. Before, the stopped page waited its full 18 seconds, then was saved as “A public report page took too long to reply”, with a retry delay. A started portal reply is allowed to finish; the next page checks the area first. Real slow pages still show the same message. Checked with fictional local pages.

**31 October 2026 source change — Factory reset**

- Fixed a startup failure after reset. An older app service could keep saved records open while reset tried to remove them. Reset now checks for another copy before removing anything, explains a locked-file failure, and creates a checked empty record store before opening first setup. A full reset and real app restart were checked with separate fictional records. The user's already-confirmed interrupted reset was also completed and the app opened at fresh sign-in.
- Added **Settings → Factory reset** in the desktop app. Confirm once in the app's warning window, including the acknowledgement tick, to remove all local downloads, settings, areas, drafts, history, recovery copies, saved passwords and sign-ins for all app accounts on this computer, then restart at first setup. Cancel keeps the data.
- Active Work Demand entry must finish or stop first. Local downloads and the local service stop before saved records are removed. An interrupted reset finishes when the app next opens. A failure stays clear and does not claim a fresh start.
- Online accounts, online balance, online requests and official VBGRAMG records are kept. Files exported outside the app are kept. Local reset does not reset another computer or the Android app. Checked locally with fictional records; installer publication remains separate.

**31 October 2026 source improvements — faster downloaded data management**

- When the selected area already has a recent complete Job Card and member list, plus saved eKYC, ABPS, Aadhaar seeding and Aadhaar authentication answers, missing Aadhaar Availability can start directly on the Work Demand page. A selected Village also reuses its complete saved list instead of visiting the area lists again first. The worker-status report opens later only if its own answers need a read. Confirmed Aadhaar Availability Yes answers keep their saved dates and are skipped. Changed, missing or old records keep their normal download checks.
- The Aadhaar reader handles the calendar used by the Work Demand page without losing its page deadline. Browser error replies keep their real report or sign-in reason instead of being mistaken for a lost connection.

- The full download review found old retry dates blocking fresh downloads after deletion, closed private report pages being treated as general browser failures, and completed stages keeping an earlier failure label. Restarting a deleted area now asks for fresh records and releases only that area's old wait. Its earlier worker-discovery records and parent progress are cleared too.
- Temporary read-only report failures retry after 2, 5 and 10 seconds, keeping completed Job Cards and worker answers. If the connection remains unavailable, another attempt is saved for about one minute later. The panel names the recovering stage and shows its next attempt time. Area changes, deliberate pauses and ended logins stop these retries. A changed or unclear report keeps its real error for review.
- Confirmed Aadhaar Availability Yes answers keep their original dates and are skipped when reading missing answers. A due family member can share its Job Card page without changing an already confirmed Yes answer. After downloaded data is deleted, those deleted answers must be read afresh.
- A new confirmed portal login resumes older incomplete required reads once, without clearing completed answers. A failure during that same login keeps its own retry time. The operator still completes Security Codes and login personally.
- Healthy private report pages are reused across offered menu steps. Reading begins when the new report document is ready, without waiting for slow pictures. A report that never opens stops after 30 seconds and can recover. Failed views are removed before recovery. Unchanged location choices need one inspection instead of six. A queued download command that times out is cancelled so it cannot later run for an old selection. Official Work Demand entry actions are not replayed by download recovery.
- Saved portal login details wait for the selected login area and the portal's User ID check before filling the password. **Use saved login location** and **Save and open login area** request a fresh login page after a rejected attempt. A changed portal password value is refused during saving; an older saved copy that needs an update asks for the original password in **Login details**. The user still enters the Security Code and presses Login personally.
- An Aadhaar Availability read can follow the portal's offered Work Demand menu in its separate view. It keeps the operator's page and completed worker checks in place. A failed form read keeps its reason beside the affected Village and Financial Year, including after reopening. An incomplete download shows **Incomplete** with the reason and **Download missing records**; a waiting message cannot hide that failure.
- Changing Panchayat or Village wakes downloads immediately. A handover continues in the same run after the old read stops, including a quick return to an earlier Village. Choices made during a progress reply get one follow-up check instead of waiting up to 30 seconds. Worker answers saved during a public read also wake its next step. The active reader avoids repeatedly checking unrelated waiting areas. Saved-area lists read shared location details once, and essential worker checks leave optional day totals for their own stage.
- Deleted or paused records keep their saved stop. Missing-record messages explain **Download records again**, **Resume downloads** or **Download missing records**, instead of claiming a stopped download is running. Existing saved progress, failed-read retry times and the worker-data order are kept.
- The public Job Card reader accepts **Name** and **नाम**, including the matching household-name column. A changed or unclear heading shows its real problem instead of treating a populated report as empty. Both report languages, changed column order, complete pages and exact household matching are checked.
- Already selected area and year choices avoid another request. Parent lists and worker reports share one temporary public browser. Matched issued workers can begin their required checks while an explicitly unissued application waits for its later status save. Page timeouts have a clear retry message. Saved records, incomplete answers and final completion checks keep their meaning.
- Opening the selected area's report pages now appears under that Panchayat or Village while it is being read. A queued worker list says **Not saved yet**. Waiting for worker checks no longer repeats the same public download round; matching saved answers wake the next step, with a one-minute fallback if a wake-up is missed.
- The selected-area panel shows a running download only while a page is being read for that area. Waiting requests, deliberate pauses, incomplete reports and unavailable status have clear labels. Saved counts stay visible, and an unknown total stays unknown. A matching worker reader can show why it is waiting.
- Confirming **Delete Selected** stops new download pages, pauses downloads and waits for the current page and its saved progress before deleting. Downloads stay paused after reopening. Changed selected records still need a review of the updated counts. A slow page keeps all records for another try.
- The progress bar names the selected Panchayat or Village. A compact overview names the area currently downloading, its measured percentage, and paused and queued areas. Longer lists open with more. The display refreshes without opening Settings, separates the previous page from the next priority area, and shows resumed downloads with their saved progress. Unknown totals and temporarily unavailable status stay clear.
- Progress reads family members and their day figures together, including inactive members needed for shared totals. This removes repeated family lookups in selected-area and setup progress.
- Worker-check progress uses the same identity, answer and date rules as the worker reader. Changed names or numbers no longer leave old answers counted as current. Matching completed Yes answers keep their real dates. Reported No and pending answers keep their existing reading rules.
- New-area discovery starts required worker checks after all basic worker groups save and the complete registration and issued-card lists agree. Remaining household detail pages follow. Final Village checks and later deletion notices still apply.
- Answer, day and completion checks share the household information just read during the same save. A changed membership forces a fresh read. New saved-record messages refresh visible lists and counts sooner; earlier account updates are cancelled and ordinary progress reads remain available.
- Household reads reuse the checked area and Job Card list while the saved records remain unchanged. Worker matches are still checked on every page. Duplicate numbers, a changed account or area, and changed worker details cannot reuse an old match.
- New answers, readable day figures and the household's final download result save together. A failed save cannot leave a new completion result behind. Existing confirmed Yes answers keep their original check dates. These changes reduce work on the PC; live download speed still depends on the portal.
- The active screen's Panchayat or Village gets the next download turn immediately after its choice is confirmed. Browser area changes wake the area check; hidden pages and late older replies cannot take priority. Slow public Job Card reads check for area changes while waiting and preserve saved cards.
- Returning to an earlier Panchayat or Village renews its place at the front of the queue. Required worker checks keep that priority after public lists finish. Recent complete records release their turn without another download. Area lists interrupted by the handover continue automatically with the latest choice; a real failed read still offers Try again. Deliberate pauses, removed areas and failed-report retry times are kept.
- The download order is Job Card numbers and Registration IDs, members, eKYC, ABPS, Aadhaar Availability, worked days, days left, then additional records. Extra checks and Work Codes wait behind a running day read. Data already present on a required page is saved without extra visits. Worker selection can begin before every additional report is complete.
- Saved area choices restore a compact download summary after reopening. It shows the selected area, progress, saved-check count and whether you can prepare a Work Demand. **Details** opens the report counts, waiting areas, last saved dates and update notes. **Recheck data** stays beside Details. The counts refresh while downloads run. An unconfirmed Village cannot silently request the whole Panchayat.
- Deleted data and areas removed from the queue show **Download stopped**, with a clear reason and **Download records again**. Visiting the area keeps the stop until that button is chosen. Completed saved records are reused.
- Download, recheck or delete any Panchayat or Village directly from its row. Download continues missing records. Recheck asks for fresh information for the chosen year and keeps saved records. See download status, the last saved date and record counts together.
- Select fully downloaded, partial, interrupted/incomplete or queued areas with one button. Adjust individual ticks, then delete the selection or remove it from the queue with one confirmation.
- Queue removal keeps saved records. Removed areas stay stopped after reopening the app. A page already being read can finish; restarting one Village keeps its stopped siblings out of the queue.
- Unrelated background activity no longer cancels a deletion review. Changes to the selected records update the same confirmation and require you to check the new counts before deleting.
- Saved data is shared across screens and filters. Complete work lists stay in the shared saved records after reopening the app, and location lists are shared with background readers. Matching work-list requests join one download even when they come from different workflows. Missing, incomplete, outdated or manually refreshed data can be downloaded again.
- These source changes use fictional records for checks. An installed app, a published download and a live portal result are separate.

**30 October 2026 source improvements — simple day figures and Work Codes last**

- Fill a missing day figure from the 125-day total. Examples: 76 worked → 49 left; 10 worked → 115 left; 76 left → 49 worked. Shared figures are labelled **Job Card total** when the member's own worked days are unavailable.
- Reuse current saved day information. Save a readable total already present on a required Aadhaar page without opening that Job Card again just for days. Keep reported values, saved check times and report warnings.
- Work Codes and reported Work Order numbers use the Panchayat's last download turn. Read every offered report page, save one complete list and reuse it across Villages. Repeated Work Order numbers can belong to different Work Codes. Missing numbers remain unavailable.
- These are source changes checked with fictional records. They do not replace an installed app or establish a live portal result.

**30 October 2026 source improvements — simpler downloaded data deletion**

- **Select All → Delete Selected → one confirmation:** manage full, partial and interrupted Panchayat and Village downloads together. Untick individual Villages to keep them. A missing Village list no longer blocks deleting a Panchayat's downloaded data. The same screen keeps the download and recheck buttons.

- Job Card numbers and members remain first. A slow public household page no longer holds up all following cards. The existing four-request limit, small saves and incomplete-download checks are kept.
- New member saves avoid repeated empty lookups. Saved worker pages and totals share one calculation.
- **Recheck data** asks for fresh information for the selected Panchayat or Village and Financial Year. **Download missing records** continues unfinished work. Both keep saved records and entered demand details.
- Confirmed **Aadhaar Availability: Yes** is kept for the same worker and Job Card. Availability updates, another family member's check and daily day-report reads skip those completed answers. No, unknown, missing and unconfirmed answers are tried again when an update is due.
- **Settings → Manage downloaded data** shows saved counts for all years. Full data requires saved completion checks; counts alone do not prove completion. A checked private recovery copy is saved before deletion. Removed areas stay stopped until you choose to download them again. Official history and login details are kept.
- These source changes were checked with fictional records. Installation, publication and live portal timing remain separate.
**31 October 2026 source change — start Work Demand sooner**

- Download Job Card and household details, Member Name, Gender, Worker ID, Aadhaar Authentication, Aadhaar Seeding, ABPS and eKYC first. Save all four checks from the main worker report together.
- If all four checks are Yes for the same active worker, show **Aadhaar Availability: Yes** and allow Work Demand preparation. Keep the calculated source separate from an actual form answer. It does not count as a completed Aadhaar download.
- Read worked days and shared days left next, then other records. Check actual Aadhaar Availability from Work Demand last. An actual Yes becomes confirmed; No replaces the temporary answer and blocks that worker. Entered days and dates stay saved.
- The selected Panchayat or Village keeps priority. Pauses, completed-record reuse, account limits and checks on the actual entry form still apply. A failed extra report does not permanently prevent the final Aadhaar check.
- These are source changes checked locally. Installer publication and live portal entry remain separate checks.

**30 October 2026 source improvements — one area at a time**

- Public records, worker checks and Muster Roll page loads share one area turn. The active tab goes first, including when the earlier background read belongs to another Village in the same Panchayat. Other areas continue one by one.
- Recent household pages survive a temporary area pause. Matching requests share reads, report pages can stay open between turns, and queue checks avoid repeated full record counts. Saved check dates are kept.
- Settings shows Queued, Downloading, Paused, Completed and Failed. Required worker checks and official submission rules are unchanged. These are local source changes; live portal timing and installation remain separate.

**28 October 2026 source improvements**

- Only the active tab's Panchayat or Village downloads until its required worker records are saved. Other public, private and Muster Roll downloads wait, including during retry delays, and resume afterward. Area and tab changes keep completed records and progress. Recent complete records are reused.

- Received requests show a record download bar and measured percentage in the list and open request. Selected-area Record updates show saved Job Card, worker, workday and work-list counts, plus a completed count for each worker check. Pauses and failures keep saved progress; unknown totals stay unknown. Full record checks are still required before 100%.
- Show Worked and Show Days left are separate saved switches. Day figures are information only and never change entered days or hold up a demand. Required Job Card and worker matching, eKYC, ABPS and Aadhaar Availability stay mandatory. Downloads read identities and required worker checks before optional reports. Work selection stays optional; a chosen work keeps its checks.

**31 October 2026 source improvements**

- Saving a login area waits for the portal form to be ready. Images still loading do not stop the next step. Setup shows the reason if opening fails, keeps the chosen area and allows another try with the same button.
- Portal setup now has two steps: **Select login area → Sign in**. A confirmed sign-in opens **Work Demand → Create demand**. Work-area and download setup steps, their checks and automatic setup report downloads have been removed. Normal area and report tools stay available.

**27 October 2026 source improvements**

- Desktop and Android share shorter labels, clear steps and details that open when needed. Existing records, permissions, checks and automation are kept.
- After setup, **Work Demand** opens first. **Create demand** is the first choice for a new user; later visits keep the last source. The guided page shows **Area → Workers → Work → Days and dates → Review and send → Result**.
- Desktop uses **Send to VBGRAMG**; Android uses **Send to office**. A phone request is not an official portal demand. Entry and confirmed saved results stay separate.
- Settings are grouped under **Work**, **App** and **Account**. Narrow windows have a **Settings section** chooser. Job Card search comes before totals; extra totals and explanations open under Details.
- Step 4 lets you choose record types, use **Download later** for each item, or **Skip remaining and continue**. Downloaded and skipped records have separate labels. Return through **Settings → Portal login → Manage record downloads**. Missing Work Demand checks stay required.
- Setup uses one guided workspace: **Login area → Sign in → Work areas → Download records**. The official portal gets the full workspace during sign-in.
- Downloads show checked counts and distinguish working, waiting, paused and stopped readers. Report problems show their reason. **Retry missing data** includes unfinished days-worked checks and keeps completed records.
- A clear first-use message explains that later work is usually faster through saved records. Settings, selected areas and downloaded records stay through normal app updates.

**2 November 2026 — Balance held by unconfirmed Work Demand runs released**

Work Demand runs whose result was never confirmed no longer hold your Balance. All Balance they set aside is free again, and nobody was charged for them. The online service can now charge a run that stops part-way only for the workers whose demand was saved and checked, at 1 for every 20 of them. The app uses this from its next update. The change was checked online without starting a real run or making a payment. No installation file was replaced.

**2 November 2026 — Work Demand entry now costs half**

A successful Work Demand entry now uses 1 from your Balance for every 20 selected workers. A part of 20 counts as a full 20: 1–20 workers use 1, 21–40 use 2 and 100 use 5. Before, it was 1 for every 10 workers. ₹1 still adds 1 Balance, and Muster Roll Village reports still use 2 for each saved Village.

This online change applies to every app copy at once. Desktop 1.4.27 still says "every 10 workers" on its Balance page until the next app update, but it is charged the new, lower price. A run that already set aside Balance keeps its earlier price. The change was checked online without starting a run or making a payment. No installation file was replaced.

**30 October 2026 — Saved day totals are information only**

The online family day-total limit has been removed. Days worked and days remaining must not stop a Work Demand or reduce the requested days. Checks with fictional records confirmed approval and entry preparation, unchanged requested days and protection against repeated worker periods. Every fictional online test change was rolled back. The official portal was not contacted.

The separate desktop 1.4.23 correction also removes the old local approval check. The Android correction keeps requested days above earlier saved totals. These installation files are prepared and checked; installation and public app publication remain separate steps. Existing worker identity, required answers, dates and official portal checks remain in place.

**27 October 2026 — Remove your own assigned areas enabled online**

On desktop, open **Android access → My areas → Change my Android access**. Select your assigned Panchayats or Villages, choose **Remove selected areas**, check the names and choose **Remove areas**. You can remove only your own assignments. Other users' areas are protected. Saved worker records, requests, completed Work Demands, Muster Rolls, Secretary accounts, login codes and history are kept.

The missing online step is now enabled. Checks used temporary fictional areas in the online database and undid every test change. The current signed-in connection was also checked with an empty selection. No real areas were removed during these checks. This service update works with the existing removal screen; no new installation is needed.

**26 October 2026 — Balance charging enabled online**

Work Demand charging was turned on after the app publication. Browser automation now needs 1 available Balance before entry starts. It reserves that amount and deducts it after the saved Work Demand is confirmed. Zero available Balance blocks new runs and unfunded retries, including older unfinished free requests. Recharge opens with the current work kept. Failed runs release their reservation. Repeated starts and completion replies do not charge twice. Completed free work keeps its original price.

This online service update applies to the existing app downloads. The recharge package stays ₹50 for 50 Balance. No installation file was replaced. The earlier release notes describe the charging setting at the time they were written.

**Published 1.4.27**

- **Faster Panchayat and Village downloads.** The Panchayat&#x27;s issued Job Card list, registration register and two summary reports are read once per download instead of again for every Village. In a fictional test Panchayat with 4 Villages, portal page loads fell from 54 to 15. An **Update** no longer downloads the…
- **Faster Work Demand entry.** After the portal opens its main menu, the saved household is not chosen again, and repeated sign-in checks with nothing in between are gone. The checks right before choosing, filling and Proceed stay.
- **Work Allocation pause.** When the portal asks you to allocate work first, entry pauses, keeps your place and continues the same run afterwards. Workers already entered are confirmed in the Work Allocation list before the pause, so the run can finish as checked.
- **Work Demand price: 1 Balance for every 20 workers** in one entry run, with no worker limit (21–40 workers use 2; 100 workers use 5). It was 1 for every 10 workers when Windows and Linux were published; the online service lowered it on 2 November 2026 for every app copy. The desktop 1.4.27 Balance page still says…
- **Recharge any whole-rupee amount from ₹50 to ₹1,000.** ₹1 paid adds 1 Balance. Razorpay opens in an app payment window and the screen says how much of a payment pays an amount owed.
- **More stable.** The desktop service and app screen restart by themselves after a crash, screens no longer freeze while your office sign-in is checked on a slow connection, and a refused Muster Roll report charge no longer blocks the Balance page or Recharge.

**25 October 2026 source improvements**

- **My Android access** groups the login code and working areas separately, with extra options and help folded away until needed.
- **Edit and resend** is prepared for stopped requests and requires the online request update before use. Saved demands stay protected and unclear results must be checked first.
- **Choose my own login code** opens a short form near the current code, keeps selected areas and accepts a 4 to 16 digit number, letters or symbols.
- **Send to Browser again** reopens the complete checked worker list after an error or stop, while keeping saved results and the original days and dates.
- **My Android access** lets you choose your own login code or generate one. Existing account, assigned-area and duplicate-code checks remain in place.

**24 October 2026 source improvements**

- **Your work** shows unfinished requests, selected-area priority and the last entry needing attention.
- **Check problems** explains app, saved-record, area, portal sign-in and request-list issues without sending a demand.
- **Record backups** keeps checked daily and manual local copies and tests recovery separately.
- Release checks now include the complete saved-record and workflow checks, desktop checks and Android checks.

**23 October 2026 source improvements**

- One **Work Demand Management** menu for **Android requests** and **Manual entry**, sharing worker checks and portal entry.
- Incoming Android requests prepare their own area records automatically. Recent records are reused; progress and missing portal access are shown on the request.
- Switching source keeps the current drafts. The last source and received-request filters are remembered.
- Both sources use **Check demand → Submit to VBGRAMG → Allocation verification**. Allocation waits until entry finishes; pending final Submit and uncertain entries stay held.
- Request screens show the current entry state and **Open entry progress** returns to Browser controls.
- Repeated Send keeps the current portal page when every worker has an earlier entry record; the saved-list check is a separate choice.
- Compact worker filters and nearby search, list and send controls.
- Safer area matching for received Android requests, using the full area path.
- A new illustrated guide and 15 current app previews.

See [latest changes and their release status](docs/LATEST_CHANGES.md). The public repository holds downloads and guides. App building files and office records stay on the owner's computer.
