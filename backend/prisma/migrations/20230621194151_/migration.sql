-- CreateTable
CREATE TABLE "Image" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "bytes" BLOB,
    "mimetype" TEXT NOT NULL,
    "productId" TEXT NOT NULL,
    CONSTRAINT "Image_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "Image_productId_key" ON "Image"("productId");
