import React, {useState} from "react";

type UncontrolledAccordionPropsType = {
    titleValue: string
    //collapsed: boolean
}

type UncontrolledAccordionTitlePropsType = {
    title: string,
    callback: () => void
}


function UncontrolledAccordion(props: UncontrolledAccordionPropsType) {

    const [collapsed, setCollapsed] = useState(false);

    const onClickCollapsedHandler = () => {
        setCollapsed(!collapsed)
    }

    return (
        <div>
            <UncontrolledAccordionTitle title={props.titleValue} callback={onClickCollapsedHandler}/>
            <button onClick={onClickCollapsedHandler}>Toggle</button>
            {!collapsed && <UncontrolledAccordionBody/>}
        </div>
    )
}

function UncontrolledAccordionTitle(props: UncontrolledAccordionTitlePropsType) {
    return (
        <h3 style={{cursor: 'pointer'}} onClick={props.callback}>{props.title}</h3>
    )
}

function UncontrolledAccordionBody() {
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

export default UncontrolledAccordion;