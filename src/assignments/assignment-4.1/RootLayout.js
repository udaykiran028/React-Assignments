import Navbar from "./navbar/Navbar";
import UserList from "./userlist/UserList";
import Footer from "./footer/Footer";

function RootLayout() {
  return (
    <div className="App" style={{backgroundImage:'linear-gradient(to right,#E6E6FA, #F0FFFF)'}}>
      <Navbar/>
      <UserList/>
      <Footer/>
    </div>
  );
}

export default RootLayout;
