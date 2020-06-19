import React, {Component} from "react"

class Questionnaire extends Component {
    constructor() {
	super()
	this.state = {
	}
    }

    render() {
        return (
	    <form>
		<p>Complain of aches or pains</p>
		<label><input type = "radio" name = "1" value = {0}/>Never</label><br/>
	        <label><input type = "radio" name = "1" value = {1}/>Sometimes</label><br/>
		<label><input type="radio" name = "1" value = {2}/>Always</label><br/>
	        
		<p>Spend more time alone</p>
		<label><input type = "radio" name = "2" value = {0}/> Never</label><br/>
	        <label><input type = "radio" name = "2" value = {1}/> Sometimes</label><br/>
		<label><input type="radio" name = "2" value = {2}/> Always</label><br/>

	        <p>Tire easily, little energy</p>
		<label><input type = "radio" name = "3" value = {0}/> Never</label><br/>
	        <label><input type = "radio" name = "3" value = {1}/> Sometimes</label><br/>
		<label><input type="radio" name = "3" value = {2}/> Always</label><br/>

	        <p>Fidgety unable to sit still</p>
		<label><input type = "radio" name = "3" value = {0}/> Never</label><br/>
	        <label><input type = "radio" name = "3" value = {1}/> Sometimes</label><br/>
		<label><input type="radio" name = "3" value = {2}/> Always</label><br/>

		<p>Have trouble with teacher</p>
		<label><input type = "radio" name = "4" value = {0}/> Never</label><br/>
	        <label><input type = "radio" name = "" value = {1}/> Sometimes</label><br/>
		<label><input type="radio" name = "4" value = {2}/> Always</label><br/>

		<p>Less interested in school</p>
		<label><input type = "radio" name = "5" value = {0}/> Never</label><br/>
	        <label><input type = "radio" name = "5" value = {1}/> Sometimes</label><br/>
		<label><input type="radio" name = "5" value = {2}/> Always</label><br/>

		<p>Act as if driven by motor</p>
	        <label><input type = "radio" name = "6" value = {0}/> Never</label><br/>
	        <label><input type = "radio" name = "6" value = {1}/> Sometimes</label><br/>
		<label><input type="radio" name = "6" value = {2}/> Always</label><br/>

		<p>Daydream too much</p>
	        <label><input type = "radio" name = "7" value = {0}/> Never</label><br/>
	        <label><input type = "radio" name = "7" value = {1}/> Sometimes</label><br/>
		<label><input type="radio" name = "7" value = {2}/> Always</label><br/>

		<p>Distracted easily</p>
	        <label><input type = "radio" name = "8" value = {0}/> Never</label><br/>
	        <label><input type = "radio" name = "8" value = {1}/> Sometimes</label><br/>
		<label><input type="radio" name = "8" value = {2}/> Always</label><br/>

		<p>Are afraid of new situations</p>
	        <label><input type = "radio" name = "9" value = {0}/> Never</label><br/>
	        <label><input type = "radio" name = "9" value = {1}/> Sometimes</label><br/>
		<label><input type="radio" name = "9" value = {2}/> Always</label><br/>

		<p>Feel sad, unhappy</p>
	        <label><input type = "radio" name = "10" value = {0}/> Never</label><br/>
	        <label><input type = "radio" name = "10" value = {1}/> Sometimes</label><br/>
		<label><input type="radio" name = "10" value = {2}/> Always</label><br/>

		<p>Are irritable, angry</p>
	        <label><input type = "radio" name = "11" value = {0}/> Never</label><br/>
	        <label><input type = "radio" name = "11" value = {1}/> Sometimes</label><br/>
		<label><input type="radio" name = "11" value = {2}/> Always</label><br/>

		<p>Feel hopeless</p>
	        <label><input type = "radio" name = "12" value = {0}/> Never</label><br/>
	        <label><input type = "radio" name = "12" value = {1}/> Sometimes</label><br/>
		<label><input type="radio" name = "12" value = {2}/> Always</label><br/>

		<p>Have trouble concentrating</p>
	        <label><input type = "radio" name = "13" value = {0}/> Never</label><br/>
	        <label><input type = "radio" name = "13" value = {1}/> Sometimes</label><br/>
		<label><input type="radio" name = "13" value = {2}/> Always</label><br/>

		<p>Less interested in friends</p>
	        <label><input type = "radio" name = "14" value = {0}/> Never</label><br/>
	        <label><input type = "radio" name = "14" value = {1}/> Sometimes</label><br/>
		<label><input type="radio" name = "14" value = {2}/> Always</label><br/>

		<p>Fight with other children</p>
	        <label><input type = "radio" name = "15" value = {0}/> Never</label><br/>
	        <label><input type = "radio" name = "15" value = {1}/> Sometimes</label><br/>
		<label><input type="radio" name = "15" value = {2}/> Always</label><br/>

		<p>Absent from school</p>
	        <label><input type = "radio" name = "16" value = {0}/> Never</label><br/>
	        <label><input type = "radio" name = "16" value = {1}/> Sometimes</label><br/>
		<label><input type="radio" name = "16" value = {2}/> Always</label><br/>


		<p>School grades dropping</p>
	        <label><input type = "radio" name = "17" value = {0}/> Never</label><br/>
	        <label><input type = "radio" name = "17" value = {1}/> Sometimes</label><br/>
		<label><input type="radio" name = "17" value = {2}/> Always</label><br/>

		<p>Down on yourself</p>
	        <label><input type = "radio" name = "18" value = {0}/> Never</label><br/>
	        <label><input type = "radio" name = "18" value = {1}/> Sometimes</label><br/>
		<label><input type="radio" name = "18" value = {2}/> Always</label><br/>

		<p>Visit doctor with doctor finding nothing wrong</p>
	        <label><input type = "radio" name = "19" value = {0}/> Never</label><br/>
	        <label><input type = "radio" name = "19" value = {1}/> Sometimes</label><br/>
		<label><input type="radio" name = "19" value = {2}/> Always</label><br/>

		<p>Have trouble sleeping</p>
	        <label><input type = "radio" name = "20" value = {0}/> Never</label><br/>
	        <label><input type = "radio" name = "20" value = {1}/> Sometimes</label><br/>
		<label><input type="radio" name = "20" value = {2}/> Always</label><br/>

		<p>Worry a lot</p>
	        <label><input type = "radio" name = "21" value = {0}/> Never</label><br/>
	        <label><input type = "radio" name = "21" value = {1}/> Sometimes</label><br/>
		<label><input type="radio" name = "21" value = {2}/> Always</label><br/>

		<p>Want to be with parent more than before</p>
	        <label><input type = "radio" name = "22" value = {0}/> Never</label><br/>
	        <label><input type = "radio" name = "22" value = {1}/> Sometimes</label><br/>
		<label><input type="radio" name = "22" value = {2}/> Always</label><br/>

		<p>Feel that you are bad</p>
	        <label><input type = "radio" name = "23" value = {0}/> Never</label><br/>
	        <label><input type = "radio" name = "23" value = {1}/> Sometimes</label><br/>
		<label><input type="radio" name = "23" value = {2}/> Always</label><br/>

		<p>Take unnecessary risks</p>
	        <label><input type = "radio" name = "24" value = {0}/> Never</label><br/>
	        <label><input type = "radio" name = "24" value = {1}/> Sometimes</label><br/>
		<label><input type="radio" name = "24" value = {2}/> Always</label><br/>

		<p>Get hurt frequently</p>
	        <label><input type = "radio" name = "25" value = {0}/> Never</label><br/>
	        <label><input type = "radio" name = "25" value = {1}/> Sometimes</label><br/>
		<label><input type="radio" name = "25" value = {2}/> Always</label><br/>

		<p>Seem to be having less fun</p>
	        <label><input type = "radio" name = "26" value = {0}/> Never</label><br/>
	        <label><input type = "radio" name = "26" value = {1}/> Sometimes</label><br/>
		<label><input type="radio" name = "26" value = {2}/> Always</label><br/>

		<p>Act younger than children your age</p>
	        <label><input type = "radio" name = "27" value = {0}/> Never</label><br/>
	        <label><input type = "radio" name = "27" value = {1}/> Sometimes</label><br/>
		<label><input type="radio" name = "27" value = {2}/> Always</label><br/>

		<p>Do not listen to rules</p>
	        <label><input type = "radio" name = "28" value = {0}/> Never</label><br/>
	        <label><input type = "radio" name = "28" value = {1}/> Sometimes</label><br/>
		<label><input type="radio" name = "28" value = {2}/> Always</label><br/>

		<p>Do not show feelings</p>
	        <label><input type = "radio" name = "29" value = {0}/> Never</label><br/>
	        <label><input type = "radio" name = "29" value = {1}/> Sometimes</label><br/>
		<label><input type="radio" name = "29" value = {2}/> Always</label><br/>

		<p>Do not understand other peoples feelings</p>
	        <label><input type = "radio" name = "30" value = {0}/> Never</label><br/>
	        <label><input type = "radio" name = "30" value = {1}/> Sometimes</label><br/>
		<label><input type="radio" name = "30" value = {2}/> Always</label><br/>

		<p>Tease others</p>
	        <label><input type = "radio" name = "31" value = {0}/> Never</label><br/>
	        <label><input type = "radio" name = "31" value = {1}/> Sometimes</label><br/>
		<label><input type="radio" name = "31" value = {2}/> Always</label><br/>

		<p>Blame others for your troubles</p>
	        <label><input type = "radio" name = "32" value = {0}/> Never</label><br/>
	        <label><input type = "radio" name = "32" value = {1}/> Sometimes</label><br/>
		<label><input type="radio" name = "32" value = {2}/> Always</label><br/>

		<p>Take things that do not belong to you</p>
	        <label><input type = "radio" name = "33" value = {0}/> Never</label><br/>
	        <label><input type = "radio" name = "33" value = {1}/> Sometimes</label><br/>
		<label><input type="radio" name = "33" value = {2}/> Always</label><br/>

		<p>Refuse to share</p>
	        <label><input type = "radio" name = "34" value = {0}/> Never</label><br/>
	        <label><input type = "radio" name = "34" value = {1}/> Sometimes</label><br/>
		<label><input type="radio" name = "34" value = {2}/> Always</label><br/>
		</form>
        )
   } 
}

export default Questionnaire
