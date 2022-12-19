import {Provider} from "react-redux";

import store from './store/configureStore';
import './scss/index.scss';
import './App.css';
import JobApp from "./routes";


const App = () => (
  <Provider store={store}>
    <JobApp/>
  </Provider>
);

export default App;