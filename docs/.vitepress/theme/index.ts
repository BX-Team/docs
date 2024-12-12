import { h } from "vue";
import DefaultTheme from "vitepress/theme";
import type { Theme } from "vitepress";

import type { Options } from "@nolebase/vitepress-plugin-enhanced-readabilities/client";
import {
    InjectionKey as InjectEnhancedReadabilities,
    LayoutMode,
    NolebaseEnhancedReadabilitiesMenu,
    NolebaseEnhancedReadabilitiesScreenMenu,
} from "@nolebase/vitepress-plugin-enhanced-readabilities/client";
import "@nolebase/vitepress-plugin-enhanced-readabilities/client/style.css";

import { NolebaseInlineLinkPreviewPlugin } from "@nolebase/vitepress-plugin-inline-link-preview/client";
import "@nolebase/vitepress-plugin-inline-link-preview/client/style.css";

import {
    InjectionKey as InjectGitChangelog,
    NolebaseGitChangelogPlugin,
} from "@nolebase/vitepress-plugin-git-changelog/client";
import "@nolebase/vitepress-plugin-git-changelog/client/style.css";

import "@nolebase/vitepress-plugin-enhanced-mark/client/style.css";
import "./patches/enhanced-mark-patch.css";

import { CodeTabsClientPlugin } from "../codetabs/CodeTabsClientPlugin";

import SocialBlock from "../../components/discord/DiscordBlock.vue";

import "virtual:group-icons.css";
import "./index.css";
import "./patches/buttons-patch.css";
import "./patches/codetab-patch.css";
import "./patches/sidebar-patch.css";

export default {
    extends: DefaultTheme,
    Layout: () => {
        return h(DefaultTheme.Layout, null, {
            "aside-bottom": () => h(SocialBlock),
            "nav-bar-content-after": () => h(NolebaseEnhancedReadabilitiesMenu),
            "nav-screen-content-after": () =>
                h(NolebaseEnhancedReadabilitiesScreenMenu),
        });
    },
    enhanceApp({ app }) {
        app.use(NolebaseInlineLinkPreviewPlugin);
        app.use(NolebaseGitChangelogPlugin);
        app.use(CodeTabsClientPlugin());

        app.provide(InjectEnhancedReadabilities, {
            layoutSwitch: {
                defaultMode: LayoutMode.BothWidthAdjustable,
                pageLayoutMaxWidth: {
                    defaultMaxWidth: 90,
                },
                contentLayoutMaxWidth: {
                    defaultMaxWidth: 95,
                },
            },
        } as Options);
        app.provide(InjectGitChangelog, {
            hideContributorsHeader: true,
            hideChangelogHeader: true,
        });
    },
} satisfies Theme;
