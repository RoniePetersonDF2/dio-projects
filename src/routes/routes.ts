import { Router, Request, Response  } from "express";
import * as playersController from "../controllers/players-controller";
import * as clubsController from "../controllers/clubs-controller";

const router = Router();

router.get("/", (req: Request, res: Response) => {
    res.json({ message: "API is running!"});
});

router.get("/players", playersController.getPlayer);
router.post("/players", playersController.postPlayer);
router.delete("/players/:id", playersController.deletePlayer);
router.patch("/players/:id", playersController.updatePlayer);
router.get("/players/:id", playersController.getPlayerById);

router.get("/clubs", clubsController.getClubs);

export default router;