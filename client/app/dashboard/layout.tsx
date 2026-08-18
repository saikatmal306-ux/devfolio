import DashboardSidebar
from "@/components/layout/dashboard-sidebar";

import MobileNav
from "@/components/layout/mobile-nav";

import ProtectedRoute from "@/components/auth/protected-route";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ProtectedRoute>
      <div className="flex">
        <DashboardSidebar />

        <main
          className="
          flex-1
          p-4
          md:p-8
          pb-20
          "
        >
          {children}
        </main>

        <MobileNav />
      </div>
    </ProtectedRoute>
  );
}