## Project Testing with Bun

### Overview

**project-testing-bun** is a comprehensive testing framework designed to facilitate end-to-end (E2E) testing for web applications. This documentation provides a detailed guide on how to set up and utilize the project for efficient testing.

### Installation

To get started with **project-testing-bun**, follow these steps:

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
- `npm run test`: Runs tests using Chromium browser.
- `npm run test:firefox`: Runs tests using Firefox browser.
- `npm run test:edge`: Runs tests using Edge browser.
- `npm run test:iphone`: Runs tests using iPhone emulation.
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

