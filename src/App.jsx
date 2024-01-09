import { useState } from 'react';

import Perfil from './components/Perfil';
import Formulario from './components/Formulario';
import ReposList from './components/ReposList';

function App() {
  const [formularioEstavisivel, setFormularioEstaVisivel] = useState(true);
  return (
    <>
          <Perfil nomeUsuario='DenyCodes' />
          <ReposList nomeUsuario='DenyCodes' />

      {/* {formularioEstavisivel && (
      <Formulario />
    )}
    <button onClick={() => setFormularioEstaVisivel(!formularioEstavisivel)} type='button'> toggle <form action=""></form></button> */}
    </>
  )
}

export default App
