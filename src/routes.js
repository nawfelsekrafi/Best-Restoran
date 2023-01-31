import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import AuthLayout from "./layouts/AuthLayout";
import Progress from "./shared/components/Progress/Progress";
import NotFoundView from "./shared/components/NotFound";

import { lazy } from "react";
import { Suspense } from "react";

const RoutesProvider = () => {
  const HomeView = lazy(() => import("./views/Home"));
  const AboutView = lazy(() => import("./views/About"));
  const LoginView = lazy(() => import("./views/auth/Login"));
  const RegisterView = lazy(() => import("./views/auth/Register"));

  return (
    <BrowserRouter>
      <Suspense fallback={<Progress />}>
        <Routes>
          <Route path="/auth" element={<AuthLayout />}>
            <Route index element={<LoginView />} />
            <Route path="login" element={<LoginView />} />
            <Route path="register" element={<RegisterView />} />
          </Route>
          {/* Users Routes */}
          <Route path="/" element={<MainLayout />}>
            <Route index element={<HomeView />} />
            <Route path="about" element={<AboutView />} />
          </Route>

          {/* Uncreated Routes */}
          <Route path="*" element={<NotFoundView />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default RoutesProvider;
