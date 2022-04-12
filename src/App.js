import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import PageNotFound from "./pages/PageNotFound";

function App() {
  return (
    <div className="app" >
      <Router>
        <Routes>
          <Route path="/" element={< Home/>} />
          <Route path="/404" element={< PageNotFound />} />
          <Route path="*" element={< PageNotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
