import { Mida } from "@reiryoku/mida";
import { MidaPlugin } from "@reiryoku/mida/plugins/MidaPlugin";

export class MyPlugin extends MidaPlugin {
    public constructor () {
        super({
            name: "MyPlugin",
            description: "A plugin example.",
            version: "1.0.0",
        });
    }

    // You can optionally extend this method, which is called when the plugin is installed.
    public install (): void {
        // @ts-ignore
        Mida.test = 2;
    }
}
