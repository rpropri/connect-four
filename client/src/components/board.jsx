// import _ from 'underscore';
import Column from './columns.jsx';

const Board = ({playPiece, columns}) => {
  return (
    <div>
      {_.map( _.range(7), (i) => (
        <Column key={i} x={i} playPiece={playPiece} column={columns[i]}/>
      ))}
    </div>
  );
}

export default Board;