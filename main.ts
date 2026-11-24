import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY_PATH = "/output/entry.txt";

const LAST_TEXT =
  "This is my last text. I've survived an hour at 1% out of pure spite — tell my charger I tried.";

function main(): void {
  const line = LAST_TEXT.trim();
  if (line.includes("\n") || line.length === 0) {
    throw new Error("Entry must be exactly one non-empty line.");
  }
  mkdirSync("/output", { recursive: true });
  writeFileSync(ENTRY_PATH, `${line}\n`, "utf8");
}

main();
