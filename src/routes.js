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
  const ResetPassword = lazy(() => import("./views/auth/ResetPassword"));
  const RestaurantReview = lazy(() => import("./views/RestaurantReview"));

  return (
    <BrowserRouter>
      <Suspense fallback={<Progress />}>
        <Routes>
          <Route path="/auth" element={<AuthLayout />}>
            <Route index element={<LoginView />} />
            <Route path="login" element={<LoginView />} />
            <Route path="reset-password" element={<ResetPassword />} />
          </Route>
          {/* Users Routes */}
          <Route path="/" element={<MainLayout />}>
            <Route index element={<HomeView />} />
            <Route path="Home" element={<HomeView />} />
            <Route path="Siparişler" element={<HomeView />} />
            <Route path="Siparişler/Onay-Bekleyenler" element={<HomeView />} />
            <Route path="Siparişler/Aktif-Siparişler" element={<HomeView />} />
            <Route path="Siparişler/Geçmiş-Siparişler" element={<HomeView />} />
            <Route path="Menü-İşlemleri" element={<HomeView />} />
            <Route path="Menü-İşlemleri/Menü" element={<HomeView />} />
            <Route path="Menü-İşlemleri/Malzemeler" element={<HomeView />} />
            <Route path="Menü-İşlemleri/Opsiyonlar" element={<HomeView />} />
            <Route path="Ürün-İşlemleri" element={<HomeView />} />
            <Route path="Restaurant-Review" element={<RestaurantReview />} />
            <Route path="Restoran-Bölgesi-Aç/Kapa" element={<AboutView />} />
            <Route path="Ödeme-Yöntemleri" element={<AboutView />} />
            <Route path="Çalışma-aatleri" element={<AboutView />} />
            <Route path="Muhasebe" element={<AboutView />} />
            <Route path="Restoran-Bilgileri" element={<AboutView />} />
            <Route path="Talepler" element={<AboutView />} />
            <Route path="Canlı-Yardım" element={<AboutView />} />
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
