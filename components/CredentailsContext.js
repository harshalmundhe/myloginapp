import { createContext } from "react";

export const CredentailsContext = createContext({
    storedCredentails: {}, setStoredCredentails: () => {}
});