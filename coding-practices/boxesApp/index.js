const Box = (props) => {
  //  Write your code here.
  const { box, text } = props;
  return <div className={box} children={text}></div>;
};

const element = (
  //  Write your code here.
  <div className="bg-container">
    <h1 className="heading">Boxes</h1>
    <div className="box-container">
      <Box box="box1" text="Small" />
      <Box box="box2" text="Medium" />
      <Box box="box3" text="Large" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
