import React from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";
import Toggle from "./components/Toggle/Toggle";
import UncontrolledAccordion from "./components/UncontrolledAccordion/UncontrolledAccordion";
import {UncontrolledRating} from "./components/UncontrolledRating/UncontrolledRating";


function App() {
    return (
        <div>
            <PageTitle title={"This is APP component"}/>
            <PageTitle title={"Users"}/>
            Accordion
            <Accordion titleValue={"Меню"} collapsed={true}/>
            UncontrolledAccordion
            <UncontrolledAccordion titleValue={"Меню"}/>
            Rating
            <Rating value={0}/>
            <Rating value={1}/>
            <Rating value={2}/>
            <Rating value={3}/>
            <Rating value={4}/>
            <Rating value={5}/>
            Toggle
            <Toggle/>
            {/*<Toggle status={false}/>*/}
            Rating
            Uncontrolled
            <UncontrolledRating/>
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
