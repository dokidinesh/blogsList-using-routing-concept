// Write your JS code here
import './index.css'

const UserInfo = () => {
  const profileImg = 'https://assets.ccbp.in/frontend/react-js/profile-img.png'

  return (
    <div className="user-info-container">
      <img src={profileImg} alt="profile pic" className="profile-pic" />
      <h1 className="user-name">Wade Warren</h1>
      <p className="user-designation">Software developer at UK</p>
    </div>
  )
}

export default UserInfo
