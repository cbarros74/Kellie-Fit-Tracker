KELLIE WORKOUT PLAN — V3.1 VIDEO FIX

THE SIMPLEST UPDATE TO AN EXISTING GITHUB PAGES APP
1. In your OLD app, go to Progress > Export JSON backup and save it in iPhone Files.
2. In Safari open github.com and go to your existing Kellie-Workout-Plan repository.
3. Replace the ROOT index.html with this new index.html. It MUST be named exactly index.html — not Kellie_Workout_Plan_V3_index.html or index(1).html.
4. Replace sw.js too (new cache version). You do not need to change the website address or create a new GitHub repo.
5. Commit your changes to the main branch, then open the existing GitHub Pages website in Safari. Reload the tab (or open website with ?version=3.1 to bypass an old page).
6. The Home page should display a big pink OPEN ALL EXERCISE VIDEOS button and the footer should say Version 3.1 · Video update.
7. Open your original installed Home Screen icon. If it still shows the old page, fully close the app and reopen, or visit Safari URL and use Add to Home Screen if necessary.
8. Tap Strength A or Strength B to see a large magenta WATCH VIDEO button underneath each exercise description, or tap ▶ Videos in the navigation bar.

IF MAKING A NEW SITE: Create a public GitHub repository, upload the five files index.html, sw.js, manifest.webmanifest, icon-192.png, icon-512.png (not the ZIP), then Settings > Pages > Deploy from a branch > main > /(root) > Save. Open URL in Safari > Share > Add to Home Screen.

Videos require an internet connection. Nine exercises link directly to a selected YouTube demonstration. Others use a YouTube results page so you can pick a matching demo. You can change any link in Routines > Edit exercise, sets and video link.

HISTORY: Retains localStorage key magentaFitJournal_v1, so changing the code on the same URL/device should keep local history; export a JSON backup as protection. All weeks and routine phases are supported within normal device storage limits. GitHub does NOT store your workout data or synchronize it between devices.
