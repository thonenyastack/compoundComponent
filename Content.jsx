function Content({children}){
    const {index, activeIndex} = useContext(AccordianContext);
    const isActive = index == activeIndex;
    return (
        <div data-panel-content className={isActive ? "expanded" : ""}>
            {children}
        </div>
    )
}

export default Content;