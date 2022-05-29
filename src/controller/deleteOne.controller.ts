import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

async function deleteOne(req: Request, res: Response) {
  const { id } = req.params;
  const prismaClient = new PrismaClient();
  const deletePokemon = await prismaClient.pokemon.delete({
    where: {
      id: id,
    },
  });
  return res.json(deletePokemon);
}

export default deleteOne;