
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import BackgroundImage from './components/BackgroundImage'
import ContentComponent from './components/ContentComponent'
import FooterComponent from './components/FooterComponent'
import HeadingComponent from './components/HeadingComponent'
import InteriorComponent from './components/InteriorComponent'
import ListComponent from './components/ListComponent'
import MenuComponent from './components/MenuComponent'

function App() {

  return (
    <>
      <div className='fluid'>
        <div className='box'>
          <MenuComponent/>
          <HeadingComponent/>
          <BackgroundImage/>
          <InteriorComponent/>
          <ContentComponent/>
          <ListComponent/>
          <FooterComponent/>
        </div>

      </div>
    </>
  )
}

export default App
