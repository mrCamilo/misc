import React from "react"

import Questionnaire from './Questionnaire.js'
import questionsData from '../questionsData.js'
import Buttons from './Buttons'

function MyForm() {
    const questComponents = questionsData.map(x => {
	return (
	    <div>
	        <Questionnaire question = {x.question} />
	        <Buttons />
	    </div>
	)
    })

    return (
	<div>
            {questComponents}
	</div>
    )
}

export default MyForm
