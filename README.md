# React + TypeScript + Vite
# AppITZFood 🍔

AppITZFood es una aplicación de perfil de usuario construida con **React + Vite + TypeScript** en el frontend y **Node.js + Express + MongoDB** en el backend. Utiliza **Auth0** para autenticación y permite a los usuarios ver y actualizar su perfil personal.

## 🚀 Funcionalidades

- ✅ Login con Auth0 (OAuth2 / Google)
- ✅ Edición de perfil: nombre, dirección, ciudad, país
- ✅ Protección de rutas con JWT
- ✅ Backend con Express y MongoDB
- ✅ Validaciones con express-validator y Zod
- ✅ UI responsiva y personalizada

## 🛠️ Stack Tecnológico

### Frontend
- React + Vite
- TypeScript
- React Hook Form + Zod
- TailwindCSS
- Auth0 SDK

### Backend
- Node.js + Express
- MongoDB + Mongoose
- Auth0 (express-oauth2-jwt-bearer)
- express-validator

## 📦 Instalación

### 1. Clonar el proyecto

```bash
git clone https://github.com/TU_USUARIO/app-itzfood.git
cd app-itzfood
2. Instalar dependencias
Frontend
bash
Copiar
Editar
cd frontend
npm install
Backend
bash
Copiar
Editar
cd backend
npm install
3. Configurar variables de entorno
Crea un archivo .env en cada carpeta (frontend y backend):

frontend/.env
ini
Copiar
Editar
VITE_AUTH0_DOMAIN=tu-dominio.auth0.com
VITE_AUTH0_CLIENT_ID=xxxxxx
VITE_API_URL=http://localhost:3000/api
backend/.env
ini
Copiar
Editar
AUTH0_AUDIENCE=AppITZFoodApiBackEnd
AUTH0_ISSUER_BASE_URL=https://tu-dominio.auth0.com/
DB_CONNECTION_STRING=mongodb+srv://...
4. Correr los servidores
Frontend
bash
Copiar
Editar
cd frontend
npm run dev
Backend
bash
Copiar
Editar
cd backend
npm run dev
✨ Créditos
Desarrollado por Erick Nungaray
Contacto: e.yazeck@gmail.com


This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config({
  extends: [
    // Remove ...tseslint.configs.recommended and replace with this
    ...tseslint.configs.recommendedTypeChecked,
    // Alternatively, use this for stricter rules
    ...tseslint.configs.strictTypeChecked,
    // Optionally, add this for stylistic rules
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config({
  plugins: {
    // Add the react-x and react-dom plugins
    'react-x': reactX,
    'react-dom': reactDom,
  },
  rules: {
    // other rules...
    // Enable its recommended typescript rules
    ...reactX.configs['recommended-typescript'].rules,
    ...reactDom.configs.recommended.rules,
  },
})
```
