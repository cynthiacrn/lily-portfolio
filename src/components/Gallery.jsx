import { useHorizontalScroll } from "../hooks/useHorizontalScroll";

function Gallery() {
  const sliderRef = useHorizontalScroll();
  const projects = [
    {
      image: './images/1.jpg',
      title: 'MONOCHROME',
      subtitle: 'Lorem ipsum dolor'
    },
    {
      image: './images/2.jpg',
      title: 'SERENDIPITY',
      subtitle: 'Lorem ipsum dolor'
    },
    {
      image: './images/3.jpg',
      title: 'KALEIDOSCOPE',
      subtitle: 'Lorem ipsum dolor'
    },
    {
      image: './images/4.jpg',
      title: 'EPHEMERAL',
      subtitle: 'Lorem ipsum dolor'
    },
    {
      image: './images/5.jpg',
      title: 'WHIMSICAL',
      subtitle: 'Lorem ipsum dolor'
    },
    {
      image: './images/6.jpg',
      title: 'PANACHE',
      subtitle: 'Lorem ipsum dolor'
    },
    {
      image: './images/7.jpg',
      title: 'MELLIFLUOUS',
      subtitle: 'Lorem ipsum dolor'
    },
    {
      image: './images/8.jpg',
      title: 'NEBULOUS',
      subtitle: 'Lorem ipsum dolor'
    },
    {
      image: './images/9.jpg',
      title: 'LABYRINTHINE',
      subtitle: 'Lorem ipsum dolor'
    },
    {
      image: './images/10.jpg',
      title: 'EFFERVESCENT',
      subtitle: 'Lorem ipsum dolor'
    },
  ]

  return (
    <div className="gallery__container hide-scroll" ref={sliderRef}>
      {projects.map((project, index) => (
        <div className="gallery__container-image">
          <img className="gallery__image" key={index} src={project.image} alt={project.title} />
          <div className="gallery__description-positioner">
            <div className="gallery__description-container">
              <h1 className="gallery__description-title">{project.title}</h1>
              <p className="gallery__description-subtitle">{project.subtitle}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Gallery
