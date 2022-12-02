/*
  Warnings:

  - The values [USER] on the enum `Role` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "Role_new" AS ENUM ('NORMAL', 'ADMIN');
ALTER TABLE "signup" ALTER COLUMN "role" DROP DEFAULT;
ALTER TABLE "signup" ALTER COLUMN "role" TYPE "Role_new" USING ("role"::text::"Role_new");
ALTER TYPE "Role" RENAME TO "Role_old";
ALTER TYPE "Role_new" RENAME TO "Role";
DROP TYPE "Role_old";
ALTER TABLE "signup" ALTER COLUMN "role" SET DEFAULT 'NORMAL';
COMMIT;

-- AlterTable
ALTER TABLE "signup" ALTER COLUMN "role" SET DEFAULT 'NORMAL';
