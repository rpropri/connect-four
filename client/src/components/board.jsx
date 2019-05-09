// import _ from 'underscore';
import Column from './columns.jsx';

const Board = ({playPiece}) => {
  return (
    <div>
      {_.map( _.range(7), (i) => (
        <Column key={i} x={i} playPiece={playPiece}/>
      ))}
    </div>
  );
}

export default Board;