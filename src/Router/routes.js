import Layout from './../Containers/Layout/Layout.jsx';
import LoginContainer from './../Containers/Login/Login';
import HeaderContainer from './../Containers/Header/Header';
import MainPageContainer from './../Containers/MainPage/MainPage';
import ScanToteContainer from '../Containers/Put/ScanTote/ScanTote';
import PutBackContainer from '../Containers/Put/PutBack.jsx';
import ScanEntity from "../Containers/Put/ScanEntity/ScanEntity"
import PlaceEntity from  '../Containers/PlaceEntity/PlaceEntity'

const Routes = () => {
    return [
        {
            path : "/",
            comp : ScanEntity,
            authRoute : true,
            exact : true
        },
        {
            path : "/login",
            comp : MainPageContainer,
            authRoute : true,
            exact : true
        },
        {
            path : "/put",
            comp : PutBackContainer,
            authRoute : true,
            exact : true

        },
        {
            path : "/put-back",
            comp : ScanToteContainer,
            authRoute : true,
            exact : true

        },
        {
            path : "/pick-front",
            comp : ScanToteContainer,
            authRoute : true,
            exact : true

        },
        {
            path : "/pick-back",
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
        {
            path : "/scan-entity",
            comp : ScanEntity,
            authRoute : true,
            exact : true
        }
    ]
}

export default Routes;