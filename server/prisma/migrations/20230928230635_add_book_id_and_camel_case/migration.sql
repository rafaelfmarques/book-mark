/*
  Warnings:

  - A unique constraint covering the columns `[bookId]` on the table `BookFavorited` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `bookId` to the `BookFavorited` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "BookFavorited" ADD COLUMN     "bookId" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "BookFavorited_bookId_key" ON "BookFavorited"("bookId");
