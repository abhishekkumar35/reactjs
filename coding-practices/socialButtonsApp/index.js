const Button = (props) => {
  //  Write your code here.

  return <button className={props.className}>{props.children}</button>;
};

const element = (
  //  Write your code here.
  <div className="bg-container">
    <div className="card">
      <h1 className="heading">Social Buttons</h1>
      <div className="btn-align">
        <Button className="btn-yellow btn" children="Like" />
        <Button className="btn-white btn" children="Comment" />
        <Button className="btn-skyblue btn" children="Share" />
      </div>
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
