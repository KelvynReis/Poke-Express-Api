/*
  Warnings:

  - You are about to drop the column `id_pokemon` on the `types` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_types" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "power" DECIMAL NOT NULL,
    "pokemonId" TEXT,
    CONSTRAINT "types_pokemonId_fkey" FOREIGN KEY ("pokemonId") REFERENCES "pokemons" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_types" ("id", "power") SELECT "id", "power" FROM "types";
DROP TABLE "types";
ALTER TABLE "new_types" RENAME TO "types";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
