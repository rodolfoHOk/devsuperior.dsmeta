import { BrowserRouter } from 'react-router-dom';
import { Header } from './components/Header';
import { Router } from './Router';
import './styles/global.css';

function App() {
  return (
    <BrowserRouter>
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
