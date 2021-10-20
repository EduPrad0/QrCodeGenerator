/*
  Warnings:

  - You are about to drop the column `imagens` on the `Products` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Products" DROP COLUMN "imagens",
ADD COLUMN     "fileImg" TEXT;
