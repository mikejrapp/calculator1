import React from 'react';
import './App.css';

import Backpanel from './components/backpanel';
import Button from './components/button';

function App() {
	return (
		<div className="App">
			<Backpanel class="backpanel" id="test">
				<Button class="number-button" id="button-1"></Button>
				<Button class="bumber-button" id="button-2"></Button>
			</Backpanel>
		</div>
	);
}

export default App;
