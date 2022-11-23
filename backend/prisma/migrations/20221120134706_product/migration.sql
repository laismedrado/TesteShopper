-- Active: 1660692261328@@localhost@5432
-- AlterTable
CREATE SEQUENCE "products_id_seq";
ALTER TABLE "products" ALTER COLUMN "id" SET DEFAULT nextval('products_id_seq');
ALTER SEQUENCE "products_id_seq" OWNED BY "products"."id";
