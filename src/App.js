import React from 'react';

const App = () => { 

  const [num, setNum] = React.useState(0)
  return(
    <div>
      <div>
        {num}
      </div>

      <button onClick={() => { setNum(num + 1 ) }}>+++++</button>
      <button onClick={() => { setNum(num - 1 ) }}>-----</button>
      <div>{Date()}</div>
    </div>
  );

}

export default App;
