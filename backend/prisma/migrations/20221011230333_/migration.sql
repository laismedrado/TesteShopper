-- Active: 1660692261328@@localhost@5432
-- AlterTable
CREATE SEQUENCE "order_id_seq";
ALTER TABLE "Order" ALTER COLUMN "id" SET DEFAULT nextval('order_id_seq');
ALTER SEQUENCE "order_id_seq" OWNED BY "Order"."id";

-- AlterTable
CREATE SEQUENCE "order_products_id_seq";
ALTER TABLE "Order_Products" ALTER COLUMN "id" SET DEFAULT nextval('order_products_id_seq');
ALTER SEQUENCE "order_products_id_seq" OWNED BY "Order_Products"."id";
