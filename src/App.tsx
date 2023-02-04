import Button from "./components/Button";
import s from './App.module.scss';
import {letters} from "./structures/letters";

function App() {
  return (
    <div className="App">
        <div className={s.letters}>
            {letters.map(l => <Button letter={l} />)}
        </div>
    </div>
  )
}

export default App
