import { Request , Response } from "express";
import api  from "../service/api";

async function findAll (req: Request, res:Response){

   await api.get('pokemon').then(response =>{
       const pokemon = response.data.results

       return res.json(pokemon)
   })
}

export default findAll;