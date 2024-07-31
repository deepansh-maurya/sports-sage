-- CreateTable
CREATE TABLE "Testimonials" (
    "id" SERIAL NOT NULL,
    "content" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "Testimonials_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Testimonials" ADD CONSTRAINT "Testimonials_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
