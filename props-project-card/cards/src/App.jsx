
import ProfileCard from "./components/ProfileCard";
import "./App.css";

const profiles = [
  {
    id: 1,
    name: "Aditya Kashyap",
    title: "Associate Analyst",
    handle: "adityarollthree",
    status: "Online",
    statusColor: "#22c55e",
    contactText: "Contact",

    avatarUrl: "https://avatars.githubusercontent.com/u/92925100?v=4",
    iconUrl: "https://avatars.githubusercontent.com/u/92925100?v=4",
    miniAvatarUrl: "https://avatars.githubusercontent.com/u/92925100?v=4",

    showUserInfo: true,
    theme: "dark",
    backdropColor: "",
    radius: 16,

    holo: 0.8,
    glare: 0.5,
    enableTilt: true,
    tiltStrength: 12,
    parallax: 8,

    enableMobileTilt: false,
    mobileTiltSensitivity: 5,
    intro: true,

    onContactClick: () => {
      console.log("Aditya Kashyap contact clicked");
    },
  },

  {
    id: 2,
    name: "Rahul Sharma",
    title: "Frontend Developer",
    handle: "rahuldev",
    status: "Online",
    statusColor: "#22c55e",
    contactText: "Contact",

    avatarUrl: "https://i.pravatar.cc/300?img=12",
    iconUrl: "https://i.pravatar.cc/300?img=12",
    miniAvatarUrl: "https://i.pravatar.cc/300?img=12",

    showUserInfo: true,
    theme: "dark",
    backdropColor: "",
    radius: 16,

    holo: 0.6,
    glare: 0.4,
    enableTilt: true,
    tiltStrength: 10,
    parallax: 6,

    enableMobileTilt: false,
    mobileTiltSensitivity: 5,
    intro: true,

    onContactClick: () => {
      console.log("Rahul Sharma contact clicked");
    },
  },

  {
    id: 3,
    name: "Priya Singh",
    title: "UI/UX Designer",
    handle: "priyadesigns",
    status: "Away",
    statusColor: "#f59e0b",
    contactText: "Contact",

    avatarUrl: "https://i.pravatar.cc/300?img=47",
    iconUrl: "https://i.pravatar.cc/300?img=47",
    miniAvatarUrl: "https://i.pravatar.cc/300?img=47",

    showUserInfo: true,
    theme: "light",
    backdropColor: "",
    radius: 16,

    holo: 0.7,
    glare: 0.5,
    enableTilt: true,
    tiltStrength: 12,
    parallax: 8,

    enableMobileTilt: false,
    mobileTiltSensitivity: 5,
    intro: true,

    onContactClick: () => {
      console.log("Priya Singh contact clicked");
    },
  },
];

function App() {
  return (
    <main className="profile-page">
      <div className="profile-grid" >
        {profiles.map((profile) => (
          <ProfileCard
            key={profile.id}
            {...profile}
          />
        ))}
      </div>
    </main>
  );
}

export default App;
