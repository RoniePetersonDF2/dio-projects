import fastify from "fastify";
import cors from "@fastify/cors";


const server = fastify({ logger: true });

server.register(cors, {
    origin: "*",
});

const PORT = process.env.PORT || 3000;

const teams = [
    { id: 1, name: "McLaren", base: "Woking, United Kingdom" },
    { id: 2, name: "Mercedes", base: "Brackley, United Kingdom" },
    { id: 3, name: "Red Bull Racing", base: "Milton Keynes, United Kingdom" },
    { id: 4, name: "Ferrari", base: "Maranello, Italy" },
    { id: 5, name: "Aston Martin", base: "Silverstone, United Kingdom" },
    { id: 6, name: "Alpine", base: "Enstone, United Kingdom" },
    { id: 7, name: "Alfa Romeo", base: "Hinwil, Switzerland" },
    { id: 8, name: "Haas", base: "Kannapolis, United States" },
    { id: 9, name: "AlphaTauri", base: "Faenza, Italy" },
    { id: 10, name: "Williams", base: "Grove, United Kingdom" }
];

const drivers = [
    { id: 1, name: "Max Verstappen", team_id: 3 },
    { id: 2, name: "Sergio Pérez", team_id: 3 },
    { id: 3, name: "Lewis Hamilton", team_id: 2 },
    { id: 4, name: "George Russell", team_id: 2 },
    { id: 5, name: "Charles Leclerc", team_id: 4 },
    { id: 6, name: "Carlos Sainz", team_id: 4 },
    { id: 7, name: "Lando Norris", team_id: 1 },
    { id: 8, name: "Oscar Piastri", team_id: 1 },
    { id: 9, name: "Fernando Alonso", team_id: 5 },
    { id: 10, name: "Lance Stroll", team_id: 5 },
    { id: 11, name: "Esteban Ocon", team_id: 6 },
    { id: 12, name: "Pierre Gasly", team_id: 6 },
    { id: 13, name: "Valtteri Bottas", team_id: 7 },
    { id: 14, name: "Zhou Guanyu", team_id: 7 },
    { id: 15, name: "Kevin Magnussen", team_id: 8 },
    { id: 16, name: "Nico Hülkenberg", team_id: 8 },
    { id: 17, name: "Yuki Tsunoda", team_id: 9 },
    { id: 18, name: "Daniel Ricciardo", team_id: 9 },
    { id: 19, name: "Alexander Albon", team_id: 10 },
    { id: 20, name: "Logan Sargeant", team_id: 10 }
];

server.get("/teams", async (req, res) => {
    res.type("application/json").code(200);
    
    return { teams };
});

server.get("/drivers", async (req, res) => {
    res.type("application/json").code(200);

    return { drivers };
});

server.get("/drivers/:id", async (req, res) => {
    const id = parseInt(req.params.id);

    const driver = drivers.find((d) => d.id === id);

    if (!driver) {
        res.type("application/json").code(404);
        return { message: "Driver Not Found." }
    }
    
    res.type("application/json").code(200);
    
    return { driver }    
});

server.listen({ port: PORT} , () => {
    console.log(`Server is running in http://localhost:${PORT}.`);
})