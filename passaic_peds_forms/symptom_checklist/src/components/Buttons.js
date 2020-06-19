import React from 'react'

function Buttons() {
    return(
	<form>
	    <input type = "radio" name="group" value={0} />
	    <label>Never</label>
	    <br/>
	    <input type = "radio" name="group" value ={1}/>
	    <label>Sometimes</label>
	    <br/>
	    <input type = "radio" name="group" value={2}/>
	    <label>Always</label>
	    <br/>
	</form>
    )
}

export default Buttons
