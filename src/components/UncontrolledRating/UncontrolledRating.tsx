import React, {MouseEvent, useState} from "react";

type UncontrolledRatingPropsType = 0 | 1 | 2 | 3 | 4 | 5

type StarPropsType = {
    selected: boolean
    callback: () => void
}

export function UncontrolledRating() {

    const [selected, setSelected] = useState<UncontrolledRatingPropsType>(0);

    const onClickSelectedHandler = (num: UncontrolledRatingPropsType) => {
        setSelected(num);
    }

    return (
        <div>
            <Star selected={selected > 0} callback={() => onClickSelectedHandler(1)}/>
            <Star selected={selected > 1} callback={() => onClickSelectedHandler(2)}/>
            <Star selected={selected > 2} callback={() => onClickSelectedHandler(3)}/>
            <Star selected={selected > 3} callback={() => onClickSelectedHandler(4)}/>
            <Star selected={selected > 4} callback={() => onClickSelectedHandler(5)}/>
        </div>
    )
}

function Star(props: StarPropsType) {
    return props.selected === true ? <span style={{cursor: "pointer"}} onClick={props.callback}><b>star</b> </span> :
        <span style={{cursor: "pointer"}} onClick={props.callback}>star </span>
}