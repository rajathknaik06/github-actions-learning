# Student Placement Portal — GitHub Actions CI/CD

A beginner-friendly static website project for practicing GitHub Actions.

## Repository structure

```text
github-actions-learning/
├── website/
│   ├── index.html
│   ├── style.css
│   └── script.js
├── .github/
│   └── workflows/
│       └── final-cicd.yml
└── README.md
```

## What the workflow does

1. **Validate** — checks HTML, JavaScript syntax, and Prettier formatting.
2. **Build** — copies the website into `dist/` and uploads it as an artifact.
3. **Development** — downloads and verifies the artifact (deployment simulation).
4. **Production** — downloads and verifies the artifact (deployment simulation).

The deployment jobs are simulations only. They do not publish the site to Azure or another hosting provider.

## Run it on GitHub

1. Create a GitHub repository named `github-actions-learning`.
2. Extract this ZIP file.
3. Open a terminal in the extracted `github-actions-learning` folder.
4. Initialize Git and push the project:

   ```bash
   git init
   git branch -M main
   git add .
   git commit -m "Add Student Placement Portal CI/CD project"
   git remote add origin https://github.com/YOUR-USERNAME/github-actions-learning.git
   git push -u origin main
   ```

5. Open the repository's **Actions** tab and inspect the workflow run.

Replace `YOUR-USERNAME` with your GitHub username.

## Optional GitHub Environments

In **Settings → Environments**, create environments named `development` and `production` to match the workflow. You can add protection rules where your GitHub plan and repository visibility support them.

## Local checks

Run these commands from the repository root if Node.js is installed:

```bash
npx --yes html-validate@10 website/index.html
node --check website/script.js
npx --yes prettier@3 --check website/index.html website/style.css website/script.js
```

If Prettier reports formatting differences, run:

```bash
npx prettier@3 --write website/index.html website/style.css website/script.js
```
