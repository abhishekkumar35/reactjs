const className = "greetings";
const user = {
  firstName: "Abhishek",
  lastName: "Kumar",
};
const fullName = (user) => `${user.firstName} ${user.lastName} !`;
//    <script type = "module">
//   const elementType = "h1";
//   const elementProps = { className: "greetings", children: "Hello world" };
// const element = React.createElement(elementType, elementProps);
//  /<script >
const element = (
  <>
    <h1 className={className}>Hello {fullName(user)}</h1>
    <p>Good to see you</p>
  </>
);
ReactDOM.render(element, document.getElementById("root"));
