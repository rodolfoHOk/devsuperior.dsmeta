import { Routes, Route } from 'react-router-dom';
import { SalesCard } from './components/SalesCard';

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<SalesCard />} />
    </Routes>
  );
}
