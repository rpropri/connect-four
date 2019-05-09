// import _ from 'underscore';
import Column from './columns.jsx';

const Board = () => {
  return (
    <div>
      {_.map( _.range(7), (i) => (
        <Column key={i} x={i} />
      ))}
    </div>
  );
}

export default Board;