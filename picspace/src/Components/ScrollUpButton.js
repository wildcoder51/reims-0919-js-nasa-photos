import React from "react";
import {CircleArrow as ScrollUpButton} from "react-scroll-up-button"; 
import './ScrollUpButton.css';

class ScrollButton extends React.Component {
    render() {
        return (
            <div>
                <ScrollUpButton />
            </div>
        );
    }
}
export default ScrollUpButton;