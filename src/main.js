import { createApp, defineAsyncComponent } from 'vue'
import App from './App.vue'
import './index.css'
const components = import.meta.glob('./components/**/*.vue');
const app = createApp(App)
Object.entries(components).forEach(([path, component]) => {
    const name = path.split("/").slice(-1)[0].replace(".vue", "");
    app.component(name, defineAsyncComponent(component));
});
app.mount('#app')
