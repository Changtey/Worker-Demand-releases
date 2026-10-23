# Latest changes

[Home](../README.md) · [User guide](USER_GUIDE.md) · [Features](FEATURES.md)

**Current source preview · 2026-10-23.** Desktop source 1.4.12; Android source 1.4.11. The desktop pictures include newer changes that are not in the downloads above. The same Android version number does not prove that a source screen matches an older APK.

## Published apps

Published downloads: desktop **1.4.11**, Android **1.4.11**.

- [Windows 64-bit](https://github.com/Changtey/Worker-Demand-releases/releases/download/v1.4.11/VBGRAMG-DEO-Assistant-1.4.11-Setup.exe)
- [Linux Debian / Ubuntu](https://github.com/Changtey/Worker-Demand-releases/releases/download/v1.4.11/VBGRAMG-DEO-Assistant-1.4.11-Linux-x64.deb)
- [Linux AppImage](https://github.com/Changtey/Worker-Demand-releases/releases/download/v1.4.11/VBGRAMG-DEO-Assistant-1.4.11-Linux-x64.AppImage)
- [Android APK](https://github.com/Changtey/Worker-Demand-releases/releases/download/v1.4.11/Worker-Demand-1.4.11.apk)

[Release notes and checksums](https://github.com/Changtey/Worker-Demand-releases/releases/tag/v1.4.11).

The linked release notes describe what was built, checked and published. A current source picture does not update an installed app or replace an installation file.

## Changes in this release

**Published 1.4.11**

- Fixed an Electron startup error caused by a repeated CASTES line in an older packaged file. Rebuilt the app and its supporting program from one saved copy. Release builds now check that every desktop script opens correctly and matches that copy.
- Made Work Demand worker matching and approval checks clearer. If a worker cannot be selected, the screen explains what to check. Approval remains visible when the worker review cannot be opened.
- Made unknown worker days and unconfirmed shared Job Card days say “Not known” instead of showing only a dash.
- Improved Muster Roll Reports. Category filters, page groups, search, sorting and saved choices are easier to review before making a PDF. Excel, PDF and print copies remain available.
- Added searchable multi-select Panchayat and Village lists for Android access. Assigned areas can be selected and removed together, after one confirmation. Existing records are kept.
- Updated Secretary login-code checks. Codes can use letters, numbers and symbols, with spaces inside the code. Codes must be 4 to 32 characters, and the same code cannot belong to two DEOs.

**23 October 2026 source improvements**

- Two actions for received requests: **Check demand → Submit to VBGRAMG**.
- Compact worker filters and nearby search, list and send controls.
- Safer area matching for received Android requests, using the full area path.
- A new illustrated guide and 15 current app previews.

These desktop changes are shown as previews. No new installer is published by this documentation update.

## How the guide stays current

The local release process captures the current Android widgets and a fresh desktop screen build, using only fictional replies. It rebuilds the README and guides, checks all 15 pictures and their links, and records the source and picture checks in [SCREENSHOTS.json](SCREENSHOTS.json). Changed code or missing pictures stop publication until the gallery is refreshed.

The Android screen checks do not establish physical-device coverage. Fictional area checks do not establish live coverage of every State. Real office records, passwords, Security Codes and login codes are excluded from the gallery. Building files stay on the owner's computer.
