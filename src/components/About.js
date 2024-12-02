import User from './User';
import UserClass from './UserClass';
const About = () => {
  return (
    <div>
      <h1>About Us</h1>
      <h2>This is about us page from Namaste React Series</h2>
      {/* <User name={'Abinash Shrestha (function)'} role={'Admin (function)'} /> */}
      <UserClass name={'abinash'} location={'Nepal'} />
    </div>
  );
};

export default About;
