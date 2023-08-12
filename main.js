import App from './App'
import "./styles/base.css"
import "./styles/withform.css"
import * as Pinia from 'pinia';
import { createSSRApp } from 'vue'
export function createApp() {
	const app = createSSRApp(App)
	app.use(Pinia.createPinia());
	return {
		app,
		Pinia
	}
}
/* #ifdef H5 */
import "./styles/h5.css"
window.log = console.log;
/* #endif */
