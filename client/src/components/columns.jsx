import Box from './boxes.jsx';

const Column = ({playPiece, x}) => {
  return (
    <div className="column" onClick={playPiece}>
      {_.map(_.range(6), (i) => (
        <Box key={i} x={x} y={i} />
      ))}
    </div>
  );
}

export default Column;