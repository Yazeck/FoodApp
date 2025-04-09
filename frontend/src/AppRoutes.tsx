import {Navigate, Route, Routes} from 'react-router';
import Layout from './layout/Layout';
import HomePage from './pages/HomePage';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout>
        <HomePage />
      </Layout>} />
      <Route path="/User-profile" element={<div>About</div>} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}
export default AppRoutes;