# Configurar IA

Skribane te da control total sobre qué inteligencia artificial usas y cómo. Tú eliges el proveedor, el modelo y los límites de gasto. Tus API keys se almacenan de forma segura en tu equipo y nunca se envían a ningún servidor de Skribane.

## Acceder a la configuración

Haz clic en **Config** en la parte inferior de la barra lateral izquierda.

## Proveedores de IA en la nube

Skribane soporta tres proveedores de IA, cada uno con sus propias ventajas:

### OpenAI

- **Modelos:** GPT-4o (premium), GPT-4o mini (rápido y económico)
- **Ventana de contexto:** 128K tokens
- **Obtener API key:** [platform.openai.com/api-keys](https://platform.openai.com/api-keys)
- **Formato de la key:** Empieza por `sk-`

### Google Gemini

- **Modelos:** Gemini 2.5 Flash (rápido), Gemini 2.5 Pro (premium)
- **Ventana de contexto:** Hasta 1M tokens
- **Obtener API key:** [aistudio.google.com/apikey](https://aistudio.google.com/apikey)
- **Formato de la key:** Empieza por `AIza`

### Anthropic Claude

- **Modelos:** Sonnet 4 (equilibrado), Haiku 4.5 (rápido y económico)
- **Ventana de contexto:** 200K tokens
- **Obtener API key:** [console.anthropic.com/settings/keys](https://console.anthropic.com/settings/keys)
- **Formato de la key:** Empieza por `sk-ant-`

Para configurar un proveedor, introduce tu API key en el campo correspondiente y haz clic en guardar. La key se almacena en un archivo local seguro en tu equipo, nunca en la base de datos ni en la nube.

## IA local (gratuita)

Si prefieres no usar proveedores en la nube, puedes ejecutar modelos de IA en tu propio equipo con:

- **[LM Studio](https://lmstudio.ai/)** — Aplicación de escritorio para ejecutar modelos locales.
- **[Ollama](https://ollama.com/)** — Herramienta de línea de comandos para modelos locales.

Para configurar IA local en Skribane:

1. En la sección Config, activa la opción de **IA local**.
2. Introduce la URL de tu servidor local.

::: warning Importante
La URL debe incluir `/v1` al final. Por ejemplo: `http://localhost:1234/v1`. Sin esta terminación, la conexión no funcionará.
:::

La calidad de los modelos locales depende de la potencia de tu equipo. Para novelas, se recomienda un modelo de al menos 7B parámetros. Los modelos más pequeños (< 4B) pueden dar resultados incoherentes para tareas de escritura creativa.

## Selección de modelo

Puedes elegir entre los modelos curados (2 por proveedor) o escribir un **model ID personalizado** para usar cualquier modelo nuevo que el proveedor ofrezca, sin esperar a una actualización de Skribane.

La información de cada modelo muestra: ventana de contexto y coste aproximado por 1K tokens (entrada y salida).

::: tip Catálogo remoto
Skribane actualiza automáticamente el catálogo de modelos disponibles al arrancar la app (si hay conexión a internet). Esto permite añadir modelos nuevos o retirar modelos deprecados sin necesidad de actualizar la aplicación.
:::

## Tokens máximos por petición

Configura el número máximo de tokens que la IA puede generar en cada respuesta (entre 100 y 16.000). Un valor mayor permite respuestas más largas pero consume más créditos.

Para referencia: 1.000 tokens equivalen aproximadamente a 750 palabras.

## Presupuesto mensual

Puedes establecer un presupuesto mensual en euros. Cuando se alcance el límite, Skribane bloqueará las peticiones de IA hasta el siguiente mes. Pon 0 para desactivar el límite.

El contador de uso mensual se reinicia automáticamente al comenzar cada mes.

## Kill switch

El kill switch desactiva toda la funcionalidad de IA de un golpe. Útil si quieres escribir sin asistencia de IA durante un período o si necesitas controlar el gasto. Todos los botones de IA se desactivan y no se envía ninguna petición.

## Seguridad de las API keys

Tus API keys se almacenan localmente en un archivo seguro en la carpeta de datos de la aplicación, separado de la base de datos. Nunca se envían a servidores de Skribane — van directamente desde tu equipo al proveedor de IA elegido.

Las keys se muestran enmascaradas en la interfaz (ej: `sk-proj-••••••••89`) para protegerlas de miradas indiscretas.

## Perfil de estilo

En **Opciones** (barra lateral) puedes configurar un perfil de estilo que la IA usará como guía:

- **Tono** — Literario, coloquial, formal, poético, etc.
- **Detalle** — Conciso, equilibrado, detallado.
- **Referencia** — Nombre de un autor cuyo estilo admires como guía.
- **Instrucciones libres** — Cualquier indicación adicional para la IA.

También puedes analizar un documento .docx de referencia con la función "Analizar .docx" para que la IA extraiga automáticamente el perfil de estilo.
