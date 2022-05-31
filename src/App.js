import { Route, Routes } from 'react-router-dom';
import './App.css';
import BannerAd from './components/BannerAd/BannerAd';
import Home from './components/Home/Home';
import Native from './components/Native/Native';
import NavBar from './components/NavBar/NavBar';
import PopUnder from './components/PopUnder/PopUnder';
import Skim from './components/Skim/Skim';

function App() {
  return (
    <div className="body">
      <NavBar></NavBar>
      <Routes>
        <Route
          path="/"
          element={<Home></Home>}
        >
          <Route
            path="pop-under"
            element={<PopUnder></PopUnder>}
          ></Route>
          <Route
            path="banner-ad"
            element={<BannerAd></BannerAd>}
          ></Route>
          <Route
            path="native"
            element={<Native></Native>}
          ></Route>
          <Route
            path="skim"
            element={<Skim></Skim>}
          ></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
