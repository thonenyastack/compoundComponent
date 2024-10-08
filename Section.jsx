import React,{createContext, useContext} from "react";
const SectionContext = createContext();
function Section({children,disabled}){
    return (
        <SectionContext.Provider value={{ disabled }}>
            <div data-section>{children}</div>
        </SectionContext.Provider>
    )    
}

export default Section;