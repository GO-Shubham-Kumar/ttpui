import Layout from './../Containers/Layout/Layout.jsx';
import LoginContainer from './../Containers/Login/Login';
import HeaderContainer from './../Containers/Header/Header';
import MainPageContainer from './../Containers/MainPage/MainPage';

const Routes = () => {
    return [
        {
            path : "/",
            comp : Layout,
            authRoute : true,
            exact : true
        },
        {
            path : "/scan-tote",
            comp : MainPageContainer,
            authRoute : true,
            exact : true

        },
        {
            path : "/header",
            comp : HeaderContainer,
            authRoute : true,
            exact : true

        },
    ]
}

export default Routes;