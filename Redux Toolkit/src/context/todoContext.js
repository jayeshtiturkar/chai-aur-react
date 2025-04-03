import { createContext,useContext } from "react";

export const todoContext = createContext()


export default function useToto() {
    return useContext(todoContext)
}