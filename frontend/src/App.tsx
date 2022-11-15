import { Header } from './components/Header';
import { SalesCard } from './components/SalesCard';
import './styles/global.css';

function App() {
  return (
    <>
      <Header />
      <main>
        <section>
          <SalesCard />
        </section>
      </main>
    </>
  );
}

export default App;
