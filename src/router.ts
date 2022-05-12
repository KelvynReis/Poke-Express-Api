import { Router } from "express";

import findAll from "./controller/findAll.controller";

const router = Router();

router.get('/', findAll)

export { router }