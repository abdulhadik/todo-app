import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Todoapp.css";

const Todoapp = () => {
  const [input, setInput] = useState("");
  const [items, setItems] = useState([]);
  const [isInputOpen, setIsInputOpen] = useState(false)

  const handleChange = (event) => {
    setInput(event.target.value);
  };
 
 

  const storeItems = (event) => {
    event.preventDefault();
    setItems([...items, input]);
    setInput("");
  };

  const deleteItem= (key) => {
    setItems(items.filter((data, index) => index !== key));
  };
  const editItem=(key)=>{
    setIsInputOpen(true)
    console.log(key)
  }
  
  return (
    <div className="header">
      <header>
        <Link to="/about">ABOUT</Link>
        <Link to="/" className="logout">
          <i className="fa-solid fa-right-from-bracket fa-2x"></i>
        </Link>
      </header>

      <div className="Todo-container">
        <form className="input-element" onSubmit={storeItems}>
          <h1>TODO APP</h1>
          <input
            type="text"
            value={input}
            onChange={handleChange}
            placeholder="Enter Here..."
          />
          
        </form>
        
        <ul>
          {items.map((data, index) => (
            <li className="li-class" key={index}>
              <div>{data}</div>
              <div>
                <i
                  className="fa-solid fa-pen-to-square"
                  style={{ marginRight: "10px" }}
                  // onClick={()=>editItem(index)}
                ></i>
                  <i
                    className="fa-solid fa-trash"
                    onClick={() => deleteItem(index)}
                  >
                  </i>
                
              </div>

            </li>
          ))}
        </ul>
      </div>
      {isInputOpen && (
        <div>
        <input type="text" /></div>
      )}
      
    </div>
  );
};

export default Todoapp;

// import React, { Component } from "react";
// import "./Todoapp.css";
// import { Link } from "react-router-dom";
// class Todoapp extends Component {
//   state = {
//     input: "",
//     items: [],
//   };
//   handleChange = (event) => {
//     this.setState({
//       input: event.target.value,
//     });
//   };
//   storeItems = (event) => {
//     event.preventDefault();
//     const { input } = this.state;
//     this.setState({
//       items: [...this.state.items, input],
//       input: "",
//     });
//   };
//   deleted = (key) => {
//     // console.log(key);
//     // const allItems = this.state.items;
//     // allItems.splice(key, 1);
//     this.setState({
//       //   items: allItems,
//       items: this.state.items.filter((data, index) => index !== key),
//     });
//   };
//   render() {
//     const { input, items } = this.state;

//     return (
//       <div className="header">
//         <header>
//           <Link to="/about">ABOUT</Link>
//           <Link to="/" className="logout">
//             <i class="fa-solid fa-right-from-bracket fa-2x"></i>
//           </Link>
//         </header>

//         <div className="Todo-container">
//           <form className="input-element" onSubmit={this.storeItems}>
//             <h1>TODO APP</h1>
//             <input
//               type="text"
//               value={input}
//               onChange={this.handleChange}
//               placeholder="Enter Here..."
//             />
//           </form>

//           <ul>
//             {items.map((data, index) => (
//               <li className="li-class" key={index}>
//                 <div>{data}</div>
//                 <div> <i class="fa-solid fa-pen-to-square" style={{marginRight:"10px"}} onClick={this.edited}></i><i
//                   className="fa-solid fa-trash "
//                   onClick={() => this.deleted(index)}

//                 ></i>
//                 </div>

//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>
//     );
//   }
// }
// export default Todoapp;
