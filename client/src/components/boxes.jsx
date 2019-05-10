const Box = ({x, y, value}) => {
  return (
    <div className="box" x={x} y={y}>{value ? value: ''}</div>
  )
};

export default Box;