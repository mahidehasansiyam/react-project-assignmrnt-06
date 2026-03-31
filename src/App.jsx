
import './App.css'
import Banner from './Component/Banner'
import Main from './Component/Main'
import Navbar from './Component/Navbar'
import Pricing from './Component/Pricing'
import Stats from './Component/Stats'
import Steps from './Component/Steps'

const dataloading = async () => {
  let res = await fetch("/data.json")
  return res.json()
}
const dataPromise = dataloading()
// console.log(dataPromise);
function App() {
 

  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <Stats></Stats>
      <Main dataPromise={dataPromise}></Main>
      <Steps></Steps>
      <Pricing></Pricing>
    </>
  );
}

export default App
