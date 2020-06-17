import React from "react"

import Buttons from './Buttons'

class MyForm extends React.Component {
   constructor(props) {
	   super (props)
   }


   render() {	
   return (
	<form>
	    <p>Complain of aches or pains</p>
	    <Buttons /> 
	    
	</form>
      )
   }
}

export default MyForm
