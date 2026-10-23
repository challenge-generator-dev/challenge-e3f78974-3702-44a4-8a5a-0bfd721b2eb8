# AGENTS.md

Instrucciones para el agente de IA que abra este repositorio (Claude Code, Cursor, Codex, Copilot, Gemini). Se cargan solas: no hay que pegar nada en ningun chat.

## Que es este repositorio

Es el codigo base de un reto de aprendizaje de Pragma: **Consultando y Actualizando Datos en el Catálogo de Productos**.

| | |
|---|---|
| Tema | Data Manipulation Language (DML) |
| Nivel | trainee-l1 |
| Chapter | Frontend |
| Especialidad | React |
| Stack | TypeScript / React 19 |
| Patron arquitectonico | capas estándar |
| Tiempo estimado | 2 horas |

## Receta del stack

Esqueleto obligatorio:

- `package.json, vite.config.ts y tsconfig.json en la raiz`
- `src/main.tsx como entry point`
- `src/app con el arbol de rutas`
- `src/features con componentes contenedores y sus hooks`
- `src/shared con componentes presentacionales`
- `src/services con los clientes HTTP`

Trampas conocidas:

- No inventes versiones de npm: una version inexistente hace fallar `npm install` con ETARGET. `@types/react-router-dom` ya no se publica para v6+, React Router trae sus tipos.
- El `package.json` tiene que ser JSON valido y UNICO: nada despues de la llave de cierre.

Dependencias:

- react 19.0.0
- react-dom 19.0.0
- @types/react 19.0.0
- @types/react-dom 19.0.0
- typescript 5.7.0
- vite 5.3.1
- @vitejs/plugin-react 4.3.1
- eslint 8.57.0
- eslint-plugin-react 7.34.2
- eslint-plugin-react-hooks 4.6.2
- axios 1.7.2

## Tu tarea

Dejar este proyecto en estado **verificable**: que el comando de verificacion corra sin errores. Escribi los archivos en disco, en este repositorio. No generes ZIPs ni archivos adjuntos.

En orden:

1. Corre `npm install && npm run build` y mira que falla.
2. Completa lo que falte de la lista de abajo: manifiesto de dependencias, punto de entrada, capa de interfaz y las capas del patron declarado.
3. Arregla SOLO los errores que impiden compilar o arrancar.
4. Volve a correr `npm install && npm run build` hasta que pase.
5. Pará ahí.

## Regla dura: las fases son trabajo del humano

**PROHIBIDO implementar los entregables de las fases.** El valor del reto esta en que la persona los resuelva. Tu trabajo es que tenga un proyecto que arranca; el hueco pedagogico se queda como esta.

No resuelvas nada de esto:

- **Fase 1 — Consulta de Productos**: Interfaz de usuario que muestra la lista de productos por categoría.
- **Fase 2 — Inserción de Nuevos Productos**: Formulario funcional para insertar nuevos productos y actualización de la lista de productos.
- **Fase 3 — Actualización de Productos Existentes**: Formulario funcional para actualizar productos y actualización de la lista de productos.
- **Fase 4 — Eliminación de Productos**: Funcionalidad para eliminar productos y actualización de la lista de productos.

Distincion operativa:

- **Arreglar** (si): import faltante, tipo que no existe, dependencia sin declarar, error de sintaxis, archivo referenciado que no existe.
- **No tocar** (no): logica de negocio incompleta, validaciones ausentes, secretos hardcodeados, APIs deprecadas que funcionan, concurrencia insegura, patrones mejorables. Eso es lo que la persona tiene que encontrar.

## Lo que falta y tenes que completar

### 1. Referencias colgando (1)

Salieron de un analisis estatico del codigo que SI esta en el repo. Cada una rompe la compilacion:

- [ ] `package.json` — `typescript@5.7.0`
      typescript declara la version 5.7.0, pero el registry de npm respondio que esa version no existe. Es una version inventada: reemplazala por una version publicada real, o si no se conoce con certeza, usa el mecanismo centralizado del ecosistema (BOM/parent/platform/version catalog) y no declares una version individual.

### Presentes (13)

- `package.json`
- `vite.config.ts`
- `tsconfig.json`
- `src/main.tsx`
- `src/App.tsx`
- `src/app/features/products/ProductList.tsx`
- `src/app/features/products/ProductForm.tsx`
- `src/app/features/products/ProductDelete.tsx`
- `src/app/types/Product.ts`
- `src/app/services/productService.ts`
- `src/app/hooks/useProducts.ts`
- `src/app/utils/validations.ts`
- `src/index.html`

### Capas del patron declarado

Cada una tiene que existir como directorio real con al menos un archivo. Codigo plano en la raiz no satisface el patron.

- `src`
- `src/app`
- `src/app/components`
- `src/app/hooks`
- `src/app/services`
- `src/app/types`
- `src/app/utils`
- `src/app/features/products`

## Verificacion

```bash
npm install && npm run build
```

Ese comando pasando es la definicion de "terminado" para vos.

## Convenciones que tenes que respetar

- Un solo ecosistema: no declares librerias de otro lenguaje ni mezcles gestores de paquetes.
- Toda libreria que uses tiene que estar declarada en el manifiesto de dependencias.
- Todo import declarado tiene que usarse; todo tipo usado tiene que existir o venir de una dependencia declarada.
- El patron es **capas estándar**: los contratos (interfaces, puertos) los define la capa interna y los implementa la externa, nunca al revés.
- Los archivos que crees llevan implementacion real, no stubs: sin `TODO`, sin cuerpos vacios, sin `// getters y setters`.

## Contexto del candidato

Sirve para calibrar el nivel del codigo, no para resolver las fases.

- Perfil: Chapter Frontend, Especialidad Desarrollador, Tecnología React, Trainee
- Brecha que el reto ataca: Ejecuta consultas SQL básicas CRUD (Create, Insert, Select, Update, Delete) y de optimización como Joins, Group By y Order By, en al menos un (1) motor de base de datos como SQL Server, Oracle, PostgreSQL, MySQL, DB2 y SQLite.
- Mision: Candidato con experiencia en Frontend, desarrollador en formación que amplía su stack con competencias en bases de datos.

---

*Generado por Challenge Generator — Pragma. `README.md` tiene el enunciado completo del reto para la persona. `PROMPT_MEJORA.md` es la variante para pegar en un chat, si se prefiere ese flujo.*
