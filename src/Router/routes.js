import Layout from './../Containers/Layout/Layout.jsx';
import LoginContainer from './../Containers/Login/Login';
import MainPageContainer from './../Containers/MainPage/MainPage';
import PickFrontContainer from '../Containers/Pick/PickFront.jsx';
import PickFrontDockToteContainer from "../Containers/Pick/PickFront/PickFront.DockTote";
import PickFrontMoreItemScanContainer from "./../Containers/Pick/PickFront/PickFront.MoreItemScan.PptlPress"
import PickFrontTtpItemScanContainer from "./../Containers/Pick/PickFront/PickFront.TtpItemScan.UndockTote";
import PlaceBinContainer from "../Containers/Pick/PickFront/PlaceBin"
import PlaceEntityContainer from '../Containers/Put/PutBack/PlaceEntity';
import PutBackContainer from '../Containers/Put/PutBack.jsx';
import ScanEntityContainer from '../Containers/Put/PutBack/ScanEntity';
import ScanPackingBoxContainer from "../Containers/Pick/PickFront/ScanPackingbox";
import ScanPalletContainer from '../Containers/Put/PutBack/ScanPallet';
import ScanToteContainer from '../Containers/Put/PutBack/ScanTote';

const Routes = () => {
    return [
        {
            path : "/pick",
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
        
    ]
}

export default Routes;