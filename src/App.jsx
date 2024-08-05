import BarraNav from "./components/BarraNav"

function App() {
  return (
    <>
      <div>
        <header className="flex justify-between items-center px-5 py-2 text-mediumGray">
          <BarraNav />
        </header>
        <body>
          <div
            className="flex flex-col-reverse pt-4 md:mx-auto md:w-4/5 md:grid md:grid-cols-2 md:gap-8 md:mt-2">
            <div>
              <h1 className="text-center md:text-start md:text-7xl font-bold md:pt-36 pt-12 text-4xl">Make <span className="hidden md:inline"><br /></span> remote work</h1>
              <p className="pt-8 max-w-96 text-mediumGray text-center md:text-start p-4 md:p-0">Get your team in sync, no matter your location. Streamline processes,
                create team rituals, and watch productivity soar.</p>
              <button className="py-3 px-7 bg-black text-white font-semibold rounded-xl mt-8 border flex mx-auto md:mx-0">
                Learn more
              </button>
              <div className="flex gap-7 md:mt-28 my-16 md:w-full px-5 items-center w-[107px]">
                <img className="object-contain" src="/public/images/client-databiz.svg" alt="" />
                <img className="object-contain" src="/public/images/client-audiophile.svg" alt="" />
                <img className="object-contain" src="/public/images/client-meet.svg" alt="" />
                <img className="object-contain" src="/public/images/client-maker.svg" alt="" />
              </div>
            </div>
            <div className="w-full md:ml-7 md:mb-20">
              <img src="/public/images/image-hero-desktop.png" alt="" />
            </div>
          </div>
        </body>
      </div>
    </>
  )
}

export default App
