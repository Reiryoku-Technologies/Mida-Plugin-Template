import {
    MidaPlugin,
    MidaPluginActions,
} from "@reiryoku/mida";

export class MyPlugin extends MidaPlugin {
    public constructor () {
        super({
            id: "my-plugin", // Your plugin id, required.
            name: "My Plugin", // Your plugin name, required.
            version: "1.0.0", // Your plugin version, required.
            description: "", // Your plugin description, optional.
        });
    }

    override install (actions: MidaPluginActions): void {
        // Silence is golden.
    }
}
