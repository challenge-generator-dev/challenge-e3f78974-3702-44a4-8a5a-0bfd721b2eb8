# Consultando y Actualizando Datos en el Catálogo de Productos

En una plataforma de comercio en línea, se requiere acceder y manipular datos del catálogo de productos a través de consultas SQL. La plataforma gestiona 10 000 productos y maneja un tráfico de 500 solicitudes por segundo. El objetivo es garantizar que los datos del catálogo estén actualizados y accesibles en todo momento.

## Informacion General

| Campo | Valor |
|-------|-------|
| **Tema** | Data Manipulation Language (DML) |
| **Nivel** | trainee-l1 |
| **Tipo** | practical |
| **Tiempo estimado** | 2 horas |

## Fases del Reto

### Fase 0: Configuración del Proyecto

**Objetivo:** Obtener el proyecto base funcional enviando el Código Base a un asistente de IA, que lo analizará, corregirá errores y generará un ZIP listo para usar.

**Tiempo estimado:** 15-30 minutos

**Instrucciones:**

- Asegúrate de tener instalado para ejecutar el proyecto: Node.js 18+, npm, VS Code o similar.
- Copia todo el contenido del campo **Código Base** de este reto — incluyendo el texto de instrucciones que aparece al inicio.
- Abre un asistente de IA (Claude en claude.ai, ChatGPT o Gemini — se recomienda Claude), pega el contenido copiado en el chat y envíalo.
- El asistente analizará los archivos, corregirá errores y generará un archivo ZIP descargable. Descárgalo y extráelo en la carpeta donde quieras trabajar.
- Ejecuta `npm install && npm run build` (o `npm start`). Si no hay errores, estás listo.

**Entregable:** El proyecto compila/arranca sin errores.

<details>
<summary>Pistas de conocimiento</summary>

- Copia el Código Base completo incluyendo el texto de instrucciones al inicio — esas instrucciones le indican al asistente exactamente qué hacer con los archivos.
- Si el asistente no genera el ZIP automáticamente al terminar el análisis, escríbele: "genera el ZIP ahora".
- Si el proyecto tiene errores al arrancar, comparte el mensaje de error con el mismo asistente para que lo corrija.

</details>

### Fase 1: Consulta de Productos

**Objetivo:** Realizar consultas básicas para obtener información de productos.

**Tiempo estimado:** 30 minutos

**Instrucciones:**

- Consultar productos por categoría y mostrar los resultados en la interfaz de usuario.
- Asegurar que los resultados se muestren correctamente y que no haya errores visibles.

**Entregable:** Interfaz de usuario que muestra la lista de productos por categoría.

<details>
<summary>Pistas de conocimiento</summary>

- Considera cómo mostrar los productos de manera accesible y con buen contraste.
- Piensa en cómo manejar la carga y la falta de resultados.

</details>

### Fase 2: Inserción de Nuevos Productos

**Objetivo:** Insertar nuevos productos en el catálogo.

**Tiempo estimado:** 30 minutos

**Instrucciones:**

- Crear un formulario para insertar nuevos productos y validar los datos ingresados.
- Asegurar que los nuevos productos se añadan correctamente al catálogo y se reflejen en la interfaz de usuario.

**Entregable:** Formulario funcional para insertar nuevos productos y actualización de la lista de productos.

<details>
<summary>Pistas de conocimiento</summary>

- Considera la validación de datos para evitar errores de inserción.
- Piensa en cómo confirmar al usuario que el producto se ha añadido correctamente.

</details>

### Fase 3: Actualización de Productos Existentes

**Objetivo:** Actualizar la información de productos existentes.

**Tiempo estimado:** 30 minutos

**Instrucciones:**

- Crear un formulario para actualizar la información de productos existentes y validar los datos ingresados.
- Asegurar que los cambios se reflejen correctamente en la interfaz de usuario y en el catálogo.

**Entregable:** Formulario funcional para actualizar productos y actualización de la lista de productos.

<details>
<summary>Pistas de conocimiento</summary>

- Considera la validación de datos para evitar errores de actualización.
- Piensa en cómo confirmar al usuario que los cambios se han guardado correctamente.

</details>

### Fase 4: Eliminación de Productos

**Objetivo:** Eliminar productos del catálogo.

**Tiempo estimado:** 30 minutos

**Instrucciones:**

- Crear una funcionalidad para eliminar productos del catálogo y confirmar la acción.
- Asegurar que los productos eliminados ya no aparezcan en la interfaz de usuario y en el catálogo.

**Entregable:** Funcionalidad para eliminar productos y actualización de la lista de productos.

<details>
<summary>Pistas de conocimiento</summary>

- Considera la confirmación de la acción de eliminación para evitar eliminaciones accidentales.
- Piensa en cómo informar al usuario que el producto ha sido eliminado correctamente.

</details>

## Dimensiones Evaluadas

- **queEs**: ¿Qué son las consultas SQL y para qué se utilizan en este contexto?
- **comoSeUsa**: ¿Cómo se utilizan las consultas SQL para manipular datos en el catálogo de productos?
- **erroresComunes**: ¿Cuáles son los errores comunes al realizar consultas SQL y cómo se pueden evitar?

## Criterios de Evaluacion

- Consulta de productos por categoría y visualización correcta en la interfaz de usuario.
- Inserción de nuevos productos con validación de datos y actualización de la lista de productos.
- Actualización de productos existentes con validación de datos y reflexión de cambios en la interfaz de usuario.
- Eliminación de productos con confirmación de acción y actualización de la lista de productos.

## Como trabajar con un asistente de IA

Hay dos caminos, elegi uno:

- **AGENTS.md** (recomendado) — instrucciones nativas del repo. Abri esta carpeta con tu agente local (Claude Code, Cursor, Codex, Copilot, Gemini) y las carga solo. Sabe que archivos faltan y con que comando se verifica, y completa el scaffold escribiendo en disco.
- **PROMPT_MEJORA.md** — para copiar y pegar en un chat (claude.ai, ChatGPT). Devuelve un ZIP con el proyecto. Sirve si no tenes un agente en el IDE.

Ninguno de los dos resuelve las fases del reto: eso es tu trabajo.

## Verificacion

El proyecto esta listo para trabajar cuando este comando corre sin errores:

```bash
npm install && npm run build
```

---

*Reto generado automaticamente por Challenge Generator - Pragma*
