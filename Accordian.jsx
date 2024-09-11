import React, { useState, createContext, useContext } from 'react';
import Content from './Content';
import Description from './Description';
import Section from './Section';
import Title from './Title';

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

AccordianCC.Section = Section;
AccordianCC.Title = Title;
AccordianCC.Content = Content;
AccordianCC.Description = Description;

function Accordian(){
    return (
        <div className="App">
            <AccordianCC>
                <AccordianCC.Section>
                    <AccordianCC.Title><span>About Us</span></AccordianCC.Title>
                    <AccordianCC.Content>
                        <AccordianCC.Description title="aboutus" />
                    </AccordianCC.Content>
                </AccordianCC.Section> 
                <AccordianCC.Section>
                    <AccordianCC.Title><span>Contact Us</span></AccordianCC.Title>
                    <AccordianCC.Content>
                        <AccordianCC.Description title="contactus" />
                    </AccordianCC.Content>
                </AccordianCC.Section> 
                <AccordianCC.Section>
                    <AccordianCC.Title><span>Our Team</span></AccordianCC.Title>
                    <AccordianCC.Content>
                        <AccordianCC.Description title="ourteam" />
                    </AccordianCC.Content>
                </AccordianCC.Section> 
            </AccordianCC>
        </div>
    )
    
}

export default Accordian;