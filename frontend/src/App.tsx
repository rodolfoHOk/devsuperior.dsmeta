import { BrowserRouter } from 'react-router-dom';
import { Header } from './components/Header';
import { Router } from './Router';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './styles/global.css';

function App() {
  return (
    <BrowserRouter>
      <ToastContainer />
      <Header />
      <main>
        <section>
          <Router />
        </section>
      </main>
    </BrowserRouter>
  );
}

export default App;
