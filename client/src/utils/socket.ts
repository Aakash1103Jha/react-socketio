import { io } from "socket.io-client";

const socket = io(process.env.REACT_APP_SOCKET_ENDPOINT as string, {
	auth: { username: "aakash1103jha", password: "aakashjha1103" },
});

export default socket;
