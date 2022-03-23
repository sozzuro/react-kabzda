import React from "react";
import {RatingType} from "../../App";

type RatingPropsType = {
    value: RatingType
    setRating: (value: RatingType) => void
}

type StarPropsType = {
    selected: boolean
    collback: () => void
}

export function Rating(props: RatingPropsType) {

    const onClickStarHandler = (value: RatingType) => {
        props.setRating(value)
    }

    return (
        <div>
            <Star selected={props.value > 0} collback={() => onClickStarHandler(1)}/>
            <Star selected={props.value > 1} collback={() => onClickStarHandler(2)}/>
            <Star selected={props.value > 2} collback={() => onClickStarHandler(3)}/>
            <Star selected={props.value > 3} collback={() => onClickStarHandler(4)}/>
            <Star selected={props.value > 4} collback={() => onClickStarHandler(5)}/>
        </div>
    )
}

function Star(props: StarPropsType) {
    return <span style={{cursor: "pointer"}} onClick={props.collback}>{props.selected ? <b>star</b> : 'star'} </span>
}