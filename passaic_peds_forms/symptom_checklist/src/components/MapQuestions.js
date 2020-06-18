import React, {Component} from "react"

import Header from './Header.js'
import Questionnaire from './Questionnaire.js'
import questionsData from '../questionsData.js'
import Buttons from './Buttons'
import Results from './Results'

class mapQuestions extends React.Component {
    constructor() {
	super()

	this.state = {
	    tally: 0
	}

	this.handleChange = this.handleChange.bind(this)
	this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(e) {
	    this.setState({ 
		tally: window.event.target.value 
	    })
        }

    handleSubmit(e) {
	    e.preventDefault();
	    alert("Your score: ", this.state.tally)
	}

    render() {
    const questComponents = questionsData.map(x => {
        return (
            <div>
	        <Questionnaire question = {x.question} />
		<Buttons/>
	    </div>
	    )
	})

	return (
	    <form onSubmit = {this.handleSubmit}>
		<Header/>
		{questComponents}
		<button type="submit">Submit</button>
		<Results/>
	    </form>
	)
    }
}

export default mapQuestions 
