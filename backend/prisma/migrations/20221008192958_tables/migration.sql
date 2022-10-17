/*
  Warnings:

  - You are about to drop the column `product_id` on the `Order_Products` table. All the data in the column will be lost.
  - Added the required column `productId` to the `Order_Products` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Order_Products" DROP CONSTRAINT "Order_Products_product_id_fkey";

-- AlterTable
ALTER TABLE "Order_Products" DROP COLUMN "product_id",
ADD COLUMN     "productId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "Order_Products" ADD CONSTRAINT "Order_Products_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Products"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
