import Animal from "./Animal";

class Elephant extends Animal{
    eatingHabits(): void {
        console.log('Pure vegetarian')
    }
    drinkingHabits(): void {
        console.log('Drinks water');
    }
    noOfLegs: Number= 4;
    noOfEars: Number= 2;
    noOfKidneys: Number= 2;
}
export default Elephant;