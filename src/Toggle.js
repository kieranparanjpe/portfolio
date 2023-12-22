import {useState} from "react";
import "./Toggle.css";

const Toggle = ({handleOnClick}) => {
    const [isToggled, setIsToggled] = useState(false);
    return (
        <div className="Toggle">
            <button onClick={()=> {
                setIsToggled(!isToggled);
                handleOnClick(isToggled);
            }} id={`toggle-${isToggled}`}>
                <div className={"toggle-thumb"}></div>
            </button>

        </div>
    );
}

export default Toggle;