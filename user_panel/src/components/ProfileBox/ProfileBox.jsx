import "./ProfileBox.css";
import { url } from "../../assets/assets";

const ProfileBox = ({ user, onClose, onLogout }) => {
  return (
    <div className="profile-box">
      <button className="close-btn" onClick={onClose}>❌</button>
      <img src={`${url}/uploads/${user.image}`} alt="user" className="box-image" />
      <h4>{user.fullName}</h4>
      <p>{user.email}</p>
      <button className="logout-btn" onClick={onLogout}>Logout</button>
    </div>
  );
};

export default ProfileBox;
