# Latest changes

[Home](../README.md) · [User guide](USER_GUIDE.md) · [Features](FEATURES.md)

**Current source preview · 2026-10-27.** Desktop source 1.4.18; Android source 1.4.18. The desktop pictures include newer changes that are not in the downloads above. The same Android version number does not prove that a source screen matches an older APK.

## Published apps

Published downloads: desktop **1.4.18**, Android **1.4.18**.

| Device | Download |
| --- | --- |
| Windows 64-bit | [Download 1.4.18](https://github.com/Changtey/Worker-Demand-releases/releases/download/v1.4.18/VBGRAMG-DEO-Assistant-1.4.18-Setup.exe) |
| Linux Debian / Ubuntu | [Download 1.4.18](https://github.com/Changtey/Worker-Demand-releases/releases/download/v1.4.18/VBGRAMG-DEO-Assistant-1.4.18-Linux-x64.deb) |
| Linux AppImage | [Download 1.4.18](https://github.com/Changtey/Worker-Demand-releases/releases/download/v1.4.18/VBGRAMG-DEO-Assistant-1.4.18-Linux-x64.AppImage) |
| Android APK | [Download 1.4.18](https://github.com/Changtey/Worker-Demand-releases/releases/download/v1.4.18/Worker-Demand-1.4.18.apk) |

[Release notes and checksums](https://github.com/Changtey/Worker-Demand-releases/releases/tag/v1.4.18).

The linked release notes describe what was built, checked and published. A current source picture does not update an installed app or replace an installation file.

## Changes in this release

**27 October 2026 source improvements**

- Setup uses one guided workspace: **Login area → Sign in → Work areas → Download records**. The official portal gets the full workspace during sign-in.
- Downloads show checked counts and distinguish working, waiting, paused and stopped readers. Report problems show their reason. **Retry missing data** includes unfinished days-worked checks and keeps completed records.
- A clear first-use message explains that later work is usually faster through saved records. Settings, selected areas and downloaded records stay through normal app updates.

**26 October 2026 — Balance charging enabled online**

Work Demand charging was turned on after the app publication. Browser automation now needs 1 available Balance before entry starts. It reserves that amount and deducts it after the saved Work Demand is confirmed. Zero available Balance blocks new runs and unfunded retries, including older unfinished free requests. Recharge opens with the current work kept. Failed runs release their reservation. Repeated starts and completion replies do not charge twice. Completed free work keeps its original price.

This online service update applies to the existing app downloads. The recharge package stays ₹50 for 50 Balance. No installation file was replaced. The earlier release notes describe the charging setting at the time they were written.

**Published 1.4.18**

- On Windows, choose **Update now** once. The update downloads and is checked, installation starts automatically, and the updated app opens when installation finishes. Saved records, drafts and login details are kept. The installer uses the existing Windows account and installation folder.
- A fresh download finishes writing and closes its file before the installer starts. Incomplete, changed and oversized files cannot be installed. The signed update notice and file checks are kept.
- Closing an update progress window during startup no longer quits the app before its recovery choice can finish. A failed download or installer start offers **Try again** in the same visit. A checked download can be reused. Optional updates still allow **Open current app**; required updates keep their existing rule.
- The update screen explains that installation and reopening happen automatically. It does not claim installation is complete merely because the installer has started.
- **Existing older versions need this update installed once.** The earlier updater controls that first transition. Automatic installation and reopening apply to updates started from version 1.4.18 or later. Windows security checks remain in place.
- The combined desktop update also includes the latest login setup screens: choose a default login area, open its official page, sign in personally and then choose work areas. The first-use message explains why the first download can be slow and why reusing saved records makes later work faster. Each new setup step…

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

These desktop changes are shown as previews. No new installer is published by this documentation update.

## How the guide stays current

Before publication, the release process takes new pictures of the Android and desktop screens using separate fictional records. It refreshes the introduction and guides, checks all 15 pictures and their links, and saves the picture details in [SCREENSHOTS.json](SCREENSHOTS.json). A changed app or missing picture stops publication until the gallery is refreshed.

The Android screen checks do not prove that the app was installed on a phone. Example area checks do not prove live use in every State. Real office records, passwords, Security Codes and login codes are excluded from the gallery. App building files stay on the owner's computer.
