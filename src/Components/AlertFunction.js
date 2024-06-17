import { useState } from "react";

const AlertFunction = () =>{

      const [text, setText] = useState('');
    
      const showAlert = () => {
        alert(text);
        console.log(text)
      };
    
      return (
        <div>
          <input type="text" onChange={e => setText(e.target.value)} />
          <button onClick={showAlert}>Show Alert</button>
        </div>
      );
}


export default AlertFunction