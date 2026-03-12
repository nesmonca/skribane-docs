# Backup y restauración

Skribane te permite crear copias de seguridad completas de tus datos y restaurarlas cuando lo necesites. Tus novelas son valiosas — haz copias de seguridad con regularidad.

## Acceso

Haz clic en **Config** en la barra lateral y baja hasta la sección **Copias de seguridad**.

## Crear una copia de seguridad

Haz clic en **Crear backup**. Se abrirá un diálogo nativo para elegir dónde guardar el archivo. El nombre sugerido incluye la fecha y la hora.

La copia de seguridad es un archivo .zip que contiene:

- **Base de datos completa** — Todos tus proyectos, actos, capítulos, escenas, contenido, Codex, estadísticas, configuración de IA.
- **API keys** — Las claves de tus proveedores de IA (almacenadas de forma segura).
- **Metadatos** — Versión de la app, fecha de creación, indicador de si se incluyen las keys.

Al finalizar, se muestra el tamaño del archivo creado.

## Restaurar una copia de seguridad

Haz clic en **Restaurar backup** y selecciona un archivo .zip de backup.

Antes de restaurar, Skribane muestra una previsualización del backup:

- Fecha de creación.
- Tamaño del archivo.
- Número de proyectos que contiene.
- Si incluye API keys.

::: warning Acción destructiva
Restaurar un backup reemplaza **todos** tus datos actuales (proyectos, Codex, configuración). Esta acción no se puede deshacer. Se te pedirá confirmación antes de continuar.
:::

Skribane crea automáticamente una copia de seguridad de tus datos actuales (archivos `.pre-restore`) antes de restaurar, por si algo sale mal.

## Validación de integridad

Al restaurar, Skribane verifica automáticamente:

- Que el archivo es un backup válido de Skribane (contiene los metadatos correctos).
- Que la base de datos no está corrupta (`PRAGMA integrity_check`).
- Que existen las tablas principales.

Si alguna verificación falla, la restauración se cancela y tus datos actuales permanecen intactos.

## Recomendaciones

- Crea una copia de seguridad antes de actualizar Skribane a una nueva versión.
- Haz backup con regularidad (al menos una vez por semana si estás escribiendo activamente).
- Guarda los backups en un lugar diferente a tu ordenador (disco externo, nube, etc.).
- El backup no incluye las preferencias del editor (fuente, tamaño) ni el tema claro/oscuro, que se almacenan por separado.
