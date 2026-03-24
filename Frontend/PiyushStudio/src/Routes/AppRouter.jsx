import {createBrowserRouter} from 'react-router-dom';
import HomePage from '../Features/Pages/HomePage/HomePage';
export const AppRouter = createBrowserRouter([
    {
        path:'/',
        element:<HomePage/>
    }
])