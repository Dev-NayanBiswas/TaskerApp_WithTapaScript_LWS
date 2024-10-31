import Footer from "./Componetns/Footer/Footer"
import TaskBoard from "./Componetns/Home/TaskBoard"
import Navbar from "./Componetns/Navbar/Navbar"

function App() {
  return (
    <>
      <section className="h-full mx-auto relative">
      <Navbar/>
      <TaskBoard/>
      <Footer/>
      </section>
    </>
  )
}

export default App