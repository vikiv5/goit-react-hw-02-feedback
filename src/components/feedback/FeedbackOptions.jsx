import PropTypes from "prop-types"
import { ButtonDiv , Button } from "./Feedback.styled";
//import React from "react";

export const FeedbackOptions = ({options , handleClickBtn}) =>{
    return (
        <ButtonDiv>
            {options.map(option=> (
                <li key = {option}>
                    <Button name ={option}
                    onClick ={handleClickBtn}> 
                    </Button>
                </li>

            ))}
        </ButtonDiv>
    )
}
FeedbackOptions.PropTypes = {
    handleClickBtn:PropTypes.func.isRequired,
    options:PropTypes.string.isRequired,
};

export default FeedbackOptions;