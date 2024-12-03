import { assets } from '../../assets/assets'
import './Appdownload.css'

const Appdownload = () => {
  return (
    <div className='app-download' id='app-download'>
        <p>for Better Experince Download <br /> Tomata App</p>
        <div className="app-dowload-platfroms">
      <img src={assets.play_store} alt="" />
      <img src={assets.app_store} alt="" />
      </div>

    </div>
  )
}

export default Appdownload
