require("regenerator-runtime");
require("dotenv/config");

import { httpServer } from "./utils";

const PORT = process.env.PORT || 4002;

httpServer.listen(PORT, () => console.info(`Socket server running on port ${PORT}`));
