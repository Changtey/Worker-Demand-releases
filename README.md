# Worker Demand apps — 1.2.1

Public test update. This version simplifies Panchayat setup and accepts short Secretary login codes. A real Secretary phone sending a request to the assigned DEO still needs an office check before regular use.

## Download

| App | Download |
| --- | --- |
| Windows 10 or 11, 64-bit | [Install the DEO desktop app](https://github.com/Changtey/Worker-Demand-releases/releases/download/v1.2.1/VBGRAMG-DEO-Assistant-1.2.1-Setup.exe) |
| Most newer Android phones | [Install Worker Demand for Android 64-bit](https://github.com/Changtey/Worker-Demand-releases/releases/download/v1.2.1/Worker-Demand-1.2.1-Android64.apk) |
| Older Android 32-bit phones | [Install Worker Demand for Android 32-bit](https://github.com/Changtey/Worker-Demand-releases/releases/download/v1.2.1/Worker-Demand-1.2.1-Android32.apk) |
| Unsure which Android phone | [Install Worker Demand for both phone types](https://github.com/Changtey/Worker-Demand-releases/releases/download/v1.2.1/Worker-Demand-1.2.1.apk) |

Android 8 or newer is required. The phone needs internet to send requests and receive changes. It can use mobile data.

## First installation

Download the matching file and open it. Follow the device's installation steps. Keep an earlier Android installation and update it using the same phone file type. Do not uninstall the app or clear its storage to update it.

The Windows installer has no verified Windows publisher certificate yet, so Windows may show an unknown-publisher notice. Stop if you are unsure about the download. Installation and device permission decisions remain yours.

The Windows app includes its required runtime and document readers. You do not need to install the development tools. Worker records and login details are kept outside the installed app. On the creator's existing PC the app uses the previously saved record location; new computers start with an empty local record store.

## App updates

Both apps check this project's update notice when they open. A newer version shows **Update now** and **Update later**. Update later opens the current app and does not download or install an update. A missed or unavailable update check also lets you continue.

Update now downloads the matching installation file and checks it before opening the device's installation page. You finish the installation yourself. Saved records, account details and phone drafts are kept. Android may ask you to allow app updates from Worker Demand in its settings. The phone also has **Check app updates** on its home screen.

Version 1.2.0 and newer can find this update when they open. Older versions need a manual installation once. Choose Update now and finish the device's installation steps, or choose Update later to keep using the current version.

## Set up and send a request

1. The DEO opens the desktop app and signs in with Google. Additional DEO Google accounts currently need to be added to the sign-in test-user list before they can use it.
2. In **Data Entry**, choose the current Panchayat and Financial Year, download every offered Village and use **Verify filter data** to check workers through the official signed-in desktop browser.
3. In **Work Demand Requests**, choose **Add Panchayat**, select its area and Financial Year, and enter a login code of 4 to 32 letters or numbers. Leave it empty to generate six digits. Choose **Save** to share its checked workers and save the code, then give the code privately to that Panchayat's Secretary. Each Panchayat uses a different code, including Panchayats in the same Block. Its Villages use that Panchayat's code.
4. Use **View code** to read a current code saved on this computer. Use **Edit** to change the same Panchayat's year or code, or disable its code. Earlier codes cannot be recovered unless a protected copy was saved; set one once to save it on this computer.
5. The Secretary enters the code in Worker Demand. They see only their assigned Panchayat's shared workers, with Village, Job Card, Member number, Active, eKYC, ABPS and **Aadhar Availability** answers. Missing or old checks show **Needs checking**.
6. The Secretary chooses workers, enters the work period, reviews the names and chooses **Submit request**. **Pending review** means the online service has confirmed receipt. An offline waiting copy has not reached the DEO yet.
7. The assigned DEO receives and reviews the request on the desktop. The Work Demand Requests menu shows the received count. Every included Village must be reviewed before approval. The phone receives the changed status when connected.

Google Forms is not used. Keep official portal login details on the office PC. Final official **Submit** stays under the DEO's control. Check **View Demand Details** and save the official result before marking a request Completed.

## Before regular office use

Check one agreed request on the intended Secretary phone and DEO computer. Confirm the assigned worker list, the four worker checks, desktop receipt and a reviewed status returning to the phone. Keep final government submission separate from that check.

Two earlier desktop checks for example drafts and uploaded Village sheets are still failing. They are separate from the Android and update checks. Keep this release for office checks until those issues and the real phone check are resolved.

The GitHub repository contains installation files, instructions and update information. The project source files stay on the creator's PC. The downloads do not contain the creator's worker database, private passwords, Secretary codes or signing keys.

Copyright 2026 Changtey W Momin. All rights reserved for the original app code and design. Included third-party components keep their own licences. This app is not an official government app.
