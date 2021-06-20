import { createContext } from "react";
import { IAppData, defaultAppData } from "./application/Application";

export default createContext<IAppData>(defaultAppData);