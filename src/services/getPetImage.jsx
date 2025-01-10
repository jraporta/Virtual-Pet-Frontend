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