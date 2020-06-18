import React from 'react'

class Buttons extends React.Component {
    constructor(props) {
	    super(props)
	    this.state = {
		selectedValue: 0 
	    }
    
	    this.handleChange = this.handleChange.bind(this)
    }

    //This updates state!
    handleChange(event) {
	this.setState({
		selectedValue: event.target.value
	})
    }

    render() {
        return (
		<div>
	    <form>
	        <input type = "radio" name="group" value = {0} onChange={this.handleChange}/>
	        <label for = "never">Never</label>
	        <br/>
	        <input type = "radio" name="group" value = {1} onChange={this.handleChange}/>
	        <label for = "sometimes">Sometimes</label>
	        <br/>
	        <input type = "radio" name="group" value = {2} onChange={this.handleChange}/>
	        <label for = "always">Always</label>
	    </form>
		<p>{this.state.selectedValue}</p>
		</div>
        )
    }  
} 

export default Buttons
