import consola from "consola";
import { scrippetize } from "../scrippet";

import fs from "fs";
import path from "path";

const text = fs.readFileSync(path.resolve(__dirname, "./test.md"), "utf-8");

const convertedText = scrippetize(`[scrippet]\n${text}\n[/scrippet]`);
// consola.log(text);

consola.info("Converted Text:");
consola.log(convertedText);
