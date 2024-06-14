import React, { Component } from 'react';

class SSSCStudent extends Component {
    constructor(props) {
         // Calling super() is necessary to initialize the parent class (Component) and its properties
       super(props);
        
       // Now you can access this.props and initialize state
        this.state = {
            name: props.name,
            englishMarks: parseInt(props.englishMarks),
            teluguMarks: parseInt(props.teluguMarks),
            hindiMarks: parseInt(props.hindiMarks),
            mathsMarks: parseInt(props.mathsMarks),
            scienceMarks: parseInt(props.scienceMarks),
            socialMarks: parseInt(props.socialMarks)
        };
    }

    calculateSummary = () => {
        let passMarks = 35;
        let { englishMarks, teluguMarks, hindiMarks, mathsMarks, scienceMarks, socialMarks } = this.state;
        let totalMarks = englishMarks + teluguMarks + hindiMarks + mathsMarks + scienceMarks + socialMarks;
        let percentage = (totalMarks / 600) * 100;
        let result = (englishMarks >= passMarks && teluguMarks >= passMarks && hindiMarks >= passMarks && mathsMarks >= passMarks && scienceMarks >= passMarks && socialMarks >= passMarks) ? 'pass' : 'fail';
        
        return { result, totalMarks, percentage };
    };

    render() {
        let { name } = this.state;

        return (
            <div>
                <h2>{name}</h2>
                <p>English Marks: {this.state.englishMarks}</p>
                <p>Telugu Marks: {this.state.teluguMarks}</p>
                <p>Hindi Marks: {this.state.hindiMarks}</p>
                <p>Maths Marks: {this.state.mathsMarks}</p>
                <p>Science Marks: {this.state.scienceMarks}</p>
                <p>Social Marks: {this.state.socialMarks}</p>
                <p>Result: {this.calculateSummary().result}</p>
                <p>Total Marks: {this.calculateSummary().totalMarks}</p>
                <p>Percentage: {this.calculateSummary().percentage}%</p>
            </div>
        );
    }
}

export default SSSCStudent;
