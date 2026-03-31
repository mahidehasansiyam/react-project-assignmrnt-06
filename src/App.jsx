
import { useState } from 'react'
import './App.css'
import Banner from './Component/Banner'
import Main from './Component/Main'
import Navbar from './Component/Navbar'
import Pricing from './Component/Pricing'
import Stats from './Component/Stats'
import Steps from './Component/Steps'
import Workflow from './Component/Workflow'
import Footer from './Component/Footer'

const dataloading = async () => {
  let res = await fetch("/data.json")
  return res.json()
}
const dataPromise = dataloading()



function App() {
  const [click, setClick] = useState(false);
  const [cart, setCart] = useState([])
  console.log(cart);
//  console.log(click);
  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <Stats></Stats>
      <Main dataPromise={dataPromise} click={click} setClick={setClick} cart={cart} setCart={setCart}></Main>
      <Steps></Steps>
      <Pricing></Pricing>
      <Workflow></Workflow>
      <Footer></Footer>
    </>
  );
}

export default App
