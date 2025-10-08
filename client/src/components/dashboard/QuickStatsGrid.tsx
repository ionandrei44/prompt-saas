import {
  GithubLogoIcon,
  XLogoIcon,
  RedditLogoIcon,
  RocketLaunchIcon,
  EnvelopeSimpleIcon,
  ChartLineIcon,
  type Icon,
} from "@phosphor-icons/react";
import MetricCard from "./MetricCard";

interface Platform {
  id: string;
  name: string;
  icon: Icon;
  metric: string;
  value: string | number;
  change: number;
  color: string;
}

const QuickStatsGrid = () => {
  // Mock data - will come from API later
  const platforms: Platform[] = [
    {
      id: "github",
      name: "GitHub",
      icon: GithubLogoIcon,
      metric: "Stars",
      value: "1.2k",
      change: 12,
      color: "#3B82F6",
    },
    {
      id: "twitter",
      name: "X",
      icon: XLogoIcon,
      metric: "Followers",
      value: "3.4k",
      change: 5,
      color: "#1DA1F2",
    },
    {
      id: "reddit",
      name: "Reddit",
      icon: RedditLogoIcon,
      metric: "Karma",
      value: "2.1k",
      change: 8,
      color: "#FF4500",
    },
    {
      id: "producthunt",
      name: "Product Hunt",
      icon: RocketLaunchIcon,
      metric: "Upvotes",
      value: 456,
      change: 23,
      color: "#DA552F",
    },
    {
      id: "newsletter",
      name: "Newsletter",
      icon: EnvelopeSimpleIcon,
      metric: "Subscribers",
      value: "1.8k",
      change: 15,
      color: "#10B981",
    },
    {
      id: "analytics",
      name: "Website",
      icon: ChartLineIcon,
      metric: "Visitors",
      value: "5.2k",
      change: -3,
      color: "#8B5CF6",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {platforms.map((platform) => (
        <MetricCard key={platform.id} platform={platform} />
      ))}
    </div>
  );
};

export default QuickStatsGrid;
