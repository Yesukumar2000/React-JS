import React from "react";

function Testimonial(props) {
  return (
    <>
      <img src={props.pic} alt="profile" className="profile" />
      <h2>{props.name}</h2>
      <h4>{props.role}</h4>
      <blockquote>{props.description}</blockquote>
    </>
  );
}

export default Testimonial;
