-- CreateTable
CREATE TABLE "Category" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "enable" BOOLEAN NOT NULL DEFAULT true,
    "show_menu" BOOLEAN NOT NULL DEFAULT false
);

-- CreateTable
CREATE TABLE "Product" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "image_url" TEXT,
    "availability" BOOLEAN NOT NULL DEFAULT true,
    "categoryId" TEXT NOT NULL,
    CONSTRAINT "Product_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "Category_name_key" ON "Category"("name");
