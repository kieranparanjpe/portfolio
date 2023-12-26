import {useEffect, useRef, useState} from "react";
import "./App.css";
import { RiArrowDropDownLine } from "react-icons/ri";
import {motion} from "framer-motion";
import React from "react";

const ListItem = (props) => {
    const [dropped, setDropped] = useState(false);

    const [windowSize, setWindowSize] = useState([
        window.innerWidth,
        window.innerHeight,
    ]);

    useEffect(() => {
        const handleWindowResize = () => {
            setWindowSize([window.innerWidth, window.innerHeight]);
        };

        window.addEventListener('resize', handleWindowResize);

        return () => {
            window.removeEventListener('resize', handleWindowResize);
        };
    }, []);

    useEffect(() => {
        console.log('darkMode prop:', props.darkMode);
    }, [props.darkMode]);

    const wide = props.width + "rem";

    return (
        <motion.div className="ListItem" style={{padding: "0.5vw", maxWidth: wide}}
            initial={{ translateY: "100%" }} whileInView={{ translateY: "0%"}} transition={{ease: "linear", duration: 0.4}}>
            <div className={`listItem ${dropped? "dropped" : ""}`}>
                <div className={"heading"}>
                    {props.listObject.icon != null && <div style={{flex: "0.75"}}><img src={props.listObject.icon}></img></div>}
                    <h3 style={{paddingInline: "1vw", flex: "2"}}>{props.listObject.title}</h3>
                    {windowSize[0] > 600 && <p style={{paddingInline: "2vw", flex: "2"}}>{props.listObject.shortDescription}</p>}
                    {props.listObject.links != null && props.listObject.links.map((link, item) => (<a key={item} style={{flex: 2/props.listObject.links.length}} href={link.page}>{link.name}</a>))}
                    <p style={{paddingInline: "2vw", flex: "1"}}>{props.listObject.date}</p>
                    <motion.button onClick={()=> setDropped(!dropped)} className={dropped? "dropped":"up"} style={{paddingInline: "4px", flex: "0.5"}}>
                        <RiArrowDropDownLine size={"2em"} color={props.darkMode ? "white" : "black"} />
                    </motion.button>

                </div>
                <div style={{width: props.width}} className={"content"}>
                <p style={{padding: "0.5vh 1vw 1vw 1vw"}}>{props.listObject.longDescription}</p>
                </div>
            </div>
        </motion.div>
    );
}

export default ListItem;
