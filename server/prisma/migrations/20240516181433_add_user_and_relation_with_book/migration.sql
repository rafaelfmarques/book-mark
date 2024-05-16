-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_BookFavoritedToUser" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "_BookFavoritedToUser_AB_unique" ON "_BookFavoritedToUser"("A", "B");

-- CreateIndex
CREATE INDEX "_BookFavoritedToUser_B_index" ON "_BookFavoritedToUser"("B");

-- AddForeignKey
ALTER TABLE "_BookFavoritedToUser" ADD CONSTRAINT "_BookFavoritedToUser_A_fkey" FOREIGN KEY ("A") REFERENCES "BookFavorited"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_BookFavoritedToUser" ADD CONSTRAINT "_BookFavoritedToUser_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
