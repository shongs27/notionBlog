import { Route, Routes } from 'react-router-dom';

import Layout from './commons/Layout';
import HomePage from './pages/HomePage';

function App() {
  return (
    <div>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
