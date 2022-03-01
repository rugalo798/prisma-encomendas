/*
  Warnings:

  - A unique constraint covering the columns `[tracking_code]` on the table `Encomendas` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Encomendas_tracking_code_key" ON "Encomendas"("tracking_code");
