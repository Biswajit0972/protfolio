import React, { createContext, useContext, useState } from 'react'

const NavContext = createContext(null);

export const Navigation = ( {children}) => {
    const [menu, setMenu] = useState(false);
  return (
    <NavContext.Provider value={{menu,  setMenu}}>
        {children}
    </NavContext.Provider>
  )
}

export const  useNavContextHook = () => {
    const context = useContext(NavContext);
    if (!context) throw new Error("Please use Context in side NavContext");
    return context;
}  

