import React, { useState } from "react";
import Hamster from "../components/PetCanvas";

const Pet = () => {

    const [color, setColor] = useState("#FFA500");
    const [mood, setMood] = useState("happy");

    return (
        <div>
            <h1>Take Care of Your Pet!</h1>
            <Hamster color={color} mood={mood} />

            <label>
                Choose Pet Color:
                <input type="color" value={color} onChange={(e) => setColor(e.target.value)} />
            </label>

            <div>
                <button onClick={() => setMood("happy")}>Happy</button>
                <button onClick={() => setMood("sad")}>Sad</button>
                <button onClick={() => setMood("hungry")}>Hungry</button>
                <button onClick={() => setMood("excited")}>Excited</button>
            </div>
        </div>
    );
};

export default Pet;
