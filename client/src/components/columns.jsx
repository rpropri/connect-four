import Box from './boxes.jsx';

const Column = ({playPiece, x, column}) => {
  return (
    <div className="column" onClick={playPiece}>
      {_.map(_.range(5, -1, -1), (i) => (
        <Box key={i} x={x} y={i} value={column[i]}/>
      ))}
    </div>
  );
}

export default Column;