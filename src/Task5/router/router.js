import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import LoginForm from "../components/LoginForm";
import HodHomePage from "../pages/HodHomePage";
import StaffHome from "../pages/StaffHome";
import ProtectedRoute from "./ProtectedRoute";
import RootLayout from "./rootLayout/RootLayout";
import RegistrationFrom from "../components/RegistrationFrom";


export const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<RootLayout />}>
            <Route path="login" element={<LoginForm />} />
            <Route path="register" element={<RegistrationFrom />} />

            <Route path="dashboard/Hod" element={<ProtectedRoute allowedRoles={"Hod"}>
                <HodHomePage />
            </ProtectedRoute>} />

            <Route path="dashboard/Staff" element={<ProtectedRoute allowedRoles={"Staff"}>
                <StaffHome />
            </ProtectedRoute>} />
        </Route>
    )
)