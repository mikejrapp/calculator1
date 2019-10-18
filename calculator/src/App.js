import React from 'react';
import './App.css';

import Panel from './components/panel';
import Button from './components/button';
import Displaybar from './components/displaybar';

function App() {
	return (
		<div className="App">
			<Panel class="backpanel" id="test">
				<Panel class="clear-panel" id="display-panel">
					<Displaybar class="display-bar" id="display"></Displaybar>
				</Panel>
				<Panel class="front-panel" id="number-panel">
					<Panel class="number-row" id="number-row-1">
						<Button class="number-button" id="button-1"></Button>
						<Button class="number-button" id="button-2"></Button>
						<Button class="number-button" id="button-1"></Button>
					</Panel>
					<Panel class="number-row" id="number-row-2">
						<Button class="number-button" id="button-1"></Button>
						<Button class="number-button" id="button-2"></Button>
						<Button class="number-button" id="button-1"></Button>
					</Panel>
					<Panel class="number-row" id="number-row-3">
						<Button class="number-button" id="button-1"></Button>
						<Button class="number-button" id="button-2"></Button>
						<Button class="number-button" id="button-1"></Button>
					</Panel>
					<Panel class="number-row" id="number-row-4">
						<Button class="number-button" id="button-1"></Button>
					</Panel>
				</Panel>
			</Panel>
		</div>
	);
}

export default App;
