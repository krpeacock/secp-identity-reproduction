import { Secp256k1KeyIdentity } from "@dfinity/identity-secp256k1";

// Completely insecure seed phrase. Do not use for any purpose other than testing.
const seed = "test test test test test test test test test test test test";

export const identityFromSeed = async (phrase: string) => {
  return Secp256k1KeyIdentity.fromSeedPhrase(phrase);
};

export const identity = identityFromSeed(seed);
