import React from 'react';

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        name: 'Abinash',
        location: 'default',
      },
    };
  }
  async componentDidMount() {
    const data = await fetch('https://api.github.com/users/abinash-shrestha');
    const json = await data.json();

    this.setState({
      userInfo: json,
    });

    console.log(json);
  }

  render() {
    const { name, company } = this.state.userInfo;
    return (
      <div className="user-class">
        <h3>Username : {name}</h3>
        <h3>Company : {company}</h3>
      </div>
    );
  }
}

export default UserClass;
