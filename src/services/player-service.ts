import { PlayerModel } from "../models/player-model";
import { StatisticsModel } from "../models/statisticsModel ";
import * as playerRepository from "../repositories/players-repository";
import * as HttpResponse from "../utils/http-helper";

export const getPlayerService = async () => {
    const data = await playerRepository.findAllPlayers();

    if (!data) {
        return HttpResponse.noContent();
    }
    
    return await HttpResponse.ok(data);
};


export const getPlayerByIdService = async (id: number) => {
    const data = await playerRepository.findPlayerById(id);

    if (!data) {
        return HttpResponse.noContent();
    }
   
    return await HttpResponse.ok(data);
}

export const createPlayerService = async (player: PlayerModel) => {
    if (!player) {
        return HttpResponse.badRequest();
    }
    
    await playerRepository.insertPlayer(player);
    return await HttpResponse.created();
}

export const deletePlayerService = async (id: number) => {
    const data = await playerRepository.findPlayerById(id);
    
    if (!data) {
        return HttpResponse.noContent();
    }

    await playerRepository.deleteOnePlayer(id);

    return HttpResponse.ok({ message: "deleted"});
}

export const updatePlayerService = async (
    id: number,
    statistics: StatisticsModel
  ) => {
    const data = await playerRepository.findAndModifyPlayer(id, statistics);
    let response = null;
  
    if (Object.keys(data).length === 0) {
      response = await HttpResponse.badRequest();
    } else {
      response = await HttpResponse.ok(data);
    }
  
    return response;
  };