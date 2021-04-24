import {
    MidaBroker,
    MidaPlugin,
} from "@reiryoku/mida";

// Export your plugin instance as follows, name the constant as your plugin name.
export const MidaPluginTemplate: MidaPlugin = new MidaPlugin({
    name: "MidaPluginTemplate",
    description: "A Mida plugin template.",
    version: "1.0.0",

    install (): void {
        // @ts-ignore
        MidaBroker.aa = 55;
    },
});
