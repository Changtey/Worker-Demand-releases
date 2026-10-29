# Latest changes

[Home](../README.md) · [User guide](USER_GUIDE.md) · [Features](FEATURES.md)

**Screens captured for desktop 1.4.21 and Android 1.4.21 · 2026-10-29.**

## Published apps

Published downloads: desktop **1.4.21**, Android **1.4.21**.

| Device | Download |
| --- | --- |
| Windows 64-bit | [Download 1.4.21](https://github.com/Changtey/Worker-Demand-releases/releases/download/v1.4.21/VBGRAMG-DEO-Assistant-1.4.21-Setup.exe) |
| Linux Debian / Ubuntu | [Download 1.4.21](https://github.com/Changtey/Worker-Demand-releases/releases/download/v1.4.21/VBGRAMG-DEO-Assistant-1.4.21-Linux-x64.deb) |
| Linux AppImage | [Download 1.4.21](https://github.com/Changtey/Worker-Demand-releases/releases/download/v1.4.21/VBGRAMG-DEO-Assistant-1.4.21-Linux-x64.AppImage) |
| Android APK | [Download 1.4.21](https://github.com/Changtey/Worker-Demand-releases/releases/download/v1.4.21/Worker-Demand-1.4.21.apk) |

[Release notes and checksums](https://github.com/Changtey/Worker-Demand-releases/releases/tag/v1.4.21).

The linked release notes describe what was built, checked and published. A current source picture does not update an installed app or replace an installation file.

## Changes in this release

**27 October 2026 — Remove your own assigned areas enabled online**

On desktop, open **Android access → My areas → Change my Android access**. Select your assigned Panchayats or Villages, choose **Remove selected areas**, check the names and choose **Remove areas**. You can remove only your own assignments. Other users' areas are protected. Saved worker records, requests, completed Work Demands, Muster Rolls, Secretary accounts, login codes and history are kept.

The missing online step is now enabled. Checks used temporary fictional areas in the online database and undid every test change. The current signed-in connection was also checked with an empty selection. No real areas were removed during these checks. This service update works with the existing removal screen; no new installation is needed.

**26 October 2026 — Balance charging enabled online**

Work Demand charging was turned on after the app publication. Browser automation now needs 1 available Balance before entry starts. It reserves that amount and deducts it after the saved Work Demand is confirmed. Zero available Balance blocks new runs and unfunded retries, including older unfinished free requests. Recharge opens with the current work kept. Failed runs release their reservation. Repeated starts and completion replies do not charge twice. Completed free work keeps its original price.

This online service update applies to the existing app downloads. The recharge package stays ₹50 for 50 Balance. No installation file was replaced. The earlier release notes describe the charging setting at the time they were written.

**Published 1.4.21**

- Required worker records come first. The app reads worker identities, eKYC, ABPS and Aadhaar Availability before extra reports. A work report needed for the current demand keeps its required checks.
- Download requests for the same account, selected area, Financial Year and records share work. The selected Village goes first, followed by its siblings; the selected Panchayat stays ahead of other Panchayats.
- Checked households are saved in small batches and can appear before the whole Village finishes. Pauses, failures and restarts keep completed records. An unfinished download stays incomplete.
- Public readers reuse already checked Job Card details and area choices. Extra reports wait until the app has been idle for at least 15 seconds and yield when activity resumes. Deliberate pauses and portal entry protection remain in place.
- Job Card lists and totals load together. Search covers the full saved list before choosing the display page. Background updates keep search, open households, selected workers, entered days and dates.
- Required worker checks remain mandatory. Missing answers never mean eligible. Days worked and days left remain information and do not change entered days. Work selection stays optional; a chosen work keeps its checks.

These pictures were refreshed from the source used for this publication.

## How the guide stays current

Before publication, the release process takes new pictures of the Android and desktop screens using separate fictional records. It refreshes the introduction and guides, checks all 15 pictures and their links, and saves the picture details in [SCREENSHOTS.json](SCREENSHOTS.json). A changed app or missing picture stops publication until the gallery is refreshed.

The Android screen checks do not prove that the app was installed on a phone. Example area checks do not prove live use in every State. Real office records, passwords, Security Codes and login codes are excluded from the gallery. App building files stay on the owner's computer.
