import { Card, CardBody } from "@heroui/react";
import { XLogoIcon, HeartIcon, RepeatIcon } from "@phosphor-icons/react";
import { theme } from "../../styles/theme";

const TwitterCard = () => {
  // Mock data
  const stats = {
    followers: 3421,
    engagement: 4.2,
    tweets: 156,
    change: 5,
  };

  const topTweets = [
    { text: "Just launched my new project!", likes: 234, retweets: 45 },
    { text: "New blog post about React patterns", likes: 189, retweets: 32 },
    { text: "Working on something cool...", likes: 156, retweets: 28 },
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
            <XLogoIcon
              size={32}
              weight="regular"
              style={{ color: theme.colors.text.primary }}
            />
            <div>
              <h3
                className="text-lg font-bold"
                style={{ color: theme.colors.text.primary }}
              >
                X
              </h3>
              <p
                className="text-sm"
                style={{ color: theme.colors.text.tertiary }}
              >
                Social engagement
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
        <div className="grid grid-cols-3 gap-4 mb-6">
          <div
            className="p-3 rounded-lg"
            style={{ backgroundColor: theme.colors.glass.white }}
          >
            <div
              className="text-2xl font-bold"
              style={{ color: theme.colors.text.primary }}
            >
              {stats.followers}
            </div>
            <div
              className="text-xs uppercase tracking-wide mt-1"
              style={{ color: theme.colors.text.tertiary }}
            >
              Followers
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
              {stats.engagement}%
            </div>
            <div
              className="text-xs uppercase tracking-wide mt-1"
              style={{ color: theme.colors.text.tertiary }}
            >
              Engagement
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
              {stats.tweets}
            </div>
            <div
              className="text-xs uppercase tracking-wide mt-1"
              style={{ color: theme.colors.text.tertiary }}
            >
              Tweets
            </div>
          </div>
        </div>

        {/* Top Tweets */}
        <div>
          <h4
            className="text-sm font-semibold mb-3"
            style={{ color: theme.colors.text.secondary }}
          >
            Top Performing Tweets
          </h4>
          <div className="space-y-3">
            {topTweets.map((tweet, index) => (
              <div
                key={index}
                className="p-3 rounded-lg hover:bg-white/5 transition-colors"
                style={{ backgroundColor: theme.colors.glass.white }}
              >
                <p
                  className="text-sm mb-2"
                  style={{ color: theme.colors.text.primary }}
                >
                  {tweet.text}
                </p>
                <div
                  className="flex items-center gap-4 text-xs"
                  style={{ color: theme.colors.text.tertiary }}
                >
                  <span className="flex items-center gap-1">
                    <HeartIcon
                      size={14}
                      weight="regular"
                      style={{ color: theme.colors.text.secondary }}
                    />{" "}
                    {tweet.likes}
                  </span>
                  <span className="flex items-center gap-1">
                    <RepeatIcon
                      size={14}
                      weight="regular"
                      style={{ color: theme.colors.text.secondary }}
                    />{" "}
                    {tweet.retweets}
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

export default TwitterCard;
