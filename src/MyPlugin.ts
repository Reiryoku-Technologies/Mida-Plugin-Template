import { MidaPlugin, MidaPluginActions } from "@reiryoku/mida";

export const pluginId: string = "...";
export const pluginVersion: string = "1.0.0";

class MyPlugin extends MidaPlugin {
    public constructor () {
        super({
            id: pluginId,
            name: "My Plugin",
            description: "A Mida plugin",
            version: pluginVersion,
        });
    }

    public override install (actions: MidaPluginActions): void {
        // actions.addPlatform()
        // actions.addIndicator()
    }
}
