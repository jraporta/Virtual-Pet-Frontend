import { useEffect } from "react";

const usePetExpressionManager = (pet) => {
  useEffect(() => {
    const happyLayer = document.getElementById("expression_happy");
    const sadLayer = document.getElementById("expression_sad");
    const asleepLayer = document.getElementById("expression_sleep");
    const angryLayer = document.getElementById("expression_angry");
    const tastyBubleLayer = document.getElementById("tasty");
    const yuckBubleLayer = document.getElementById("yuck");
    const sleepBubleLayer = document.getElementById("sleep_z");

    if (happyLayer && !pet.asleep || happyLayer && !asleepLayer) {
      happyLayer.style.display = "inline";
      if (asleepLayer) asleepLayer.style.display = "none";
    } else if (asleepLayer && pet.asleep) {
      asleepLayer.style.display = "inline";
      if (happyLayer) happyLayer.style.display = "none";
    }

    if (pet.asleep) {
      if (sleepBubleLayer) sleepBubleLayer.style.display = "inline";
    } else {
      if (sleepBubleLayer) sleepBubleLayer.style.display = "none";
    }

    if (tastyBubleLayer) tastyBubleLayer.style.display = "none";
    if (yuckBubleLayer) yuckBubleLayer.style.display = "none";
    if (sadLayer) sadLayer.style.display = "none";
    if (angryLayer) angryLayer.style.display = "none";
  }, [pet]);
};

export default usePetExpressionManager;
