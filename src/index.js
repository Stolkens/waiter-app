import { createRoot } from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import store from './redux/store';
import 'bootstrap/dist/css/bootstrap.min.css';


const container = document.querySelector('#root')
const root = createRoot(container)

root.render(
  <Provider store={store}>
    <App tab="home"/>
  </Provider>
);