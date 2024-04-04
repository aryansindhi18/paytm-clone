import { createContext } from "react";
// const userInfo={
//     username: "ar18",
//     firstName: "hh",
//     lastName: "hkj",
//     email: "gvj",
//     phoneNumber: "ygu"
// }
// const setuserInfo = ()=>{
//     return userInfo
// }
// export const userContext = createContext({
//     userInfo,setuserInfo
// });

export const userContext = createContext({
    userInfo: null,
    setUserInfo: () => {} // Placeholder function
  });