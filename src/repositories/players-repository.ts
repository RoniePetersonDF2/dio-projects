import { PlayerModel } from "../models/player-model";
import { StatisticsModel } from "../models/statisticsModel ";


const database: PlayerModel[] = [
    {
        id: 1,
        name: "Neymar Jr",
        club: "Al-Hilal",
        nationality: "Brazilian",
        position: "Forward",
        statistics: {
            Overall: 88,
            Pace: 85,
            Shooting: 82,
            Passing: 81,
            Dribbling: 91,
            Defending: 33,
            Physical: 65,
        },
    },
    {
        id: 2,
        name: "Vinícius Júnior",
        club: "Real Madrid",
        nationality: "Brazilian",
        position: "Forward",
        statistics: {
            Overall: 85,
            Pace: 92,
            Shooting: 80,
            Passing: 79,
            Dribbling: 87,
            Defending: 34,
            Physical: 68,
        },
    },
    {
        id: 3,
        name: "Casemiro",
        club: "Manchester United",
        nationality: "Brazilian",
        position: "Midfielder",
        statistics: {
            Overall: 87,
            Pace: 72,
            Shooting: 74,
            Passing: 78,
            Dribbling: 74,
            Defending: 88,
            Physical: 86,
        },
    },
    {
        id: 4,
        name: "Alisson Becker",
        club: "Liverpool",
        nationality: "Brazilian",
        position: "Goalkeeper",
        statistics: {
            Overall: 90,
            Pace: 60,
            Shooting: 50,
            Passing: 75,
            Dribbling: 55,
            Defending: 88,
            Physical: 72,
        },
    },
    {
        id: 5,
        name: "Marquinhos",
        club: "Paris Saint-Germain",
        nationality: "Brazilian",
        position: "Defender",
        statistics: {
            Overall: 87,
            Pace: 75,
            Shooting: 53,
            Passing: 80,
            Dribbling: 73,
            Defending: 85,
            Physical: 81,
        },
    },
    {
        id: 6,
        name: "Thiago Silva",
        club: "Chelsea",
        nationality: "Brazilian",
        position: "Defender",
        statistics: {
            Overall: 85,
            Pace: 70,
            Shooting: 55,
            Passing: 78,
            Dribbling: 60,
            Defending: 87,
            Physical: 84,
        },
    },
    {
        id: 7,
        name: "Gabriel Jesus",
        club: "Arsenal",
        nationality: "Brazilian",
        position: "Forward",
        statistics: {
            Overall: 85,
            Pace: 84,
            Shooting: 79,
            Passing: 79,
            Dribbling: 82,
            Defending: 45,
            Physical: 72,
        },
    },
    {
        id: 8,
        name: "Rodrygo Goes",
        club: "Real Madrid",
        nationality: "Brazilian",
        position: "Forward",
        statistics: {
            Overall: 84,
            Pace: 89,
            Shooting: 75,
            Passing: 79,
            Dribbling: 85,
            Defending: 37,
            Physical: 70,
        },
    },
    {
        id: 9,
        name: "Fred",
        club: "Manchester United",
        nationality: "Brazilian",
        position: "Midfielder",
        statistics: {
            Overall: 83,
            Pace: 78,
            Shooting: 70,
            Passing: 75,
            Dribbling: 81,
            Defending: 72,
            Physical: 78,
        },
    },
    {
        id: 10,
        name: "Lucas Paquetá",
        club: "West Ham",
        nationality: "Brazilian",
        position: "Midfielder",
        statistics: {
            Overall: 82,
            Pace: 74,
            Shooting: 76,
            Passing: 79,
            Dribbling: 81,
            Defending: 63,
            Physical: 70,
        },
    },
    {
        id: 11,
        name: "Fabinho",
        club: "Liverpool",
        nationality: "Brazilian",
        position: "Midfielder",
        statistics: {
            Overall: 84,
            Pace: 70,
            Shooting: 68,
            Passing: 79,
            Dribbling: 75,
            Defending: 83,
            Physical: 84,
        },
    },
    {
        id: 12,
        name: "Éder Militão",
        club: "Real Madrid",
        nationality: "Brazilian",
        position: "Defender",
        statistics: {
            Overall: 85,
            Pace: 79,
            Shooting: 54,
            Passing: 78,
            Dribbling: 74,
            Defending: 85,
            Physical: 83,
        },
    },
    {
        id: 13,
        name: "Danilo",
        club: "Juventus",
        nationality: "Brazilian",
        position: "Right-back",
        statistics: {
            Overall: 82,
            Pace: 75,
            Shooting: 63,
            Passing: 80,
            Dribbling: 76,
            Defending: 80,
            Physical: 76,
        },
    },
    {
        id: 14,
        name: "Alex Sandro",
        club: "Juventus",
        nationality: "Brazilian",
        position: "Left-back",
        statistics: {
            Overall: 83,
            Pace: 78,
            Shooting: 60,
            Passing: 78,
            Dribbling: 75,
            Defending: 82,
            Physical: 78,
        },
    },
    {
        id: 15,
        name: "Gabriel Barbosa",
        club: "Flamengo",
        nationality: "Brazilian",
        position: "Forward",
        statistics: {
            Overall: 84,
            Pace: 83,
            Shooting: 81,
            Passing: 70,
            Dribbling: 81,
            Defending: 39,
            Physical: 77,
        },
    },
    {
        id: 16,
        name: "Bruno Guimarães",
        club: "Newcastle United",
        nationality: "Brazilian",
        position: "Midfielder",
        statistics: {
            Overall: 83,
            Pace: 75,
            Shooting: 75,
            Passing: 81,
            Dribbling: 80,
            Defending: 78,
            Physical: 80,
        },
    },
    {
        id: 17,
        name: "Pedro",
        club: "Flamengo",
        nationality: "Brazilian",
        position: "Forward",
        statistics: {
            Overall: 82,
            Pace: 77,
            Shooting: 79,
            Passing: 72,
            Dribbling: 77,
            Defending: 36,
            Physical: 80,
        },
    },
    {
        id: 18,
        name: "Raphinha",
        club: "Barcelona",
        nationality: "Brazilian",
        position: "Forward",
        statistics: {
            Overall: 84,
            Pace: 86,
            Shooting: 76,
            Passing: 75,
            Dribbling: 82,
            Defending: 40,
            Physical: 72,
        },
    },
    {
        id: 19,
        name: "Richarlison",
        club: "Tottenham Hotspur",
        nationality: "Brazilian",
        position: "Forward",
        statistics: {
            Overall: 83,
            Pace: 84,
            Shooting: 77,
            Passing: 70,
            Dribbling: 78,
            Defending: 32,
            Physical: 75,
        },
    },
    {
        id: 20,
        name: "Weverton",
        club: "Palmeiras",
        nationality: "Brazilian",
        position: "Goalkeeper",
        statistics: {
            Overall: 80,
            Pace: 60,
            Shooting: 50,
            Passing: 72,
            Dribbling: 55,
            Defending: 83,
            Physical: 75,
        },
    },
];



export const findAllPlayers = async (): Promise<PlayerModel[]> => {
    return database;
};

export const findPlayerById = async (id: number): Promise<PlayerModel | undefined> => {
    return database.find((player) => player.id === id);
}

export const insertPlayer = async (player: PlayerModel) => {
    database.push(player);
}

export const deleteOnePlayer = async (id: number) => {
    const index = database.findIndex((player) => player.id === id);

    if (index !== -1) {
        database.splice(index, 1);
    }
}

export const findAndModifyPlayer = async (
    id: number,
    statistics: StatisticsModel
): Promise<PlayerModel> => {
    //find player
    const playerIndex = database.findIndex((player) => player.id === id);

    if (playerIndex !== -1) {
        database[playerIndex].statistics = statistics;
    }

    return database[playerIndex];
};