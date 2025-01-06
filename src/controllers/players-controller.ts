import { Request, Response } from "express";
import * as playerService from "../services/player-service";

export const getPlayer = async (req: Request, res: Response) => {
    const data = await playerService.getPlayerService();
    
    res.status(data.statusCode).json(data.body);
};

export const getPlayerById = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    const httpResponse = await playerService.getPlayerByIdService(id);

    res.status(httpResponse.statusCode).send(httpResponse.body);
}

export const postPlayer = async (req: Request, res: Response) => {
    const bodyValue = req.body;
    const httpResponse = await playerService.createPlayerService(bodyValue);

    res.status(httpResponse.statusCode).send(httpResponse.body);
}

export const deletePlayer = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    const httpResponse = await playerService.deletePlayerService(id);

    res.status(httpResponse.statusCode).send(httpResponse.body);
}
export const updatePlayer = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    const bodyValue = req.body;
}

