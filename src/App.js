
import './App.css';
import ProfileImageUpload from './views/profileImageUpload'

const profileInfo = {
  "inital": "RV",
  "name": "Profile Name",
  "status": "Profile Status goes here... "
}

function App() {
  return (
    <div className="App">
      <ProfileImageUpload profileInfo={profileInfo} />
    </div>
  );
}

export default App;
