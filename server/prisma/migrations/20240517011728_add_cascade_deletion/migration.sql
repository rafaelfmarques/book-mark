-- DropForeignKey
ALTER TABLE "BooksFavoriteds" DROP CONSTRAINT "BooksFavoriteds_bookId_fkey";

-- DropForeignKey
ALTER TABLE "BooksFavoriteds" DROP CONSTRAINT "BooksFavoriteds_userId_fkey";

-- AddForeignKey
ALTER TABLE "BooksFavoriteds" ADD CONSTRAINT "BooksFavoriteds_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BooksFavoriteds" ADD CONSTRAINT "BooksFavoriteds_bookId_fkey" FOREIGN KEY ("bookId") REFERENCES "Book"("id") ON DELETE CASCADE ON UPDATE CASCADE;
