interface IProps {
  height?: number;
  width?: number;
}

const Spacer = ({ height = 0, width = 0 }: IProps) => {
  const style = {
    width: `${width}rem`,
    height: `${height}rem`,
  };

  return <div style={style}></div>;
};

export default Spacer;
