import AppNavigator from "./navigation/index";
import { Provider } from "react-redux";
import { init } from "./db";
import { store } from "./store";
export default function App() {
  init()
  .then(()=>{
    console.log('db initialized');
  })
  .catch((error)=>{
    console.log('initialazing fail');
    console.log(error);
  })
  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
}
