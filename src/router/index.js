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

const Photos = Loader(lazy(() => import("src/containers/PhotosContainer")));
const Collectios = Loader(lazy(() => import("src/pages/Collections")));

const router = [
  {
    path: "/",
    element: <BaseLayout />,
    children: [
      {
        path: "",
        element: <Navigate to="photos" replace />,
      },
      {
        path: "photos",
        element: <Photos />,
      },
      {
        path: "collections",
        element: <Collectios />,
      },
    ],
  },
  {
    path: "*",
    element: <Navigate to="/" replace={true} />,
  },
];

export default router;
