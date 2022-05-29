import { Request, Response } from "express";
import { prismaClient } from "../database/prismaClient";

async function updateOne(req: Request, res: Response) {
  const { id } = req.params;
  const { name, description } = req.body;
  const updatePokemon = await prismaClient.pokemon.update({
    where: {
      id: id,
    },
    data: {
        name,
        description,
    }
  });

  return res.json(updatePokemon);
}

export default updateOne;