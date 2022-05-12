import { Request , Response } from "express";


function findAll (req: Request, res:Response){

   return res.send('ola server')
}

export default findAll;