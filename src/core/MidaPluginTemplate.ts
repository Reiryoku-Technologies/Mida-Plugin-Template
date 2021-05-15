import {
    MidaPlugin,
    MidaPluginActions,
} from "@reiryoku/mida";

// The constant name "plugin" is required, do not change it.
export const plugin: MidaPlugin = new MidaPlugin({
    id: "plugin-template", // Your plugin id.
    name: "Plugin Template", // Your plugin name.
    description: "A Mida plugin template.", // Your plugin description.
    version: "1.0.0", // Your plugin version.

    install (actions: MidaPluginActions): void {
        // Silence is golden.
    },
});
