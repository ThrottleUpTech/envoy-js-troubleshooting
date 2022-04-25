import React from 'react'
import Accordion from "../accordion";
import "./styles.scss"
import PropTypes from "prop-types";

const FaqSection = ({ title, subtitle, sidebarText, quickJumpMenu, faq}) => {


    const JumpLinkList = quickJumpMenu.map(({ menuItem , menuItemUrl }, index) =>
        <a key={index} href={menuItemUrl} className="jumplink">{menuItem}</a>
    );

    return (
        <section className="envoyFAQs">
            <div className="container">

                <h2 className="text-center">
                    <span>{subtitle}</span>
                    {title}
                </h2>

                <div className="faqContents">
                    <div className="faqControls col-1-3">
                        <div className="jumpMenu">
                            <h4>Quick Jump Menu</h4>
                            <div className="jumpMenuList">
                                {JumpLinkList}
                            </div>
                        </div>
                        <div className="faqContact" dangerouslySetInnerHTML={{__html: sidebarText }} />
                    </div>

                    <div className="faqList col-2-3">
                            <Accordion faqs={faq}/>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default FaqSection

FaqSection.propTypes = {
    sidebarText: PropTypes.string,
    subtitle: PropTypes.string,
    title: PropTypes.string,
    quickJumpMenu: PropTypes.string,
}

