export function getPetImage(species) {
    switch (species) {
        case 'DOG':
            return "../../public/assets/pet/dog.png";
        case 'CAT':
            return "../../public/assets/pet/cat.png";
        case 'HAMSTER':
            return "../../public/assets/pet/hamster.png";
        default:
            return 'data:image/jpeg;base64,...';
    }
}

export function getPetSVG(species) {
    switch (species) {
        case 'DOG':
            return "../../public/assets/svg/dog.svg";
        case 'CAT':
            return "../../public/assets/svg/cat.svg";
        case 'HAMSTER':
            return "../../public/assets/svg/hamster.svg";
        default:
            return 'data:image/jpeg;base64,...';
    }
}