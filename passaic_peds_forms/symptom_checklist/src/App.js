import React from 'react';

import Header from './components/Header.js'
import Questionnaire from './components/Questionnaire.js'
import Results from './components/Results.js'

function App() {
  return (
	<div>
	    <Header/>
            <Questionnaire/>
	    <Results/>
	</div>
  )
}

export default App;
