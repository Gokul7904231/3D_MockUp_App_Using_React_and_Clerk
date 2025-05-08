import { useOrganization,useSession,useUser } from "@clerk/clerk-react"


const UserDetails = () => {
  const { user } = useUser()
  const { session } = useSession()
  const { organization } = useOrganization()

  if ( !user || !session ) return null 

  const formatDate = (date) => {
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',   
    })
  }
  const formatDateWithNumbers = (date) => {
    return date.toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: '2-digit',
      second: '2-digit',
      year: 'numeric',
      month: 'numeric',
      day: 'numeric', 
      hour12: true,

    })
  }
    return (
      <div className="info-container">
         <article className="info-detail">
         <img className="user-detail-img" src={user.imageUrl}/>
         <div>
          <h1>{user.firstName} {user.lastName}</h1>
         </div>
         <table>
          <tbody>
          <tr>
            <td>Email:</td>
            <td>{user.emailAddresses[0].emailAddress}</td>
          </tr>
          <tr>
            <td>Last SignIn:</td>
            <td>{formatDate(user.lastSignInAt)}</td>
          </tr>
          <tr>
            <td>Created At:</td>
            <td>{formatDate(user.createdAt)}</td>
          </tr>
          <tr>
            <td>User Id:</td>
            <td>{user.id}</td>
          </tr> 
          </tbody>        
         </table>
         </article>
         <article className="info-detail">
          <h2>Session Details</h2>
          <table>
            <tbody>
            <tr>
              <td>Session Id:</td>
              <td>{session.id}</td>
            </tr>
            <tr>
              <td>Status:</td>
              <td>{session.status}</td>
            </tr>
            <tr>
              <td>Last Active:</td>
              <td>{formatDateWithNumbers(session.lastActiveAt)}</td>
            </tr>
            <tr>
              <td>Expired At:</td>
              <td>{formatDateWithNumbers(session.expireAt)}</td>
            </tr>
            </tbody>
            </table>
         </article>
         {organization && <article className="info-detail">
          <h2>Organization</h2>
          <table>
            <tbody>
            <tr>
              <td>Organization Id:</td>
              <td>{organization.id}</td>
            </tr>
            <tr>
              <td>Organization Name:</td>
              <td>{organization.name}</td>
            </tr>
            <tr>
              <td>Member Count:</td>
              <td>{organization.membersCount}</td>
            </tr>
            <tr>
              <td>Pending Invite:</td>
              <td>{organization.pendingInvitationsCount}</td>
            </tr>
            </tbody>
          </table>
         </article>}
      </div>
    )
  }
  export default UserDetails