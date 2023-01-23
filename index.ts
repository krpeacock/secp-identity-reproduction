import { HttpAgent } from "@dfinity/agent";
import { identity } from "./identity";
import { createActor } from "./whoami";

const agent = new HttpAgent({ identity, host: "https://ic0.app" });

const whoami = createActor("ivcos-eqaaa-aaaab-qablq-cai", { agent });

whoami.whoami().then((principal) => {
  console.log(principal.toString());
});
