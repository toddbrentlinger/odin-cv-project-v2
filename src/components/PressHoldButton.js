import React, { Component, useState, useEffect, useRef } from "react";
import { clamp } from "../utilities";

function PressHoldButton(props) {
    const {delayMax = 300, delayMin = 20, speedFactor = 1.3} = props;

    const [isPressed, setIsPressed] = useState(false);
    
    const timeoutRef = useRef(null);

    useEffect(() => {
        clearTimeout(timeoutRef.current);

        if (isPressed) {
            repeat();
        }
    }, [isPressed]);

    // Cleanup on unmount by clearing timeout if still running
    useEffect(() => {
        return () => {
            clearTimeout(timeoutRef.current);
        };
    }, []);

    const repeat = (delay = delayMax) => {
        props.onMouseDown();

        const newDelay = clamp(
            delay / speedFactor,
            delayMin,
            delayMax
        );

        const timeout = setTimeout(() => {
            repeat(newDelay);
        }, newDelay);

        timeoutRef.current = timeout;
    };

    const handleOnMouseDown = () => {
        setIsPressed(true);
    };

    const handleOnMouseUp = () => {
        setIsPressed(false);
    };

    return (
        <button
            id={props.id}
            className={props.className}
            title={props.title}
            aria-label={props['aria-label']}
            onMouseDown={handleOnMouseDown}
            onMouseUp={handleOnMouseUp}
        >
            {props.children}
        </button>
    );
}

class PressHoldButtonOld extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isPressed: false,
            timeoutRef: null,
        };
    }

    componentDidUpdate = (prevProps, prevState) => {
        if (prevState.timeoutRef !== this.state.timeoutRef) {
            clearTimeout(prevState.timeoutRef);
        }

        if (prevState.isPressed !== this.state.isPressed) {
            this.setState((prevState) => {
                return {
                    ...prevState,
                    timeoutRef: null,
                };
            });

            if (this.state.isPressed) {
                this.repeat();
            }
        }
    };

    componentWillUnmount = () => {
        clearTimeout(this.state.timeoutRef);

        this.setState((prevState) => {
            return {
                ...prevState,
                timeoutRef: null,
            };
        });
    };

    repeat = (delay = this.props.delayMax) => {
        this.props.onMouseDown();

        const newDelay = clamp(
            delay / this.props.speedFactor,
            this.props.delayMin,
            this.props.delayMax
        );

        const timeout = setTimeout(() => {
            this.repeat(newDelay);
        }, newDelay);
        
        this.setState((prevState) => {
            return {
                ...prevState,
                timeoutRef: timeout,
            };
        });
    };

    handleOnMouseDown = () => {
        this.setState((prevState) => {
            return {
                ...prevState,
                isPressed: true,
            };
        });
    };

    handleOnMouseUp = () => {
        this.setState((prevState) => {
            return {
                ...prevState,
                isPressed: false,
            };
        });
    };

    render = () => {
        return (
            <button
                id={this.props.id}
                className={this.props.className}
                title={this.props.title}
                aria-label={this.props['aria-label']}
                onMouseDown={this.handleOnMouseDown}
                onMouseUp={this.handleOnMouseUp}
            >
                {this.props.children}
            </button>
        );
    };
}

PressHoldButtonOld.defaultProps = {
    delayMax: 300,
    delayMin: 20,
    speedFactor: 1.3,
};

export default PressHoldButton;