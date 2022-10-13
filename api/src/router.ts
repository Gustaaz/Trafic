import { Router } from "express";
import PostController from "./controllers/PostController";

const router = Router()

router.post("/post", PostController.create)
router.put("/post", PostController.update)
router.delete("/post", PostController.delete)
router.get("/post/unique", PostController.findUnique)
router.get("/post/many", PostController.findMany)


export { router }