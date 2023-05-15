import Main from "./pages/Main";
import PhoneStyle from './pages/PhoneStyle.jsx'
import { useViewport } from "react-viewport-hooks";

function App() {
  const { vw } = useViewport();

  let layout = 'compView';
  if (vw < 725) {
     layout = 'phoneView';
   }

  return (
    <div className="main">
      { layout === 'compView' ? <Main /> : <PhoneStyle /> }
      
    </div>
  );
}

export default App;
