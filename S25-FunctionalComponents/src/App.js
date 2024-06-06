import "./App.css";
import Testimonial from "./components/testimonial.js";

function App() {
  return (
    <>
      <h1>Testimonials</h1>
      <div className="container">
        <div className="container-Block">
          <Testimonial
            pic="./images/img1.jpg"
            name="Eleanor Crisp"
            role="UX Design"
            description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum sint expedita molestiae facilis ex, est repellat."
          ></Testimonial>
        </div>
        <div className="container-Block">
          <Testimonial
            pic="./images/img2.jpg"
            name="Eleanor Crisp"
            role="UX Design"
            description="Dad buried in landslide! Jubilant throngs fill streets! Stunned father inconsolable - demands recount!"
          ></Testimonial>
        </div>
        <div className="container-Block">
          <Testimonial
            pic="./images/img3.jpg"
            name="Eleanor Crisp"
            role="UX Design"
            description="Dad buried in landslide! Jubilant throngs fill streets! Stunned father inconsolable - demands recount!"
          ></Testimonial>
        </div>
      </div>
      </>
  );
}

export default App;
