import React from 'react'

function Buttons() {
    return(
	<form>
	    <input type = "radio" value = "Never" name="group" value={0} />
	    <label>Never</label>
	    <br/>
	    <input type = "radio" value = "Sometimes" name="group" value ={1}/>
	    <label>Sometimes</label>
	    <br/>
	    <input type = "radio" value = "Always" name="group" value={2}/>
	    <label>Always</label>
	    <br/>
	</form>
    )
}

export default Buttons
