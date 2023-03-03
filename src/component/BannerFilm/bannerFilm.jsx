
import './bannerFilm.css'
import IMAGE_URL from '../../utils/urlImage'
export default function BannerFilm({item}) {
    return(
        <div id = "bannerFilm">
               <img className='banner-img' src={IMAGE_URL + item.backdrop_path}></img>
        </div>
    )
}