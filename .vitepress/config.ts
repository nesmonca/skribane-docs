import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Skribane',
  description: 'Documentación de Skribane — Escribe novelas con asistencia de IA',

  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
  ],

  cleanUrls: true,

  locales: {
    root: {
      label: 'Español',
      lang: 'es',
      themeConfig: {
        nav: [
          { text: 'Guía', link: '/quick-start' },
          { text: 'Descargar', link: 'https://www.skribane.com' },
        ],
        sidebar: [
          {
            text: 'Empezar',
            items: [
              { text: 'Inicio rápido', link: '/quick-start' },
              { text: 'Interfaz y navegación', link: '/interface' },
            ],
          },
          {
            text: 'Escribir',
            items: [
              { text: 'Modo Plan', link: '/plan-mode' },
              { text: 'Editor', link: '/editor' },
              { text: 'El Codex', link: '/codex' },
            ],
          },
          {
            text: 'Inteligencia Artificial',
            items: [
              { text: 'Asistencia IA', link: '/ai-assistance' },
              { text: 'Configurar IA', link: '/configure-ai' },
              { text: 'Chat IA', link: '/ai-chat' },
            ],
          },
          {
            text: 'Herramientas',
            items: [
              { text: 'Estadísticas', link: '/statistics' },
              { text: 'Importar y exportar', link: '/import-export' },
              { text: 'Backup', link: '/backup' },
              { text: 'Opciones', link: '/options' },
            ],
          },
          {
            text: 'Ayuda',
            items: [
              { text: 'Licencia y activación', link: '/licensing' },
              { text: 'Preguntas frecuentes', link: '/faq' },
            ],
          },
        ],
        outline: { label: 'En esta página' },
        docFooter: { prev: 'Anterior', next: 'Siguiente' },
        darkModeSwitchLabel: 'Tema',
        sidebarMenuLabel: 'Menú',
        returnToTopLabel: 'Volver arriba',
      },
    },
    en: {
      label: 'English',
      lang: 'en',
      themeConfig: {
        nav: [
          { text: 'Guide', link: '/en/quick-start' },
          { text: 'Download', link: 'https://www.skribane.com' },
        ],
        sidebar: [
          {
            text: 'Get Started',
            items: [
              { text: 'Quick Start', link: '/en/quick-start' },
              { text: 'Interface', link: '/en/interface' },
            ],
          },
          {
            text: 'Writing',
            items: [
              { text: 'Plan Mode', link: '/en/plan-mode' },
              { text: 'Editor', link: '/en/editor' },
              { text: 'The Codex', link: '/en/codex' },
            ],
          },
          {
            text: 'Artificial Intelligence',
            items: [
              { text: 'AI Assistance', link: '/en/ai-assistance' },
              { text: 'Configure AI', link: '/en/configure-ai' },
              { text: 'AI Chat', link: '/en/ai-chat' },
            ],
          },
          {
            text: 'Tools',
            items: [
              { text: 'Statistics', link: '/en/statistics' },
              { text: 'Import & Export', link: '/en/import-export' },
              { text: 'Backup', link: '/en/backup' },
              { text: 'Options', link: '/en/options' },
            ],
          },
          {
            text: 'Help',
            items: [
              { text: 'License & Activation', link: '/en/licensing' },
              { text: 'FAQ', link: '/en/faq' },
            ],
          },
        ],
        outline: { label: 'On this page' },
      },
    },
  },

  themeConfig: {
    logo: '/logo.svg',
    search: {
      provider: 'local',
      options: {
        locales: {
          root: {
            translations: {
              button: { buttonText: 'Buscar', buttonAriaLabel: 'Buscar' },
              modal: {
                noResultsText: 'Sin resultados para',
                resetButtonTitle: 'Limpiar búsqueda',
                footer: { selectText: 'Seleccionar', navigateText: 'Navegar', closeText: 'Cerrar' },
              },
            },
          },
        },
      },
    },
  },
})
