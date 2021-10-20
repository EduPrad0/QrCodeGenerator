-- CreateTable
CREATE TABLE "Products" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "name" TEXT NOT NULL,
    "nameProduct" TEXT NOT NULL,
    "description" TEXT,
    "imagens" TEXT,

    CONSTRAINT "Products_pkey" PRIMARY KEY ("id")
);
