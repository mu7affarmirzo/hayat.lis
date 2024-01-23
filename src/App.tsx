import './App.css'
import AppRouting from './routes/AppRouting'
import { BrowserRouter } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <AppRouting />
    </BrowserRouter>
  )
}

export default App
