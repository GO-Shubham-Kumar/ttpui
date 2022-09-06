import Layout from './../Containers/Layout/Layout.jsx';
import LoginContainer from './../Containers/Login/Login';
import HeaderContainer from './../Containers/Header/Header';
import MainPageContainer from './../Containers/MainPage/MainPage';
import ScanToteContainer from './../Containers/ScanTote/ScanTote';

const Routes = () => {
    return [
        {
            path : "/",
            comp : MainPageContainer,
            authRoute : true,
            exact : true
        },
        {
            path : "/scan-tote",
            comp : ScanToteContainer,
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