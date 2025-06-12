import React, { createContext, useState } from 'react'

export let appcontext = createContext()


function Context_api({ children }) {

    let list = ["hub", "about", "projects", "services", "contact"]
    let [active_list , setactive_list] = useState("hub")


    return (
        <appcontext.Provider value={{
            list,
            active_list,setactive_list
        }}>
            {children}
        </appcontext.Provider>
    )
}

export default Context_api