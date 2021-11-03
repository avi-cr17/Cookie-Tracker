
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import Home from '../src/components/Home';
import {Provider} from 'react-redux';



import store from '../src/store';


function App() {
  return (
    <Provider store = {store}>
    <Home />
    </Provider>
  );
}

export default App;

