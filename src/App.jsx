import { SignedIn, SignedOut } from "@clerk/clerk-react";
import SignInPage from "./Components/SignInPage.jsx";
import Header from "./Components/Header.jsx";
import DashBoard from "./Components/DashBoard.jsx";
import UserDetails from "./Components/UserDetails.jsx";
import "./App.css";

const App = () => {
  return (
    
    <>
    <SignedOut>
      <SignInPage />
    </SignedOut>
    <SignedIn>
      <Header />
      <UserDetails />
      <DashBoard />      
    </SignedIn>
  </>
);
}
export default App