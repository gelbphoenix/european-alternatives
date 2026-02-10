import { Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import LandingPage from './LandingPage';
import BrowsePage from './BrowsePage';

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/browse" element={<BrowsePage />} />
      </Routes>
    </Layout>
  );
}
