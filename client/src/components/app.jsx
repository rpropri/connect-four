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
    this.checkForWin = this.checkForWin.bind(this);
  }
  render() {
    return (
      <Board playPiece={this.playPiece} columns={this.state.currentPlays}/>
    )
  }
  playPiece(e) {
    const column = e.target.attributes.x.value;
    const playsArray = Object.create(this.state.currentPlays);
    const player1 = this.state.player1;
    playsArray[column].push(player1 ? 'X' : 'O');
    this.setState({currentPlays: playsArray, player1: !player1});
    this.checkForWin(player1, column);
  }
  checkForWin(player1, column) {
    const piece = player1 ? 'X': 'O';
    let pieceCount;
    let win = false;
    //check columns
    const playsArray = Object.create(this.state.currentPlays);
    pieceCount = 0;
    for (let i = 0; i < playsArray[column].length; i++) {
      if (playsArray[column][i] === piece) {
        pieceCount++
      } else {
        pieceCount = 0;
      }
      if (pieceCount >= 4) {
        alert(`Player ${piece} wins!`);
      }
    }
  }
};

export default App;