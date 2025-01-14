export function getPetImage(species) {
    switch (species) {
        case 'DOG':
            return "/assets/pet/dog.png";
        case 'CAT':
            return "/assets/pet/cat.png";
        case 'HAMSTER':
            return "/assets/pet/hamster.png";
        default:
            return 'data:image/jpeg;base64,...';
    }
}