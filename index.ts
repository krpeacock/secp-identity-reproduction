import { HttpAgent } from "@dfinity/agent";
import { identity } from "./identity";

const agent = new HttpAgent({ identity, host: "http://localhost:4943" });

console.log(agent);
