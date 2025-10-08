import { Card, CardBody } from "@heroui/react";
import { GithubLogoIcon, StarIcon } from "@phosphor-icons/react";
import { theme } from "../../styles/theme";

const GitHubCard = () => {
  // Mock data
  const stats = {
    totalStars: 1234,
    totalForks: 234,
    openIssues: 42,
    prsMerged: 156,
    change: 12,
  };

  const topRepos = [
    { name: "awesome-project", stars: 456, change: 8 },
    { name: "cool-library", stars: 389, change: 15 },
    { name: "dev-tools", stars: 289, change: -2 },
  ];

  return (
    <Card
      className="border"
      style={{
        background: theme.effects.cardGlass.background,
        backdropFilter: theme.effects.cardGlass.backdropFilter,
        borderColor: theme.colors.glass.border,
      }}
    >
      <CardBody className="p-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <GithubLogoIcon
              size={32}
              weight="regular"
              style={{ color: theme.colors.text.primary }}
            />
            <div>
              <h3
                className="text-lg font-bold"
                style={{ color: theme.colors.text.primary }}
              >
                GitHub
              </h3>
              <p
                className="text-sm"
                style={{ color: theme.colors.text.tertiary }}
              >
                Repository metrics
              </p>
            </div>
          </div>
          <span
            className={`text-sm font-medium ${
              stats.change >= 0 ? "text-green-400" : "text-red-400"
            }`}
          >
            {stats.change >= 0 ? "↑" : "↓"} {Math.abs(stats.change)}%
          </span>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div
            className="p-3 rounded-lg"
            style={{ backgroundColor: theme.colors.glass.white }}
          >
            <div
              className="text-2xl font-bold"
              style={{ color: theme.colors.text.primary }}
            >
              {stats.totalStars}
            </div>
            <div
              className="text-xs uppercase tracking-wide mt-1"
              style={{ color: theme.colors.text.tertiary }}
            >
              Total Stars
            </div>
          </div>
          <div
            className="p-3 rounded-lg"
            style={{ backgroundColor: theme.colors.glass.white }}
          >
            <div
              className="text-2xl font-bold"
              style={{ color: theme.colors.text.primary }}
            >
              {stats.totalForks}
            </div>
            <div
              className="text-xs uppercase tracking-wide mt-1"
              style={{ color: theme.colors.text.tertiary }}
            >
              Total Forks
            </div>
          </div>
          <div
            className="p-3 rounded-lg"
            style={{ backgroundColor: theme.colors.glass.white }}
          >
            <div
              className="text-2xl font-bold"
              style={{ color: theme.colors.text.primary }}
            >
              {stats.openIssues}
            </div>
            <div
              className="text-xs uppercase tracking-wide mt-1"
              style={{ color: theme.colors.text.tertiary }}
            >
              Open Issues
            </div>
          </div>
          <div
            className="p-3 rounded-lg"
            style={{ backgroundColor: theme.colors.glass.white }}
          >
            <div
              className="text-2xl font-bold"
              style={{ color: theme.colors.text.primary }}
            >
              {stats.prsMerged}
            </div>
            <div
              className="text-xs uppercase tracking-wide mt-1"
              style={{ color: theme.colors.text.tertiary }}
            >
              PRs Merged
            </div>
          </div>
        </div>

        {/* Top Repositories */}
        <div>
          <h4
            className="text-sm font-semibold mb-3"
            style={{ color: theme.colors.text.secondary }}
          >
            Top Repositories
          </h4>
          <div className="space-y-2">
            {topRepos.map((repo, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-2 rounded hover:bg-white/5 transition-colors"
              >
                <div className="flex items-center gap-2">
                  <span style={{ color: theme.colors.text.tertiary }}>
                    #{index + 1}
                  </span>
                  <span
                    className="font-medium"
                    style={{ color: theme.colors.text.primary }}
                  >
                    {repo.name}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span
                    className="flex items-center gap-1"
                    style={{ color: theme.colors.text.secondary }}
                  >
                    <StarIcon
                      size={16}
                      weight="regular"
                      style={{ color: theme.colors.text.secondary }}
                    />{" "}
                    {repo.stars}
                  </span>
                  <span
                    className={`text-xs ${
                      repo.change >= 0 ? "text-green-400" : "text-red-400"
                    }`}
                  >
                    {repo.change >= 0 ? "↑" : "↓"} {Math.abs(repo.change)}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </CardBody>
    </Card>
  );
};

export default GitHubCard;
