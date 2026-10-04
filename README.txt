BUILT BY BILAL — WEBSITE FOLDER
================================

WHAT IS HERE
  index.html          the website (all pages open from this one file)
  css/style.css       design. The colours are in the THEME block at the very top.
  js/data.js          brands, skills, tools, phone number and email
  js/app.js           pages, animations and the contact form
  assets/logo/        YOUR logo: logo.jpg (original, used large), logo-mark.jpg (same artwork trimmed for the header), favicon.png
  assets/brands/      one logo per brand. All files are dummies for now.
  LOGO-NAMES.txt      the exact file name each brand logo must have
  vercel.json         Vercel settings (nothing to change)

REPLACING THE LOGOS
  1. Download each brand's logo.
  2. Rename it to the name in LOGO-NAMES.txt (for example aggc.png).
  3. Drop it into assets/brands/ and overwrite the dummy file.
  4. Each brand page picks its colour from its logo automatically.
  Your own logo is already in assets/logo/. To change it, replace logo.jpg, logo-mark.jpg and favicon.png.

CHANGING TEXT
  Skills, tools, brand names, phone number and email are in js/data.js.

GOING LIVE ON VERCEL (the site is plain HTML, no build step)
  Option A, GitHub: unzip this folder, upload it to a GitHub repository, then in Vercel choose
          Add New > Project > import the repository > Deploy.
  Option B, command line: unzip, open a terminal inside the folder, run   npx vercel   and follow the prompts.
          Run   npx vercel --prod   to publish the final version.
  Vercel's website does not accept a zip file directly, so unzip first.
  To update later: replace files, then push to GitHub (Option A) or run npx vercel --prod again (Option B).

TOOL PAGE
  The #/tool page links to the Business Idea Validation Kit. The link is TOOL_URL in js/data.js.
  Screens used on that page: assets/tool-gate.jpg, tool-form.jpg, tool-report.jpg
