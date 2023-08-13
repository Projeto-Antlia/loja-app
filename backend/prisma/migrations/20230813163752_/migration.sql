/*
  Warnings:

  - A unique constraint covering the columns `[name]` on the table `products` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE INDEX `categories_name_id_idx` ON `categories`(`name`, `id`);

-- CreateIndex
CREATE INDEX `orders_customer_id_id_idx` ON `orders`(`customer_id`, `id`);

-- CreateIndex
CREATE UNIQUE INDEX `products_name_key` ON `products`(`name`);

-- CreateIndex
CREATE INDEX `products_name_id_idx` ON `products`(`name`, `id`);
