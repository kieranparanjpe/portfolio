import './App.css';
import spaceImage from "./assets/spaceImage.png";
import foregroundDay from "./assets/foregroundDay.png";
import midgroundDay from "./assets/midgroundDay.png";
import blueSky from "./assets/blueSky.png";
import foregroundNight from "./assets/foregroundNight.png";
import midgroundNight from "./assets/midgroundNight.png";
import stemphilic from "./assets/stemphilic.png";
import first from "./assets/first.png";
import daedalos from "./assets/daedalos.png";
import { IoMoonSharp } from "react-icons/io5";
import { MdWbSunny } from "react-icons/md";
import {Parallax, ParallaxLayer} from "@react-spring/parallax";
import {useState} from "react";
import "./Toggle";
import Toggle from "./Toggle";
import ListItem from "./ListItem";

/** Employment Objects*/
const Stemphilic = {title: "STEMphilic Education", icon: stemphilic, shortDescription: "Lead Robotics Camp Instructor", date: "2022-2023", longDescription: "Taught LEGO Spike Prime to students aged 5-13 at a spring and summer camp. Responsible for creating lesson plans to target a multitude of ages, teaching to a group and giving individual help."}
const FTC = {title: "FIRST Tech Challenge", icon: first, shortDescription: "Competitive Robotics Team Captain", date: "2019-2023", longDescription: "Captained FIRST Tech Challenge competitive robotics team 16267 Forces Unknown to a top 3 provincial finish two years in a row and to 1 world championship appearance. \n" +
        "Designed key components of the robot including drive trains, linear slides, mechanical claws and arms using Fusion 360.\n" +
        "Programmed the logic of the robot for both remote controlled and autonomous use with Java in Android Studio. Successfully implemented computer vision, odometry and localisation, PID and a state machine.\n" +
        "Managed and led a team of fellow students, balancing different personalities and skill levels to ensure a cohesive team.\n" +
        "Mentored and taught other robotics teams in my area to aid in their success.\n" +
        "Led many LEGO robotics workshops for children in the area to learn STEM skills."}
const FGC = {title: "FIRST Global Challenge Team Canada", icon: first, shortDescription: "Programmer, Builder", date: "2022", longDescription: "Member of the FIRST Global Challenge team Canada for 2022.\n" +
        "Programmed the logic of the robot for remote controlled use in Java and Android Studio.\n" +
        "Designed many key aspects of the competition robot including a drive train, linear slide, flywheel ball launcher and climbing winch using Fusion 360.\n" +
        "Taught and led LEGO robotics workshops for youth in the area."}
const Daedalos = {title: "Daedalos Enrichment Programs", icon: daedalos, shortDescription: "Junior Lego Robotics Instructor", date: "2021", longDescription: "Assisted in teaching LEGO robotics (LEGO Mindstorms and LEGO WeDo) to students aged 5-13.Assisted in teaching LEGO robotics (LEGO Mindstorms and LEGO WeDo) to students aged 5-13." +
        "\n"}

/** Projects */
const projects = [
    {title: "Audio Visualiser", links: [{name: "GitHub", page: "https://github.com/kieranparanjpe/Audio-Visualisers"},
            {name: "Website", page: "https://audio-visualisers-b0876.web.app/"}], shortDescription: "Visualises Music with p5.js", date: "2023",
        longDescription: "Web app to visualise the audio currently playing out of a device’s speakers.\n" +
            "Developed using JavaScript (p5.js), HTML and CSS. \n" +
            "Uses the Spotify API to match the colour scheme of the visualiser to the album cover of the currently playing song by extracting a colour palette from the image.\n" +
            "Interacts with the Audio Context API to access the stream of audio.\n" +
            "Uses objects to organise internal systems \n" +
            "Each “bar” is an instantiated object\n" +
            "Each type of visualiser is an object that can be toggled on and off by adjusting source code\n" +
            "Key data structures used: arrays/lists, queues. \n"},

    {title: "Mandelbrot Zoom", links: [{name: "GitHub", page: "https://github.com/kieranparanjpe/mandelbrot "}],
        shortDescription: "Zooms on Mandelbrot set", date: "2023",
        longDescription: "Application to zoom- in on the Mandelbrot Set and show different Julia Sets.\n" +
            "Developed with Processing  in C#.\n" +
            "Uses the escape time algorithm to render frames of Mandelbrot/Julia sets.\n" +
            "Capable of computing a list of “interesting” Julia Sets based on the Mandelbrot, and then storing them as a text file sorted by x coordinate.\n"},

    {title: "FIRST Tech Challenge Code Base", links: [{name: "GitHub", page: "https://github.com/kieranparanjpe/FtcRobotController"}],
        shortDescription: "Most recent code base for FTC", date: "2023",
        longDescription: "Code to run an FTC robot for competition. \n" +
            "Developed in Android Studio using Java.\n" +
            "Implements PID, odometry and localisation, gyro sensor, and computer vision using April Tags.\n" +
            "Uses object oriented programming to create an abstracted state machine that allows for instructions to be written synchronously be behave asynchronously. \n" +
            "Uses object oriented programming to abstract away complexity so that team members with limited programming experience can make minor changes to the robot‘s logic.\n" +
            "Programmed entirely by me except for the core odometry algorithm (one function)."},

    {title: "gregg", links: [{name: "itch.io", page: "https://kieranparanjpe.itch.io/gregg "}],
        shortDescription: "Active Ragdoll Platformer", date: "2022",
        longDescription: "Desktop 3D platforming game where one plays as an active ragdoll.\n" +
            "Developed in Unity with C#.\n" +
            "Extends Unity’s physics engine to create a controllable active ragdoll where each joint is physically simulated. The active ragdoll attempts to imitate animation data that is fed to it in order for the character to walk, run, jump, etc…"},
    {title: "Who’s Most Likely?", links: [{name: "itch.io", page: "https://kieranparanjpe.itch.io/whosmostlikely"}],
        shortDescription: "Party/Social game", date: "2022",
        longDescription: "Party style game where friends create prompts then posed to the group. Followingly, the players vote on who they think the prompt best applies to. Similar to the Jackbox Party Pack and Kahoot.\n" +
            "Developed with javascript, HTML and CSS and in Unity using C#.\n" +
            "Has two applications that work in tandem\n" +
            "Desktop application that the host must download (Unity)\n" +
            "Web app that players use to connect to the game and play (javascript)\n" +
            "The two applications communicate with each other via a Firebase database."},
    {title: "Terrain Generator", links: [{name: "GitHub", page: "https://github.com/kieranparanjpe/Terrain"}],
        shortDescription: "Generates block terrain", date: "2021",
        longDescription: "Desktop application that can generate 3D terrain based on noise.\n" +
            "Developed in processing with Java.\n" +
            "Uses object oriented programming to store each terrain block as an object."},
    {title: "Terrain Generator", links: [{name: "GitHub", page: "https://github.com/kieranparanjpe/Terrain"}],
        shortDescription: "Generates block terrain", date: "2021",
        longDescription: "Desktop application that can generate 3D terrain based on noise.\n" +
            "Developed in processing with Java.\n" +
            "Uses object oriented programming to store each terrain block as an object."},
    {title: "Arena Shooter", links: [{name: "GitHub", page: "https://github.com/kieranparanjpe/Arena-FPS"}],
        shortDescription: "", date: "2021",
        longDescription: "Desktop arena first person shooter game.\n" +
            "Developed in processing with Java.\n" +
            "Uses object oriented programming to create a simple game object that all entities in the game inherit from. \n" +
            "Allows for all entities in the game to be easily managed."},
    {title: "Asteroids", links: [{name: "GitHub", page: "https://github.com/kieranparanjpe/Arena-FPS"}],
        shortDescription: "", date: "2020",
        longDescription: "Desktop arena first person shooter game.\n" +
            "Developed in processing with Java.\n" +
            "Uses object oriented programming to create a simple game object that all entities in the game inherit from. \n" +
            "Allows for all entities in the game to be easily managed."},
    {title: "Online Chess", links: [{name: "GitHub", page: "https://github.com/kieranparanjpe/Chess"}],
        shortDescription: "", date: "2020",
        longDescription: "LAN chess made in Processing with Java.\n" +
            "Uses the processing networking API to connect players on the same network to play the two simple board games. \n" +
            "Within the  project is a client and server application, which both need to be run to play."},
    {title: "Online Tic-Tac-Toe", links: [{name: "GitHub", page: "https://github.com/kieranparanjpe/TicTac"}],
        shortDescription: "", date: "2020",
        longDescription: "LAN Tic-Tac-Toe made in Processing with Java.\n" +
            "Uses the processing networking API to connect players on the same network to play the two simple board games. \n" +
            "Within the  project is a client and server application, which both need to be run to play."},
    {title: "Ninja Cube", links: [{name: "itch.io", page: "https://kieranparanjpe.itch.io/ninja-cube"}],
        shortDescription: "Platformer", date: "2020",
        longDescription: "Third person platformer and shooter developed in Unity with C#.\n" +
            "Implements the following mechanics:\n" +
            "Third person camera that avoids clipping using raycasts.\n" +
            "Wall running by calculating the normal of the surface.\n" +
            "Third person shooting. \n" +
            "Enemy AI using Unity’s Navmesh\n" +
            "Grappling hook using Unity’s physics engine and joint system. \n" +
            "Assets modeled in blender."},
    {title: "Ninja Cube Arena", links: [{name: "itch.io", page: "https://kieranparanjpe.itch.io/ninja-cube-arena"}],
        shortDescription: "Arena Shooter", date: "2020",
        longDescription: "Arena first person wave shooter developed in Unity with C#.\n" +
            "Implements the following mechanics:\n" +
            "First person shooting.\n" +
            "Enemy AI with Unity’s Navmesh.\n" +
            "Simple inventory / upgradable weapons.\n" +
            "Powerups (health / coins)."},
    {title: "Aim Trainer", links: [{name: "itch.io", page: "https://kieranparanjpe.itch.io/aim-trainer"}],
        shortDescription: "", date: "2020",
        longDescription: "First person shooter aim trainer developed in Unity with C#.\n" +
            "Randomly spawn targets around the player for them to practice shooting at using standard first person shooter mechanics."},
    {title: "Goblin Hunt", links: [{name: "itch.io", page: "https://kieranparanjpe.itch.io/goblin-hunt"}],
        shortDescription: "Adventure shooter", date: "2020",
        longDescription: "First person adventure game developed in Unity with C#.\n" +
            "Implements first person movement and combat."},
    {title: "Totally Accurate Ball Simulator", links: [{name: "itch.io", page: "https://kieranparanjpe.itch.io/ballsim"}],
        shortDescription: "", date: "2020",
        longDescription: "2D rage platformer developed in Unity with C#.\n" +
            "Uses Unity’s physics engine to make the friction of the player minimal so that their movements become imprecise, adding a unique challenge to classical platforming."},
    {title: "Ninja Cube", links: [{name: "Playstore", page: "https://play.google.com/store/apps/details?id=com.SharpCEntertainment.NinjaCube&hl=en_US"}],
        shortDescription: "", date: "2019",
        longDescription: "Third person endless runner developed for mobile in Unity with C#.\n" +
            "Implements Unity advertisements to generate revenue on the game."},
    {title: "Bouncie", links: [{name: "Playstore", page: "https://play.google.com/store/apps/details?id=com.SharpCEntertainment.Bouncie&hl=en"}],
        shortDescription: "", date: "2018",
        longDescription: "2D endless scroller developed for mobile in Unity with C#.\n" +
            "Implements Unity ads to generate revenue on the game."}
]

function App() {
    const toggleDarkMode = () =>
    {
        let state = !darkMode;
        setDarkMode(state);
        document.querySelector("body").setAttribute("data-theme", state ? "dark" : "light");
    }
    const [darkMode, setDarkMode] = useState(true);

  return (
    <div className="App">
        <Parallax pages={5}>
            <ParallaxLayer factor={1.2} offset={0} speed={0.3} style={{
                backgroundImage: `url(${darkMode ? spaceImage : blueSky})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'}}>

                <div style={{textAlign: "right", marginRight: "10vw", marginTop: "10vh"}}>
                    <div style={{float: "right", paddingInline: "4px"}}><MdWbSunny size={"2em"} color={darkMode? "white":"black"}/></div>
                    <div style={{float: "right", paddingInline: "4px"}}><Toggle handleOnClick={toggleDarkMode}/></div>
                    <div style={{float: "right", paddingInline: "4px"}}><IoMoonSharp size={"2em"} color={darkMode? "white":"black"}/></div>
                </div>

                <div id={"content"}>
                    <h1 style={{fontSize: "4rem",marginTop: "20vh"}}>Hi, <br/> I'm Kieran!</h1>
                </div>
            </ParallaxLayer>
            <ParallaxLayer factor={1.2} offset={0.4} speed={0.4} style={{
                backgroundImage: `url(${darkMode? midgroundNight : midgroundDay})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'}}>
            </ParallaxLayer>
            <ParallaxLayer factor={1.2} offset={0.55} speed={0.6} style={{
                backgroundImage: `url(${darkMode? foregroundNight : foregroundDay})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'}}>
                <div id={"content"}>
                    <h2 style={{marginTop: "55vh"}}>About Me</h2>
                    <br/>
                    <div style={{marginLeft: "2vw", width: "576px", lineBreak: "auto"}}>
                    <p>Hey there and welcome to my website! My name is Kieran and I'm currently in my first year studying computer
                        science and AI at McGill university. I have a passion for programming, math and statistics. I am a FIRST
                        alumni of two teams: FIRST Global Challenge team Canada 2022, and FIRST Tech Challenge Team 16267 where I
                        was a captain for 3 years.</p>
                        <br/>
                        <p>I began my programming journey 9 years ago when I started tinkering in Scratch. Then, 7 years ago I
                        taught myself C# in the context of Unity and since I have developed many games. More recently, I have been
                        interested in programmatically generated art for which I use p5.js.</p>
                        <br/>
                        <p>I invite you to take a look at my GitHub, see any of my games uploaded to itch.io or just shoot me a message.
                            I'd love to connect with you!</p>
                    </div>
                </div>
            </ParallaxLayer>

            <ParallaxLayer factor={1} offset={1.2} speed={0.6}>
                <div id={"content"}>
                    <h2>Previous Employment/Organisations</h2>
                    <div style={{marginLeft: "2vw"}}>
                        <ListItem listObject={Stemphilic} width={"60"} darkMode={darkMode} />
                        <ListItem listObject={FTC} width={"60"} darkMode={darkMode} />
                        <ListItem listObject={FGC} width={"60"} darkMode={darkMode} />
                        <ListItem listObject={Daedalos} width={"60"} darkMode={darkMode} />
                    </div>
                </div>
            </ParallaxLayer>

            <ParallaxLayer factor={3} offset={1.9} speed={0.6}>
                <div id={"content"}>
                    <br/>
                    <h2>Projects</h2>
                    <div style={{marginLeft: "2vw"}}>
                        {projects.map((project) => (
                            <ListItem listObject={project} width={"60"} darkMode={darkMode} />
                        ))}
                    </div>
                </div>
            </ParallaxLayer>
        </Parallax>

    </div>
  );
}

export default App;
