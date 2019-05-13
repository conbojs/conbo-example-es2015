import './Es2015Example.scss';

import * as conbo from 'conbo';
import { Application, Viewable } from 'conbo';

import MyContext from './core/MyContext';
import InputView from './view/InputView';
import OutputView from './view/OutputView';

@Viewable('Es2015Example')
export default class Es2015Example extends Application
{
	declarations()
	{
		window.conbo = conbo;
		
		this.contextClass = MyContext;
	}

	initialize()
	{
		console.info('Hello from ConboJS using ES2015, SASS & Webpack!');

		this.appendView
		(
			new OutputView(this.context),
			new InputView(this.context)
		);
	}

}
