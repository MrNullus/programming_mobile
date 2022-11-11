/*  
Nota:
    Toda vez que eu tiver uma outra pagina devo importar no index
*/

import { registerRootComponent } from 'expo';

import App from './App';
import Ola from './ola';

import ExercicioOne from './exercicios/ExercicioOne';
import ExercicioTwo from './exercicios/ExercicioTwo';

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
registerRootComponent(ExercicioTwo);
