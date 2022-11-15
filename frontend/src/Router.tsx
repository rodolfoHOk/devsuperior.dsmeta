import { Routes, Route } from 'react-router-dom';
import { SalesCard } from './components/SalesCard';
import { SalesForm } from './components/SalesForm';

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<SalesCard />} />
      <Route path="/cadastro" element={<SalesForm />} />
    </Routes>
  );
}
