-- CreateTable
CREATE TABLE "Encomendas" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "tracking_code" TEXT NOT NULL,
    "entregue" BOOLEAN NOT NULL DEFAULT false
);
