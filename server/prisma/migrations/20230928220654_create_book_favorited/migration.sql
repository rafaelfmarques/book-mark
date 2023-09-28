-- CreateTable
CREATE TABLE "BookFavorited" (
    "id" TEXT NOT NULL,
    "rating" INTEGER NOT NULL,
    "title" TEXT NOT NULL,
    "subtitle" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "publishedDate" TEXT NOT NULL,
    "publisher" TEXT NOT NULL,
    "smallThumb" TEXT NOT NULL,
    "thumb" TEXT NOT NULL,
    "lang" TEXT NOT NULL,
    "categories" TEXT[],
    "authors" TEXT[],

    CONSTRAINT "BookFavorited_pkey" PRIMARY KEY ("id")
);
