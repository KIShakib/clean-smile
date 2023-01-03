import { createBrowserRouter } from "react-router-dom";
import DashBoardLayout from "../../Layouts/DashBoard/DashBoardLayout";
import MainLayout from "../../Layouts/MainLayout/MainLayout";
import AboutUs from "../../Pages/AboutUs/AboutUs";
import AddDoctor from "../../Pages/AddDoctor/AddDoctor";
import AllUsers from "../../Pages/AllUsers/AllUsers";
import Appointment from "../../Pages/Appointment/Appointment/Appointment";
import DashBoardPage from "../../Pages/DashBoardPage/DashBoardPage";
import ContactUs from "../../Pages/Home/ContactUs/ContactUs";
import Home from "../../Pages/Home/Home";
import Reviews from "../../Pages/Home/Reviews/Reviews";
import Login from "../../Pages/Login/Login";
import ManageDoctor from "../../Pages/ManageDoctor/ManageDoctor";
import MyAppointment from "../../Pages/MyAppointment/MyAppointment";
import Payment from "../../Pages/Payment/Payment";
import SignUp from "../../Pages/SignUp/SignUp";
import User from "../../Pages/User/User";
import AdminPrivateRoute from "../AdminPrivateRoute/AdminPrivateRoute";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: ([
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/appointment",
                element: <PrivateRoute><Appointment></Appointment></PrivateRoute>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/signup",
                element: <SignUp></SignUp>
            },
            {
                path: "/about-us",
                element: <AboutUs />
            },
            {
                path: "/reviews",
                element: <Reviews />
            },
            {
                path: "/contact-us",
                element: <ContactUs />
            },
            {
                path: "/user",
                element: <User></User>
            },
            {
                path: "/dashboard",
                element: <PrivateRoute><DashBoardLayout></DashBoardLayout></PrivateRoute>,
                children: ([
                    {
                        path: "/dashboard",
                        element: <DashBoardPage></DashBoardPage>
                    },
                    {
                        path: "/dashboard/myappointment",
                        element: <MyAppointment></MyAppointment>
                    },
                    {
                        path: "/dashboard/appointment/payment/:id",
                        element: <Payment></Payment>,
                        loader: ({ params }) => fetch(`https://doctors-portal-server-nine.vercel.app/appointment/${params.id}`, {
                            headers: {
                                authorization: `bearer ${localStorage.getItem("accessToken")}`
                            }
                        })
                    },
                    {
                        path: "/dashboard/allusers",
                        element: <AdminPrivateRoute><AllUsers></AllUsers></AdminPrivateRoute>
                    },
                    {
                        path: "/dashboard/adddoctor",
                        element: <AdminPrivateRoute><AddDoctor></AddDoctor></AdminPrivateRoute>
                    },
                    {
                        path: "/dashboard/manage-doctor",
                        element: <AdminPrivateRoute><ManageDoctor></ManageDoctor></AdminPrivateRoute>
                    }
                ])
            }
        ])
    }

])