import User from './User';
import UserClass from './UserClass';
import UserContext from '../utils/userContext';
const About = () => {
  return (
    <div>
      <h1>About Us</h1>
      <div>
        LoggedIn User :
        <UserContext.Consumer>
          {({ loggedInUser }) => <h1 className="font-bold">{loggedInUser}</h1>}
        </UserContext.Consumer>
      </div>
      <h2>This is about us page from Namaste React Series</h2>
      {/* <User name={'Abinash Shrestha (function)'} role={'Admin (function)'} /> */}
      <UserClass name={'abinash'} location={'Nepal'} />
    </div>
  );
};

export default About;
