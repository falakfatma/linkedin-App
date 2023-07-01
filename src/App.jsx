import './App.css'
import Header from "./Header";
import Slider from "./slider";
import MainPage from "./main";
import AsidePage from "./aside";

export default function App() {
  return (
    <main>
      {/* Header Starts  */}
      <Header />
      {/* Header Ends  */}
      {/* Body Starts */}
      <div className='px-16 py-12 flex relative bg-gray-100 h-full top-20'>
        {/* Body Left */}
        <Slider />
        {/* Body middle */}
        <MainPage />
        {/* Body right */}
        <AsidePage />
      </div>
      {/* Body Ends */}
    </main>
  )
}
