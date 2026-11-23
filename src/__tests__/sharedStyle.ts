import { readFileSync } from "node:fs";
import { dirname, join } from "node:path";

const SHARED_STYLES = join(process.cwd(), "node_modules", "@tracht-digital-labs", "tds-shared", "styles");

/**
 * For tests: an INSTALLED tds-shared stylesheet with its own partials inlined.
 * Since tds-shared splits its large sheets (`primitives.css` imports
 * `./primitives/*.css`), a rule can sit in a partial; a sheet that is not
 * split reads as it is.
 */
export function readSharedStyle(subpath: string): string {
  const file = join(SHARED_STYLES, subpath);
  return readFileSync(file, "utf8").replace(/^@import "(\.\/[\w-]+\/[\w-]+\.css)";\r?$/gm, (_, partial: string) =>
    readFileSync(join(dirname(file), partial), "utf8"),
  );
}
