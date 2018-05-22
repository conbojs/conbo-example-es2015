import MyModel from '../model/MyModel';
import { Viewable, View, Inject } from 'conbo';

@Viewable('conbo.example.es6', 'InputView')
export default class InputView extends View
{
	declarations()
	{
		// Undefined properties are injected (if they exist)
		this.myModel = undefined;

		this.tagName = 'p';
		this.template = `My name is <input type="text" placeholder="Name" cb-bind="myModel.name" />`;
	}
}
