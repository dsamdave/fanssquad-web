
import { Routes, Route} from 'react-router-dom'
import { useLocation } from 'react-router-dom';
import PageRender from './PageRender';



function App() {


  const location = useLocation();


  return (
    <div>
     
      <div>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<PageRender />} />
          <Route path="/:page" element={<PageRender />} />
          <Route path="/:page/:slug" element={<PageRender />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
