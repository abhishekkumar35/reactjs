const element = (
  // Write your code here.
  <div className="bg-container">
    <h1 className="heading">Congratulations</h1>
    <div className="card">
      <img
        src="https://assets.ccbp.in/frontend/react-js/congrats-card-profile-img.png"
        className="img1"
      />
      <h1 className="name">Kiran</h1>
      <p className="education">
        Vishnu Institute of Computer Education, Bhimavran
      </p>
      <img
        src="https://assets.ccbp.in/frontend/react-js/congrats-card-watch-img.png"
        className="img2"
      />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
