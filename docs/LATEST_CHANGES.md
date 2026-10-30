# Latest changes

[Home](../README.md) · [User guide](USER_GUIDE.md) · [Features](FEATURES.md)

**Screens captured for desktop 1.4.22 and Android 1.4.22 · 2026-10-30.**

## Published apps

Published downloads: desktop **1.4.22**, Android **1.4.22**.

| Device | Download |
| --- | --- |
| Windows 64-bit | [Download 1.4.22](https://github.com/Changtey/Worker-Demand-releases/releases/download/v1.4.22/VBGRAMG-DEO-Assistant-1.4.22-Setup.exe) |
| Linux Debian / Ubuntu | [Download 1.4.22](https://github.com/Changtey/Worker-Demand-releases/releases/download/v1.4.22/VBGRAMG-DEO-Assistant-1.4.22-Linux-x64.deb) |
| Linux AppImage | [Download 1.4.22](https://github.com/Changtey/Worker-Demand-releases/releases/download/v1.4.22/VBGRAMG-DEO-Assistant-1.4.22-Linux-x64.AppImage) |
| Android APK | [Download 1.4.22](https://github.com/Changtey/Worker-Demand-releases/releases/download/v1.4.22/Worker-Demand-1.4.22.apk) |

[Release notes and checksums](https://github.com/Changtey/Worker-Demand-releases/releases/tag/v1.4.22).

The linked release notes describe what was built, checked and published. A current source picture does not update an installed app or replace an installation file.

## Changes in this release

**27 October 2026 — Remove your own assigned areas enabled online**

On desktop, open **Android access → My areas → Change my Android access**. Select your assigned Panchayats or Villages, choose **Remove selected areas**, check the names and choose **Remove areas**. You can remove only your own assignments. Other users' areas are protected. Saved worker records, requests, completed Work Demands, Muster Rolls, Secretary accounts, login codes and history are kept.

The missing online step is now enabled. Checks used temporary fictional areas in the online database and undid every test change. The current signed-in connection was also checked with an empty selection. No real areas were removed during these checks. This service update works with the existing removal screen; no new installation is needed.

**26 October 2026 — Balance charging enabled online**

Work Demand charging was turned on after the app publication. Browser automation now needs 1 available Balance before entry starts. It reserves that amount and deducts it after the saved Work Demand is confirmed. Zero available Balance blocks new runs and unfunded retries, including older unfinished free requests. Recharge opens with the current work kept. Failed runs release their reservation. Repeated starts and completion replies do not charge twice. Completed free work keeps its original price.

This online service update applies to the existing app downloads. The recharge package stays ₹50 for 50 Balance. No installation file was replaced. The earlier release notes describe the charging setting at the time they were written.

**Published 1.4.22**

- **Preview, save PDF and print before sending.** After selecting workers and entering their days and dates, choose **Preview demand** in **Review and send**. Review every selected member, full Job Card, individual dates and total requested days. Save an A4 PDF or open the print window. Copies say **DRAFT - NOT SENT…
- **Basic workers appear sooner.** Matching Job Card numbers and their family members are saved from the complete registration and issued-card lists before household detail requests. Saves use groups of up to 16 households. Existing eKYC, ABPS and Aadhaar Availability reads follow; extra reports keep their later…
- **Clear registration tags.** Active, Inactive and Deleted have distinct labels. An older confirmed answer stays visible as Saved with Update needed. Daily reads and automatic retries keep their existing schedule. Missing information stays unknown. Deleted records stay saved and searchable; selected filters still…
- **Clearer worker filters and sorting.** Visible missing-answer counts and overlapping-match explanations make filter results easier to understand. Sort by names, Job Card numbers, active first or inactive first while keeping entered days, dates and selections.
- **Smoother demand controls.** The area panel and worker filters stay expanded. Search, Add workers and list controls sit together above the worker list. Optional day warnings fit below their numbers. The two extra messages requested for removal have been removed.
- **Calendar icons stay in their boxes.** Hovering a date button keeps it aligned inside Application Date, Start Date and End Date. Date typing and the calendar controls are retained.

These pictures were refreshed from the source used for this publication.

## How the guide stays current

Before publication, the release process takes new pictures of the Android and desktop screens using separate fictional records. It refreshes the introduction and guides, checks all 15 pictures and their links, and saves the picture details in [SCREENSHOTS.json](SCREENSHOTS.json). A changed app or missing picture stops publication until the gallery is refreshed.

The Android screen checks do not prove that the app was installed on a phone. Example area checks do not prove live use in every State. Real office records, passwords, Security Codes and login codes are excluded from the gallery. App building files stay on the owner's computer.
