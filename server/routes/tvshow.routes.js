import express from "express"
import {auth} from '../middlewares/auth.js'
import { getTVShow } from "../controllers/tvshow.controller.js";
import {getMovie, fetchSubs,getSub} from "../controllers/movie.controller.js"


const router = express.Router();

router.route("/:tmdb_id").get(auth,getTVShow);



export default router;