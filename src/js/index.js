/**
 * @author Artem Gusev (corocoto) <gusev2014russia@mail.ru>
 * @version 2.0.0
 * @copyright Artem Gusev 2020
 */

import {Space} from './space';

window.addEventListener('load', () => {
	if ('serviceWorker' in navigator) {
		try {
			navigator.serviceWorker.register('serviceWorker.js');
		} catch (e) {
			console.log('Service Worker Registration Failed');
		}
	}

	const space = new Space();
	space.settings();
	space.actionsForInnerSolarSystem();
	space.animate();
});

import '../css/main.css';
