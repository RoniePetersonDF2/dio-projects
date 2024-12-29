import * as http from "http";
import { app } from "./app";


const PORT = process.env.PORT || 3000;

console.log(PORT);

const server = http.createServer(app);

server.listen(PORT, () => {
    console.log(`Server is running in: http://localhost:${PORT}`);
});