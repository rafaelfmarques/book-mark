/*
  Warnings:

  - You are about to drop the `BookFavorited` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_BookFavoritedToUser` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_BookFavoritedToUser" DROP CONSTRAINT "_BookFavoritedToUser_A_fkey";

-- DropForeignKey
ALTER TABLE "_BookFavoritedToUser" DROP CONSTRAINT "_BookFavoritedToUser_B_fkey";

-- DropTable
DROP TABLE "BookFavorited";

-- DropTable
DROP TABLE "_BookFavoritedToUser";

-- CreateTable
CREATE TABLE "Book" (
    "id" TEXT NOT NULL,
    "rating" INTEGER NOT NULL,
    "bookId" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "publishedDate" TEXT NOT NULL,
    "publisher" TEXT NOT NULL,
    "smallThumb" TEXT NOT NULL,
    "thumb" TEXT NOT NULL,
    "authors" TEXT[],

    CONSTRAINT "Book_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BooksFavoriteds" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "bookId" TEXT NOT NULL,

    CONSTRAINT "BooksFavoriteds_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "BooksFavoriteds" ADD CONSTRAINT "BooksFavoriteds_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BooksFavoriteds" ADD CONSTRAINT "BooksFavoriteds_bookId_fkey" FOREIGN KEY ("bookId") REFERENCES "Book"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
