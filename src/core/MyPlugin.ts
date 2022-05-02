import {
    MidaPlugin,
    MidaPluginActions,
} from "@reiryoku/mida";

export class MyPlugin extends MidaPlugin {
    public constructor () {
        super({
            id: "my-plugin", // Plugin id, required
            name: "My Plugin", // Plugin name, required
            version: "1.0.0", // Plugin version, required
            description: "This plugin does nothing.", // Plugin description, optional
        });
    }

    public override install (actions: MidaPluginActions): void {
        // actions.addBroker. . .
        // actions.addIndicator. . .
    }
}
