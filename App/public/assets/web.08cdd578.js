import { W as WebPlugin } from "./main.c44d3f46.js";
/* empty css                */class AppLauncherWeb extends WebPlugin {
  async canOpenUrl(_options) {
    return { value: true };
  }
  async openUrl(options) {
    window.open(options.url, "_blank");
    return { completed: true };
  }
}
export { AppLauncherWeb };
