import {Provider} from 'react-redux';
import store from './redux/store';
import Shipment from './containers/shipment/screens';

function App() {
  return (
    <Provider store={store}>
      <Shipment/>
    </Provider>
  );
}

export default App;
