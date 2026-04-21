# **Setting Up React JS**

## Prerequisites

Before you begin, ensure you have the following installed on your system:

- **Node.js** (v14 or higher) - [Download here](https://nodejs.org/)
- **npm** (comes with Node.js) or **Yarn** - [Download Yarn](https://yarnpkg.com/)
- A code editor such as **VS Code** - [Download here](https://code.visualstudio.com/)
- Basic knowledge of JavaScript and command line

## Installation Steps

### 1. Create a New React Project

Using **Create React App** (CRA):
```bash
npx create-react-app my-app
cd my-app
```

Or using **Vite** (faster alternative):
```bash
npm create vite@latest my-app -- --template react
cd my-app
npm install
```

### 2. Project Structure

After creation, your project will look like this:

```
my-app/
├── node_modules/          # All installed dependencies
├── public/
│   ├── index.html         # Main HTML file
│   └── favicon.ico
├── src/
│   ├── App.js             # Main React component
│   ├── App.css            # Styles for App component
│   ├── index.js           # Entry point
│   └── index.css          # Global styles
├── package.json           # Project metadata and dependencies
├── .gitignore             # Git ignore rules
└── README.md              # Project documentation
```

## Development Environment Setup

### Recommended VS Code Extensions

1. **ES7+ React/Redux/React-Native snippets** - dsznajder.es7-react-js-snippets
2. **Prettier** - esbenp.prettier-vscode
3. **ESLint** - dbaeumer.vscode-eslint
4. **Thunder Client** or **REST Client** - for API testing

### Setup ESLint and Prettier (Optional)

Install dependencies:
```bash
npm install --save-dev eslint prettier eslint-config-prettier
```

Create `.eslintrc.json`:
```json
{
  "extends": ["react-app", "prettier"]
}
```

Create `.prettierrc`:
```json
{
  "semi": true,
  "singleQuote": true,
  "trailingComma": "es5"
}
```

## Running the Application

### Start the Development Server

```bash
npm start
```

or with Yarn:
```bash
yarn start
```

The application will automatically open in your browser at `http://localhost:3000`. Hot reload is enabled by default, so changes will reflect instantly.

## Common Troubleshooting

### Port 3000 Already in Use

**Windows:**
```bash
netstat -ano | findstr :3000
taskkill /PID <PID> /F
```

**macOS/Linux:**
```bash
lsof -ti:3000 | xargs kill -9
```

### Module Not Found Errors

- Clear `node_modules` and reinstall:
  ```bash
  rm -rf node_modules package-lock.json
  npm install
  ```

### Dependency Issues

- Update all dependencies:
  ```bash
  npm update
  ```

## Build for Production

Create an optimized production build:

```bash
npm run build
```

This creates a `build/` directory with minified and optimized files ready for deployment.

## Next Steps

1. **Learn React Fundamentals**
   - Components (Functional & Class)
   - JSX Syntax
   - Props and State
   - Hooks (useState, useEffect, etc.)

2. **Explore Advanced Topics**
   - Context API
   - React Router for navigation
   - State management (Redux, Zustand)
   - API integration

3. **Useful Resources**
   - [Official React Documentation](https://react.dev)
   - [React Tutorial](https://react.dev/learn)
   - [Create React App Docs](https://create-react-app.dev/)

4. **Build Your First Component**
   - Start with simple functional components
   - Practice using hooks
   - Build small projects to reinforce learning

## Helpful Commands Reference

| Command | Description |
|---------|-------------|
| `npm start` | Start development server |
| `npm run build` | Create production build |
| `npm test` | Run tests |
| `npm eject` | Expose build configuration (not reversible) |
| `npm install <package>` | Install a new package |
| `npm uninstall <package>` | Remove a package |