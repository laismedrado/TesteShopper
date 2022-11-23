-- Active: 1660692261328@@localhost@5432
/*
  Warnings:

  - You are about to drop the column `subtotal` on the `order_products` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "order_products" DROP COLUMN "subtotal";
