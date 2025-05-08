import { UserButton,OrganizationSwitcher } from "@clerk/clerk-react"



const Header = () => {
    return (
      <header>
        <OrganizationSwitcher
          appearance={{
            element: {
              OrganizationPreviewAvatarBox: "size-6"
            }
          }}
          />
          <UserButton
            appearance={{
              element: {
                UserButtonAvatarBox: "size-6"
              }
            }}
            />
      </header>
    )
  }
  export default Header