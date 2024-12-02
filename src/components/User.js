import { useState } from 'react';

const User = (props) => {
  const [count] = useState(0);
  const [count2] = useState(2);
  return (
    <div className="user-class">
      <h3>Username : {props.name}</h3>
      <h3>User Role : {props.role}</h3>
      <h3>Count : {count}</h3>
      <h3>Count2 : {count2}</h3>
    </div>
  );
};

export default User;
