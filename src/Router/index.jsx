import './../App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import routesData from './routes';
import AuthRoutes from './AuthRoutes';
import UnAuthRoutes from './UnAuthRoutes';
import Login from './../Containers/Login/Login';
import AuthContext from './../Context/AuthContext';
import Layout from './../Containers/Layout/Layout';
import AuthLayout from './../Containers/Layout/AuthLayout';
function App() {

  const renderRoutes = () => {
    const routes = routesData();

    return routes.map((data, i) => {
      console.log(data)
        return <Route key={i} {...data} path={data.path} element={ 
            <AuthRoutes>
                <AuthLayout>
                    <data.comp />
                </AuthLayout>
            </AuthRoutes>
         } 
      />
    })
  }
  return (
    <Layout>
        <Routes>
          <Route path="/login" element={ 
            <UnAuthRoutes>
              <Login /> 
            </UnAuthRoutes>
          } />
          {/* <Route element={<Layout />}> */}
            {renderRoutes() }
          {/* </Route> */}
        </Routes>  
    </Layout>
  );
}

export default App;
