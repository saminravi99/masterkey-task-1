import { Route, Routes } from 'react-router-dom';
import './App.css';
import BannerAd from './components/BannerAd/BannerAd';
import Footer from './components/Footer/Footer';
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
            index
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
      <Footer></Footer>
    </div>
  );
}

export default App;
