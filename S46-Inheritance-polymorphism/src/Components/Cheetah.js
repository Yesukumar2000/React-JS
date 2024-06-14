import Cat from "./Cat";

class Cheetah extends Cat {
  skinPatten() {
    console.log("cheetah skin is in brown color with black color dots.");
  }
  runningSpeed() {
    console.log("Cheetah runs 125 kmph");
  }
  foodHabits() {
    console.log("Cheetah hunts deers and drink Blood");
  }
  interactionWithHuman() {
    console.log("Human runs away from cheetah");
  }
  calculateResult(zero) {
    console.log("calculate Result - 0 paramters");
  }
  calculateResult(a) {
    console.log("calculate Result - 1 paramters");
  }
  calculateResult(a, b) {
    console.log("calculate Result - 2 paramters");
  }
  calculateResult(a, b, c) {
    console.log("calculate Result - 3 paramters");
  }
}

export default Cheetah;
