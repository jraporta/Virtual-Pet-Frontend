import { useEffect } from "react";

const usePetExpressionManager = (pet) => {
  useEffect(() => {

    const setDisplay = (element, display) => {
      if (element) element.style.display = display;
    };

    const layers = {
      happyLayer: document.getElementById("expression_happy"),
      sadLayer: document.getElementById("expression_sad"),
      asleepLayer: document.getElementById("expression_sleep"),
      angryLayer: document.getElementById("expression_angry"),
      tastyBubleLayer: document.getElementById("tasty"),
      yuckBubleLayer: document.getElementById("yuck"),
      sleepBubleLayer: document.getElementById("sleep_z"),
      asleepBodyLayer: document.getElementById("sleep_base"),
      baseBodyLayer: document.getElementById("base"),
    };

    const { asleep, hasPoo, energy, happiness } = pet;

    const isSad = !asleep && hasPoo && layers.sadLayer;
    const isAngry = !asleep && !isSad && energy < 40 && happiness < 40 && layers.asleepLayer;
    const isHappy = !asleep && !isSad && !isAngry;

    const layerVisibility = {
      happyLayer: isHappy ? "inline" : "none",
      sadLayer: isSad ? "inline" : "none",
      angryLayer: isAngry ? "inline" : "none",
      asleepLayer: asleep ? "inline" : "none",
      tastyBubleLayer: "none",
      yuckBubleLayer: "none",
      sleepBubleLayer: asleep ? "inline" : "none",
      asleepBodyLayer: asleep ? "inline" : "none",
      baseBodyLayer: asleep && layers.asleepBodyLayer ? "none" : "inline",
    };

    Object.entries(layers).forEach(([key, element]) => {
      if (element) setDisplay(element, layerVisibility[key]);
    });

  }, [pet]);
};

export default usePetExpressionManager;
