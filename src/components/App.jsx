// import 'normalize.css';
// import { App } from '../components/App';
import user from '../data/user.json';
import { Profile } from '../components/Profile/Profile';



export const App = () => {
  return (
     <Profile {...user} />
  );
};
