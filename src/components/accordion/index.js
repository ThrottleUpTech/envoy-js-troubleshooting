import React, { useState }  from 'react';
import AccordionItem from "./AccordionItem";
import "./styles.scss"


const Accordion = ({ faqs }) => {
    const [clicked, setClicked] = useState("0");

    const handleToggle = (index) => {
        if (clicked === index) {
            return setClicked("0");
        }
        setClicked(index);
    };

    return (
        <div className="faqListBlock">
            {faqs && faqs.map((faq, index) => (
                <AccordionItem
                    onToggle={() => handleToggle(index)}
                    active={clicked === index}
                    key={index}
                    faq={faq}
                />
            ))}
        </div>
    );
};

export default Accordion;