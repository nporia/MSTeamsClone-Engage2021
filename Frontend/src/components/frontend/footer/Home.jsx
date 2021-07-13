import './frontpage/Home.css';
import Navbar from './frontpage/Navbar.jsx';
import Coverpage from './frontpage/coverpage.jsx';
import Feat from './frontpage/feat.jsx';
import Videocallfeat from './frontpage/Videocallfeat.jsx';
import Footer from './footer/footer.js';
import Chat from "./frontpage/chat.jsx";
import Dp from './frontpage/planner.jsx';

function Home() {
  return (
    <div className="App">
     <Navbar/>
     <br></br>
     <Coverpage />   
     <br/><br/>
     <Feat />
     <Videocallfeat />
     <Chat />
     <Dp/>
     <Footer />
    </div>
  );
}

export default Home;
