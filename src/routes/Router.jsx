import {
	createBrowserRouter,
	RouterProvider,
} from "react-router-dom";
import Signin from "../pages/Signin.jsx";
import Signup from "../pages/Signup.jsx";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Signin />,
		// errorElement: <Error />,

		children: [
			{
				path: "/auth/signin",
				element: <Signup />,
			},

		]

	}
]);



const AppRouter = () => <RouterProvider router={router} />

export default AppRouter
