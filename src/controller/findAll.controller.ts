import { Request , Response } from "express";
import { prismaClient } from "../database/prismaClient";


async function findAll (req: Request, res:Response){

   const { id } = req.params

   const pokemon = await prismaClient.pokemon.findMany({
      include:{
         types: true,
      }
   });

   return res.json(pokemon)
   
}

export default findAll;