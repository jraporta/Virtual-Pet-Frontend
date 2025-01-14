import React from "react";
import breadImg from "/assets/images/bread.png";
import fishImg from "/assets/images/fish.png";
import meatImg from "/assets/images/meat.png";
import cheeseImg from "/assets/images/cheese.png";
import '../styles/FoodSelector.css';

const FoodSelector = ({ onFoodSelect }) => {

    const handleFeed = async (food) => {
        onFoodSelect(food);
    };

    return (
        <div className="food-rectangle">
            <div className="feed-pet-text">Feed Pet</div>
            <div className="food-buttons">
                <button
                    className="food-button"
                    onClick={() => handleFeed("BREAD")}
                    aria-label="Feed Bread"
                >
                    <img src={breadImg} alt="Bread" />
                </button>
                <button
                    className="food-button"
                    onClick={() => handleFeed("FISH")}
                    aria-label="Feed Fish"
                >
                    <img src={fishImg} alt="Fish" />
                </button>
                <button
                    className="food-button"
                    onClick={() => handleFeed("MEAT")}
                    aria-label="Feed Meat"
                >
                    <img src={meatImg} alt="Meat" />
                </button>
                <button
                    className="food-button"
                    onClick={() => handleFeed("CHEESE")}
                    aria-label="Feed Cheese"
                >
                    <img src={cheeseImg} alt="Cheese" />
                </button>
            </div>
        </div>
    );
};

export default FoodSelector;
