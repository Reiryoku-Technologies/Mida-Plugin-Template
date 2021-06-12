import { MyPlugin } from "!/src/core/MyPlugin";

export default new MyPlugin({
    // Your plugin id, required.
    id: "my-plugin",
    // Your plugin name, required.
    name: "My Plugin",
    // Your plugin version, required.
    version: "1.0.0",
    // Your plugin description, optional.
    description: "This plugin does nothing.",
});
