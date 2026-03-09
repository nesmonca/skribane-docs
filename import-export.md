# Importar y exportar

Skribane permite importar novelas existentes desde documentos Word y exportar tu manuscrito a formato DOCX o PDF profesional.

## Acceder

Haz clic en **Archivo** en la barra superior o pulsa `Ctrl+5`. Verás dos pestañas: Importar y Exportar.

## Importar desde Word (.docx)

### Seleccionar archivo

Haz clic en **Seleccionar archivo** y elige un documento .docx de tu equipo. Skribane lo analiza y detecta la estructura automáticamente:

- Los encabezados **H1** se interpretan como capítulos.
- Los encabezados **H2** se interpretan como escenas.
- Si no hay encabezados, Skribane busca patrones como "Capítulo 1: Título", "Chapter 3", "Parte 2", etc.
- Si no se detecta ninguna estructura, se importa como un capítulo con una escena.
- El texto antes del primer encabezado se crea como capítulo "Introducción".

El formato se preserva: negrita, cursiva, subrayado, listas y citas se mantienen.

### Previsualización editable

Antes de importar, puedes editar la estructura detectada:

- **Renombrar** capítulos y escenas (clic en el nombre).
- **Dividir** una escena en dos (icono tijeras).
- **Fusionar** dos escenas consecutivas (icono combinar).
- **Eliminar** escenas o capítulos.
- **Reordenar** escenas con flechas arriba/abajo.
- **Restaurar** la estructura original si no te gustan los cambios.

### Reorganizar con IA

Si la estructura detectada no es buena (ej: un documento sin headings), puedes pulsar **Reorganizar con IA** para que la inteligencia artificial analice el texto y sugiera una estructura de capítulos y escenas basada en el contenido narrativo.

### Destino

Elige dónde importar:

- **Nuevo proyecto** — Crea un proyecto nuevo con un nombre que puedes editar (por defecto, el nombre del archivo).
- **Proyecto actual** — Añade los capítulos y escenas al último acto del proyecto abierto.

### Importar

Pulsa **Importar** y espera a que se procese. El conteo de palabras se calcula automáticamente para cada escena.

## Exportar a DOCX

Genera un documento Word profesional de tu manuscrito.

### Opciones de formato

- **Incluir portada** — Página con título, autor, género y descripción.
- **Numeración de capítulos** — "Capítulo 1", "Capítulo 2", etc.
- **Separador entre escenas** — Asteriscos (***), guiones (---), línea en blanco o salto de página.
- **Incluir sinopsis** — Añade la sinopsis de cada escena bajo su nombre (útil para revisión, no para publicación).
- **Incluir highlights** — Incluye el texto resaltado (se exporta como texto sin color de fondo).
- **Tipografía** — Elige la fuente del documento final (Times, Georgia, Garamond, Arial, Calibri).

### Guardar

Al pulsar **Exportar DOCX**, se abre un diálogo nativo para elegir dónde guardar el archivo. El nombre sugerido incluye el nombre del proyecto.

## Exportar a PDF

Genera un PDF con formato profesional.

Las opciones son las mismas que para DOCX. El PDF usa formato US Letter (carta) con márgenes de 1 pulgada.

Las fuentes serif (Times, Georgia, Garamond) se mapean a Times en el PDF, y las sans-serif (Arial, Calibri) se mapean a Helvetica. Bajo el selector de fuente se muestra la fuente real que se usará en el PDF.

## Resumen del manuscrito

En la pestaña de exportación se muestra un resumen:

- Total de palabras.
- Número de capítulos y escenas con contenido.
- Progreso hacia la meta total.

También puedes expandir una vista de la estructura completa (actos, capítulos, escenas con estado y palabras).
