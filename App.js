
import * as React from 'react';
import AppContainer from "./Navigation/navigation";
import { Provider } from "react-redux";
import Store from "./Store/store";


 class App extends React.Component {
  render() {

  
    return (
   <Provider  store = { Store }>
       <AppContainer/>
   </Provider>
   
   
    
    );
  }
}                          
export default App
