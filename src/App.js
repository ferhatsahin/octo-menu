import { Provider } from 'react-redux';
import SideBar from './components/SideBar';
import './app.css';
import store from './redux';

function App() {
  return (
    <Provider store={store}>
      <SideBar />
    </Provider>
  );
}

export default App;
