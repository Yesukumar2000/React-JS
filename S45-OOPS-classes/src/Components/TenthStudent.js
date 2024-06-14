import React from 'react'

function TenthStudent(props) {
  return (
    <div style={{border:'2px solid black',backgroundColor:'lightgreen', textAlign:'center', display:'inline-block'}}>
        <h2>Name:{props.name}</h2>
        <h2>English:{props.englishMarks}</h2>
        <h2>Telugu:{props.teluguMarks}</h2>
        <h2>Hindi:{props.hindiMarks}</h2>
        <h2>Maths:{props.mathsMarks}</h2>
        <h2>science:{props.scienceMarks}</h2>
        <h2>Social:{props.socialMarks}</h2>

    </div>
  )
}

export default TenthStudent