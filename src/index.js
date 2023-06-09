import { createRoot } from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import store from './redux/store';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';
import 'font-awesome/css/font-awesome.min.css';


const container = document.querySelector('#root')
const root = createRoot(container)

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App tab="home"/>
    </BrowserRouter>
  </Provider>
);