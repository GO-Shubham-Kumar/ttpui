import LoginContainer from './../Containers/Login/Login'
import PickFrontContainer from '../Containers/Pick/PickFront.jsx'
import PutBackContainer from '../Containers/Put/PutBack.jsx'

const Routes = () => {
  return [
    {
      path: '/pick',
      comp: PickFrontContainer,
      authRoute: true,
      exact: true,
    },
    {
      path: '/login',
      comp: LoginContainer,
      authRoute: true,
      exact: true,
    },
    {
      path: '/put',
      comp: PutBackContainer,
      authRoute: true,
      exact: true,
    },
  ]
}

export default Routes
