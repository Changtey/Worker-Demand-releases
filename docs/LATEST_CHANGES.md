# Latest changes

[Home](../README.md) · [User guide](USER_GUIDE.md) · [Features](FEATURES.md)

**Screens captured for desktop 1.4.17 and Android 1.4.17 · 2026-10-27.**

## Published apps

Published downloads: desktop **1.4.17**, Android **1.4.17**.

| Device | Download |
| --- | --- |
| Windows 64-bit | [Download 1.4.17](https://github.com/Changtey/Worker-Demand-releases/releases/download/v1.4.17/VBGRAMG-DEO-Assistant-1.4.17-Setup.exe) |
| Linux Debian / Ubuntu | [Download 1.4.17](https://github.com/Changtey/Worker-Demand-releases/releases/download/v1.4.17/VBGRAMG-DEO-Assistant-1.4.17-Linux-x64.deb) |
| Linux AppImage | [Download 1.4.17](https://github.com/Changtey/Worker-Demand-releases/releases/download/v1.4.17/VBGRAMG-DEO-Assistant-1.4.17-Linux-x64.AppImage) |
| Android APK | [Download 1.4.17](https://github.com/Changtey/Worker-Demand-releases/releases/download/v1.4.17/Worker-Demand-1.4.17.apk) |

[Release notes and checksums](https://github.com/Changtey/Worker-Demand-releases/releases/tag/v1.4.17).

The linked release notes describe what was built, checked and published. A current source picture does not update an installed app or replace an installation file.

## Changes in this release

**26 October 2026 — Balance charging enabled online**

Work Demand charging was turned on after the app publication. Browser automation now needs 1 available Balance before entry starts. It reserves that amount and deducts it after the saved Work Demand is confirmed. Zero available Balance blocks new runs and unfunded retries, including older unfinished free requests. Recharge opens with the current work kept. Failed runs release their reservation. Repeated starts and completion replies do not charge twice. Completed free work keeps its original price.

This online service update applies to the existing app downloads. The recharge package stays ₹50 for 50 Balance. No installation file was replaced. The earlier release notes describe the charging setting at the time they were written.

**Published 1.4.17**

- Desktop always opens **Browser** first, including when an older saved choice named another starting screen.
- On first setup, the user selects their own State, Financial Year, District and Block, saves their default login page, and signs in to VBGRAMG personally. The login area is kept under that app account and is available in **Settings → Portal login**. Password storage still requires the existing Browser Save or Update…
- The user chooses the Panchayats or Villages assigned to their data entry work and selects **Save areas and download**. Choices are kept separately for each app account on the computer. Saving a choice does not grant government portal permissions.
- Other tools stay unavailable until the first required download reaches **100%** and the user chooses **Continue to Browser**. Checks cover the selected areas&#x27; Job Cards, workers, work records, days worked, shared Job Card family days left, eKYC, ABPS, Aadhaar availability and Muster Roll source reports. Partial…
- First setup is kept after reopening. **Settings → Portal login → Change my work areas** allows later additions and removals while keeping at least one assigned work area. Existing saved records are retained.
- While the desktop app is open and connected, the user&#x27;s saved areas continue updating daily in the background. Workdays and Muster Roll source reports keep updating after first setup. Finished first setup is not repeated merely because a later daily update is due.

These pictures were refreshed from the source used for this publication.

## How the guide stays current

Before publication, the release process takes new pictures of the Android and desktop screens using separate fictional records. It refreshes the introduction and guides, checks all 15 pictures and their links, and saves the picture details in [SCREENSHOTS.json](SCREENSHOTS.json). A changed app or missing picture stops publication until the gallery is refreshed.

The Android screen checks do not prove that the app was installed on a phone. Example area checks do not prove live use in every State. Real office records, passwords, Security Codes and login codes are excluded from the gallery. App building files stay on the owner's computer.
