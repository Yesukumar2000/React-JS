abstract class Animal {
    constructor(){
        console.log('Inside animal class constructure');
    }
    abstract noOfLegs:Number;
    abstract noOfEars:Number;
    abstract noOfKidneys:Number;
    
    abstract eatingHabits():void;
abstract drinkingHabits():void;
    noOfHearts:Number = 1;
    noOfTails:Number =1;
    breathingHabits(){
        console.log("Inside Breathing Habits");
    }
}
export default Animal;
