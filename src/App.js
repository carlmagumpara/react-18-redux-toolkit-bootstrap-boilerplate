import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navigator from 'components/Shared/Navigator';

import Home from 'pages/home';
import About from 'pages/about';
import NotFound from 'pages/not-found';

import Auth from 'middleware/Auth';

function App() {
  return (
    <Router>
      <Navigator />
      <Routes>
        <Route path='*' element={<NotFound />} />
        <Route path="about" element={<About />} />  
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
