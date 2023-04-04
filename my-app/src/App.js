import {useState} from "react";
/* Импорт компонента не всегда работает автоматом!*/
import FunctionCounter from "./components/FunctionCounter";
import ClassCounter from "./components/ClassCounter";

function App() {
  const [value, setValue] = useState('Текст в инпуте')


  return (
      <div className={"App"}>
          <FunctionCounter/>
          <ClassCounter/>

      </div>
  );
}

export default App;
