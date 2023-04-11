import { Component } from 'react';
import './App.css';
import ChildrenComp from './Components/Child';
import Profile from './Components/Profile';
import Timer from './Components/Timer';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      Visiblty: false
    }
  }

Show = () => {
  this.setState({Visiblty: !this.state.Visiblty})
}

  render(){
    const styleImage= {width: 350}
    return (
      <div className="App">
        <h1>My Profile</h1>
        <button onClick={this.Show}>
          {this.state.Visiblty ? "HIDE PROFILE" : "SHOW PROFILE"}
        </button>
        {this.state.Visiblty && <><Profile styleImage={styleImage} FullName="Ahmed Soukeh" Bio="Student" Profession="Full Stack Web Developper">
          <ChildrenComp styleImage={styleImage} />
        </Profile><Timer /></>}
        
      </div>
    )
  }

}

export default App;
