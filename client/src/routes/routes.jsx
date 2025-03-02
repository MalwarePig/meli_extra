import Auth from '../pages/Auth'
import User from '../pages/User'
import Error404 from '../pages/Error' 

const routes = [
    {
        path: '/', 
        component: Auth,
        exact: true
    }, 
    {
        path: '/user', 
        component: User,
        exact: true
    },
    {
        path: '*', // Captura todas las rutas no definidas
        component: Error404,
    }
]

export default routes;