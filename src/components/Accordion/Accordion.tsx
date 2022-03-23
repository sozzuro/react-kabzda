import React from "react";

type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
    setCollapsed: (collapsed: boolean) => void
}

type AccordionTitlePropsType = {
    title: string
    setCollapsed: () => void
}


function Accordion(props: AccordionPropsType) {

    const onClickCollapsed = () => {
        props.setCollapsed(!props.collapsed)
    }

    return (
        <div>
            <AccordionTitle title={props.titleValue} setCollapsed={onClickCollapsed}/>
            {!props.collapsed && <AccordionBody/>}
        </div>
    )
}

function AccordionTitle(props: AccordionTitlePropsType) {
    return (
        <h3 onClick={props.setCollapsed}>{props.title}</h3>
    )
}

function AccordionBody() {
    return (
        <div>
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
            </ul>
        </div>
    )
}

export default Accordion;