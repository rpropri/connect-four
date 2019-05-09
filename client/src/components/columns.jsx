import Box from './boxes.jsx';

const Column = ({x}) => {
  return (
    <div className="column">
      {_.map(_.range(6), (i) => (
        <Box key={i} x={x} y={i} />
      ))}
    </div>
  );
}

export default Column;