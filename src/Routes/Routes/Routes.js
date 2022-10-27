import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import NotFound from "../../Pages/404/NotFound";
import Blog from "../../Pages/Blog/Blog";
import CourseDetails from "../../Pages/Courses/CourseDetails/CourseDetails";
import Courses from "../../Pages/Courses/Courses";
import Faq from "../../Pages/Faq/Faq";
import CheckOut from "../../Pages/GetPremimu/CheckOut";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import Signup from "../../Pages/Register/Signup";
import PrivateRoute from "../../PrivateRoute/PrivateRoute";

export const routes=createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/home',
                element:<Home></Home>
            },
            {
                path:'/courses',
                loader:async()=>{
                    return fetch('https://learn-with-fun-server.vercel.app/courses');
                }
                ,
                element:<Courses></Courses>
            },
            {
                path:'/courses/:id',
                loader:async({params})=>{
                    return fetch(`https://learn-with-fun-server.vercel.app/courses/${params.id}`);
                }
                ,
                element:<CourseDetails></CourseDetails>
            },
            {
                path:'/courses/:id/checkout',
                loader:async({params})=>{
                    return fetch(`https://learn-with-fun-server.vercel.app/courses/${params.id}`);
                }
                ,
                element:<PrivateRoute><CheckOut></CheckOut></PrivateRoute>
            },
            {
                path:'/blog',
                element:<Blog></Blog>
            },
            {
                path:'/faq',
                element:<Faq></Faq>
            }
            ,
            {
                path:'/login',
                element:<Login></Login>
            }
            ,
            {
                path:'/signup',
                element:<Signup></Signup>
            }
        ]
    }
    ,
    {
        path:'*',
        element:<NotFound></NotFound>
    }
])