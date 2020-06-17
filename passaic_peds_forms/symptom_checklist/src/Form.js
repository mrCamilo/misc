import React from "react"

class MyForm extends React.Component {
   constructor(props) {
	   super (props)
   }


   render() {	
   return (
	<form>
	    <p>Complain of aches or pains</p>
	    
	    <input className="divider" type="button" value="Never"/>
	    <input type="button" value="Sometimes"/>
	    <input type="button" value="Always"/>
	    
	</form>
      )
   }
}

export default MyForm
