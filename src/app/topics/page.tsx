const page = () => {
  return (
    <section className={`w-full flex justify-center items-center border border-red-600`}>
      <div className={`max-w-6xl h-full flex-1 items-center border border-blue-600 `}>
        
        <nav className={`flex justify-between h-[56px] my-[8px] py-[8px] w-full border border-green-600`}>
          {/* left */}
          <div className="border h-full w-[30%] flex gap-5">
            <div className="border border-red-800 rounded-full w-[11%] h-full"> search icon</div>
            <div className="border border-amber-300 rounded-full flex items-center">search button</div>
          </div>
          {/* right */}
          <div className="border h-full w-[30%] flex items-center gap-2.5 justify-end">
            <div className="border border-amber-300 rounded-full flex items-center">filter</div>
            <div className="border border-amber-300 rounded-full flex items-center">sort</div>
          </div>
        </nav>

        <div className="border h-[251px] w-full  ">Topic Page Content

        </div>
      </div>
    </section>
  )
}

export default page
