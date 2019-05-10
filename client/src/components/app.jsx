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
    if (this.state.winner === '') {
      const column = e.target.attributes.x.value;
      const playsObj = Object.create(this.state.currentPlays);
      const player1 = this.state.player1;
      playsObj[column].push(player1 ? 'X' : 'O');
      this.setState( {currentPlays: playsObj, player1: !player1} );
      this.checkForWin(player1, column);
    }
  }
  checkForWin(player1, column) {
    const piece = player1 ? 'X': 'O';
    let pieceCount;
    const playsObj = Object.create(this.state.currentPlays);
    //check columns
    pieceCount = 0;
    for (let i = 0; i < playsObj[column].length; i++) {
      if (playsObj[column][i] === piece) {
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
    const row = playsObj[column].length - 1;
    for (let j = 0; j < 7; j++) {
      if (playsObj[j][row] === piece) {
        pieceCount++;
      } else {
        pieceCount = 0;
      }
      if (pieceCount >= 4) {
        this.setState( { winner: piece } );
      }
    }
    //check diags
    pieceCount = 0;
    let level;
    let steps;
    for (let k = 0; k < 7; k++) {
      // if this column has at least length 4
      if (playsObj[k].length >= 4) {
        console.log('found the top piece in col ', k)
        // check diags down from each piece at 4th slot (n=3) and above
        for (let n = 3; n < playsObj[k].length; n++) {
          console.log('checking level ', n, playsObj[k][n]);
          if (playsObj[k][n] === piece) {
            // if top piece is at least 4 columns from left...
            if (k >= 3) {
              pieceCount = 1;
              level = n;
              steps = 0;
              // check leftward
              while (level > 0) {
                level--;
                steps++;
                console.log('level, steps, pieceCount', level, steps, pieceCount);
                if (playsObj[k-steps][level] === piece) {
                  pieceCount++;
                } else {
                  pieceCount = 0;
                }
                if (pieceCount >= 4) {
                  this.setState({ winner: piece });
                }
              }
            }
            // if top piece is at least 4 columns from right...
            if (k <= 3) {
              pieceCount = 1;
              level = n;
              steps = 0;
              // check rightward
              while (level > 0) {
                level--;
                steps++;
                if (k <= 3 && playsObj[k + steps][level] === piece) {
                  pieceCount++;
                } else {
                  pieceCount = 0;
                }
                if (pieceCount >= 4) {
                  this.setState({ winner: piece });
                }
              }
            }
          }
        }
      }
    }
  }
};

export default App;