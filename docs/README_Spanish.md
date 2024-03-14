## Plantilla de Playwright con Bun.js

### Caracteristicas

- Potenciado con [Bun.js](https://bun.sh/) permite una mejora en tiempos de ejecución hasta de un 50% mas rapido que en Node
- Pruebas end to end resilientes a fallos con todas las caracteristicas de un framework como Playwright
- Formateador, linter y precommit configurados, los que nos da seguridad en el desarrollo de pruebas junto con toda la velocidad
- Todo el ambiente cotenerizado con Docker, listo para la ejecución en pipelines
- La seguridad de los tipos y la extensibilidad en el desarrollo de pruebas con Typescript en sus ultimas versiones

### Herramientas

- [Bun.js](https://bun.sh/): Entorno de rapido para ejecutar Javascript
- [Playwright](https://playwright.dev): Framework de pruebas end to end moderno para distintos lenguajes de programación
- [Biome.js](https://biomejs.dev): Linter y formatter rapido y facil de configurar

### Instalación

Para comenzar con **Plantilla de Playwright con Bun.js**, sigue estos pasos:

1. **Instala bun.js Localmente:**

   ```bash
   curl -fsSL https://bun.sh/install | bash
   ```

2. **Instala las Dependencias del Proyecto:**

   ```bash
   bun install
   ```

3. **Instala las Herramientas de Navegación de Playwright:**

   ```bash
   bun run pw:install
   ```

### Comandos Disponibles

#### Comandos de Pruebas:

- `npm run test:plan`: Lista todos los casos de prueba disponibles.
- `npm run test:ui`: Ejecuta pruebas de interfaz de usuario (UI).
- `npm run test:trace`: Muestra trazas para pruebas.
- `npm run test:debug`: Ejecuta pruebas en modo de depuración.
- `npm run test`: Ejecuta pruebas usando el navegador Chromium.
- `npm run test:firefox`: Ejecuta pruebas usando el navegador Firefox.
- `npm run test:edge`: Ejecuta pruebas usando el navegador Edge.
- `npm run test:iphone`: Ejecuta pruebas emulando un iPhone.
- `npm run test:ci`: Ejecuta pruebas en modo de integración continua (CI).

#### Formateo de Código y Linting:

- `npm run format`: Formatea los archivos de código fuente.
- `npm run lint`: Realiza comprobaciones de linting y aplica correcciones.

#### Verificación de Tipos:

- `npm run check-types`: Verifica los tipos de TypeScript.

### Estructura del Proyecto

- **test/**: Contiene los archivos de código fuente.
- **tsconfig.json**: Archivo de configuración de TypeScript.
- **package.json**: Metadatos del proyecto y definiciones de scripts.

### Dependencias

#### Dependencias de Desarrollo:

- **@biomejs/biome**: Marco de pruebas para pruebas E2E.
- **@playwright/test**: Biblioteca de pruebas para automatización de navegadores.
- **@types/node**: Definiciones de TypeScript para Node.js.
- **typescript**: Compilador de TypeScript.

#### Dependencias en Tiempo de Ejecución:

- **lefthook**: Gestor de ganchos de Git.
