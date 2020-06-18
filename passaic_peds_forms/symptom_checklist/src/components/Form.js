import React from "react"

import Header from './Header.js'
import Questionnaire from './Questionnaire.js'
import questionsData from '../questionsData.js'
import Buttons from './Buttons'
import Results from './Results'


function myForm() {
    const questComponents = questionsData.map(x => {
        return (
            <div>
	        <Questionnaire question = {x.question} />
		<Buttons/>
	    </div>
	)
    })

    return (
        <form>
            <Header/>
            {questComponents}
            <Results/>
	</form>
    )
}

export default myForm 
