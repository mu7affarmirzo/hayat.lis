# First of all please learn Feature-Sliced Design then edit the code
 [Link for docs](https://feature-sliced.design/)

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

- React, Redux Toolkit, React Hook Form, Zod
- Vite, TypeScript, Postcss
- Architecture based on Feature-Sliced Design

## About project

Right now, I'm using this project as an experiment polygon to try modern technologies and see how a can see frontend application in 2024. This project structure combines two methodology: Clean Architecture and Feature-Sliced Design.

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list

# hayat.lis
