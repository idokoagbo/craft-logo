import { BrowserRouter as Router, Routes, Route }
  from 'react-router-dom';

import Index from './pages/index';
import Gallery from './pages/gallery';
import Order from './pages/order';
import Addons from './pages/addons';
import Review from './pages/review';
import Payment from './pages/payment';
import Faqs from './pages/faqs';



function App() {
  return <Router>
    <Routes>
      <Route exact path='/' element={<Index />} />
      <Route exact path='/gallery' element={<Gallery />} />
      <Route exact path='/order-logo' element={<Order />} />
      <Route exact path='/addons' element={<Addons />} />
      <Route exact path='/review-order' element={<Review />} />
      <Route exact path='/payment' element={<Payment />} />
      <Route exact path='/faqs' element={<Faqs />} />
    </Routes>
  </Router>;
}

export default App;
