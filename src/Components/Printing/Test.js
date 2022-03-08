// import { Link } from 'react-router-dom'
import './Test.css'
import { useState } from 'react'



const Test = () => {

  const[ count, setCount ] = useState(30000);

  const increasecountHandle = () => {
    let count = 30000;
    setCount( count + 10000)
  }
  const decreasecountHandle = () => {
    // 
    let count = 30000;
    setCount( count + 20000)
  }

    return (
        <div>

<br />
<br />
<br />
<br />

<div class=" col-md-4 text-center ms-auto">
  <p>{count}</p>
  <button class="btn-info btn-block" onClick = { increasecountHandle }>100 - 200 </button>
  <button class="btn-info btn-block" onClick = { decreasecountHandle }>201 - 300 </button>
</div>

   
<br />
<br />
<br />
<br />
<br />

        </div>
    );
}
 
export default Test;