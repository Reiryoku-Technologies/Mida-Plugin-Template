import { MyPlugin } from "!/src/core/MyPlugin";

export default new MyPlugin({
    id: "my-plugin", // Plugin id, required
    name: "My Plugin", // Plugin name, required
    version: "1.0.0", // Plugin version, required
    description: "This plugin does nothing.", // Plugin description, optional
});
