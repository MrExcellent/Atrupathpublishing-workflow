# Atru Path Publishing — Platform Workflow

Continuous integration, deployment, and automation workflows for the **Atru Path Publishing** platform.

---

## Folder Structure

```
.
├── .env.example          # Template for required environment variables
├── .github/
│   └── workflows/
│       └── ci.yml        # GitHub Actions CI/CD (lint + test)
├── scripts/
│   └── seed.js           # Data seeding / fixture helper script
├── src/
│   ├── config.js         # Environment variable validation (dotenv)
│   └── index.js          # Application entry point
└── tests/
    ├── config.test.js    # Tests for env validation
    └── index.test.js     # Tests for the entry-point module
```

---

## Prerequisites

| Tool | Minimum version |
|------|----------------|
| Node.js | 20.x |
| npm | 9.x |

---

## Local Setup

### 1 — Clone the repository

```bash
git clone https://github.com/MrExcellent/Atrupathpublishing-workflow.git
cd Atrupathpublishing-workflow
```

### 2 — Install dependencies

```bash
npm install
```

### 3 — Configure environment variables

```bash
cp .env.example .env
```

Open `.env` and fill in the values:

| Variable   | Description                         | Default           |
|------------|-------------------------------------|-------------------|
| `NODE_ENV` | Runtime environment                 | `development`     |
| `PORT`     | Port the application listens on     | `3000`            |
| `APP_NAME` | Display name for the platform       | `AtruPathPublishing` |

### 4 — Run the application

```bash
npm start
```

### 5 — Run the seed script

```bash
node scripts/seed.js
```

---

## Development

### Lint

```bash
npm run lint
```

### Test

```bash
npm test
```

Tests are located in `tests/` and use [Jest](https://jestjs.io/). A coverage report is generated in the `coverage/` directory after each run.

---

## CI/CD

GitHub Actions runs on every push to `main` (and on pull requests targeting `main`).
The workflow (`.github/workflows/ci.yml`) executes:

1. **Lint** — ESLint checks `src/`, `scripts/`, and `tests/`.
2. **Test** — Jest runs the full test suite across Node.js 20 and 22.

---

## Contributing

1. Fork the repository.
2. Create a feature branch: `git checkout -b feature/my-feature`.
3. Make your changes, then run `npm run lint && npm test` locally.
4. Open a pull request against `main`.

