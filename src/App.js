import './App.css';
import Profile from './components/Profile/Profile';
import Statistics from './components/Statistics/Statistics';
import user from './data/user.json';
import statistics from './data/statistics.json';

function App() {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={statistics} />
    </div>
  );
}

export default App;
