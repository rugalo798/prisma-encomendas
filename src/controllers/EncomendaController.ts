import { Request, Response } from "express";
import { prismaClient } from "../database/prismaClient";

export class EncomendaController {

  // Metodo de cadastro de encomendas
  async create(request: Request, response: Response): Promise<Response> {
    const { name, tracking_code } = request.body;

    // Verificação se a encomenda já existe
    const encoAlreadyExists = await prismaClient.encomenda.findUnique({
      where: {
        tracking_code,
      },
    });

    if (encoAlreadyExists) {
      return response.status(401).json({ Error: "Essa Encomenda já Existe!" });
    }

    // Se a encomenda não existir, crie
    const encomenda = await prismaClient.encomenda.create({
      data: {
        name,
        tracking_code,
      },
    });

    // Retornando se a encomenda foi criada com um formato JSON
    return response.json(encomenda);
  }

  // Metodo para retornar todas as encomendas cadastradas em um JSON
  async getAll(request: Request, response: Response): Promise<Response> {
    const result = await prismaClient.encomenda.findMany();

    return response.json(result);
  }

  // Metodo para retornar todas as encomendas com status de entregue em um JSON
  async getSent(request: Request, response: Response): Promise<Response> {
    const result = await prismaClient.encomenda.findMany({
      where: {
        entregue: true,
      },
    });

    return response.status(200).json(result);
  }
}
