
import './App.css'
import Banner from './Component/Banner'
import Main from './Component/Main'
import Navbar from './Component/Navbar'
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
      {/* <Steps></Steps> */}
    </>
  );
}

export default App
