import React, {useState} from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";
import Toggle from "./components/Toggle/Toggle";
import UncontrolledAccordion from "./components/UncontrolledAccordion/UncontrolledAccordion";
import {UncontrolledRating} from "./components/UncontrolledRating/UncontrolledRating";
import UncontrolledToggle from "./components/UncontrolledToggle/UncontrolledToggle";

export type RatingType = 0 | 1 | 2 | 3 | 4 | 5

function App() {

    const [rating, setRating] = useState<RatingType>(0);
    const [collapsed, setCollapsed] = useState<boolean>(false);
    const [on, setOn] = useState<boolean>(false);

    return (
        <div>
            <PageTitle title={"This is APP component"}/>
            <PageTitle title={"Users"}/>
            Accordion
            <Accordion titleValue={"Меню"} collapsed={collapsed} setCollapsed={setCollapsed}/>
            UncontrolledAccordion
            <UncontrolledAccordion titleValue={"Меню"}/>

            Rating
            <Rating value={rating} setRating={setRating}/>
            UncontrolledRating
            <UncontrolledRating/>
            UncontrolledToggle
            <UncontrolledToggle onChange={setOn}/>{on.toString()}
            <br/>Toggle
            <Toggle status={on} setStatus={setOn}/>

        </div>
    );
}

type PageTitlePropsType = {
    title: string
}

function PageTitle(props: PageTitlePropsType) {
    return <div>{props.title}</div>
}


export default App;
