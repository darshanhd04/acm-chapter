# ACM SIT63 Website

Welcome to the ACM SIT63 website repository! 

## How to Contribute

If you are a contributor who doesn't have direct write access to this repository, please follow the standard "Fork-and-Pull" workflow to contribute:

### 1. Fork the Repository
Click the **Fork** button at the top right of the repository page (`acm-sit63/acm-website`) to create a copy in your own GitHub account.

### 2. Clone your Fork
Clone the forked repository to your local machine:
```bash
git clone https://github.com/<your-username>/acm-website.git
cd acm-website
```

### 3. Add Upstream Remote
To keep your fork up to date with the original repository, add the original repository as an upstream remote:
```bash
git remote add upstream https://github.com/acm-sit63/acm-website.git
```

### 4. Install Dependencies
Make sure you have Node.js installed, then install the project dependencies:
```bash
npm install
```

### 5. Create a Branch
Before making any changes, create a new branch for your feature, fix, or update:
```bash
git checkout -b feature/your-feature-name
```
*(Use a descriptive name for your branch, e.g., `fix/header-styling` or `feature/add-team-member`)*

### 6. Make Changes & Run Locally
Start the development server to test your changes locally:
```bash
npm run dev
```
Make sure everything works and looks good!

### 7. Commit and Push
Once you are happy with your changes, add and commit them with a descriptive message, and push them to **your fork**:
```bash
git add .
git commit -m "Update: concise description of what you changed"
git push origin feature/your-feature-name
```

### 8. Create a Pull Request (PR)
1. Go to your fork on GitHub (`https://github.com/<your-username>/acm-website`).
2. You should see a green button that says **"Compare & pull request"**. Click it.
3. Ensure the base repository is `acm-sit63/acm-website` and the base branch is `main`.
4. Add a descriptive title and detailed description to your PR.
5. Click **"Create pull request"**.

An administrator or maintainer will review your code. Once approved, it will be merged into the main repository!

## Tech Stack
- React
- Vite
- Custom CSS
