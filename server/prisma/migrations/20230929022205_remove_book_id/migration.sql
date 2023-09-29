/*
  Warnings:

  - You are about to drop the column `bookId` on the `BookFavorited` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "BookFavorited_bookId_key";

-- AlterTable
ALTER TABLE "BookFavorited" DROP COLUMN "bookId";
