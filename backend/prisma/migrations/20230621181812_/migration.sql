/*
  Warnings:

  - Added the required column `price` to the `Product` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Product" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "image_url" TEXT,
    "price" DECIMAL NOT NULL,
    "availability" BOOLEAN NOT NULL DEFAULT true,
    "categoryId" TEXT NOT NULL,
    CONSTRAINT "Product_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Product" ("availability", "categoryId", "id", "image_url", "name") SELECT "availability", "categoryId", "id", "image_url", "name" FROM "Product";
DROP TABLE "Product";
ALTER TABLE "new_Product" RENAME TO "Product";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
