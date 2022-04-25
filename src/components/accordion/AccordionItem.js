import React, { useRef }  from 'react';

const AccordionItem = ({ faq, active, onToggle }) => {
    const { question, answer, heading } = faq;

    const contentEl = useRef();

    const slugify = ( text ) => {
        return text
            .toString()
            .toLowerCase()
            .trim()
            .replace(/\s+/g, '-')
    };

    if(heading){
        return ( <h4 id={slugify(heading)} className="faqHeading">{heading}</h4> );
    }else {
        return (
            <div className = { active ? "faqItem active" : "faqItem"} >
                <button className="accordion-button" onClick={onToggle}> {question}</button>
                <div ref={contentEl} className="accordion-content"
                     style={active ? {height: contentEl.current.scrollHeight} : {height: "0px"}}>
                    <div className="inside" dangerouslySetInnerHTML={{__html: answer}}/>
                </div>
            </div>
        );
    }
};

export default AccordionItem;