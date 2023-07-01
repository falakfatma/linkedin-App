import "./slider.css"
// import 
// let textSpace = "whitespace-nowrap" 
function AsidePage() {
  return (
    <div className="flex flex-col">
      <div className="bg-white mx-7 mb-4 p-4 h-fit rounded-md">
        <div>
          <h1 className="font-bold">LinkedIn News</h1>
        </div>
        <div>
          <li className="whitespace-nowrap">Top trends in AI, finance, and retail</li>
          <li className="text-sm text-slate-400 list-none">Top news • 2,027 readers</li>
        </div>
        <div>
          <li className="whitespace-nowrap">US top choice for Indian students</li>
          <li className="text-sm text-slate-400 list-none">2d ago • 404 readers</li>
        </div>
        <div>
          <li className="whitespace-nowrap">Universities begin UG admissions</li>
          <li className="text-sm text-slate-400 list-none">5h ago</li>
        </div>
        <div>
          <li className="whitespace-nowrap">Tech top priority for India-US ties</li>
          <li className="text-sm text-slate-400 list-none">3d ago • 196 readers</li>
        </div>
        <div>
          <li className="whitespace-nowrap">Luxury brands eye Gen Z buyers</li>
          <li className="text-sm text-slate-400 list-none">1d ago • 147 readers</li>
        </div>
      </div>
      <div className=" bg-white mx-7 p-4 h-fit rounded-md">
            
      </div>
    </div>
  )
}
export default AsidePage;