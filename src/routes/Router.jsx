import {
	createBrowserRouter,
	RouterProvider,
} from "react-router-dom";
import Signin from "../pages/Signin.jsx";
import Signup from "../pages/Signup.jsx";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Signup />,
		// errorElement: <Error />,
	},
	{
		path: "/auth/signin",
		element: <Signin />,
		// errorElement: <Error />,
	}
]);



const AppRouter = () => <RouterProvider router={router} />

export default AppRouter
