import { lazy, Suspense } from "react";
import { Navigate } from "react-router-dom";
import { BaseLayout } from "src/components";
import SuspenseLoader from "src/components/SuspenseLoader";

const Loader = (Component) => (props) =>
  (
    <Suspense fallback={<SuspenseLoader />}>
      <Component {...props} />
    </Suspense>
  );

const HomePage = Loader(lazy(() => import("src/containers/HomeContainer")));

const router = [
  {
    path: "/",
    element: <BaseLayout />,
    children: [
      {
        path: "",
        element: <HomePage />,
      },
    ],
  },
  {
    path: "*",
    element: <Navigate to="/" replace={true} />,
  },
];

export default router;
