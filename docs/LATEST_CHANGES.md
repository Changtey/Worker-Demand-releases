# Latest changes

[Home](../README.md) · [User guide](USER_GUIDE.md) · [Features](FEATURES.md)

**Screens captured for desktop 1.4.20 and Android 1.4.20 · 2026-10-28.**

## Published apps

Published downloads: desktop **1.4.20**, Android **1.4.20**.

| Device | Download |
| --- | --- |
| Windows 64-bit | [Download 1.4.20](https://github.com/Changtey/Worker-Demand-releases/releases/download/v1.4.20/VBGRAMG-DEO-Assistant-1.4.20-Setup.exe) |
| Linux Debian / Ubuntu | [Download 1.4.20](https://github.com/Changtey/Worker-Demand-releases/releases/download/v1.4.20/VBGRAMG-DEO-Assistant-1.4.20-Linux-x64.deb) |
| Linux AppImage | [Download 1.4.20](https://github.com/Changtey/Worker-Demand-releases/releases/download/v1.4.20/VBGRAMG-DEO-Assistant-1.4.20-Linux-x64.AppImage) |
| Android APK | [Download 1.4.20](https://github.com/Changtey/Worker-Demand-releases/releases/download/v1.4.20/Worker-Demand-1.4.20.apk) |

[Release notes and checksums](https://github.com/Changtey/Worker-Demand-releases/releases/tag/v1.4.20).

The linked release notes describe what was built, checked and published. A current source picture does not update an installed app or replace an installation file.

## Changes in this release

**27 October 2026 — Remove your own assigned areas enabled online**

On desktop, open **Android access → My areas → Change my Android access**. Select your assigned Panchayats or Villages, choose **Remove selected areas**, check the names and choose **Remove areas**. You can remove only your own assignments. Other users' areas are protected. Saved worker records, requests, completed Work Demands, Muster Rolls, Secretary accounts, login codes and history are kept.

The missing online step is now enabled. Checks used temporary fictional areas in the online database and undid every test change. The current signed-in connection was also checked with an empty selection. No real areas were removed during these checks. This service update works with the existing removal screen; no new installation is needed.

**26 October 2026 — Balance charging enabled online**

Work Demand charging was turned on after the app publication. Browser automation now needs 1 available Balance before entry starts. It reserves that amount and deducts it after the saved Work Demand is confirmed. Zero available Balance blocks new runs and unfunded retries, including older unfinished free requests. Recharge opens with the current work kept. Failed runs release their reservation. Repeated starts and completion replies do not charge twice. Completed free work keeps its original price.

This online service update applies to the existing app downloads. The recharge package stays ₹50 for 50 Balance. No installation file was replaced. The earlier release notes describe the charging setting at the time they were written.

**Published 1.4.20**

- Whatever Panchayat or Village you are currently working on gets first priority for downloads and worker checks, even outside the areas saved during setup. A selected Village comes first. A whole Panchayat puts its Villages before other Panchayats.
- Changing area changes the next read while keeping completed records. The reader can pick up the newly selected area&#x27;s saved workers during an existing download. Setup areas stay saved for routine background work.
- When saved choices finish loading, worker checks wait for the review screen to show the restored area. An older Village cannot take the first download turn during that change.
- This priority follows the screen being used: Create demand, Received requests, Job Cards, Reports and area choices. Hidden screens cannot replace it. Opening Browser keeps the area from the screen just used.
- Permitted received requests can prepare their exact Village outside the routine setup areas. The portal account&#x27;s offered locations and Financial Year still control private access. Removed request permissions stop request-specific background priorities.
- Each running app copy keeps its own current request progress message. A side-browser copy without a portal connection cannot replace the desktop reader&#x27;s message with an incorrect sign-in request.

These pictures were refreshed from the source used for this publication.

## How the guide stays current

Before publication, the release process takes new pictures of the Android and desktop screens using separate fictional records. It refreshes the introduction and guides, checks all 15 pictures and their links, and saves the picture details in [SCREENSHOTS.json](SCREENSHOTS.json). A changed app or missing picture stops publication until the gallery is refreshed.

The Android screen checks do not prove that the app was installed on a phone. Example area checks do not prove live use in every State. Real office records, passwords, Security Codes and login codes are excluded from the gallery. App building files stay on the owner's computer.
