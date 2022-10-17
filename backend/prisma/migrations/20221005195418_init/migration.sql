-- Active: 1660692261328@@localhost@5432
-- CreateTable
CREATE TABLE "Shop_List" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "delivery_date" TIMESTAMP(3) NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Shop_List_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Shop_List_Items" (
    "id" TEXT NOT NULL,
    "shop_listId" TEXT NOT NULL,
    "product_id" INTEGER NOT NULL,
    "quantity" INTEGER NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "total_price" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "Shop_List_Items_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Product" (
    "id" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "qty_stock" INTEGER NOT NULL,

    CONSTRAINT "Product_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Shop_List_Items" ADD CONSTRAINT "Shop_List_Items_shop_listId_fkey" FOREIGN KEY ("shop_listId") REFERENCES "Shop_List"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Shop_List_Items" ADD CONSTRAINT "Shop_List_Items_product_id_fkey" FOREIGN KEY ("product_id") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
