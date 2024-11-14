import {Component} from 'react';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: 1
    }
  }
  render() {
    let evn = function(num) {
      this.setState({value: num})
    }.bind(this);
    let lists = [];
    for(let i =1; i< 10; i++) {
      lists.push(<tr key={i}><td>{i}</td><td>{i*this.state.value}</td></tr>)
    }
    return (
      <div>
        <Header onEvn={evn}
        onOdd={
          function(e) {
            this.setState({
              value: 1
            })
          }.bind(this)
        }
        ></Header>
        <h1>구구단 결과창</h1>
        <span>값: {this.state.value}</span>
        <table className='mainTable'>
          <tbody>
            {lists}
          </tbody>
        </table>
      </div>
    )
  }
}

class Header extends Component {
  render() {
    return(
      <div>
        <input type="text" id="inp_txt" />
        <input type='button' value='변경 하기' onClick={function(e) {
          e.preventDefault();
          let num = document.getElementById('inp_txt').value;
          this.props.onEvn(num);
        }.bind(this)}></input>

        <input type='button' value='초기 값' onClick={function(e) {
          e.preventDefault();
          this.props.onOdd();
        }.bind(this)} />
      </div>
    )
  }
}



export default App;
