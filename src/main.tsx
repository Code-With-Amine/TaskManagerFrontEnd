import React from "react";
import ReactDOM from "react-dom/client";
import LogedInUser from "./provider/logedInUser";

import * as serviceWorkerRegistration from './serviceWorkerRegistration';

const renderApp = () => {
  const App = React.lazy(() => import("./App"));

  ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
      <LogedInUser>
        <React.Suspense fallback={<div>Loading...</div>}>
          <App />
        </React.Suspense>
      </LogedInUser>
    </React.StrictMode>
  );
};

renderApp();
serviceWorkerRegistration.register();
