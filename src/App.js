import Test from "./components/Test";
import useWindowSize from './hooks/useWindowSize';

import "./styles.css";

export default function App() {
  const { width } = useWindowSize();

  return (
    <div className="App">
      <div className="header">
        Prueba técnica IMCreate
      </div>
      <main>
        <Test width={width}/>
      </main>
    </div>
  );
}
