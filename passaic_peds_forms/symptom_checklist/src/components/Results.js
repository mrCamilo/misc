import React, {Component} from 'react'

class Results extends Component {
    constructor() {
	super()
	this.state = {
		score: 0,
		anxiety: 0,
		attention: 0,
		conduct: 0
	} 
    }

    render() {
        return(
            <div>
	        <p>Score: {this.state.score}</p>
	        <p>Anxiety/Depression Score: {this.state.anxiety}</p>
	        <p>Attention Problem Score: {this.state.attention}</p>
	        <p>Conduct Problem Score: {this.state.conduct}</p>
	    </div>
        )
    }
}	

export default Results
