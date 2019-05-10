import Board from './board.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      player1: true,
      currentPlays: {
        0: [],
        1: [],
        2: [],
        3: [],
        4: [],
        5: [],
        6: []
      }
    };
    this.playPiece = this.playPiece.bind(this);
  }
  render() {
    console.log('state', this.state);
    return (
      <Board playPiece={this.playPiece} columns={this.state.currentPlays}/>
    )
  }
  playPiece(e) {
    const column = e.target.attributes.x.value;
    const playsArray = Object.create(this.state.currentPlays);
    const player1 = this.state.player1;
    console.log('playsArray[column] ', column);
    playsArray[column].push(player1 ? 'X' : 'O');
    this.setState({currentPlays: playsArray, player1: !player1});
    // console.log('state', this.state.currentPlays);
  }
};

export default App;