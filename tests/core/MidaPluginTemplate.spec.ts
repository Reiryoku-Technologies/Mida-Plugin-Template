import { MidaPlugin } from "@reiryoku/mida";

describe("MidaPluginTemplate", () => {
    describe("module", () => {
        it("exports a MidaPlugin instance", () => {
            expect(require("!/src/core/MidaPluginTemplate") instanceof MidaPlugin).toBe(true);
        });
    });
});
