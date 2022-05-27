/*
  Warnings:

  - Added the required column `name` to the `types` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_types" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "power" DECIMAL NOT NULL,
    "pokemonId" TEXT,
    CONSTRAINT "types_pokemonId_fkey" FOREIGN KEY ("pokemonId") REFERENCES "pokemons" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_types" ("id", "pokemonId", "power") SELECT "id", "pokemonId", "power" FROM "types";
DROP TABLE "types";
ALTER TABLE "new_types" RENAME TO "types";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
