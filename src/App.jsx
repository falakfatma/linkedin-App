import './App.css'
import Header from "./Header";
import Slider from "./slider";

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
        {/* <main /> */}
        {/* Body right */}
        {/* <aside /> */}
      </div>
      {/* Body Ends */}
    </main>
  )
}
