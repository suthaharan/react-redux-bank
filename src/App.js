import './App.css';
import ReduxDemo from './ReduxDemo';

import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "./store/index"

function App() {
  const state = useSelector((state) => state);
  console.log(state);
  const dispatch = useDispatch();
  const { depositMoney, withdrawMoney } = bindActionCreators(actionCreators, dispatch)
  return (
    <div className="App">
      <h1>{state.account}</h1>
      <button onClick={() => depositMoney(100)}>Deposit</button>
      <button onClick={() => withdrawMoney(5)}>Withdraw</button>
      <ReduxDemo />
    </div>
  );
}

export default App;
