import { Context } from 'conbo';

import MyModel from '../model/MyModel';

export default class MyContext extends Context
{
	initialize()
	{
		this.mapSingleton('myModel', MyModel);
	}
}
