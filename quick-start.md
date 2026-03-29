# Inicio rápido

Empieza a usar Skribane en 5 minutos. Esta guía te lleva desde la instalación hasta escribir tu primera escena con asistencia de IA.

## 1. Instalar Skribane

Descarga el instalador desde [www.skribane.com](https://www.skribane.com) y ejecútalo. El asistente te guiará paso a paso. Skribane se instala en tu equipo como cualquier otra aplicación — tus datos se guardan localmente, nunca en la nube.

::: tip Nota sobre Windows SmartScreen
Si Windows muestra una advertencia de "aplicación no reconocida", haz clic en **Más información** y luego en **Ejecutar de todas formas**. Esto ocurre porque el instalador aún no tiene firma de código — tu novela está completamente segura.
:::

## 2. Crear tu primer proyecto

Al abrir Skribane por primera vez, verás una pantalla de bienvenida. Haz clic en **Nuevo proyecto** en la barra lateral izquierda, escribe el nombre de tu novela y pulsa Enter.

Skribane creará automáticamente un **Acto 1** vacío listo para que empieces a construir la estructura de tu historia.

## 3. Construir la estructura (Modo Plan)

El modo **Plan** es tu mesa de trabajo narrativa. Aquí organizas tu novela en tres niveles:

- **Actos** — Las grandes divisiones de tu historia (ej: planteamiento, nudo, desenlace).
- **Capítulos** — Las secciones dentro de cada acto.
- **Escenas** — Las unidades de escritura. Cada escena es un bloque de texto que puedes escribir y editar.

Para crear un capítulo, haz clic en **Nuevo capítulo** en la esquina superior derecha del acto. Después, haz clic en **+ Nueva escena** dentro del capítulo.

Puedes **arrastrar y soltar** actos, capítulos y escenas para reorganizar tu historia en cualquier momento.

## 4. Escribir tu primera escena

Haz **doble clic** en cualquier tarjeta de escena para abrir el editor. El editor funciona como un procesador de textos: escribe libremente y usa la barra de herramientas superior para dar formato (negrita, cursiva, encabezados, listas, etc.).

Todo lo que escribes se **guarda automáticamente** cada medio segundo. No necesitas pulsar Ctrl+S.

En la parte inferior del editor verás un contador de palabras y caracteres en tiempo real.

## 5. Configurar la IA (opcional pero recomendado)

Skribane usa IA para ayudarte a escribir, pero tú controlas cuándo y cómo se usa. Para activarla, necesitas una API key de al menos uno de estos proveedores:

- **OpenAI** (GPT-4o, GPT-4o mini) — [Obtener API key](https://platform.openai.com/api-keys)
- **Google Gemini** (Gemini 2.5 Flash, Gemini 2.5 Pro) — [Obtener API key](https://aistudio.google.com/apikey)
- **Anthropic Claude** (Sonnet 4, Haiku 4.5) — [Obtener API key](https://console.anthropic.com/settings/keys)

Para configurarla:

1. Haz clic en **Config** en la barra lateral izquierda (parte inferior).
2. Introduce tu API key en el proveedor que prefieras.
3. Selecciona el modelo que quieras usar por defecto.

::: info ¿Cuánto cuesta la IA?
Tú pagas directamente al proveedor de IA por el uso que hagas. El coste típico para escritura de novelas es de 5-15€ al mes, dependiendo del modelo y la frecuencia de uso. Skribane no cobra nada adicional por el uso de IA.
:::

::: tip IA local y gratuita
Si prefieres no pagar por IA, puedes usar modelos locales gratuitos con [LM Studio](https://lmstudio.ai/) u [Ollama](https://ollama.com/). En la configuración de Skribane, activa "IA local" e introduce la URL de tu servidor (recuerda añadir `/v1` al final, por ejemplo: `http://localhost:1234/v1`).
:::

## 6. Generar texto con IA

Con la IA configurada, tienes varias formas de usarla:

- **Generar escena** — Escribe una sinopsis en la tarjeta de la escena (modo Plan), abre el editor y pulsa el botón "Generar". La IA escribirá un borrador basándose en tu sinopsis, el contexto de la novela y tu Codex.
- **Continuar** — Si ya tienes texto escrito, pulsa "Continuar" y la IA añadirá más texto donde te quedaste.
- **Mejorar** — Selecciona un fragmento de texto y usa el menú "Mejorar" para refinarlo (más detalle, más emoción, más conciso, etc.).

## 7. El Codex: tu biblia del universo

El **Codex** es donde defines todo lo que existe en tu universo narrativo: personajes, lugares, objetos, facciones, sistemas de magia y cronología. Cuanto más completo esté tu Codex, mejor será la asistencia de la IA.

Para crear una entrada, haz clic en **+ Nueva entrada** en la barra lateral o pulsa `Ctrl+N`.

## Siguiente paso

Ya tienes lo básico para empezar. Explora el resto de la documentación para sacar todo el partido a Skribane:

- [Interfaz y navegación](/interface) — Conoce todos los paneles y atajos.
- [El Codex](/codex) — Construye tu universo narrativo.
- [Asistencia IA](/ai-assistance) — Todas las formas en que la IA puede ayudarte.
- [Configurar IA](/configure-ai) — Proveedores, modelos y opciones avanzadas.
- [Licencia y descarga](/licensing) — Skribane es gratuita, sin trial ni activación.
