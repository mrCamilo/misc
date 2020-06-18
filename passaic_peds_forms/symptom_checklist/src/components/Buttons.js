import React from 'react'

function Buttons() {
    return(
	<form>
	    <input type = "radio" value = "Never" name="group"/>
	    <label>Never</label>
	    <br/>
	    <input type = "radio" value = "Sometimes" name="group"/>
	    <label>Sometimes</label>
	    <br/>
	    <input type = "radio" value = "Always" name="group"/>
	    <label>Always</label>
	    <br/>
	</form>
    )
}

export default Buttons
