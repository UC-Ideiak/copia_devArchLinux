# Sadekosa Web - Proyecto Astro

Este es un proyecto basado en Astro 5, configurado siguiendo el estándar **Lean Stack** y optimizado para entornos **WSL**.

## 🛠️ Tecnologías Utilizadas

- **Core**: [Astro v5](https://astro.build/)
- **Estilos**: [Tailwind CSS v4](https://tailwindcss.com/) (Integración directa vía Vite)
- **Entorno**: Node.js con módulos ES y soporte nativo para WSL (Polling habilitado)

## 🚀 Estructura del Proyecto

Dentro del proyecto encontrarás las siguientes carpetas y archivos clave:

```text
/
├── public/          # Archivos estáticos
├── src/
│   ├── assets/      # Imágenes y recursos
│   ├── components/  # Componentes Astro reutilizables
│   ├── layouts/     # Estructuras de página base
│   ├── pages/       # Rutas del sitio (index.astro)
│   └── styles/      # Estilos globales (global.css con Tailwind v4)
├── astro.config.mjs # Configuración de Astro y Vite
└── package.json     # Dependencias y scripts
```

## 🧞 Comandos

Todos los comandos se ejecutan desde la raíz del proyecto:

| Comando | Acción |
| :--- | :--- |
| `npm install` | Instala las dependencias del proyecto |
| `npm run dev` | Inicia el servidor de desarrollo en `localhost:5173` |
| `npm run build` | Compila el sitio para producción en `./dist/` |
| `npm run preview` | Previsualiza la compilación localmente |
| `npm run astro ...` | Ejecuta comandos de la CLI de Astro |

## ⚙️ Configuración WSL

El proyecto está preconfigurado en `astro.config.mjs` para funcionar sin problemas bajo WSL:
- **Host**: Habilitado para acceso desde Windows.
- **Port**: 5173.
- **Watch**: Polling activado para detectar cambios en el sistema de archivos de Windows.
