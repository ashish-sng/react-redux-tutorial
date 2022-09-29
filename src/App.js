import "./App.css";
import { Provider } from "react-redux";
import store from "./redux/store";
import HooksCakeContainer from "./components/HooksCakeContainer";
import HooksIcecreamContainer from "./components/HooksIcecreamContainer";
import NewCakeContainer from "./components/NewCakeContainer";
import ItemContainer from "./components/ItemContainer";
import UserContianer from "./components/UserContianer";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <UserContianer />
        {/* <ItemContainer cake />
        <ItemContainer />
        <HooksCakeContainer />
        <HooksIcecreamContainer />
        <NewCakeContainer /> */}
      </div>
    </Provider>
  );
}

export default App;
