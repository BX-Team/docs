import { defineConfig, type DefaultTheme } from "vitepress";

import { InlineLinkPreviewElementTransform } from "@nolebase/vitepress-plugin-inline-link-preview/markdown-it";
import {
    groupIconMdPlugin,
    groupIconVitePlugin,
} from "vitepress-plugin-group-icons";
import {
    GitChangelog,
    GitChangelogMarkdownSection,
} from "@nolebase/vitepress-plugin-git-changelog";
import { createSidebar } from "./sidebar-config";
import { CodeTabsServerPlugin } from "./codetabs/CodeTabsServerPlugin";

export default defineConfig({
    vite: {
        plugins: [
            GitChangelog({
                repoURL: () => "https://github.com/BX-Team/docs",
            }),
            GitChangelogMarkdownSection(),
            groupIconVitePlugin({
                customIcon: {
                    maven: "vscode-icons:file-type-maven",
                    groovy: "logos:gradle",
                    kotlin: "logos:kotlin-icon",
                },
            }),
            CodeTabsServerPlugin(),
        ],

        optimizeDeps: {
            exclude: [
                "@nolebase/vitepress-plugin-enhanced-readabilities/client",
                "@nolebase/client",
                "@nolebase/vitepress-plugin-inline-link-preview/client",
            ],
        },
        ssr: {
            noExternal: [
                "@nolebase/vitepress-plugin-enhanced-readabilities",
                "@nolebase/ui",
                "@nolebase/vitepress-plugin-inline-link-preview",
            ],
        },
    },
    cleanUrls: true,
    lastUpdated: true,
    ignoreDeadLinks: true,

    markdown: {
        lineNumbers: true,
        theme: {
            light: "github-light",
            dark: "catppuccin-macchiato",
        },
        config(md) {
            md.use(InlineLinkPreviewElementTransform);
            md.use(groupIconMdPlugin);
        },
    },

    title: "BX Team Documentation",
    description: "Documentation for all BX Team projects.",

    head: [
        ["link", { rel: "icon", href: "/assets/favicon.ico" }],
        ["meta", { name: "darkreader-lock" }],
    ],

    themeConfig: {
        externalLinkIcon: true,
        logo: "/assets/logo.png",
        nav: nav(),
        sidebar: createSidebar(),

        editLink: {
            pattern: "https://github.com/BX-Team/docs/edit/master/docs/:path",
            text: "Edit this page on GitHub",
        },

        socialLinks: [
            { icon: "discord", link: "https://discord.gg/p7cxhw7E2M" },
            { icon: "github", link: "https://github.com/BX-Team" },
        ],

        footer: {
            message: "All documentation are licensed under CC BY-SA 4.0",
            copyright: "© 2024 BX Team",
        },

        search: {
            provider: "local",
        },
    },

    sitemap: {
        hostname: "https://docs.bx-team.space",
    },
});

function nav(): DefaultTheme.NavItem[] {
    return [
        {
            text: "Home",
            link: "/",
        },
        {
            text: "More",
            items: [
                {
                    text: "Modrinth",
                    link: "https://modrinth.com/organization/bx-team",
                },
                {
                    text: "Maven repository",
                    link: "https://repo.bx-team.space",
                },
                {
                    text: "Status page",
                    link: "https://status.bx-team.space",
                },
            ],
        },
    ];
}
