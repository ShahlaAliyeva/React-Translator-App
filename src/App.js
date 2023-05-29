import Main from "./pages/Main";
import PhoneStyle from './pages/PhoneStyle.jsx'
import { useViewport } from "react-viewport-hooks";
import Footer from "./components/Footer";

function App() {
  const { vw } = useViewport();
  let layout = 'compView';
  
  if (vw < 725) {
     layout = 'phoneView';
   }

  return (
    <div>
      <h1>Translator App</h1>
      <main className="main">
      { layout === 'compView' ? <Main /> : <PhoneStyle /> }
      </main>
      <Footer />
    </div>
  );
}

export default App;
