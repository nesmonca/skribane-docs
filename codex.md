# El Codex

El Codex es la biblia de tu universo narrativo. Aquí defines todo lo que existe en tu historia: personajes, lugares, objetos, facciones, sistemas de poder y cronología. La IA consulta automáticamente el Codex cuando genera o mejora texto, lo que le permite mantener la coherencia con tu universo.

## Tipos de entrada

Skribane organiza el Codex en seis categorías:

- **Personajes** — Los seres de tu historia (protagonistas, antagonistas, secundarios).
- **Lugares** — Ciudades, edificios, regiones, planetas, dimensiones.
- **Objetos** — Armas, artefactos, vehículos, documentos importantes.
- **Facciones** — Organizaciones, gobiernos, clanes, familias, gremios.
- **Sistemas** — Sistemas de magia, tecnologías, leyes del universo.
- **Cronología** — Eventos históricos, eras, momentos clave del pasado.

Puedes acceder a cada categoría desde la sección **Universo** en la barra lateral izquierda, que muestra el número de entradas por tipo.

## Crear una entrada

Tienes dos formas de crear entradas:

1. **Desde la barra lateral** — Haz clic en una categoría del Universo (ej: Personajes) y escribe el nombre en el campo de la lista.
2. **Botón "+ Nueva entrada"** — El botón verde en la parte superior de la barra lateral, o el atajo `Ctrl+N`, abre un selector de tipo.

## Vista de detalle

Al seleccionar una entrada de la lista, se abre el panel de detalle con:

- **Nombre** — Editable directamente.
- **Descripción** — Texto libre para describir la entrada. Este campo es el que más usa la IA al construir el contexto.
- **Aliases / Apodos** — Nombres alternativos para la entrada (ver sección más abajo).
- **Notas** — Texto privado para tus notas de autor. También se incluye en el contexto de la IA.
- **Campos personalizados** — Pares clave-valor para información estructurada.
- **Tags** — Etiquetas de colores para organizar y filtrar.
- **Relaciones** — Conexiones con otras entradas del Codex.
- **Progresiones** — Cómo evoluciona la entrada a lo largo de la historia.

Todo se guarda automáticamente mientras escribes (cada medio segundo).

## Aliases / Apodos

Un personaje puede tener varios nombres: un nombre real, un apodo, un título, un alias. Por ejemplo, un personaje llamado "Mizu" podría tener los aliases "El Capitán" y "Sombra de Agua".

Para añadir un alias, escribe en el campo de aliases y pulsa Enter. Los aliases aparecen como chips que puedes eliminar con ×.

Los aliases son importantes porque:

- La IA los reconoce al buscar entradas relevantes para una escena (si escribes "El Capitán" en tu texto, la IA conectará ese nombre con Mizu).
- Se incluyen en el contexto que se envía a la IA como "también conocido como..."
- La detección de personajes los usa para evitar duplicados.

## Campos personalizados

Los campos personalizados te permiten añadir información estructurada a cada entrada. Al crear una entrada nueva, Skribane precarga campos sugeridos según el tipo:

- **Personajes** — Edad, Rol, Motivación, Apariencia, Personalidad.
- **Lugares** — Ubicación, Descripción sensorial, Importancia, Población.
- **Objetos** — Propietario, Poder/Función, Origen, Estado actual.
- **Facciones** — Líder, Objetivo, Territorio, Miembros notables.
- **Sistemas** — Fuente de poder, Reglas, Limitaciones, Usuarios.
- **Cronología** — Período, Eventos clave, Consecuencias.

Puedes añadir, renombrar o eliminar campos como quieras. También puedes hacer clic en el icono de IA junto a un campo vacío para que la IA lo rellene automáticamente basándose en la información del resto de la entrada y del Codex.

## Tags

Los tags son etiquetas de colores que te ayudan a organizar y filtrar entradas. Por ejemplo, puedes crear tags como "Protagonista", "Alianza del Norte", "Arco 2" o "Necesita desarrollo".

Para crear un tag, escribe en el campo de tags y pulsa Enter. Puedes elegir un color y el tag se crea de forma global para todo el proyecto. Después puedes asignarlo a cualquier entrada.

Para editar un tag (nombre o color) o eliminarlo del proyecto, haz clic en él para abrir el popover de edición.

## Relaciones

Las relaciones conectan entradas entre sí de forma bidireccional. Por ejemplo:

- Mizu *es enemigo de* Kael
- La Fortaleza del Norte *pertenece a* La Alianza
- La Espada Rúnica *fue creada por* Arthan

Para crear una relación, abre el panel de detalle de una entrada, ve a la sección de relaciones, selecciona la entrada relacionada en el desplegable y escribe el tipo de relación. La relación aparece automáticamente en ambas entradas.

## Progresiones

Las progresiones capturan cómo evoluciona una entrada a lo largo de la historia. Un personaje puede empezar como granjero y terminar como rey. Un lugar puede ser destruido en el acto 2. Un sistema de poder puede cambiar sus reglas.

Cada progresión tiene un título (ej: "Acto 1", "Tras la batalla") y un texto descriptivo. Puedes asociar las progresiones a puntos específicos de la novela.

La IA usa la progresión activa (la más relevante para la escena que estás escribiendo) al generar contexto.

## Excluir del contexto de IA

Si tienes entradas del Codex que no quieres que la IA considere (borradores descartados, ideas futuras, material sensible), puedes marcarlas con la opción "Incluir siempre en IA" desactivada. La IA las ignorará al construir el contexto.

## Buscar entradas

La barra de búsqueda en la parte superior de la lista del Codex filtra entradas por nombre en tiempo real.

## Detectar personajes con IA

Si ya tienes texto escrito, puedes usar la función **Detectar personajes** (en la pestaña IA del panel derecho) para que la IA analice tu manuscrito y detecte personajes que aún no están en el Codex. La detección se puede hacer por escena, capítulo o manuscrito completo.

Los personajes detectados se muestran en una lista donde puedes seleccionar cuáles crear en el Codex con un solo clic.
