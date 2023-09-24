import { useState } from "react";
import me from "../assets/AI.Testo.png";
import { Fade } from "react-reveal";
export default function Myinfo(){
    
    const [flip, setFlip] = useState(false);

    const toggleFlip = () => {
      setFlip(!flip);
    };
    return (
        <div className="d-flex justify-content-around mt-5 gap">
            <Fade left>
            <div className="order"> <img src={me} className={`my-image ${flip ? 'insanity' : ''}`} alt="Twist of fate" /></div>
            </Fade>
            <div>
                
        <div className="info">
        <Fade right distance="30%">
             <p>ChampionName : Twisted Fate</p>
             <p>Nickname : Sicko</p>
             <p>City : bilgewater</p>
             <p id="none">Twisted Fate is an infamous cardsharp and swindler who has gambled and charmed his way across much of the known world, earning the enmity and admiration of the rich and foolish alike. He rarely takes things seriously, greeting each day with a mocking</p>
             <button className="btn btn-danger size mt-3 col-12" onClick={toggleFlip}>Try Me</button>
             </Fade>
        </div>
        </div>
        </div>
       
    )
}