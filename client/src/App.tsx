import { useEffect, type FC } from "react";
import { socket } from "./utils";

const App: FC = () => {
	const login = () => {
		try {
			socket.emit("login", { username: "Aakash1103Jha", roomId: "CRM" });
		} catch (err) {
			console.error(err);
		}
	};

	useEffect(() => {
		socket.on("announcement", (data) => {
			console.log(data);
		});
	}, []);

	return (
		<div>
			<button onClick={login}>Login</button>
			<button onClick={() => socket.disconnect()}>Logout</button>
		</div>
	);
};

export default App;

