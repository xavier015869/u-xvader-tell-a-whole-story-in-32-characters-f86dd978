import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The entry: one Wi-Fi network name of at most 32 characters that lands
// a joke and hints at a whole story. A marriage ended; the Wi-Fi outlived
// it. Situation, characters, and something that happened, in one line.
const ENTRY = "Our WiFi survived the divorce";

// The gate is strict: /output/entry.txt must hold 1 to 32 characters and
// not be only whitespace. Fail loudly instead of shipping an invalid entry,
// and write the text with no trailing newline so the byte count is exactly
// the character count.
if (ENTRY.length < 1 || ENTRY.length > 32 || ENTRY.trim().length === 0) {
  throw new Error(
    `entry must be 1-32 non-blank characters, got ${ENTRY.length}: ${JSON.stringify(ENTRY)}`,
  );
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
