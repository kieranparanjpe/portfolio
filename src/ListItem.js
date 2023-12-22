import {useState} from "react";
import "./App.css";
import { RiArrowDropDownLine } from "react-icons/ri";

const ListItem = (props) => {
    const [dropped, setDropped] = useState(false);

    const wide = props.width + "vw";

    return (
        <div className="ListItem" style={{padding: "0.5vw", width: wide, minWidth: "400px"}}>
            <div className={`listItem ${dropped? "dropped" : ""}`}>
                <div className={"heading"}>
                    {props.listObject.icon != null && <div style={{flex: "0.75"}}><img src={props.listObject.icon}></img></div>}
                    <h3 style={{paddingInline: "1vw", flex: "2"}}>{props.listObject.title}</h3>
                    <p style={{paddingInline: "2vw", flex: "2"}}>{props.listObject.shortDescription}</p>
                    {props.listObject.links != null && props.listObject.links.map((link) => (<a style={{flex: 2/props.listObject.links.length}} href={link.page}>{link.name}</a>))}
                    <p style={{paddingInline: "2vw", flex: "1"}}>{props.listObject.date}</p>
                    <button onClick={()=> setDropped(!dropped)} className={dropped? "dropped":"up"} style={{paddingInline: "4px", flex: "0.5"}}><RiArrowDropDownLine size={"2em"} color={props.darkMode? "white":"black"}/></button>
                </div>
                <div style={{width: props.width}} className={"content"}>
                <p style={{padding: "0.5vh 1vw 1vw 1vw"}}>{props.listObject.longDescription}</p>
                </div>
            </div>
        </div>
    );
}

export default ListItem;