import {
    MidaPlugin,
    MidaPluginActions,
    MidaPluginParameters,
} from "@reiryoku/mida";

export class MyPlugin extends MidaPlugin {
    public constructor ({
        id,
        name,
        version,
        description,
    }: MidaPluginParameters) {
        super({
            id,
            name,
            version,
            description,
        });
    }

    public override install (actions: MidaPluginActions): void {
        // Silence is golden.
    }
}
