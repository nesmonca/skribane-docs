# Asistencia IA

Skribane integra inteligencia artificial como un copiloto narrativo que conoce tu universo. La IA no escribe por ti — te asiste cuando la necesitas, respetando tu voz y tus decisiones creativas.

## Requisitos

Para usar la asistencia de IA necesitas:

1. Al menos una API key configurada (OpenAI, Gemini o Anthropic) — ver [Configurar IA](/configure-ai).
2. Que el kill switch de IA esté desactivado (viene desactivado por defecto).
3. Que no hayas superado tu presupuesto mensual (si configuraste uno).

Alternativamente, puedes usar un servidor local de IA (LM Studio, Ollama) sin necesidad de API key.

## Generar escena

Genera un borrador completo de una escena a partir de su sinopsis.

**Cómo usarlo:**
1. Escribe una sinopsis en la tarjeta de la escena (modo Plan).
2. Abre la escena en el editor.
3. Pulsa el botón **Generar** en la cabecera del editor.

**Lo que la IA recibe:**
- La sinopsis de la escena.
- El contexto narrativo: sinopsis del capítulo, resumen de escenas anteriores.
- Las entradas relevantes del Codex (personajes, lugares, objetos mencionados).
- Tu configuración de estilo (tono, persona, detalle, referencia).
- El POV y tiempo verbal configurados.
- Las directivas / beats de la escena.

**Resultado:** El texto generado aparece en un panel de previsualización. Puedes **aceptar** (reemplaza el contenido), **descartar** o **regenerar**.

::: warning
Si la escena ya tiene contenido, se te pedirá confirmación antes de reemplazarlo.
:::

## Continuar escena

Continúa escribiendo donde te quedaste.

**Cómo usarlo:** Pulsa el botón **Continuar** en la cabecera del editor. Solo aparece si la escena ya tiene contenido.

**Resultado:** La IA añade texto al final de lo escrito, manteniendo coherencia con el estilo, POV y contexto de la novela.

## Mejorar texto

Refina un fragmento de texto seleccionado.

**Cómo usarlo:**
1. Selecciona un fragmento de texto en el editor.
2. Pulsa el botón **Mejorar** en la cabecera del editor.
3. Elige una opción del menú o escribe una instrucción personalizada.

**Opciones disponibles:**
- Mejorar redacción
- Más detalle
- Más emoción
- Corregir estilo
- Más conciso
- Instrucción personalizada

**Resultado:** Se muestra el texto original junto al texto mejorado en un panel de previsualización. Puedes aceptar (reemplaza la selección), descartar o regenerar.

## Resumir escena

Genera automáticamente una sinopsis a partir del contenido escrito.

**Cómo usarlo:** Pulsa el botón **Resumir** en la cabecera del editor (solo visible si la escena tiene contenido).

**Resultado:** La IA genera una sinopsis de 2-3 frases que puedes aceptar (se guarda como sinopsis de la escena) o descartar.

También puedes resumir un capítulo completo desde el modo Plan, haciendo clic en el icono de resumen junto al nombre del capítulo.

## Revisar coherencia

Analiza tu manuscrito en busca de incoherencias narrativas.

**Cómo usarlo:**
1. Ve a la pestaña **IA** del panel derecho.
2. En la sección **Revisar coherencia**, elige el alcance: escena actual, capítulo actual o manuscrito completo.
3. Selecciona los tipos de revisión (puedes marcar varios): personajes, trama, worldbuilding, continuidad temporal.
4. Pulsa **Revisar coherencia**.

**Resultado:** Una lista de problemas encontrados, cada uno con su severidad, tipo, descripción y ubicación. Si no se encuentran problemas, aparece un mensaje verde de "todo correcto".

Se muestra una estimación de tokens y coste antes de ejecutar la revisión.

## Detectar personajes

Encuentra personajes en tu texto que aún no están en el Codex.

**Cómo usarlo:**
1. Ve a la pestaña **IA** del panel derecho.
2. En la sección **Detectar personajes**, elige el alcance: escena, capítulo o manuscrito.
3. Pulsa **Detectar personajes**.

**Resultado:** La IA identifica personajes existentes en el Codex (confirmando su aparición) y personajes nuevos que no están registrados. Los personajes nuevos aparecen con checkboxes — selecciona los que quieras y pulsa **Crear en el Codex** para añadirlos automáticamente.

Para manuscritos largos, la detección se ejecuta por chunks (capítulo por capítulo) para obtener resultados más completos.

## IA Fill (rellenar campos del Codex)

Rellena campos personalizados de las entradas del Codex con IA.

**Cómo usarlo:** En el panel de detalle de cualquier entrada del Codex, pasa el ratón sobre un campo personalizado vacío y haz clic en el icono de IA (chispa). La IA genera un valor basándose en el contexto de la entrada y del Codex.

**Resultado:** El texto sugerido aparece en verde. Puedes aceptar o descartar.

## Prompt Preview

Muestra exactamente qué se envía a la IA.

**Cómo usarlo:** Pulsa el botón de previsualización de prompt en la cabecera del editor.

**Resultado:** Un modal muestra el prompt de sistema completo (instrucciones de estilo, POV, Codex, contexto narrativo) y el prompt de usuario, con un conteo de tokens. Puedes copiar todo al portapapeles.

Útil para entender cómo la IA "ve" tu novela y para depurar si los resultados no son los esperados.

## Cómo funciona el contexto

Cuando la IA genera o mejora texto, Skribane construye automáticamente un contexto que incluye:

1. **Instrucciones de sistema** — POV, tiempo verbal, estilo, directivas de seguridad.
2. **Perfil de estilo** — Tono, detalle, autor de referencia (si configuraste uno).
3. **Contexto narrativo** — Sinopsis del capítulo, resumen de escenas anteriores.
4. **Codex relevante** — Las entradas más relevantes según el texto que estás escribiendo, seleccionadas automáticamente por un sistema de scoring que analiza menciones de nombres, aliases y tipo de entidad.
5. **Directivas / Beats** — Tus instrucciones específicas para esta escena.
6. **Refuerzo narrativo** — Un recordatorio final de POV y tiempo verbal al final del prompt (los modelos a veces ignoran las instrucciones iniciales).

Todo esto se combina en un prompt optimizado que respeta el límite de contexto del modelo seleccionado.
