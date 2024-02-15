import { BrowserRouter } from 'react-router-dom';
import { RouterProvider } from 'react-router-dom';
import router from './Router/routes';
import Main from './main';

const App = () => {
    return (
        <BrowserRouter>
            <RouterProvider router={router}>
                <Main />
            </RouterProvider>
        </BrowserRouter>
    );
};

export default App;