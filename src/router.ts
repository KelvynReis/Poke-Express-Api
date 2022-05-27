import { Router } from "express";
import createPokemon from "./controller/createPokemon.controller";

import findAll from "./controller/findAll.controller";

const router = Router();

router.get('/:id', findAll);
router.post('/pokemon', createPokemon);

export { router }