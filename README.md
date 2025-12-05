# Cypress Test Engineering Framework — saucedemo

**Showcase project for a Lead Test Engineer / Senior SDET**

This repository demonstrates a production-like Cypress framework testing the public demo site https://www.saucedemo.com. It contains examples of:

- E2E UI tests with Page Object Model (POM)
- Custom commands and fixtures
- Accessibility testing using `cypress-axe`
- Component testing scaffold (React)
- GitHub Actions CI pipeline
- Test strategy documentation

## Quick start

1. Clone this repo

```bash
git clone <your-repo-url>
cd cypress-saucedemo-portfolio
```

2. Install dependencies

```bash
npm install
```

3. Run tests locally (headed)

```bash
npx cypress open
```

4. Run all tests headless

```bash
npx cypress run
```
