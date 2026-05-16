import { useState } from 'react';
import {Hello} from './components/Hello.jsx';

function App() {
  // Inicializei um estado com o valor inicial false
  const [userState, setUserState] = useState(false);
  // nesse momento, userState está com valor false

  /*
  setTimeout(function(){
    // estou logando o meu usuário
    setUserState(true)
  }, 5000);
  */

  return <Hello setUserState={setUserState} isLogged={userState} username="Pedro" />;
}

export default App
