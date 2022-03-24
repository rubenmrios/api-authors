import { resolve } from "path";
import { config as getEnvConfig } from "dotenv";
if (process.env.NODE_ENV === "development") {
    getEnvConfig({ path: `${resolve("etc/env/dev.env")}` });
}
import "../src/index";