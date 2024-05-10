import React, { createContext, useRef, useState } from 'react';

export const Context = createContext();


export const ContextProvider = ({children}) => {
    const aboutSection = useRef(null)
    const heroSection = useRef(null)
    const serviceSection = useRef(null)
    const recentWorkSection = useRef(null)
    const contact = useRef(null)

    return(
        <Context.Provider value = {{
            aboutSection, heroSection, serviceSection, recentWorkSection, contact
        }}>{children}</Context.Provider>
    )
}