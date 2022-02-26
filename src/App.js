import { useState } from 'react';
import './App.css';
import Users from './Users'
import data from './Data'


function App() {
  const [people,setPeople] = useState(data)
  return (
    <section>
    <div className="container ">
    <h3>{people.length} birthdays today</h3>

     <Users people={people} />
     <button onClick={()=>{setPeople([])}}>Clear All</button>
    </div>
    </section>    
  );
}

export default App;
