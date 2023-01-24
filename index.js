const mass = "greeting";
const name = "Yedukondalu";

const user = { firstName: "Yedukondalu", lastName: "Nakkala" };
const fullName = (name) => name.firstName + " " + name.lastName;
const element = <h1 className={mass}>Hello {fullName(user)}</h1>;
ReactDOM.render(element, document.getElementById("root"));
