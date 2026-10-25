import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DashboardLayout from './layouts/DashboardLayout';

// Dummy page components for now
const Dashboard = () => <div className="text-[#3A416F] text-xl font-medium">Welcome To MyPatientHUB!</div>;
const Placeholder = () => <div className="text-[#3A416F]">Page content coming soon...</div>;

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DashboardLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="appointments" element={<Placeholder />} />
          <Route path="find-doctor" element={<Placeholder />} />
          <Route path="find-clinic" element={<Placeholder />} />
          <Route path="chat" element={<Placeholder />} />
          <Route path="marketplace" element={<Placeholder />} />
          <Route path="find-pharmacy" element={<Placeholder />} />
          <Route path="dependents" element={<Placeholder />} />
          <Route path="account" element={<Placeholder />} />
          <Route path="settings" element={<Placeholder />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}