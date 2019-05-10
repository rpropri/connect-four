import Board from './board.jsx';
import Message from './message.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      player1: true,
      winner: '',
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
      <div>
        <Message winner={this.state.winner}/>
        <Board playPiece={this.playPiece} columns={this.state.currentPlays}/>
      </div>
    )
  }
  playPiece(e) {
    const column = e.target.attributes.x.value;
    const playsArray = Object.create(this.state.currentPlays);
    const player1 = this.state.player1;
    playsArray[column].push(player1 ? 'X' : 'O');
    this.setState( {currentPlays: playsArray, player1: !player1} );
    this.checkForWin(player1, column);
  }
  checkForWin(player1, column) {
    const piece = player1 ? 'X': 'O';
    let pieceCount;
    const playsArray = Object.create(this.state.currentPlays);
    //check columns
    pieceCount = 0;
    for (let i = 0; i < playsArray[column].length; i++) {
      if (playsArray[column][i] === piece) {
        pieceCount++
      } else {
        pieceCount = 0;
      }
      if (pieceCount >= 4) {
        this.setState( {winner: piece} );
      }
    }
    //check rows
    pieceCount = 0;
    const row = playsArray[column].length - 1;
    for (let j = 0; j < 7; j++) {
      if (playsArray[j][row] && playsArray[j][row] === piece) {
        pieceCount++;
      } else {
        pieceCount = 0;
      }
      if (pieceCount >= 4) {
        this.setState({ winner: piece });
      }
    }
    //check major diags
    pieceCount = 0;
    
  }
};

export default App;