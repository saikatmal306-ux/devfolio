"use client";

import DashboardStats from "@/components/dashboard/stats/dashboard-stats";
import ProfileProgressCard from "@/components/dashboard/profile/profile-progress-card";
import WelcomeCard from "@/components/dashboard/profile/welcome-card";

import DashboardHeader from "@/components/dashboard/header/dashboard-header";
import QuickActions from "@/components/dashboard/actions/quick-actions";
import RecentProjects from "@/components/dashboard/projects/recent-projects";
import ExperienceSummaryCard
from "@/components/dashboard/experience/experience-summary-card";

import EducationSummaryCard
from "@/components/dashboard/education/education-summary-card";

export default function DashboardPage() {
  

  return (
    <div className="space-y-6">
    <DashboardHeader />

<DashboardStats />

<div className="grid gap-x-6 lg:grid-cols-2">
  <WelcomeCard />
  <ProfileProgressCard />
</div>

<div className="grid gap-6 md:grid-cols-2">
  <ExperienceSummaryCard />
  <EducationSummaryCard />
</div>

<div className="grid gap-6 xl:grid-cols-3">
  <div className="xl:col-span-2">
    <RecentProjects />
  </div>

  <QuickActions />
</div>

</div>
  );
}