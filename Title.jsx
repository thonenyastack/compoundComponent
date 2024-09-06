function Title({ children }){
    const {index, activeIndex, setActiveIndex} = useContext(AccordianContext);
    const {disabled} = useContext(SectionContext);
    const isActive = index == activeIndex;
    return (
        <div 
            data-panel-title
            className={disabled ? "disabled" : isActive ? "expanded" : ""}
            onClick={()=> setActiveIndex(index)}
        >
            {children}
        </div>
    )
}

export default Title;