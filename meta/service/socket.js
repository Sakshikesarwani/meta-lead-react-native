import { io } from "socket.io-client";

import { BACKEND_URL } from "./api";

export function connectSocket() {
  return io(BACKEND_URL);
}
