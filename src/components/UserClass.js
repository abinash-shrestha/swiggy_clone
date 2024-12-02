import React from 'react';

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }
  render() {
    const { name, role } = this.props;
    const { count, count2 } = this.state;
    return (
      <div className="user-class">
        <h3>Username : {name}</h3>
        <h3>User Role : {role}</h3>
        <h3>Count : {count}</h3>
        <button
          onClick={() => {
            this.setState({
              count: (this.state.count += 1),
            });
          }}
        >
          Increase Count
        </button>
      </div>
    );
  }
}

export default UserClass;
