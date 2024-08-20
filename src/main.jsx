import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import LoginPage from "./pages/login.jsx";
import RegisterPage from "./pages/register.jsx";
import UserPage from "./pages/user.jsx";
import "./styles/global.css";
import TodoApp from "./components/todo/TodoApp.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import BookPage from "./pages/book.jsx";
import ErrorPage from "./pages/error.jsx";
import "./index.css";
import { AuthWrapper } from "./components/context/auth.context.jsx";
import PrivateRoute from "./pages/private.route.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <TodoApp />,
      },
      {
        path: "/user",
        element: <UserPage />,
      },
      {
        path: "/books",
        element: (
          <PrivateRoute>
            <BookPage />
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  // {/* <App /> */}
  <AuthWrapper>
    <RouterProvider router={router} />
  </AuthWrapper>
  // </React.StrictMode>
);
