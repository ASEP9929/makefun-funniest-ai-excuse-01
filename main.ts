import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "Your task is done — it's just in a tab I closed, a file called 'untitled (17)', and a backup that backed up my grocery list instead.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
