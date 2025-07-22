
import './Home.css';
import Nav from "./Nav";
import Footer from './Footer';


const Home = () => {
  return (
   <><Nav/>
  
    <div className="home">
      
      <div className="main">
        <p className="tagline">BEST PLACE TO RELAX & ENJOY</p>
        <h1>A Luxurious Way To Enjoy Your Life</h1>
        <button className="discover-btn">Discover Rooms →</button>
      </div>

      <div className="checkbox">
        <div className="check-field">
          <label>Check In</label>
          <input type="date" />
        </div>
        <div className="check-field">
          <label>Check Out</label>
          <input type="date" />
        </div>
        <div className="check-field">
          <label>Room</label>
          <select>
            <option>1</option>
            <option>2</option>
            <option>3</option>
          </select>
        </div>
        <button className="check-btn">Check Availability →</button>
      </div>
    </div>
    <Footer/>
     </>
     
  );
};

export default Home;