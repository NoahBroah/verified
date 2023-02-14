import { createContext, useEffect, useState } from "react";

const UserContext = createContext(null);

const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        fetch("/auth").then((resp) => {
          if (resp.ok) {
            resp.json().then((user) => setUser(user));
            console.log(user)
          } else {
            console.log("Not good")
          }
        });
      },[] );
      console.log(user)
    return (
        <UserContext.Provider value={[ user, setUser ]}>
            { children }
        </UserContext.Provider>
    );
}

export {UserContext, UserProvider}