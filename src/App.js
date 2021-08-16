import './App.css';
import React  from 'react';

class App extends React.Component {
  state = {
    fullName: "Soumaya Labbene",
    bio: "22 years old",
    imgSrc: "https://cdn.pixabay.com/photo/2017/06/13/12/53/profile-2398782_1280.png",
    profession: "Software Engineer",
    date: new Date(),
    shows: false
  };
  handleClick = () => this.setState({ shows: !this.state.shows })
  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }
  tick() {
    this.setState({
      date: new Date()
    });
  }
  componentDidUpdate() {
    clearInterval(this.timerID);
    alert(this.state.date)
  }
  render(){
    return(
     
      <div style={{ textAlign: 'center', marginTop: '60px' }}>
         <h2>{this.state.date.toLocaleTimeString()}</h2>
          <button onClick={this.handleClick} style={{backgroundColor:'#A34B73', color:'white', borderColor:'#A34B73'}}> ClickMe</button>
          
          {
            (this.state.shows) ? (
        <>
              <h1>{this.state.fullName}</h1>
                <h3>{this.state.bio},</h3>
                <h3>{this.state.profession}</h3>
                <br></br>
            <img src={this.state.imgSrc} alt="profile" height="500px" width="500px"></img>
          
        </>
            ) : (
                <div style={{color:'#D483A3'}}>
                  You have to click on the button !
                </div>
          )
          }
      
      </div>
    
    )  }
 }

export default App;
