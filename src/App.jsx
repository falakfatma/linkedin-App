import './App.css'
import Header from "./Header";
import Slider from "./slider";
import MainPage from "./main";

export default function App() {
  return (
    <main>
      {/* Header Starts  */}
      <Header />
      {/* Header Ends  */}
      {/* Body Starts */}
      <div className='BodyContainer'>
        {/* Body Left */}
        <Slider />
        {/* Body middle */}
        <MainPage />
        {/* Body right */}
        {/* <aside /> */}
      </div>
      {/* Body Ends */}
    </main>
  )
}
