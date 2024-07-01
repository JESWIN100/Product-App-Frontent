import { Navigate, createBrowserRouter } from "react-router-dom";
import Homepage from "./pages/Homepage";
import NotFound from "./layouts/NotFound";
import Formpage from "./pages/Formpage";
import SignupForm from "./components/SignupForm";
import LoginPage from "./pages/LoginPage";
import { useAuthStore } from "./store/authStore"; 


const PrivateRoute=({children})=>{
  const {isAuth}=useAuthStore();
  return isAuth ? children :<Navigate to='/login'/>
  // if(isAuth){
  //   return children;
  //   }else{
  //     return <Navigate to='/login'/>

  // }
}


const router = createBrowserRouter([
  {
    path: "/",
    element:<PrivateRoute> <Homepage /></PrivateRoute>
  },
  {
    path: "/login",
    element: <LoginPage/>,
  },
  {
    path: "/add-product",
    element:<PrivateRoute> <Formpage /></PrivateRoute>
  },
  {
    path: "/signup",
    element: <PrivateRoute> <SignupForm /></PrivateRoute>
  },
  {
    path: "/edit-form/:id",
    element: <PrivateRoute> <Formpage /></PrivateRoute>
  },
  {
    path:"*",
    element:<NotFound/>
  }

 
]);

export default router


