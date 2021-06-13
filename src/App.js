import { Provider } from 'react-redux';

import store from './redux';
import Home from './pages/Home';

import './app.css';

function App() {
  return (
    <Provider store={store}>
      <Home/>
    </Provider>
  );
}

export default App;
