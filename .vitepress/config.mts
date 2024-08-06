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
  lastUpdated: true,

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
          text: 'Jenkins',
          link: 'https://jenkins.bx-team.space',
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
      text: 'Documentation',
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
      text: 'Guides',
      items: [
        { text: 'Commands', link: '/guides/commands' },
        { text: 'Configuration', link: '/guides/configuration' }
      ]
    },
    {
      text: 'Documentation',
      items: [
        { text: 'Placeholders', link: '/docs/placeholders' },
        { text: 'Custom Model Data', link: '/docs/model-data' },
        { text: 'HEX Colors', link: '/docs/hex-colors' },
        { text: 'Warmup system', link: '/docs/warmup' },
        { text: 'Custom Head Textures', link: '/docs/head-texture' },
      ]
    }
  ]
}
