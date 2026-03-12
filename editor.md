# Editor

El editor es donde escribes tu novela. Es un procesador de textos completo con formato enriquecido, autoguardado continuo y asistencia de IA integrada.

## Abrir una escena

Haz doble clic en una tarjeta de escena en el modo Plan, o usa el modo Escribir y selecciona la escena desde el breadcrumb en la parte superior.

El **breadcrumb** en la parte superior siempre muestra tu ubicación: `Acto › Capítulo › Escena`.

## Formato de texto

La barra de herramientas del editor ofrece opciones de formato estándar:

- **Deshacer / Rehacer** — Ctrl+Z / Ctrl+Shift+Z
- **Negrita** — Ctrl+B
- **Cursiva** — Ctrl+I
- **Subrayado** — Ctrl+U
- **Tachado**
- **Encabezados** — H1, H2, H3
- **Lista con viñetas** y **lista numerada**
- **Cita (blockquote)**
- **Línea horizontal**

## Autoguardado

Todo lo que escribes se guarda automáticamente cada medio segundo. No necesitas pulsar Ctrl+S. El contador de palabras se actualiza en tiempo real.

## Contador de palabras

En la cabecera del editor verás el número de palabras y caracteres de la escena actual, actualizándose en tiempo real mientras escribes.

## Resaltador

Puedes resaltar fragmentos de texto con colores para marcar notas, agujeros de trama o cosas por revisar.

Selecciona texto y usa el botón del resaltador en la barra de herramientas para elegir un color. Los colores disponibles están predefinidos (amarillo, verde, azul, rosa, naranja y rojo).

Para eliminar un resaltado, selecciona el texto resaltado y haz clic en "Eliminar resaltado".

::: info Resaltados en las exportaciones
Actualmente, los resaltados se exportan como texto plano sin color de fondo en DOCX. En los ajustes de exportación puedes elegir si incluir el texto resaltado.
:::

## Personalizar el editor

Haz clic en el icono de engranaje en la cabecera del editor para abrir el panel de personalización. Puedes ajustar:

- **Fuente** — Serif (Lora), Sans-serif (Manrope) o Monoespaciada (JetBrains Mono).
- **Tamaño de fuente** — De 14px a 28px.
- **Interlineado** — De 1.2 a 2.4.
- **Espaciado entre párrafos** — De 0.5em a 2.5em.
- **Ancho del editor** — 6 opciones de 560px a 860px.

Estas preferencias se guardan automáticamente y también se aplican en el modo Focus. No afectan a las exportaciones — solo a tu experiencia de escritura.

Puedes restaurar los valores por defecto con el botón "Restablecer".

## Modo Focus

El modo Focus elimina todas las distracciones para que puedas concentrarte únicamente en escribir.

**Activar:** Haz clic en el icono de maximizar junto al contador de palabras, o pulsa `Ctrl+Shift+F`.

**Salir:** Pulsa `Escape`.

En el modo Focus:

- La barra superior, la barra lateral y el panel derecho desaparecen.
- El editor ocupa toda la pantalla con un fondo limpio.
- Solo se muestra un contador de palabras discreto en la parte superior (opacidad baja que aumenta al pasar el ratón).
- El **typewriter scrolling** mantiene la línea activa centrada en pantalla, para que no tengas que hacer scroll manualmente.
- Si tienes una operación de IA en curso (generación, mejora, etc.), el panel de resultados permanece visible.

Las preferencias de personalización del editor (fuente, tamaño, ancho) también se aplican en el modo Focus.

## Asistencia IA en el editor

Desde la cabecera del editor tienes acceso a las funciones de IA:

### Generar escena

Solo visible si la escena tiene sinopsis. Haz clic en "Generar" y la IA escribirá un borrador completo basándose en la sinopsis, el contexto de la novela (escenas anteriores, Codex) y tu configuración narrativa (POV, tiempo verbal, estilo).

Si la escena ya tiene contenido, se te pedirá confirmación antes de reemplazarlo.

### Continuar

Solo visible si la escena tiene contenido. La IA añade más texto donde te quedaste, manteniendo coherencia con el estilo, POV y contexto de la novela.

### Mejorar texto

Selecciona un fragmento de texto y haz clic en "Mejorar". Un menú desplegable ofrece opciones predefinidas:

- Mejorar redacción
- Más detalle
- Más emoción
- Corregir estilo
- Más conciso
- Instrucción personalizada (escribe tu propia indicación)

La IA genera una versión mejorada que se muestra en un panel de previsualización. Puedes **aceptar** (reemplaza la selección), **descartar** o **regenerar**.

### Resumir escena

Si la escena tiene contenido, puedes hacer clic en "Resumir" para que la IA genere automáticamente una sinopsis basada en el texto escrito. Útil para mantener las sinopsis actualizadas sin escribirlas manualmente.

### Previsualización de prompt

El botón de previsualización de prompt te permite ver exactamente qué se envía a la IA: el prompt de sistema completo y el prompt de usuario, con un conteo de tokens. Puedes copiar el prompt al portapapeles. Útil para depurar o entender cómo la IA "ve" tu novela.

## Directivas / Beats

Las directivas (también llamadas "beats" en otras herramientas) son instrucciones que le das a la IA para guiar la generación en una escena específica. Se acceden desde la pestaña **Directivas** en el panel derecho.

Ejemplos de directivas:

- "Escena de tensión entre Mizu y el capitán"
- "No mencionar el artefacto todavía"
- "Tono melancólico, ritmo lento"
- "Centrarse en las descripciones sensoriales del puerto"

Las directivas se incluyen automáticamente en el prompt de la IA cuando generas o continúas la escena. No se exportan al manuscrito — son instrucciones internas entre tú y la IA.

## Volver al Plan

Haz clic en la **flecha ←** en la esquina superior izquierda del editor para volver al modo Plan.
