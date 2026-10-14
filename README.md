# Worker Demand apps — 1.2.0

First public test release. The apps have passed software checks. A real Secretary phone sending a request to the assigned DEO still needs an office check before regular use.

## Download

| App | Download |
| --- | --- |
| Windows 10 or 11, 64-bit | [Install the DEO desktop app](https://github.com/Changtey/Worker-Demand-releases/releases/download/v1.2.0/VBGRAMG-DEO-Assistant-1.2.0-Setup.exe) |
| Most newer Android phones | [Install Worker Demand for Android 64-bit](https://github.com/Changtey/Worker-Demand-releases/releases/download/v1.2.0/Worker-Demand-1.2.0-Android64.apk) |
| Older Android 32-bit phones | [Install Worker Demand for Android 32-bit](https://github.com/Changtey/Worker-Demand-releases/releases/download/v1.2.0/Worker-Demand-1.2.0-Android32.apk) |
| Unsure which Android phone | [Install Worker Demand for both phone types](https://github.com/Changtey/Worker-Demand-releases/releases/download/v1.2.0/Worker-Demand-1.2.0.apk) |

Android 8 or newer is required. The phone needs internet to send requests and receive changes. It can use mobile data.

## First installation

Download the matching file and open it. Follow the device's installation steps. Keep an earlier Android installation and update it using the same phone file type. Do not uninstall the app or clear its storage to update it.

The Windows installer has no verified Windows publisher certificate yet, so Windows may show an unknown-publisher notice. Stop if you are unsure about the download. Installation and device permission decisions remain yours.

The Windows app includes its required runtime and document readers. You do not need to install the development tools. Worker records and login details are kept outside the installed app. On the creator's existing PC the app uses the previously saved record location; new computers start with an empty local record store.

## App updates

Both apps check this project's update notice when they open. A newer version shows **Update now** and **Update later**. Update later opens the current app and does not download or install an update. A missed or unavailable update check also lets you continue.

Update now downloads the matching installation file and checks it before opening the device's installation page. You finish the installation yourself. Saved records, account details and phone drafts are kept. Android may ask you to allow app updates from Worker Demand in its settings. The phone also has **Check app updates** on its home screen.

This first release contains the update checker. Earlier versions must be updated to 1.2.0 manually once. Future notices work only after a newer release and its checked files have been published.

## Set up and send a request

1. The DEO opens the desktop app and signs in with Google. Additional DEO Google accounts currently need to be added to the sign-in test-user list before they can use it.
2. In **Data Entry**, choose the current Panchayat and Financial Year, download every offered Village and use **Verify filter data** to check workers through the official signed-in desktop browser.
3. In **Work Demand Requests**, use **Share Panchayat workers**, then **Secretary login codes** to create a code for the assigned Secretary. Share that code privately.
4. The Secretary enters the code in Worker Demand. They see only their assigned Panchayat's shared workers, with Village, Job Card, Member number, Active, eKYC, ABPS and **Aadhar Availability** answers. Missing or old checks show **Needs checking**.
5. The Secretary chooses workers, enters the work period, reviews the names and chooses **Submit request**. **Pending review** means the online service has confirmed receipt. An offline waiting copy has not reached the DEO yet.
6. The assigned DEO receives and reviews the request on the desktop. Every included Village must be reviewed before approval. The phone receives the changed status when connected.

Google Forms is not used. Keep official portal login details on the office PC. Final official **Submit** stays under the DEO's control. Check **View Demand Details** and save the official result before marking a request Completed.

## Before regular office use

Check one agreed request on the intended Secretary phone and DEO computer. Confirm the assigned worker list, the four worker checks, desktop receipt and a reviewed status returning to the phone. Keep final government submission separate from that check.

Two earlier desktop checks for example drafts and uploaded Village sheets are still failing. They are separate from the Android and update checks. Keep this first release for office checks until those issues and the real phone check are resolved.

The GitHub repository contains installation files, instructions and update information. The project source files stay on the creator's PC. The downloads do not contain the creator's worker database, private passwords, Secretary codes or signing keys.

Copyright 2026 Changtey W Momin. All rights reserved for the original app code and design. Included third-party components keep their own licences. This app is not an official government app.
