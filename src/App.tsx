import Button from "./components/Button";
import s from './App.module.scss';
import {buttons} from "./structures/buttons";

function App() {
  return (
    <div className="App">
        <div className={s.letters}>
            {buttons.map(l => <Button key={l.id} letter={l} />)}
        </div>
    </div>
  )
}

export default App
