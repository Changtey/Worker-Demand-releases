# Latest changes

[Home](../README.md) · [User guide](USER_GUIDE.md) · [Features](FEATURES.md)

**Screens captured for desktop 1.4.26 and Android 1.4.26 · 2026-11-01.**

## Published apps

Published downloads: desktop **1.4.26**, Android **1.4.26**.

| Device | Download |
| --- | --- |
| Windows 64-bit | [Download 1.4.26](https://github.com/Changtey/Worker-Demand-releases/releases/download/v1.4.26/VBGRAMG-DEO-Assistant-1.4.26-Setup.exe) |
| Linux Debian / Ubuntu | [Download 1.4.26](https://github.com/Changtey/Worker-Demand-releases/releases/download/v1.4.26/VBGRAMG-DEO-Assistant-1.4.26-Linux-x64.deb) |
| Linux AppImage | [Download 1.4.26](https://github.com/Changtey/Worker-Demand-releases/releases/download/v1.4.26/VBGRAMG-DEO-Assistant-1.4.26-Linux-x64.AppImage) |
| Android APK | [Download 1.4.26](https://github.com/Changtey/Worker-Demand-releases/releases/download/v1.4.26/Worker-Demand-1.4.26.apk) |

[Release notes and checksums](https://github.com/Changtey/Worker-Demand-releases/releases/tag/v1.4.26).

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

**Published 1.4.26**

- **Faster Panchayat, Village and Job Card choices:** when a choice makes the portal load a whole new page, the app now reads the new page at once instead of waiting 8 seconds. In a fictional test page in the real desktop browser, the wait fell from 8.07 seconds to 0.48 seconds. Choices, filling, Proceed and other…
- **Checked Work Demand entry with fewer repeated reads:** the browser, sign-in and area are checked together. Before each Proceed, the Job Card, worker, area, dates and days must still match the request. Progress shows **Waiting to start** and **Entering now** separately from completed, failed and uncertain entries.
- **Start Work Demand sooner:** Job Card and worker details, then eKYC (electronic identity check), ABPS (Aadhaar-based Payment System), Aadhaar Seeding and Aadhaar Authentication download first, from one report. If all four are Yes for the same active worker, the app shows **Aadhaar Availability: Yes** for now and…
- **Less waiting work for the selected area:** when the selected Village&#x27;s workers are saved, its worker checks start at once instead of waiting up to one minute. While those checks are waiting, the repeated fallback check slows down to 1, 2, 4, 8 and 16 seconds, then every 30 seconds. A newly saved worker answer or…
- **Fewer &quot;public report page took too long&quot; failures:** when a public download has to pause, the app now saves a pause instead of waiting 18 seconds and recording a failed download with a retry delay. Live portal failure rates after this change have not been measured.
- **Deliberate pauses are kept:** updating worker checks from Work Demand no longer ends a download pause. The selected area still downloads; other areas stay paused until **Resume downloads**, **Try again** or **Recheck data**.

These pictures were refreshed from the source used for this publication.

## How the guide stays current

Before publication, the release process takes new pictures of the Android and desktop screens using separate fictional records. It refreshes the introduction and guides, checks all 15 pictures and their links, and saves the picture details in [SCREENSHOTS.json](SCREENSHOTS.json). A changed app or missing picture stops publication until the gallery is refreshed.

The Android screen checks do not prove that the app was installed on a phone. Example area checks do not prove live use in every State. Real office records, passwords, Security Codes and login codes are excluded from the gallery. App building files stay on the owner's computer.
