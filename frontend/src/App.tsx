import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Header from "./components/header"
import SalesCard from "./components/SalesCard"


function App() {
  return (
    <>
      <ToastContainer />
      <Header />
      <main>
        <section id="sales">
          <div className="dsmeta-card">
            <SalesCard />
          </div >
        </section>
      </main>
    </>
  )
}
export default App
