import './Es6Example.scss';

import * as conbo from 'conbo';
import { Application, Viewable } from 'conbo';

import MyContext from './core/MyContext';
import InputView from './view/InputView';
import OutputView from './view/OutputView';

@Viewable('conbo.example.es6', 'Es6Example')
export default class Es6Example extends Application
{
	declarations()
	{
		window.conbo = conbo;

		this.namespace = conbo('conbo.example.typescript');
		this.contextClass = MyContext;
	}

	initialize()
	{
		console.info('Hello from ConboJS using ES6, SASS & Webpack!');

		this.appendView
		(
			new OutputView(this.context),
			new InputView(this.context)
		);
	}

}
