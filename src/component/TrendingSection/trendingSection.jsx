import './trendingSection.css'
import '../../App.css'
export default function TrendingSection() {
    return(
        <div className="trending-section">
            <div className="trending__header">
                <h2 className="trending__title">Trending</h2>
                <div className="trending__btn-wrapper">
                    <span className="trending__btn ">Today</span>
                    <span className="trending__btn trending__btn--active">This week</span>
                </div>
            </div>
            <div className="trending__list-wrapper">
                <ul className="trending__list">
                    <a className="trending__item">
                        <div className="trending__item-img" style={{backgroundImage: 'url(https://www.themoviedb.org/t/p/w220_and_h330_face/xo0fgAUoEeVQ7KsKeMWypyglvnf.jpg)'}}></div>
                        <span className="trending__item-name">We Have a Ghost</span>
                        <span className="trending__item-time">Feb 24, 2023</span>
                        <div className="trending__item-voting">67%</div>
                    </a>
                    <a className="trending__item">
                        <div className="trending__item-img" style={{backgroundImage: 'url(https://www.themoviedb.org/t/p/w220_and_h330_face/xo0fgAUoEeVQ7KsKeMWypyglvnf.jpg)'}}></div>
                        <span className="trending__item-name">We Have a Ghost</span>
                        <span className="trending__item-time">Feb 24, 2023</span>
                        <div className="trending__item-voting">67%</div>
                    </a>
                    <a className="trending__item">
                        <div className="trending__item-img" style={{backgroundImage: 'url(https://www.themoviedb.org/t/p/w220_and_h330_face/xo0fgAUoEeVQ7KsKeMWypyglvnf.jpg)'}}></div>
                        <span className="trending__item-name">We Have a Ghost</span>
                        <span className="trending__item-time">Feb 24, 2023</span>
                        <div className="trending__item-voting">67%</div>
                    </a>
                    <a className="trending__item">
                        <div className="trending__item-img" style={{backgroundImage: 'url(https://www.themoviedb.org/t/p/w220_and_h330_face/xo0fgAUoEeVQ7KsKeMWypyglvnf.jpg)'}}></div>
                        <span className="trending__item-name">We Have a Ghost</span>
                        <span className="trending__item-time">Feb 24, 2023</span>
                        <div className="trending__item-voting">67%</div>
                    </a>
                    <a className="trending__item">
                        <div className="trending__item-img" style={{backgroundImage: 'url(https://www.themoviedb.org/t/p/w220_and_h330_face/xo0fgAUoEeVQ7KsKeMWypyglvnf.jpg)'}}></div>
                        <span className="trending__item-name">We Have a Ghost</span>
                        <span className="trending__item-time">Feb 24, 2023</span>
                        <div className="trending__item-voting">67%</div>
                    </a>
                    <a className="trending__item">
                        <div className="trending__item-img" style={{backgroundImage: 'url(https://www.themoviedb.org/t/p/w220_and_h330_face/xo0fgAUoEeVQ7KsKeMWypyglvnf.jpg)'}}></div>
                        <span className="trending__item-name">We Have a Ghost</span>
                        <span className="trending__item-time">Feb 24, 2023</span>
                        <div className="trending__item-voting">67%</div>
                    </a>
                    <a className="trending__item">
                        <div className="trending__item-img" style={{backgroundImage: 'url(https://www.themoviedb.org/t/p/w220_and_h330_face/xo0fgAUoEeVQ7KsKeMWypyglvnf.jpg)'}}></div>
                        <span className="trending__item-name">We Have a Ghost</span>
                        <span className="trending__item-time">Feb 24, 2023</span>
                        <div className="trending__item-voting">67%</div>
                    </a>
                    <a className="trending__item">
                        <div className="trending__item-img" style={{backgroundImage: 'url(https://www.themoviedb.org/t/p/w220_and_h330_face/xo0fgAUoEeVQ7KsKeMWypyglvnf.jpg)'}}></div>
                        <span className="trending__item-name">We Have a Ghost</span>
                        <span className="trending__item-time">Feb 24, 2023</span>
                        <div className="trending__item-voting">67%</div>
                    </a>
                </ul>
            </div>  
        </div>
    )
}