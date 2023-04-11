import GlobalStyle from './styles/global'
import { toast, ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

function App() {
  return (
    <>
      <ToastContainer autoClose={2500} position={toast.POSITION.BOTTOM_LEFT} />
      <GlobalStyle />
      <p>teste</p>
      
      <p>teste</p>
    </>
  );
}

export default App;
