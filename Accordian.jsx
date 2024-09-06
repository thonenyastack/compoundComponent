import React, { useState, createContext, useContext } from 'react';
const AccordianContext = createContext();
function AccordianCC({children}){
    const [activeIndex, setActiveIndex] = useState(null);
    
    return (
        <div data-accordian>
            {children.map((child, index) => {
                return (
                    <AccordianContext.Provider
                        key={`section-${index}`}
                        value={{index, activeIndex, setActiveIndex}}
                    >
                        {child}
                    </AccordianContext.Provider>
                )
            })}
        </div>
    )
}



function Accordian(){
    return (
        <div className="App">
            <AccordianCC>
                <Section>
                    <Title><span>About Us</span></Title>
                    <Content>
                        <Description title="aboutus" />
                    </Content>
                </Section>
                <Section>
                    <Title><span>Contact Us</span></Title>
                    <Content>
                        <Description title="contactus" />
                    </Content>
                </Section>
                <Section>
                    <Title><span>Our Team</span></Title>
                    <Content>
                        <Description title="ourteam" />
                    </Content>         
                </Section>
            </AccordianCC>
        </div>
    )
    
}

export default Accordian;