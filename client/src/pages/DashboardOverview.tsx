import DashboardLayout from "../components/dashboard/DashboardLayout";
import GrowthScoreCard from "../components/dashboard/GrowthScoreCard";
import TrendSummary from "../components/dashboard/TrendSummary";
import QuickStatsGrid from "../components/dashboard/QuickStatsGrid";
import InsightsPanel from "../components/dashboard/InsightsPanel";
import GitHubCard from "../components/dashboard/GitHubCard";
import TwitterCard from "../components/dashboard/TwitterCard";

const DashboardOverview = () => {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Growth Score */}
        <GrowthScoreCard />

        {/* Trend Summary */}
        <TrendSummary />

        {/* Quick Stats Grid */}
        <QuickStatsGrid />

        {/* Insights Panel */}
        <InsightsPanel />

        {/* Platform Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <GitHubCard />
          <TwitterCard />
          {/* More platform cards will be added here */}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default DashboardOverview;
