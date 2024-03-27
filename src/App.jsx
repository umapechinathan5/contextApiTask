
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Cart from './Components/Cart'
import { DataProvider } from './DataContext'

function App() {
 

  return (
    <DataProvider>
      <Cart />
    </DataProvider>
  )
}

export default App
