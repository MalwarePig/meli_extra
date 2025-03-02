// Importamos React y los componentes necesarios de react-router-dom
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Importamos las rutas definidas en un archivo externo (./routes)
import routes from './routes';

// Definimos el componente Navigation
export default function Navigation() {
    return (// Usamos el componente Router para envolver toda la aplicación y habilitar el enrutamiento

        <Router>{/* Usamos el componente Routes para definir las rutas de la aplicación. */}
            <Routes>{/*Mapeamos el array de rutas importado (routes) para crear un componente Route por cada ruta.*/}

                {routes.map((route, index) => {
                    // Si la ruta tiene un layout, lo usamos; de lo contrario, usamos React.Fragment
                
                    // Obtenemos el componente de la ruta
                    const Component = route.component;

                    return ( // Cresamos un componente Route por cada ruta 
                        <Route
                            key={index} // Usamos el índice como clave única para cada Route
                            path={route.path} // Definimos la ruta (URL) que activará este componente
                            element={// Renderizamos el componente asociado a la ruta
                                <Component />
                            }
                        />
                    );
                })}
            </Routes>
        </Router>
    );
}