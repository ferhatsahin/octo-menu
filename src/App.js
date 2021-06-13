import { Provider } from 'react-redux';
import SideBar from './components/SideBar';
import store from './redux';

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <SideBar/>
    </div>
    </Provider>
  );
}

export default App;
