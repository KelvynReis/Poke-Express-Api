import { Request , Response } from "express";
import { prismaClient } from '../database/prismaClient';


async function createPokemon (req: Request, res:Response){

   const {name, type, description, power, nameType}  = req.body

   const pokemon = await prismaClient.pokemon.create({
       data:{
           name,
           description,
           types:{
                create:{
                    power,
                    name: nameType
                }
           }
       }
   })

   return res.status(201).json(pokemon)
}

export default createPokemon;