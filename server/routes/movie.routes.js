import express from "express"
import {auth} from '../middlewares/auth.js'
import {getMovie,getSub} from "../controllers/movie.controller.js"


const router = express.Router();

router.route("/:tmdb_id").get(auth,getMovie);
router.route("/subs/:tmdb_id/:language").get(getSub);



export default router;