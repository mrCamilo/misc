import React, {Component} from 'react'
import selectedValue from './Buttons' 

function Results () {
        return(
            <div>
	        <p>Score: {selectedValue}</p>
	        <p>Anxiety/Depression:  </p>
	        <p>Externalizing: </p>
	        <p>Internalizing: </p>
	    </div>
        )
    }

export default Results
