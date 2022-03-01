import { Request, Response } from "express";
import { prismaClient } from "../database/prismaClient";

export class EncomendaController {
  async create(request: Request, response: Response): Promise<Response> {
    const { name, tracking_code } = request.body;

    const encoAlreadyExists = await prismaClient.encomenda.findUnique({
      where: {
        tracking_code,
      },
    });

    if (encoAlreadyExists) {
      return response.status(401).json({ Error: "Essa Encomenda já Existe!" });
    }

    const encomenda = await prismaClient.encomenda.create({
      data: {
        name,
        tracking_code,
      },
    });

    return response.json(encomenda);
  }

  async getAll(request: Request, response: Response): Promise<Response> {
    const result = await prismaClient.encomenda.findMany();

    return response.json(result);
  }

  async getSent(request: Request, response: Response): Promise<Response> {
    const result = await prismaClient.encomenda.findMany({
      where: {
        entregue: true,
      },
    });

    return response.status(200).json(result);
  }
}
