import Board from './board.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {player: 0};
  }
  render() {
    return (
      <Board />
    )
  }
};

export default App;