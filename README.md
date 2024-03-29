# Projeto de criptomoedas

Esse é um projeto que tem por objetivo listar o valor de uma lista de criptmoedas que são recebidas por uma API. Também é possível obter os detalhes da criptmoeda ao clicar nela. 
É um projeto simples cujo objetivo é aprender mais sobre React, seus hooks, renderização condicional e o uso com Typescript.

# Execução

Para executar o projeto, é necessário fazer o git clone. Em seguida o 'npm i' e depois para executar o 'npm run dev'. Então ir ao link localhost disponibilizado.

# Imagens do projeto 
Tela inicial 

![image](https://github.com/PedroRodriguesR/cripto/assets/45874935/53fa8222-cba8-43e1-93ee-f366f03a95a4)

Tela de detalhes da criptomoeda

![image](https://github.com/PedroRodriguesR/cripto/assets/45874935/1e3872f9-efa8-456b-9e32-f29531709979)






# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
   parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
   },
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
