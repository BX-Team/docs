import { defineConfig, type DefaultTheme } from 'vitepress'

export default defineConfig({
  title: "BX Team Documentation",
  description: "Documentation for all BX Team projects.",

  srcDir: './src',
  cleanUrls: true,
  lastUpdated: true,

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
