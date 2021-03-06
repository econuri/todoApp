import React from "react";
//import ReactDOM from "react-dom";

import TodoContainer from "./components/TodoContainer";

import "./App.css";

function App() {
  return (
    <div className="App" id="root">
      <React.StrictMode>
        <TodoContainer />
      </React.StrictMode>
    </div>
  )
}
//      ReactDOM.render(<TodoContainer />, document.getElementById("root"));
// document.getElementById("root");



// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }


export default App;
