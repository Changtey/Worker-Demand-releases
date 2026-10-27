# Latest changes

[Home](../README.md) · [User guide](USER_GUIDE.md) · [Features](FEATURES.md)

**Screens captured for desktop 1.4.19 and Android 1.4.19 · 2026-10-27.**

## Published apps

Published downloads: desktop **1.4.19**, Android **1.4.19**.

| Device | Download |
| --- | --- |
| Windows 64-bit | [Download 1.4.19](https://github.com/Changtey/Worker-Demand-releases/releases/download/v1.4.19/VBGRAMG-DEO-Assistant-1.4.19-Setup.exe) |
| Linux Debian / Ubuntu | [Download 1.4.19](https://github.com/Changtey/Worker-Demand-releases/releases/download/v1.4.19/VBGRAMG-DEO-Assistant-1.4.19-Linux-x64.deb) |
| Linux AppImage | [Download 1.4.19](https://github.com/Changtey/Worker-Demand-releases/releases/download/v1.4.19/VBGRAMG-DEO-Assistant-1.4.19-Linux-x64.AppImage) |
| Android APK | [Download 1.4.19](https://github.com/Changtey/Worker-Demand-releases/releases/download/v1.4.19/Worker-Demand-1.4.19.apk) |

[Release notes and checksums](https://github.com/Changtey/Worker-Demand-releases/releases/tag/v1.4.19).

The linked release notes describe what was built, checked and published. A current source picture does not update an installed app or replace an installation file.

## Changes in this release

**26 October 2026 — Balance charging enabled online**

Work Demand charging was turned on after the app publication. Browser automation now needs 1 available Balance before entry starts. It reserves that amount and deducts it after the saved Work Demand is confirmed. Zero available Balance blocks new runs and unfunded retries, including older unfinished free requests. Recharge opens with the current work kept. Failed runs release their reservation. Repeated starts and completion replies do not charge twice. Completed free work keeps its original price.

This online service update applies to the existing app downloads. The recharge package stays ₹50 for 50 Balance. No installation file was replaced. The earlier release notes describe the charging setting at the time they were written.

**Published 1.4.19**

- During active signed-in worker downloads, the desktop app occasionally reads the same portal&#x27;s normal menu using its existing browser connection. The operator&#x27;s working form stays in place. Pauses, personal form entry, closing the app, account changes and sign-out stop these reads.
- Report pages get more time to finish. An expired report login is shown as a sign-in requirement. Completed records remain saved, and unfinished reads can resume after personal sign-in.
- Normal menu addresses under the portal&#x27;s Programme Officer folder can be remembered for reopening. Entry, submission, logout and temporary action addresses remain excluded.
- The latest setup screen shows progress counts, missing answers and report problems. Retry keeps completed records. Missing Aadhaar answers and different report totals cannot be marked complete merely to open the app.
- An older browsing choice outside the user&#x27;s saved work areas no longer blocks unfinished worker downloads for those areas. The browsing choice is kept. Worker download details show the report area and page count, and the separate report window remains available when a report needs attention.
- Some workers&#x27; Work Demand pages offer empty, editable Aadhaar Yes/No choices. These are saved as **Needs an Aadhaar answer on portal**, separately from Yes, No and an unread page. Their matching records count as checked, with a clear warning. Work Demand approval stays blocked for these workers, and their answers…

These pictures were refreshed from the source used for this publication.

## How the guide stays current

Before publication, the release process takes new pictures of the Android and desktop screens using separate fictional records. It refreshes the introduction and guides, checks all 15 pictures and their links, and saves the picture details in [SCREENSHOTS.json](SCREENSHOTS.json). A changed app or missing picture stops publication until the gallery is refreshed.

The Android screen checks do not prove that the app was installed on a phone. Example area checks do not prove live use in every State. Real office records, passwords, Security Codes and login codes are excluded from the gallery. App building files stay on the owner's computer.
