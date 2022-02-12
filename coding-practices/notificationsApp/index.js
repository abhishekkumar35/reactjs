const Notification = (props) => {
  return (
    <div className={props.classDiv}>
      <img src={props.imgUrl} className={props.classImg} />
      <p className={props.classText}>{props.children}</p>
    </div>
  );
};

const element = (
  //  Write your code here.
  <div className="bg-container">
    <h1 className="heading">Notification</h1>
    <div className="card">
      <Notification
        classDiv="bg-blue"
        imgUrl="https://assets.ccbp.in/frontend/react-js/primary-icon-img.png"
        classImg="icon"
        classText="notification-text"
        children="Information Message"
      />
      <Notification
        classDiv="bg-green"
        imgUrl="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
        classImg="icon"
        classText="notification-text"
        children="Success message"
      />
      <Notification
        classDiv="bg-yellow"
        imgUrl="https://assets.ccbp.in/frontend/react-js/warning-icon-img.png"
        classImg="icon"
        classText="notification-text"
        children="Warning message"
      />
      <Notification
        classDiv="bg-red"
        imgUrl="https://assets.ccbp.in/frontend/react-js/danger-icon-img.png"
        classImg="icon"
        classText="notification-text"
        children="Error message"
      />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
