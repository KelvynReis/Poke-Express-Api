import { Router } from "express";
import createPokemon from "./controller/createPokemon.controller";

import findAll from "./controller/findAll.controller";
import deleteOne from "./controller/deleteOne.controller";
import updateOne from "./controller/updateOne.controller";

const router = Router();

router.get('/:id', findAll);
router.post('/pokemon', createPokemon);
router.delete('/pokemon/:id', deleteOne);
router.put('/pokemon/:id', updateOne);

export { router }