import {
    MidaPlugin,
    MidaPluginActions,
} from "@reiryoku/mida";

export class MidaPluginExample extends MidaPlugin {
    public constructor () {
        super({
            id: "plugin-example", // Your plugin id.
            name: "Plugin Example", // Your plugin name.
            description: "", // Your plugin description.
            version: "1.0.0", // Your plugin version.
        });
    }

    override install (actions: MidaPluginActions): void {
        // Silence is golden.
    }
}
