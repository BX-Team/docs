import type { Plugin } from "vite";

export function CodeTabsServerPlugin(): Plugin {
    return {
        name: "@docs/codetabs-sync",
        enforce: "pre",
        transform(code, id) {
            if (!id.endsWith(".md")) {
                return null;
            }

            return `${code}\n\n<CodeTabsSyncComponent/>`;
        },
    };
}
