import { useState, useEffect } from 'react';
import {Hello} from './components/Hello.jsx';

function App() {
    // Inicializei um estado com o valor inicial false
  const [userState, setUserState] = useState(false);
  // nesse momento, userState está com valor false
  //useEffect permite controlar/detectar o ciclo de vida de um componente
  useEffect(()=>{
    console.log("O componente foi montado")
  },[])
// dispara uma função quando muda o valor de userState
  useEffect(()=>{
    console.log("O estado do usuário mudou para: ", userState)
  },[userState]);


  /*
  setTimeout(function(){
    // estou logando o meu usuário
    setUserState(true)
  }, 5000);
  */

  return <Hello setUserState={setUserState} isLogged={userState} username="Pedro" />;
}

export default App
