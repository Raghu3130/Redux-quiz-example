import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import todoApp from './reducers'
import App from './App'
const intialState={
  correct:0,
  question:[
    {
      id:1,
      question:"Is React is library?",
      answer:"true",
      givenAnswer:""
    },
    { id:2,
      question:"Is React-native is library?",
      answer:"true",
      givenAnswer:""
    },
    { id:3,
      question:"Is Reactjs is library?",
      answer:"true",
      givenAnswer:""
    },
    { id:4,
      question:"Is React-redux is library?",
      answer:"true",
      givenAnswer:""
    },
    { id:5,
      question:"Is React-node is library?",
      answer:"true",
      givenAnswer:""
    }]
};
let store = createStore(todoApp,intialState);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
