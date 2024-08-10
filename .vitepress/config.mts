import { defineConfig, type DefaultTheme } from 'vitepress'
import { GitChangelog, GitChangelogMarkdownSection } from '@nolebase/vitepress-plugin-git-changelog/vite'

export default defineConfig({
  vite: {
    plugins: [ 
      GitChangelog({ 
        repoURL: () => 'https://github.com/BX-Team/docs', 
      }), 
      GitChangelogMarkdownSection(), 
    ],

    optimizeDeps: {
      include: [
        '@nolebase/vitepress-plugin-enhanced-readabilities > @nolebase/ui > @rive-app/canvas',
      ],
      exclude: [
        '@nolebase/vitepress-plugin-enhanced-readabilities/client',
      ],
    },
    ssr: {
      noExternal: [
        '@nolebase/vitepress-plugin-enhanced-readabilities',
      ],
    },
  },
  srcDir: './src',
  cleanUrls: true,

  title: "BX Team Documentation",
  description: "Documentation for all BX Team projects.",

  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { name: 'darkreader-lock' }],
  ],

  themeConfig: {
    externalLinkIcon: true,
    logo: 'logo.png',
    nav: nav(),
    sidebar: {
      '/divinemc/': { base: '/divinemc/', items: sidebarDivineMC() },
      '/ndailyrewards/': { base: '/ndailyrewards/', items: sidebarNDailyRewards() },
      '/realworldsync/': { base: '/realworldsync/', items: sidebarRealWorldSync() },
    },

    editLink: {
      pattern: 'https://github.com/BX-Team/docs/edit/master/src/:path',
    },

    socialLinks: [
      { icon: 'discord', link: 'https://discord.gg/p7cxhw7E2M' },
      { icon: 'github', link: 'https://github.com/BX-Team' },
    ],

    footer: {
      message: 'All documentation are licensed under CC BY-SA 4.0',
      copyright: '© 2024 BX Team',
    },

    search: {
      provider: 'local'
    }
  },

  sitemap: {
    hostname: 'https://docs.bx-team.space',
  },
})

function nav(): DefaultTheme.NavItem[] {
  return [
    {
      text: 'Home',
      link: '/',
    },
    {
      text: 'More',
      items: [
        {
          text: 'Modrinth',
          link: 'https://modrinth.com/organization/bx-team',
        },
        {
          text: 'Maven repository',
          link: 'https://repo.bx-team.space',
        }
      ],
    },
  ]
}

function sidebarDivineMC(): DefaultTheme.SidebarItem[] {
  return [
    {
      items: [
        { text: 'Overview', link: '/' }
      ]
    },
    {
      text: 'Administration',
      items: [
        { text: 'Getting Started', link: '/admin/getting-started' },
        { text: 'Configuration', link: '/admin/configuration' }
      ]
    },
    {
      text: 'Development',
      items: [
        { text: 'Contributing to DivineMC', link: '/dev/contributing' }
      ]
    }
  ]
}

function sidebarNDailyRewards(): DefaultTheme.SidebarItem[] {
  return [
    {
      items: [
        { text: 'Overview', link: '/' }
      ]
    },
    {
      text: 'Usage',
      items: [
        { text: 'Commands', link: '/usage/commands' }
      ]
    },
    {
      text: 'Configuration',
      items: [
        { text: 'Config & Modifications', link: '/configuration/files' },
        { text: 'Placeholders', link: '/configuration/placeholders' }
      ]
    },
    {
      text: 'API',
      items: [
        { text: 'Events', link: '/api/events' }
      ]
    }
  ]
}

function sidebarRealWorldSync(): DefaultTheme.SidebarItem[] {
  return [
    {
      items: [
        { text: 'Overview', link: '/' }
      ]
    },
    {
      text: 'Guides',
      items: [
        { text: 'Setting up plugin', link: '/guides/setting-up-plugin' },
        { text: 'Setting up time/weather sync', link: '/guides/setting-up-weather-sync' }
      ]
    },
    {
      text: 'Documentation',
      items: [
        { text: 'Commands', link: '/docs/commands' },
        { text: 'Config files', link: '/docs/config-files' },
        { text: 'Placeholders', link: '/docs/placeholders' }
      ]
    }
  ]
}
