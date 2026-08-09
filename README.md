# Atrupathpublishing-workflow

Continuous integration, deployment, and automation workflows for Atru Path Publishing platform.

## Project Structure

```
.
├── src/           # Application source code
│   ├── config.js  # Environment variable configuration (dotenv)
│   └── index.js   # Entry point
├── scripts/       # Utility and automation scripts
│   └── hello.js   # Example script
├── tests/         # Jest test suite
│   └── config.test.js
├── .env.example   # Environment variable template
├── eslint.config.js
└── .github/
    └── workflows/
        └── ci.yml # GitHub Actions CI (lint + test)
```

## Setup

### Prerequisites
- [Node.js](https://nodejs.org/) v22+
- npm v10+

### Installation

```bash
git clone https://github.com/MrExcellent/Atrupathpublishing-workflow.git
cd Atrupathpublishing-workflow
npm install
```

### Environment Variables

Copy the example file and fill in your values:

```bash
cp .env.example .env
```

| Variable   | Default                           | Description         |
|------------|-----------------------------------|---------------------|
| `APP_NAME` | `Atru Path Publishing Workflow`   | Application name    |
| `NODE_ENV` | `development`                     | Runtime environment |
| `LOG_LEVEL`| `info`                            | Logging verbosity   |

## Scripts

| Command       | Description                        |
|---------------|------------------------------------|
| `npm start`   | Run the application                |
| `npm run lint`| Lint source files with ESLint      |
| `npm test`    | Run tests with Jest (with coverage)|

## CI

GitHub Actions runs on every push and pull request to `main`/`master`:

1. **Lint** — ESLint checks `src/`, `scripts/`, and `tests/`
2. **Test** — Jest runs the full test suite with coverage
