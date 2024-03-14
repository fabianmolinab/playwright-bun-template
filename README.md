## Playwright Template with Bun.js
[Spanish version 🇪🇸](./docs/README_Spanish.md)
### Features

- Empowered with [Bun.js](https://bun.sh/), allowing up to a 50% faster runtime execution compared to Node.
- Resilient end-to-end tests with all the features of a framework like Playwright.
- Formatter, linter, and precommit configured, providing safety in test development along with speed.
- Entire environment containerized with Docker, ready for execution in pipelines.
- Type safety and extensibility in test development with TypeScript in its latest versions.

### Tools

- [Bun.js](https://bun.sh/): Fast environment for running JavaScript.
- [Playwright](https://playwright.dev): Modern end-to-end testing framework for various programming languages.
- [Biome.js](https://biomejs.dev): Fast and easy-to-configure linter and formatter.

### Installation

To get started with **Playwright Template with Bun.js**, follow these steps:

1. **Install bun.js Locally:**

   ```bash
   curl -fsSL https://bun.sh/install | bash
   ```

2. **Install Project Dependencies:**

   ```bash
   bun install
   ```

3. **Install Playwright Navigation Tools:**

   ```bash
   bun run pw:install
   ```

### Available Commands

#### Testing Commands:

- `npm run test:plan`: Lists all available test cases.
- `npm run test:ui`: Runs UI tests.
- `npm run test:trace`: Shows traces for tests.
- `npm run test:debug`: Runs tests in debug mode.
- `npm run test`: Runs tests using the Chromium browser.
- `npm run test:firefox`: Runs tests using the Firefox browser.
- `npm run test:edge`: Runs tests using the Edge browser.
- `npm run test:iphone`: Runs tests emulating an iPhone.
- `npm run test:ci`: Runs tests in CI mode.

#### Code Formatting and Linting:

- `npm run format`: Formats source code files.
- `npm run lint`: Performs linting checks and applies fixes.

#### Type Checking:

- `npm run check-types`: Checks TypeScript types.

### Project Structure

- **test/**: Contains the source code files.
- **tsconfig.json**: TypeScript configuration file.
- **package.json**: Project metadata and script definitions.

### Dependencies

#### Dev Dependencies:

- **@biomejs/biome**: Testing framework for E2E testing.
- **@playwright/test**: Testing library for browser automation.
- **@types/node**: TypeScript definitions for Node.js.
- **typescript**: TypeScript compiler.

#### Runtime Dependencies:

- **lefthook**: Git hooks manager.

