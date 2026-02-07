
import './App.css'
import Category from './Components/Category'
import Footer from './Components/Footer'
import Navbar from './Components/Navbar'
import News from './Components/Page/News'

function App() {

  return (
    <>

      <Navbar className={'sticky top-0 z-20'} />
      <Category className="py-10 sticky top-14 z-10 bg-base-100" />
      <News className="py-10 " />
      <Footer />
    </>
  )
}

export default App
