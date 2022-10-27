import Layout from './../Containers/Layout/Layout.jsx';
import LoginContainer from './../Containers/Login/Login';
import MainPageContainer from './../Containers/MainPage/MainPage';
import PlaceEntityContainer from '../Containers/Put/PutBack/PlaceEntity';
import PutBackContainer from '../Containers/Put/PutBack.jsx';
import ScanEntityContainer from '../Containers/Put/PutBack/ScanEntity';
import ScanPalletContainer from '../Containers/Put/PutBack/ScanPallet';
import ScanToteContainer from '../Containers/Put/PutBack/ScanTote';

const Routes = () => {
    return [
        {
            path : "/login",
            comp : LoginContainer,
            authRoute : false,
            exact : true
        },
        {
            path : "/put",
            comp : PutBackContainer,
            authRoute : true,
            exact : true

        },
    ]
}

export default Routes;