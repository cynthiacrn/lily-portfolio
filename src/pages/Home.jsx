import Gallery from "../components/Gallery";
import mouseScroll from "../assets/icons/mouse-scroll.svg";

function Home() {
  return (
    <div className="flex flex-col items-center">
      <div className="flex justify-center p-6">
        <h1 className="title-text text-6xl text-secondary">LILY AUDRAIN</h1>
      </div>
      <div className="home__mouse-scroll-container">
        <div className="p-2 w-fit bg-secondary/70 rounded-full">
          <img src={mouseScroll} alt="mouse scroll icon" className="h-8 w-8"/>
        </div>
        <div className="text-sm">Scroll</div>
      </div>
      <Gallery />
    </div>
  )
}

export default Home
