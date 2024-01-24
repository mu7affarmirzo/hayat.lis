import React from 'react'
import './App.css'
import AppRouting from './routes/AppRouting'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { persistor, store } from './feature/store'
import { PersistGate } from 'redux-persist/integration/react'

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
