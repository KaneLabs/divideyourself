import React from 'react';
import { Route, IndexRoute } from 'react-router';
import MasonryGallery from './components/masonry-gallery';
import SignUp from './components/signup'
import Login from './components/login'

import App from './components/app';



const ComingSoon = () => {
  return (
    <main>
    <article
      style={{position: 'absolute',left:'0', right:'0',top: '20%', margin: 'auto', backgroundColor: '#424242',color: '#FAFAFA', borderRadius:'5px', width: '50%', padding: '12px', opacity: '.95'}}>
      <h5 style={{}}>We are working on making divideyourself.com your greatest resource for outdoor adventure.</h5>
      <h5> Unfortunately, we have limited developers and are focusing our time on core features first.</h5>
      <p style={{}}>If you love what we're doing and want to get involved, e-mail me at ryankane28@gmail.com</p>
      <p style={{}}>Check back soon!</p>
    </article>
    </main>
  )
}



export default (
  <Route path='/' component={App}>
  <IndexRoute component={MasonryGallery} />
    <Route path='knowledge' component={ComingSoon}/>
    <Route path='adventure' component={ComingSoon} />
    <Route path='market' component={ComingSoon} />
    <Route path='signup' component={SignUp} />
    <Route path='login' component={Login} />
  </Route>
);
