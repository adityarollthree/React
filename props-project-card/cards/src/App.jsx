
import ProfileCard from './components/ProfileCard';
import './App.css';

function App() {
  return (
    <main className="profile-page">
      <div style={{ display: 'flex', gap: '16px' }}>

        <ProfileCard
        name="Aditya Kashyap"
        title="Associate Analyst"
        handle="adityarollthree"
        status="Online"
        contactText="Contact"
        avatarUrl="https://avatars.githubusercontent.com/u/92925100?v=4"
        iconUrl="https://avatars.githubusercontent.com/u/92925100?v=4"
        holo={0.8}
        glare={0.5}
        tiltStrength={12}
        parallax={8}
        radius={16}
        enableTilt={true}
        intro={true}
        showUserInfo={true}
        enableMobileTilt={false}
        theme="dark"
        onContactClick={() => console.log('Contact clicked')}
      />
       <ProfileCard
        name="Abhinav Kumar Rai"
        title="Associate Analyst"
        handle="inventedbeast"
        status="Online"
        contactText="Contact"
        avatarUrl="https://avatars.githubusercontent.com/u/88543056?v=4"
        iconUrl="https://avatars.githubusercontent.com/u/88543056?v=4"
        holo={0.8}
        glare={0.5}
        tiltStrength={12}
        parallax={8}
        radius={16}
        enableTilt={true}
        intro={true}
        showUserInfo={true}
        enableMobileTilt={false}
        theme="dark"
        onContactClick={() => console.log('Contact clicked')}
      />
      </div>
      
    </main>
  );
}

export default App;
