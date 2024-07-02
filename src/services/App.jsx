import '../styles/App.css'
import { AppProvider } from '../stored/appContext'
import { BrowserRouter, Routes, Route} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from '../views/home';
import Details from '../componentes/Details';
import PeoplePage from '../views/peoplePage';
import PlanetsPage from '../views/planetsPage'
import VehiclesPage from '../views/vehiclesPage'
import Favorites from '../componentes/Favorites'
function App() {
  

  return (
    <AppProvider>
    <BrowserRouter>
    <>
    <Routes>
    <Route path="/" element={<Home />} />
          <Route path="/people" element={<PeoplePage />} />
          <Route path="/planets" element={<PlanetsPage />} />
          <Route path="/vehicles" element={<VehiclesPage />} />
          <Route path="/details/:type/:id" element={<Details />} />
          <Route path="/favorites" element={<Favorites />} />
    </Routes>
    </>
    </BrowserRouter>
    </AppProvider>
  );
}

export default (App)
