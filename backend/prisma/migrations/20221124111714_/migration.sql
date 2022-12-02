/*
  Warnings:

  - The primary key for the `signup` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- AlterTable
ALTER TABLE "signup" DROP CONSTRAINT "signup_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "signup_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "signup_id_seq";
