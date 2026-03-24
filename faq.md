# Preguntas frecuentes

## General

### ¿Mis datos están seguros?

Sí. Skribane es una aplicación de escritorio — todos tus datos (novelas, Codex, configuración) se almacenan localmente en tu equipo. No hay servidores de Skribane almacenando tu contenido. Tus API keys de IA se guardan en un archivo local seguro, separado de la base de datos.

### ¿Necesito conexión a internet?

Solo para las funciones de IA que usan proveedores en la nube (OpenAI, Gemini, Anthropic). Puedes escribir, organizar, editar y exportar tu novela completamente offline. Si usas IA local (LM Studio, Ollama), tampoco necesitas internet para la IA.

### ¿En qué idiomas puedo escribir?

Puedes escribir tu novela en cualquier idioma. La interfaz de Skribane está disponible en español e inglés. La IA genera texto en el mismo idioma en que escribes tu novela — si escribes en inglés, la IA responde en inglés.

### ¿Puedo tener varios proyectos a la vez?

Sí. Puedes crear tantos proyectos (novelas) como quieras. Cada proyecto tiene su propio Codex, estructura, estadísticas y configuración de IA. Cambia entre proyectos desde la sección "Proyectos" en la barra lateral.

## Licencia y trial

### ¿Cuánto dura la prueba gratuita?

21 días, con todas las funcionalidades desbloqueadas. No necesitas registrarte ni dar datos de pago.

### ¿Qué pasa cuando termina el trial?

Se muestra una pantalla de activación. Necesitas una suscripción activa para seguir usando Skribane. Tus datos nunca se borran y siempre puedes exportar tu manuscrito, incluso sin suscripción. Más detalles en [Licencia y activación](/licensing).

### ¿Cómo funciona la suscripción?

Skribane funciona con suscripción: **11,99 €/mes** o **9,99 €/mes** con el plan anual (119,88 €/año). Mientras tu suscripción esté activa, recibes todas las actualizaciones (nuevas funcionalidades, correcciones, seguridad).

### ¿Qué pasa si cancelo mi suscripción?

Tienes acceso hasta el final del período pagado. Después se muestra una pantalla de bloqueo. Siempre puedes exportar tu manuscrito y tus datos nunca se borran.

### ¿En cuántos equipos puedo usar mi licencia?

En hasta 2 equipos simultáneamente. Si necesitas cambiar de equipo, desactiva la licencia en el anterior y actívala en el nuevo. Más detalles en [Licencia y activación](/licensing).

### He perdido mi license key

La license key te llegó por email tras la compra. Busca un correo de Lemon Squeezy. Si no lo encuentras, escribe a contacto@skribane.com con los datos de tu compra.

## Inteligencia Artificial

### ¿Cuánto cuesta usar la IA?

Skribane no cobra por el uso de IA. Tú pagas directamente al proveedor (OpenAI, Google, Anthropic) según tu uso. El coste típico para escritura de novelas es de 5-15€ al mes. Puedes establecer un presupuesto mensual en Skribane para controlar el gasto.

### ¿Puedo usar IA gratis?

Sí, con modelos locales. Instala [LM Studio](https://lmstudio.ai/) u [Ollama](https://ollama.com/), descarga un modelo (7B+ parámetros recomendado) y conéctalo a Skribane. La calidad depende de tu hardware, pero es completamente gratuito.

### ¿La IA va a escribir mi novela por mí?

No. Skribane usa la IA como copiloto: te ayuda a generar borradores, mejorar texto, mantener la coherencia y superar bloqueos creativos. Tú tomas todas las decisiones creativas. Cada sugerencia de la IA se muestra en un panel de previsualización donde decides si aceptar, descartar o regenerar.

### ¿Qué modelo debo elegir?

Depende de tu presupuesto y prioridades:

- **GPT-4o** o **Gemini 2.5 Pro** — Mejor calidad, más caro.
- **GPT-4o mini** o **Gemini 2.5 Flash** — Buen equilibrio calidad/precio para uso diario.
- **Claude Sonnet 4** — Excelente para texto largo y coherente.
- **Claude Haiku 4.5** — Rápido y económico.

Si no sabes por dónde empezar, GPT-4o mini o Gemini 2.5 Flash son buenas opciones iniciales con bajo coste.

### La IA genera texto que no respeta el POV o el tiempo verbal

Asegúrate de tener configurados el POV y el tiempo verbal en Opciones. Skribane inyecta estas instrucciones en el prompt, pero algunos modelos (especialmente los locales pequeños) pueden ignorarlas. Los modelos cloud (GPT-4o, Gemini 2.5, Claude Sonnet) las siguen bien.

### La IA no conoce mis personajes

Asegúrate de que tus personajes están en el Codex con nombres y descripciones completas. La IA selecciona automáticamente las entradas más relevantes para cada escena. Si un personaje importante no aparece en el contexto, puedes asignarlo manualmente a la escena desde la cabecera del editor (personajes por escena), o marcarlo como "Incluir siempre en IA" en su entrada del Codex.

## Importación

### Mi documento Word se importa como un solo capítulo

Esto ocurre cuando el documento no tiene encabezados con estilos de Word (Título 1, Título 2). Skribane intenta detectar patrones como "Capítulo 1: Título", pero si no los encuentra, importa todo como una sola escena. Soluciones:

1. Usa el botón **Reorganizar con IA** para que la IA detecte la estructura narrativa.
2. Usa la previsualización editable para dividir el contenido manualmente.
3. Añade encabezados en Word antes de importar (H1 = capítulos, H2 = escenas).

## Instalación

### Windows SmartScreen bloquea el instalador

Esto ocurre porque el instalador aún no tiene firma de código. Haz clic en "Más información" y luego en "Ejecutar de todas formas". Tus datos están completamente seguros — Skribane es una aplicación de escritorio local que no accede a datos fuera de su propia carpeta.

### ¿Dónde se guardan mis datos?

En la carpeta de datos de la aplicación de tu sistema operativo:

- **Windows:** `C:\Users\TuUsuario\AppData\Roaming\com.skribane.app\`

Esta carpeta contiene la base de datos (`skribane.db`) y el archivo de API keys. No se incluye en la desinstalación normal, por lo que tus datos sobreviven a una reinstalación.

### ¿Cómo actualizo Skribane?

Skribane comprueba automáticamente si hay actualizaciones al arrancar. Si hay una disponible, verás un punto amarillo en el botón "Skribane v1.0.0" en la barra lateral. Haz clic para abrir el panel "Acerca de" donde puedes descargar e instalar la actualización.

Se recomienda crear una copia de seguridad antes de actualizar.
