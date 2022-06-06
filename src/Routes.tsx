import { 
    BrowserRouter, 
    Routes as RoutesWrapper, 
    Route, } from 'react-router-dom';
import Home from './pages/Home';
import Tec from './pages/Tec'

function Routes (){
  return (
    <BrowserRouter>
      <RoutesWrapper>
        <Route path="/" element={<Home />} />
        <Route path="/tecnologia" element={<Tec />} />
      </RoutesWrapper>
    </BrowserRouter>
);
}

export default Routes;
