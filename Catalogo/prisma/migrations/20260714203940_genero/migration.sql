-- CreateTable
CREATE TABLE "Genero" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "albumId" INTEGER NOT NULL,

    CONSTRAINT "Genero_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Genero" ADD CONSTRAINT "Genero_albumId_fkey" FOREIGN KEY ("albumId") REFERENCES "Album"("id") ON DELETE CASCADE ON UPDATE CASCADE;
