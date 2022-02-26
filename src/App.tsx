import React from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";


function App() {
    return (
        <div>
            <PageTitle title={"This is APP component"}/>
            <PageTitle title={"Users"}/>
            Article 1
            <Rating value={3}/>
            <Accordion titleValue={"Меню"}/>
            Article 2
            <Rating value={4}/>
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
