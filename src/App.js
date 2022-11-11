import {Provider} from "react-redux";

import store from './store/configureStore';
import './scss/index.scss';
import './App.css';
import Jobs from "./pages/Jobs";

// import Movies from './pages/Movies';
// import MoviesExample from "./pages/RoutesMovies/component";

const App = () => (
  <Provider store={store}>
    <div>
    <Jobs/>
    </div>
  </Provider>
);

export default App;