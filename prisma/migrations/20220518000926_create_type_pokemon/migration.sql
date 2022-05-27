/*
  Warnings:

  - You are about to drop the column `type` on the `pokemons` table. All the data in the column will be lost.

*/
-- CreateTable
CREATE TABLE "types" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "id_pokemon" TEXT NOT NULL,
    "power" DECIMAL NOT NULL,
    CONSTRAINT "types_id_pokemon_fkey" FOREIGN KEY ("id_pokemon") REFERENCES "pokemons" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_pokemons" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL
);
INSERT INTO "new_pokemons" ("description", "id", "name") SELECT "description", "id", "name" FROM "pokemons";
DROP TABLE "pokemons";
ALTER TABLE "new_pokemons" RENAME TO "pokemons";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
