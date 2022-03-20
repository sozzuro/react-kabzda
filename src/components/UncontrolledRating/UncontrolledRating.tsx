import React, {MouseEvent, useState} from "react";

type UncontrolledRatingPropsType = 0 | 1 | 2 | 3 | 4 | 5

type StarPropsType = {
    selected: boolean
}

export function UncontrolledRating() {

    const [selected, setSelected] = useState<UncontrolledRatingPropsType>(0);

    const onClickSelectedHandler = (num: UncontrolledRatingPropsType) => {
        setSelected(num);
    }

    return (
        <div>
            <button onClick={() => onClickSelectedHandler(0)}>0</button>
            <Star selected={selected > 0}/>
            <button onClick={() => onClickSelectedHandler(1)}>1</button>
            <Star selected={selected > 1}/>
            <button onClick={() => onClickSelectedHandler(2)}>2</button>
            <Star selected={selected > 2}/>
            <button onClick={() => onClickSelectedHandler(3)}>3</button>
            <Star selected={selected > 3}/>
            <button onClick={() => onClickSelectedHandler(4)}>4</button>
            <Star selected={selected > 4}/>
            <button onClick={() => onClickSelectedHandler(5)}>5</button>
        </div>
    )
}

function Star(props: StarPropsType) {
    if (props.selected === true) {
        return <span><b>star</b> </span>
    } else {
        return <span>star </span>
    }
}