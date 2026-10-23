# User guide

[Home](../README.md) · [Feature list](FEATURES.md) · [Latest changes](LATEST_CHANGES.md)

**Screens captured for desktop 1.4.13 and Android 1.4.13 · 2026-10-23.**

Screenshots use fictional people and areas. Android and desktop are labelled separately. Your assigned areas and the portal's current lists determine what you can see.

## 1. Install and sign in

1. Open the [app downloads](https://github.com/Changtey/Worker-Demand-releases#download). Choose Windows, Linux or Android for your device.
2. Keep your existing app and saved records when updating. See the release notes for installation checks and known limits.
3. On desktop, use **Sign in with Google** and finish in your computer's usual browser. This is separate from your official portal login.
4. In **Settings → Login area**, choose your State, Financial Year, District and Block from the current lists. Save the area.
5. Use **Show menu** on a narrow screen to open the app's menus. If an optional menu is hidden, show it in **Settings → Sidebar menus**.

Published downloads: desktop **1.4.13**, Android **1.4.13**.

| Device | Download |
| --- | --- |
| Windows 64-bit | [Download 1.4.13](https://github.com/Changtey/Worker-Demand-releases/releases/download/v1.4.13/VBGRAMG-DEO-Assistant-1.4.13-Setup.exe) |
| Linux Debian / Ubuntu | [Download 1.4.13](https://github.com/Changtey/Worker-Demand-releases/releases/download/v1.4.13/VBGRAMG-DEO-Assistant-1.4.13-Linux-x64.deb) |
| Linux AppImage | [Download 1.4.13](https://github.com/Changtey/Worker-Demand-releases/releases/download/v1.4.13/VBGRAMG-DEO-Assistant-1.4.13-Linux-x64.AppImage) |
| Android APK | [Download 1.4.13](https://github.com/Changtey/Worker-Demand-releases/releases/download/v1.4.13/Worker-Demand-1.4.13.apk) |

[Release notes and checksums](https://github.com/Changtey/Worker-Demand-releases/releases/tag/v1.4.13).

## 2. Create your personal Android access

On desktop, open **Create Android Login Code**, then **My Android access**.

1. Add your working Panchayats or Villages if they are not listed.
2. Choose **Set up my Android access**, or **Change my Android access** if already set up.
3. Search the assigned areas. Tick the areas you need. You can select several areas together; filtering keeps your choices.
4. Choose **Generate my login code**. Keep the code private.
5. Enter it in the Worker Demand Android app. Choose from the areas assigned to your account.

Use **Disable my Android code** when access should end. Read the confirmation before removing area assignments; removing access does not erase official portal records.

<img src="screenshots/02-android-login.png" width="300" alt="Desktop preview: choosing personal Android areas without a visible login code">

## 3. Create Secretary access

1. In **Create Android Login Code**, choose **Create login code**.
2. Choose the State, Financial Year, District, Block and Panchayat. Choose a Village for Village-only access, or keep the whole Panchayat choice when that is intended.
3. Enter a private **Login code** and choose **Save code**. Current code rules are shown beside the field.
4. Share the code privately with the intended Panchayat Secretary.
5. The Secretary signs in to the same Android app. Their account shows their assigned area and worker list.

Use **Read latest codes** to recheck a saved result after a connection problem. If a code is already used, choose another code. To end access, open its available disable or delete control and read the confirmation. Keep the Android app updated before using newer code formats.

<img src="screenshots/03-secretary-access.png" width="300" alt="Desktop preview: Secretary area form with an empty login code field">

## 4. Use the desktop Browser

1. Open **Browser**, then open VBGRAMG with your chosen area.
2. Check the website and area before entering your User ID and Password.
3. Enter the **Security Code** yourself and choose **Login**.
4. On the matching official login page, **Save** or **Update** stores the login pair only when you choose it. **Login details** lets you change or delete the saved pair.
5. Keep the Browser open for current portal checks and entry. Follow the messages when the session needs signing in again.

The Browser is a desktop feature. The narrow preview shows its controls; it does not show a real official website or a logged-in session.

## 5. Find Job Cards and workers

1. Open **Job Card Records**. Choose the Village and Financial Year.
2. Search by Job Card, member, household head or Village. Choose the Job Card status and saved check filters, then **Apply**.
3. Use **Show household members** beside a Job Card to see its workers and saved checks. Scroll the table sideways on a narrow screen for the other columns.
4. Use **Update from VBGRAMG** when records need updating. Keep an incomplete or unknown result open for review.

Job Card members share the household's days left. A missing total means **Not known**, not zero. Village totals cover the saved Village; searching and paging change the list, not those totals.

## 6. Make a work request on Android

1. On **Home**, check your account and assigned Panchayat or Village. A DEO can choose among their assigned areas.
2. Choose **Create work request**. Search by worker or Job Card and choose the workers.
3. Review saved checks. Set each selected worker's requested days, or enter days above the wide teal **Apply Days to All** button and press it to use those days for every selected worker.
4. Continue to the work details. Enter the start date and the other requested details. Choose a saved work if needed.
5. Review the workers, days and dates, then choose **Submit request** to send it to the DEO.
6. Open **History** for the received status. A draft is a saved phone copy. An offline request waits for a connection using its existing request number.

If access has ended, sign in again with a current code from the DEO. Some actions require a connection or a recent access check. A phone request is not an official portal Work Demand.

<img src="screenshots/05-android-work-demand.png" width="300" alt="Android: review of a fictional request before Submit request">

**Use the same days for several workers:** Select the workers, enter a number in **Days for all selected workers**, then press **Apply Days to All**. Check the Days box beside each name. You can still change one worker's days separately.

<img src="screenshots/08-worker-list.png" width="300" alt="Android: selected fictional workers and the teal Apply Days to All button">

## 7. Prepare and check a demand on desktop

For a new list, open **Work Demand Data Entry**. For a received list, open **Work Demand Request from Android/ Secretary**, read the latest requests and open one.

1. Check the area and Financial Year. Use current offered choices; do not replace an unavailable area with another place.
2. Check the **Application Date**. This is separate from the requested work dates.
3. Search the worker list or open **Worker filters**. Active status, Aadhaar availability, electronic identity verification (**eKYC**) and Aadhaar Based Payment System (**ABPS**) answers help find records to review.
4. Choose the workers. Set their own requested days, start and end dates. Days are shared by Job Card. Filters change what you see; review selected workers hidden by filters before continuing.
5. Use the available add or remove controls to change this demand's worker list. Removing someone from a demand does not delete their Job Card record.
6. Choose **Check demand**. Read the named worker and reason for every issue. Correct dates or selections, or update the saved checks, then check again.

In the pictured desktop workflow, a received request has two actions: **Check demand → Submit to VBGRAMG**. There is no separate Approve button. Changes to workers or dates need a new check. 

Choose **Save Changes** if you only want to keep a request draft. Reports use the saved request; save corrections before downloading the request's Excel or PDF.

<img src="screenshots/11-check-demand.png" width="300" alt="Desktop preview: reasons for worker checks that need attention">

## 8. Start portal entry and check the result

1. After a successful check, review the selected workers and totals.
2. Choose **Submit to VBGRAMG** for a received request, or **Send to VBGRAMG** for manual entry. This starts desktop portal entry for the checked area.
3. Follow the Browser instructions. Review every offered official action. The portal's **Proceed** can save an official demand; a separate final **Submit**, if offered, stays under your control.
4. Read the final result and verify the saved demand list. A green message, an opened Browser or a filled form alone does not prove that all workers were saved.
5. If a reply is missing or entry is uncertain, use the offered recheck or recovery control before trying again. Confirmed saved workers should not be entered twice.

## 9. Prepare Muster Roll reports

A **Muster Roll** is the official worker attendance list. Open **Muster Roll Reports** on desktop.

1. Choose the State, Financial Year, District and Block from the offered lists.
2. Search and tick the Panchayats you need. Then tick the Villages in those Panchayats.
3. Review the selected areas, report settings and any shown token cost.
4. Choose the report action when ready. Use the available PDF or Excel save control for the finished report.

Private reports require your authorised portal account. An unavailable report or incomplete reading needs attention; selecting areas or viewing the cost does not mean a report was generated.

<img src="screenshots/13-muster-reports.png" width="300" alt="Desktop preview: fictional Panchayat and Village report choices">

## 10. Arrange settings and saved areas

- **Sidebar menus:** show, hide, group and arrange menus.
- **Appearance:** choose the available light, dark or system appearance.
- **Login area:** save the portal area used to start work.
- **Saved records:** manage downloads and updates. The current Village or Panchayat gets priority, followed by other authorised areas.
- **My Areas:** keep commonly used places together.

Area choices, worker filters and list size are remembered. A new choice takes priority. If an old choice is no longer offered, review it instead of silently switching places.

## When something needs attention

| Message or result | What to do |
| --- | --- |
| Area or Financial Year unavailable | Read the current lists and choose an offered value. Check that the portal account has access. |
| Saved records incomplete | Keep the saved records, update the selected area and read the result again. |
| Worker check unknown or old | Update the checks. Unknown does not mean Yes, No or zero. |
| Aadhaar available not confirmed Yes | Review that worker's portal answer before portal entry. Do not use a filter to bypass the check. |
| Request changed elsewhere | Read the latest changes, review the workers and check again. |
| Portal reply uncertain | Check the saved list before retrying. |
| Phone offline | Keep the same saved request and reconnect. Check History for its received status. |

Never include real Aadhaar numbers, passwords, Security Codes or login codes in a screenshot or public issue. Explain what happened using fictional examples.
