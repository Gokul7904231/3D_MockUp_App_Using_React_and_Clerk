import { SignInButton } from "@clerk/clerk-react"
import mockLogo from "../assets/mock2.png"

const SignInPage = () => {
  return (
    <div className="signin">
      <img src={mockLogo} alt="Mock Logo" className="logo" />
    <SignInButton/>
    </div>
  )
}
export default SignInPage