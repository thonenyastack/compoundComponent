const SectionContext = createContext();
function Section({children,disabled}){
    return (
        <SectionContext.Provider value={{ disabled }}>
            <div data-section>{children}</div>
        </SectionContext.Provider>
    )    
}