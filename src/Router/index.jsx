import './../App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import RoutesData from './routes';
import AuthRoutes from './AuthRoutes';
import UnAuthRoutes from './UnAuthRoutes';
import Login from './../Containers/Login/Login';
import AuthContext from './../Context/AuthContext';
import Layout from './../Containers/Layout/Layout';


function AuthProvider({ children } ) {
  let [isLoggedin, setUser] = React.useState(true);

  let signin = (newUser, callback) => {
      setUser(true)
      callback();
  };

  let signout = (callback) => {
      setUser(false);
      callback();
  };

  let value = { signin, signout, isLoggedin };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

function App() {

  const renderRoutes = () => {
    const routes = RoutesData();

    return routes.map((data, i) => {
      console.log(data)
        return <Route key={i} {...data} path={data.path} element={ 
            <AuthRoutes>
                <Layout>
                    <data.comp />
                </Layout>
            </AuthRoutes>
         } 
      />
    })
  }
  return (
        <Routes>
          <Route path="/login" element={ <UnAuthRoutes>
            <Login /> 
            </UnAuthRoutes>
          } />
          {/* <Route element={<Layout />}> */}
            {renderRoutes() }
          {/* </Route> */}
        </Routes>  
  );
}

export default App;
