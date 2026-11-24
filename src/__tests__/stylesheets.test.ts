import { readFileSync, readdirSync, statSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";

/**
 * A stylesheet split into partials (`styles/<name>.css` importing
 * `styles/<name>/*.css`) ships only the partials its index imports. A partial
 * left out would drop its rules from the site without a build error.
 */
const STYLES = join(process.cwd(), "src", "styles");
const IMPORT = /^@import "\.\/([\w-]+)\/([\w-]+\.css)";$/gm;

const splitSheets = readdirSync(STYLES).filter((name) => statSync(join(STYLES, name)).isDirectory());

describe("split stylesheets", () => {
  it("exist (global.css at least)", () => {
    expect(splitSheets).toContain("global");
  });

  for (const name of splitSheets) {
    it(`${name}.css imports every partial under ${name}/ exactly once`, () => {
      const index = readFileSync(join(STYLES, `${name}.css`), "utf8").replace(/\r\n/g, "\n");
      const imported = [...index.matchAll(IMPORT)].map(([, dir, file]) => {
        expect(dir).toBe(name);
        return file;
      });
      expect([...imported].sort()).toEqual(readdirSync(join(STYLES, name)).sort());
      expect(new Set(imported).size).toBe(imported.length);
      // Nothing but comments, imports and Tailwind's @source: the rules live in the partials.
      const rest = index
        .replace(/\/\*[\s\S]*?\*\//g, "")
        .replace(IMPORT, "")
        .replace(/^@(import|source) "[^"]+";$/gm, "");
      expect(rest.trim()).toBe("");
    });
  }
});
