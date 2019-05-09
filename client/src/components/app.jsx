import Board from './board.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      player1: true,
      currentPlays: Array(7).fill(Array(6).fill(null))
    };
    this.playPiece = this.playPiece.bind(this);
  }
  render() {
    console.log('state', this.state);
    return (
      <Board playPiece={this.playPiece}/>
    )
  }
  playPiece(e) {
    console.log('event ', e.target);
  }
};

export default App;