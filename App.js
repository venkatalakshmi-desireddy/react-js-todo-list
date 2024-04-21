// import logo from './logo.svg';
//  import './App.css';
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

// export default App;
//ex-button(events) with color with individual alerts
// import Event from './components/function/events';
// function App(){
//   const handleSubmitClick=()=>{
//     alert("we have clicked a submit button");
//   }
//   const handleDeleteClick=()=>{
//     alert("we have clicked a delete button");
//   }
//   const handleEditClick=()=>{
//     alert("we have clicked a edit button");
//   }
//   return(
//     <div>
//     <Event label="Submit" mystyle={{backgroundColor:'blue',color:'white'}}  click={handleSubmitClick}/>
//     <br />
//     <Event label="Delete" mystyle={{backgroundColor:'red',color:'white'}}  click={handleDeleteClick}/>
//     <br />
//     <Event label="Edit" mystyle={{backgroundColor:'yellow',color:'black'}}  click={handleEditClick}/>
//     </div>

//   )
// }
// export default App;
// this is all about props(example)
// import Name from './components/function/props';
// const Desireddy="props";
// function App(){
//   return(
//     <div>
//       <Name  initial={Desireddy}/>
//     </div>

//   ) 
  
// }
// export default App;
//this is all about button (example)
// import Button from './components/function/button';
// function App(){
//   return(
//     <div>
//       <Button label="submit" mystyle={{backgroundColor:'blue',color:'white'}} />
//       <br />
//       <Button label="Delete" mystyle={{backgroundColor:'black',color:'white'}} />

//     </div>
//   )
// }
// export default App;
//this all about common alert baesd on event(example)
// import Event from './components/function/events';
// function App(){
//   return(
//     <div>
//      <Event label="Submit" mystyle={{backgroundColor:'red',color:'white'}}/>
//      <br />
//      <Event label="Delete" mystyle={{backgroundColor:'blue',color:'white'}}/>
//      <br />
//      <Event label="Edit" mystyle={{backgroundColor:'black',color:'white'}}/>


//     </div>
//   )
// }
// export default App;

//this is example of useEffect table(example)
// import Table from './components/table';

// function App(){
  // const [tableData,setTableData]=useState([
  //     //  { Name: "lakshmi", Age: 22, Gender: "female", Course:"python fullstack"} ,
  //     //  { Name: "pratyusha", Age: 22, Gender: "female", Course:"python fullstack"} ,
  //     //  { Name: "geetha", Age: 23, Gender: "female", Course:"java fullstack"} ,
  //     //  { Name: "yehoshuva", Age: 25, Gender: "male", Course:"cloud"} ,
  //     //  { Name: "vasantha", Age: 22, Gender: "female", Course:"analytics"} 


  // ])

  
      //   return(
      //     <div>
      //       <Table />
      //     </div>
      //   )
      // }
      
      // export default App;
import TodoList from './todolist';
function App(){
    return(
      <div>
      <TodoList/>
      </div>

    )
  }
  export default App;


