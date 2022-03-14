import React from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";
import Toggle from "./components/Toggle/Toggle";


function App() {
    return (
        <div>
            <PageTitle title={"This is APP component"}/>
            <PageTitle title={"Users"}/>
            Article 1
            <Rating value={3}/>
            <Accordion titleValue={"Меню"} collapsed={true}/>
            <Accordion titleValue={"Меню"} collapsed={false}/>
            Article 2
            <Rating value={0}/>
            <Rating value={1}/>
            <Rating value={2}/>
            <Rating value={3}/>
            <Rating value={4}/>
            <Rating value={5}/>

            <Toggle status={true}/>
            <Toggle status={false}/>
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
