import { generateSidebar } from "vitepress-sidebar";

import {
    type Sidebar,
    type SidebarItem,
    type VitePressSidebarOptions,
} from "vitepress-sidebar/types";

export function createSidebar(): Sidebar {
    const sidebar = generateSidebar(vitepressSidebarOptions);
    return postProcessSidebar(sidebar);
}

const vitepressSidebarOptions: VitePressSidebarOptions[] = [
    createSidebarOptions("/documentation/divinemc/", [
        "administration",
        "configuration.md",
        "getting-started.md",

        "development",
        "contributing.md",
    ]),

    createSidebarOptions("/documentation/ndailyrewards/", [
        "configuration",
        "files.md",
        "placeholders.md",

        "usage",
        "commands.md",

        "development",
        "events.md",
    ]),

    createSidebarOptions("/documentation/realworldsync/", [
        "documentation",
        "commands.md",
        "config-files.md",
        "placeholders.md",

        "guides",
        "setting-up-plugin.md",
        "setting-up-weather-sync.md",
    ]),
];

function createSidebarOptions(
    path: string,
    sort: string[]
): VitePressSidebarOptions {
    return {
        documentRootPath: "docs",
        basePath: "/",
        scanStartPath: path,
        resolvePath: path,
        keepMarkdownSyntaxFromTitle: true,
        useTitleFromFileHeading: true,
        sortMenusOrderByDescending: true,
        capitalizeFirst: true,
        hyphenToSpace: true,
        manualSortFileNameByPriority: sort,
    };
}

function postProcessSidebar(sidebar: Sidebar): Sidebar {
    if (Array.isArray(sidebar)) {
        return sidebar;
    }

    sidebar["/documentation/introduction/"] = {
        base: "/documentation/",
        items: [
            {
                text: "Projects",
                link: "/introduction/projects",
                items: [
                    { text: "DivineMC", link: "/divinemc" },
                    { text: "NDailyRewards", link: "/ndailyrewards" },
                    { text: "RealWorldSync", link: "/realworldsync" },
                ],
            },
        ],
    };

    for (const [, sidebarMultiItem] of Object.entries(sidebar)) {
        processItem(sidebarMultiItem);
    }

    return sidebar;
}

function processItem(sidebarItem: SidebarItem) {
    if (!sidebarItem.items) {
        return;
    }

    let foldersAndFile = new Map<SidebarItem, SidebarItem>();

    for (let folder of sidebarItem.items) {
        if (folder.link || folder.text === undefined) {
            continue;
        }

        const file = sidebarItem.items.find((i) =>
            i.link?.endsWith(`/${folder.text!.toLowerCase()}`)
        );

        if (file) {
            foldersAndFile.set(folder, file);
        }
    }

    foldersAndFile.forEach((file, folder) => {
        folder.link = file.link;
        folder.text = file.text;
        sidebarItem.items = sidebarItem.items!.filter((i) => i !== file);
    });

    for (let sideBarItem of sidebarItem.items) {
        processItem(sideBarItem);
    }
}
