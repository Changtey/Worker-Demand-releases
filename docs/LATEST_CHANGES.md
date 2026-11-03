# Latest changes

[Home](../README.md) · [User guide](USER_GUIDE.md) · [Features](FEATURES.md)

**Screens captured for desktop 1.4.29 and Android 1.4.28 · 2026-11-03.**

## Published apps

Published downloads: desktop **1.4.29**, Android **1.4.28**.

| Device | Download |
| --- | --- |
| Windows 64-bit | [Download 1.4.29](https://github.com/Changtey/Worker-Demand-releases/releases/download/v1.4.29/VBGRAMG-DEO-Assistant-1.4.29-Setup.exe) |
| Linux Debian / Ubuntu | [Download 1.4.29](https://github.com/Changtey/Worker-Demand-releases/releases/download/v1.4.29/VBGRAMG-DEO-Assistant-1.4.29-Linux-x64.deb) |
| Linux AppImage | [Download 1.4.29](https://github.com/Changtey/Worker-Demand-releases/releases/download/v1.4.29/VBGRAMG-DEO-Assistant-1.4.29-Linux-x64.AppImage) |
| Android APK | [Download 1.4.28](https://github.com/Changtey/Worker-Demand-releases/releases/download/v1.4.28/Worker-Demand-1.4.28.apk) |

[Release notes and checksums](https://github.com/Changtey/Worker-Demand-releases/releases/tag/v1.4.29).

The linked release notes describe what was built, checked and published. A current source picture does not update an installed app or replace an installation file.

## Changes in this release

**2 November 2026 — Balance held by unconfirmed Work Demand runs released**

Work Demand runs whose result was never confirmed no longer hold your Balance. All Balance they set aside is free again, and nobody was charged for them. The online service can now charge a run that stops part-way only for the workers whose demand was saved and checked, at 1 for every 20 of them. The app uses this from its next update. The change was checked online without starting a real run or making a payment. No installation file was replaced.

**2 November 2026 — Work Demand entry now costs half**

A successful Work Demand entry now uses 1 from your Balance for every 20 selected workers. A part of 20 counts as a full 20: 1–20 workers use 1, 21–40 use 2 and 100 use 5. Before, it was 1 for every 10 workers. ₹1 still adds 1 Balance, and Muster Roll Village reports still use 2 for each saved Village.

This online change applies to every app copy at once. Desktop 1.4.27 still says "every 10 workers" on its Balance page until the next app update, but it is charged the new, lower price. A run that already set aside Balance keeps its earlier price. The change was checked online without starting a run or making a payment. No installation file was replaced.

**30 October 2026 — Saved day totals are information only**

The online family day-total limit has been removed. Days worked and days remaining must not stop a Work Demand or reduce the requested days. Checks with fictional records confirmed approval and entry preparation, unchanged requested days and protection against repeated worker periods. Every fictional online test change was rolled back. The official portal was not contacted.

The separate desktop 1.4.23 correction also removes the old local approval check. The Android correction keeps requested days above earlier saved totals. These installation files are prepared and checked; installation and public app publication remain separate steps. Existing worker identity, required answers, dates and official portal checks remain in place.

**27 October 2026 — Remove your own assigned areas enabled online**

On desktop, open **Android access → My areas → Change my Android access**. Select your assigned Panchayats or Villages, choose **Remove selected areas**, check the names and choose **Remove areas**. You can remove only your own assignments. Other users' areas are protected. Saved worker records, requests, completed Work Demands, Muster Rolls, Secretary accounts, login codes and history are kept.

The missing online step is now enabled. Checks used temporary fictional areas in the online database and undid every test change. The current signed-in connection was also checked with an empty selection. No real areas were removed during these checks. This service update works with the existing removal screen; no new installation is needed.

**26 October 2026 — Balance charging enabled online**

Work Demand charging was turned on after the app publication. Browser automation now needs 1 available Balance before entry starts. It reserves that amount and deducts it after the saved Work Demand is confirmed. Zero available Balance blocks new runs and unfunded retries, including older unfinished free requests. Recharge opens with the current work kept. Failed runs release their reservation. Repeated starts and completion replies do not charge twice. Completed free work keeps its original price.

This online service update applies to the existing app downloads. The recharge package stays ₹50 for 50 Balance. No installation file was replaced. The earlier release notes describe the charging setting at the time they were written.

**Published 1.4.29**

- **Totals for the selected workers only.** Under the worker list, in both **Create demand** and **Received requests**, the totals now count only the workers you selected: **Job Cards selected**, **Members selected** and **Days requested**. **Days worked** and **Workdays left** show the shared totals of the selected…
- **Serial numbers.** Every Job Card heading and every worker in the list has a serial number, such as **1. Job Card · …** and **1. Worker name**. The numbers continue on the next page.

These pictures were refreshed from the source used for this publication.

## How the guide stays current

Before publication, the release process takes new pictures of the Android and desktop screens using separate fictional records. It refreshes the introduction and guides, checks all 15 pictures and their links, and saves the picture details in [SCREENSHOTS.json](SCREENSHOTS.json). A changed app or missing picture stops publication until the gallery is refreshed.

The Android screen checks do not prove that the app was installed on a phone. Example area checks do not prove live use in every State. Real office records, passwords, Security Codes and login codes are excluded from the gallery. App building files stay on the owner's computer.
