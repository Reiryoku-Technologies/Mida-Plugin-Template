import { MidaPlugin } from "@reiryoku/mida";

describe("MidaPluginTemplate", () => {
    describe("core exports", () => {
        it("a MidaPlugin instance called plugin", () => {
            expect(require("#MidaPluginExample").plugin).toBeInstanceOf(MidaPlugin);
        });
    });
});
