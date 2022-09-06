import { Server } from "socket.io";
import httpServer from "./app";

const io = new Server(httpServer, { cors: { origin: "*" } });

io.on("connection", (socket) => {
	console.log(`Connected: ${socket.id}`);
	socket.on("login", (data) => {
		console.log(`${data.user}`);
		const { roomId, username } = data;
		socket.join(roomId);

		socket.broadcast.to(roomId).emit("announcement", `${username} logged in!`);
	});
	socket.on("disconnect", () => {
		console.log(`User ${socket.id} disconnected!`);
	});
});
export default io;
