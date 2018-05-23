import { View, Viewable, Inject } from 'conbo';

import MyModel from '../model/MyModel';

@Viewable('conbo.example.es2015', 'OutputView')
export default class OutputView extends View
{
	declarations()
	{
		// Undefined properties are injected (if they exist)
		this.myModel = undefined;

		this.tagName = 'h1';
		this.template = `Hello, {{myModel.name|parseName}}!`;
	}

	parseName(name)
	{
		return name || 'Stranger';
	}
}
