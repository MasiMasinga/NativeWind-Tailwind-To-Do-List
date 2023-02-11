import React, { Suspense, lazy } from "react";

// Routing
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Components
import Loader from '../common/components/Loader';

// Pages
const AsyncRegister = lazy(() => import("../pages/authentication/Register"));
const AsyncLogin = lazy(() => import("../pages/authentication/Login"));
const AsyncForgotPassword = lazy(() => import("../pages/authentication/ForgotPassword"));
const AsyncResetPassword = lazy(() => import("../pages/authentication/ResetPassword"));
const AsyncChangeEmail = lazy(() => import("../pages/authentication/ChangeEmail"));
const AsyncPageNotFound = lazy(() => import("../pages/page-not-found/index"));
const AsyncTasks = lazy(() => import("../pages/tasks/index"));
const AsyncProfile = lazy(() => import("../pages/profile/index"));

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          exact
          element={
            <Suspense fallback={<Loader />}>
              <AsyncRegister />
            </Suspense>
          }
        />
        <Route
          path="/auth/login"
          element={
            <Suspense fallback={<Loader />}>
              <AsyncLogin />
            </Suspense>
          }
        />
        <Route
          path="/auth/forgot-password"
          element={
            <Suspense fallback={<Loader />}>
              <AsyncForgotPassword />
            </Suspense>
          }
        />
        <Route
          path="/auth/reset-password"
          element={
            <Suspense fallback={<Loader />}>
              <AsyncResetPassword />
            </Suspense>
          }
        />
        <Route
          path="/auth/change-email"
          element={
            <Suspense fallback={<Loader />}>
              <AsyncChangeEmail />
            </Suspense>
          }
        />
        <Route
          path="/tasks"
          element={
            <Suspense fallback={<Loader />}>
              <AsyncTasks />
            </Suspense>
          }
        />
        <Route
          path="/profile"
          element={
            <Suspense fallback={<Loader />}>
              <AsyncProfile />
            </Suspense>
          }
        />
        <Route
          path="*"
          element={
            <Suspense fallback={<Loader />}>
              <AsyncPageNotFound />
            </Suspense>
          }
        />
      </Routes>
    </Router>
  )
}

export default AppRoutes