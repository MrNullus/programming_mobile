/*  
Nota:
    Toda vez que eu tiver uma outra pagina devo importar no index
*/

import { registerRootComponent } from 'expo';

import App from './App';
import Ola from './ola';

// Exercicios
import ExercicioOne from './exercicios/ExercicioOne';
import ExercicioTwo from './exercicios/ExercicioTwo';
import ParOuImpar from './exercicios/ParOuImpar';

import CPF from './exercicios/CPF';
import IMC from './exercicios/IMC';
import Login from './exercicios/Login'; 
import Calculadora from './exercicios/Calculadora';

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
registerRootComponent(Login);
