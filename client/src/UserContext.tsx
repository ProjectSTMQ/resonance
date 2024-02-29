import { createContext } from "react";

export interface IUser {
    username: string;
    password: string;
    isAdmin: boolean;
  }
  
interface IUserContext {
    userInfo: IUser;
    setUserInfo: (userInfo : IUser) => void;
  }
  

const UserContext = createContext<IUserContext>({userInfo: { username: "" , password: "", isAdmin : false}, setUserInfo: ()=> {} });

export { UserContext as UserContext};
