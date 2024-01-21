import {createBrowserRouter} from 'react-router-dom';
import Home from '../App';
import Body from '../components/body';


const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />
    },
    {
        path: '/About',
        element: <Body/>
    }
])

export default router;
