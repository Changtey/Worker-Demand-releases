# Latest changes

[Home](../README.md) · [User guide](USER_GUIDE.md) · [Features](FEATURES.md)

**Screens captured for desktop 1.4.24 and Android 1.4.24 · 2026-10-30.**

## Published apps

Published downloads: desktop **1.4.24**, Android **1.4.24**.

| Device | Download |
| --- | --- |
| Windows 64-bit | [Download 1.4.24](https://github.com/Changtey/Worker-Demand-releases/releases/download/v1.4.24/VBGRAMG-DEO-Assistant-1.4.24-Setup.exe) |
| Linux Debian / Ubuntu | [Download 1.4.24](https://github.com/Changtey/Worker-Demand-releases/releases/download/v1.4.24/VBGRAMG-DEO-Assistant-1.4.24-Linux-x64.deb) |
| Linux AppImage | [Download 1.4.24](https://github.com/Changtey/Worker-Demand-releases/releases/download/v1.4.24/VBGRAMG-DEO-Assistant-1.4.24-Linux-x64.AppImage) |
| Android APK | [Download 1.4.24](https://github.com/Changtey/Worker-Demand-releases/releases/download/v1.4.24/Worker-Demand-1.4.24.apk) |

[Release notes and checksums](https://github.com/Changtey/Worker-Demand-releases/releases/tag/v1.4.24).

The linked release notes describe what was built, checked and published. A current source picture does not update an installed app or replace an installation file.

## Changes in this release

**30 October 2026 — Saved day totals are information only**

The online family day-total limit has been removed. Days worked and days remaining must not stop a Work Demand or reduce the requested days. Checks with fictional records confirmed approval and entry preparation, unchanged requested days and protection against repeated worker periods. Every fictional online test change was rolled back. The official portal was not contacted.

The separate desktop 1.4.23 correction also removes the old local approval check. The Android correction keeps requested days above earlier saved totals. These installation files are prepared and checked; installation and public app publication remain separate steps. Existing worker identity, required answers, dates and official portal checks remain in place.

**27 October 2026 — Remove your own assigned areas enabled online**

On desktop, open **Android access → My areas → Change my Android access**. Select your assigned Panchayats or Villages, choose **Remove selected areas**, check the names and choose **Remove areas**. You can remove only your own assignments. Other users' areas are protected. Saved worker records, requests, completed Work Demands, Muster Rolls, Secretary accounts, login codes and history are kept.

The missing online step is now enabled. Checks used temporary fictional areas in the online database and undid every test change. The current signed-in connection was also checked with an empty selection. No real areas were removed during these checks. This service update works with the existing removal screen; no new installation is needed.

**26 October 2026 — Balance charging enabled online**

Work Demand charging was turned on after the app publication. Browser automation now needs 1 available Balance before entry starts. It reserves that amount and deducts it after the saved Work Demand is confirmed. Zero available Balance blocks new runs and unfunded retries, including older unfinished free requests. Recharge opens with the current work kept. Failed runs release their reservation. Repeated starts and completion replies do not charge twice. Completed free work keeps its original price.

This online service update applies to the existing app downloads. The recharge package stays ₹50 for 50 Balance. No installation file was replaced. The earlier release notes describe the charging setting at the time they were written.

**Published 1.4.24**

- Job Card numbers and members come first, followed by eKYC, ABPS and Aadhaar Availability. Other information follows in the background. A slow public household page no longer holds up all following cards. The existing four-request limit is kept.
- Confirmed **Aadhaar Availability: Yes** answers are kept for the same worker and Job Card. Availability updates, **Recheck data**, **Update Data**, another family member&#x27;s check and daily day-report reads skip those completed answers. No, missing, unknown and unconfirmed answers are tried again when an update is…
- **Recheck data** appears under the selected Panchayat or Village&#x27;s progress, including after a completed download. **Download missing records** continues unfinished work. Both keep saved records and entered demand details.
- **Settings → Manage downloaded data** lists Panchayats and saved Village choices, with Job Card counts, members and download status. Queue a whole Panchayat before its Village list has been read, or use **Read Village list** to choose individual Villages. Select several areas, download them in order, request fresh…
- Deletion needs a separate review and confirmation. It covers downloaded records for the reviewed areas for **all Financial Years on this computer**. A checked private recovery copy is saved first. Removed areas stay stopped until explicitly downloaded again. Exported PDFs, official submissions, demand history,…
- Saving new members avoids repeated empty lookups. Saved worker pages and totals share one calculation. Search still covers all saved workers before choosing a page. Display copies cannot approve or send a Work Demand.

These pictures were refreshed from the source used for this publication.

## How the guide stays current

Before publication, the release process takes new pictures of the Android and desktop screens using separate fictional records. It refreshes the introduction and guides, checks all 15 pictures and their links, and saves the picture details in [SCREENSHOTS.json](SCREENSHOTS.json). A changed app or missing picture stops publication until the gallery is refreshed.

The Android screen checks do not prove that the app was installed on a phone. Example area checks do not prove live use in every State. Real office records, passwords, Security Codes and login codes are excluded from the gallery. App building files stay on the owner's computer.
