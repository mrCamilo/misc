import React from 'react'

function Buttons() {
   return (
	<div>
	   <form>
	       <input type = "radio" name="group" id = "never"/>
	       <label for = "never">Never</label>
	       <br/>
	       <input type = "radio" name="group" id = "sometimes"/>
	       <label for = "sometimes">Sometimes</label>
	       <br/>
	       <input type = "radio" name="group" id = "always"/>
	       <label for = "always">Always</label>
	   </form>
	</div>
   )
}

export default Buttons
