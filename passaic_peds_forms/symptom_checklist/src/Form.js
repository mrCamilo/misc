import React from "react"

class MyForm extends React.Component {
   constructor(props) {
	   super (props)
   }


   render() {	
   return (
	<form>
	    <p>Complain of aches or pains</p>
	    <input type="text"/>
	</form>
      )
   }
}

export default MyForm
