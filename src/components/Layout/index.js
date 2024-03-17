import {Outlet} from 'react-router-dom'
import Sidebar from '../Sidebar'
import './index.scss';


const Layout = () => {
    return (
        <div className="App">
            <Sidebar />
            <div className='page'>
                <span className='tags top-tags'> </span>

                <Outlet />

                <span className='tags bottom-tags'>
                    {/* &lt;/body&gt; */}
                    <br />
                    <span className='bottom-tag-thml'></span>

                </span>
            </div>
        </div>
    )
}

export default Layout