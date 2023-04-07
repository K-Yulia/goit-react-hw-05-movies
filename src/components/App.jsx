import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
import { Layout } from './Layout/Layout';
import { GlobalStyle } from './GlobalStyle';



const Home = lazy(() => import('../pages/Home'));
const Movies = lazy(() => import('../pages/Movies'));
const MovieDetails = lazy(() => import('../pages/MovieDetails'));
const Cast = lazy(() => import('./Cast/Cast'));
const Reviews = lazy(() => import('./Reviews/Reviews'));
export const App = () => {
  
 
  return (
    <>
    <GlobalStyle />
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:movieId" element={<MovieDetails />} >
              <Route path="Cast" element={<Cast />} />
              <Route path="Reviews" element={<Reviews/>} />
          </Route>
      </Route>
      {/* <Route path="*" element={<h2>NotFound</h2>} /> */}
      </Routes>
  </>
  );
}                       
