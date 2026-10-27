# Latest changes

[Home](../README.md) · [User guide](USER_GUIDE.md) · [Features](FEATURES.md)

**Screens captured for desktop 1.4.18 and Android 1.4.18 · 2026-10-27.**

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

These pictures were refreshed from the source used for this publication.

## How the guide stays current

Before publication, the release process takes new pictures of the Android and desktop screens using separate fictional records. It refreshes the introduction and guides, checks all 15 pictures and their links, and saves the picture details in [SCREENSHOTS.json](SCREENSHOTS.json). A changed app or missing picture stops publication until the gallery is refreshed.

The Android screen checks do not prove that the app was installed on a phone. Example area checks do not prove live use in every State. Real office records, passwords, Security Codes and login codes are excluded from the gallery. App building files stay on the owner's computer.
