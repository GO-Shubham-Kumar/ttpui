import Layout from './../Containers/Layout/Layout.jsx';
import LoginContainer from './../Containers/Login/Login';
import MainPageContainer from './../Containers/MainPage/MainPage';
import PutBackContainer from '../Containers/Put/PutBack.jsx';
import ScanToteContainer from '../Containers/Put/PutBack/ScanTote';
import ScanEntityContainer from '../Containers/Put/PutBack/ScanEntity';
import PlaceEntityContainer from '../Containers/Put/PutBack/PlaceEntity';
import ScanPalletContainer from '../Containers/Put/PutBack/ScanPallet';
import ScanPickToteContainer from "../Containers/Pick/PickFront/ScanTote";
import PlaceBinContainer from "../Containers/Pick/PickFront/PlaceBin"
import ScanPackingBoxContainer from "../Containers/Pick/PickFront/ScanPackingbox";
import ScanEntityPickContainer from "./../Containers/Pick/PickFront/ScanEntity";
import PlaceEntityPickContainer from "./../Containers/Pick/PickFront/PlaceEntity"
import PickFrontContainer from '../Containers/Pick/PickFront.jsx';

const Routes = () => {
    return [
        {
            path : "/",
            comp : PickFrontContainer,
            authRoute : true,
            exact : true
        },
        {
            path : "/login",
            comp : LoginContainer,
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
            path : "/scan-entity",
            comp : ScanEntityContainer,
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
            path : "/place-entity",
            comp : PlaceEntityContainer,
            authRoute : true,
            exact : true

        },
        {
            path : "/scan-entity",
            comp : ScanEntityContainer,
            authRoute : true,
            exact : true
        },
        {
            path : "/scan-tote-pick",
            comp : ScanPickToteContainer,
            authRoute : true,
            exact : true
        },
        {
            path : "/place-bin-pick",
            comp : PlaceBinContainer,
            authRoute : true,
            exact : true
        },
        {
            path : "/scan-packingbox-pick",
            comp : ScanPackingBoxContainer,
            authRoute : true,
            exact : true
        },
        {
            path : "/scan-entity-pick",
            comp : ScanEntityPickContainer,
            authRoute : true,
            exact : true
        },
        {
            path : "/place-entity-pick",
            comp : PlaceEntityPickContainer,
            authRoute : true,
            exact : true
        }
        
    ]
}

export default Routes;