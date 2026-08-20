# 📘 Apuntes DWC (Desarrollo Web en Entorno Cliente) - VitePress

Repositorio con los apuntes, teoría, códigos y listado de prácticas de la asignatura **Desarrollo Web en Entorno Cliente (DWC)** estructurados con **VitePress**.

## 🗂️ Estructura del Contenido

- **Barra Lateral Jerárquica:**
  - **Temas (UT01 a UT07):** Unidades de trabajo con resultados de aprendizaje asociados.
  - **Apartados (Nivel 1.X):** Bloques principales de contenido.
  - **Subapartados (Nivel 1.X.X):** Desglose detallado y acceso directo a cada concepto.
  - **Listado de Prácticas y Ejercicios:** Enunciados, código base, soluciones y rúbricas al final de cada tema.

## 🚀 Puesta en marcha en local

1. **Instalar dependencias:**
   ```bash
   npm install
   ```

2. **Iniciar el servidor de desarrollo:**
   ```bash
   npm run docs:dev
   ```
   Abrirá la documentación en `http://localhost:5173`.

3. **Compilar para producción:**
   ```bash
   npm run docs:build
   ```

4. **Previsualizar la versión de producción:**
   ```bash
   npm run docs:preview
   ```

## 🌐 Publicación en GitHub Pages

Este proyecto incluye el flujo de trabajo en `.github/workflows/deploy.yml` para desplegarse automáticamente en GitHub Pages cada vez que hagas `push` a la rama `main`.

Solo necesitas activar GitHub Pages en tu repositorio:
`Settings -> Pages -> Build and deployment -> Source: GitHub Actions`.
