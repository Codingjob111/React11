
import './App.css';
import Header from './components/Header';
import Courses from './components/Courses';
import Contact from './components/Contact';
import Blog from './components/Blog';
import About from './components/About'
import Hero from './components/Hero';

import { Route,Routes
 } from 'react-router-dom';
import Events from './components/Events';
import Footer from './components/Footer';
import SubmitQuery from './components/Popup';
import Student from './components/Student';
import PlacementDetail from './components/PlacementDetail';
import Home from './components/Home';
import FeedbackForm from './components/FeedbackForm';
import Lookingjob from './components/Lookingjob';



function App() {
  return (
    <div className="App">
    <Header/>
    <SubmitQuery/>

    <Routes>
      <Route path='/Lookingjob' element={<Lookingjob/>}></Route>

    <Route path='/Student' element={<Student/>}/>

    <Route path='/Home' element={<Home/>}/>

    <Route path='/Events' element={<Events/>}/>

    <Route path='/Hero'
      element={<Hero/>} />

    <Route path='/About'
      element={<About/>} />

<Route path='/Blog'
      element={<Blog/>} />

<Route path='/PlacementDetail' element={<PlacementDetail/>}/>

<Route path='/Contact'
      element={<Contact/>} />


<Route path='/Courses'
      element={<Courses/>} />

<Route path='/FeedbackForm'
      element={<FeedbackForm/>} />

   
    </Routes>
    <Footer/>
    </div>
  );
}

export default App;



