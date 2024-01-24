import React from 'react'
import './App.css'
import { Provider } from 'react-redux'
import { persistor, store } from './feature/store'
import { PersistGate } from 'redux-persist/integration/react'
import { BrowserRouter } from 'react-router-dom'
import AppRouting from './routes/AppRouting'

function App() {
  return (
    <React.StrictMode>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <BrowserRouter>
            <AppRouting />
          </BrowserRouter>
        </PersistGate>
      </Provider>
    </React.StrictMode>
  )
}

export default App
