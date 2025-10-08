# Dashboard Visual Structure

```
┌─────────────────────────────────────────────────────────────────┐
│                                                                 │
│  📊 Indie Developer Dashboard                                  │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘

┌──────────────┬──────────────────────────────────────────────────┐
│              │  📅 Last 30 days  |  🔄 Refresh  |  🔔  |  👤    │  TopBar
│              ├──────────────────────────────────────────────────┤
│              │                                                  │
│  Sidebar     │  ╔═══════════════════════════════════════════╗  │
│              │  ║  Overall Growth Score: 78 / 100          ║  │  GrowthScoreCard
│  📊 Overview │  ║  ↑ 5% vs last period              ⭕ 78%  ║  │
│  📈 Analytics│  ╚═══════════════════════════════════════════╝  │
│  🎯 Goals    │                                                  │
│  💡 Insights │  ┌────────────────────────────────────────────┐  │
│  ⚙️ Settings│  │ 📈 Your Growth This Month                 │  │  TrendSummary
│              │  │ ✓ +5% followers  ✓ +12 stars  ✓ +10 subs │  │
│              │  └────────────────────────────────────────────┘  │
│              │                                                  │
│              │  ┌──────────┬──────────┬──────────┐             │
│              │  │ ⭐ GitHub │ 🐦 Twitter│ 🤖 Reddit│             │  QuickStatsGrid
│              │  │ 1.2k ↑12%│ 3.4k ↑5% │ 2.1k ↑8% │             │  (6 cards)
│      [←]     │  ├──────────┼──────────┼──────────┤             │
│   collapse   │  │🚀 PH     │ 📧 News  │ 📊 Site  │             │
│              │  │ 456 ↑23% │ 1.8k ↑15%│ 5.2k ↓3% │             │
│              │  └──────────┴──────────┴──────────┘             │
│              │                                                  │
│              │  ┌────────────────────────────────────────────┐  │
│              │  │ 💡 Growth Insights & Recommendations      │  │  InsightsPanel
│              │  ├─────────────┬─────────────┬──────────────┤  │
│              │  │🎯 Tweet more│⚠️ Close     │💡 Better CTA │  │
│              │  │Project info │Issues (50+) │Newsletter    │  │
│              │  └─────────────┴─────────────┴──────────────┘  │
│              │                                                  │
│              │  ┌─────────────────────┬──────────────────────┐ │
│              │  │ ⭐ GitHub Card      │ 🐦 Twitter Card      │ │  Platform Cards
│              │  │ Stars: 1,234        │ Followers: 3,421     │ │
│              │  │ Forks: 234          │ Engagement: 4.2%     │ │
│              │  │ Issues: 42          │ Tweets: 156          │ │
│              │  │ PRs: 156            │                      │ │
│              │  │                     │ Top Tweets:          │ │
│              │  │ Top Repos:          │ - Launch post (234♥) │ │
│              │  │ 1. awesome-project  │ - Blog post (189♥)   │ │
│              │  │ 2. cool-library     │ - Teaser (156♥)      │ │
│              │  │ 3. dev-tools        │                      │ │
│              │  └─────────────────────┴──────────────────────┘ │
│              │                                                  │
│              │  [More platform cards will appear here...]      │
│              │                                                  │
└──────────────┴──────────────────────────────────────────────────┘
```

## Component Tree

```
App
└── Router
    └── Route: /dashboard
        └── DashboardOverview
            └── DashboardLayout
                ├── Sidebar
                │   ├── Logo/Brand
                │   ├── Navigation Menu
                │   │   ├── Overview (active)
                │   │   ├── Analytics
                │   │   ├── Goals
                │   │   ├── Insights
                │   │   └── Settings
                │   └── Collapse Toggle
                │
                ├── TopBar
                │   ├── DateRangePicker
                │   ├── RefreshButton
                │   ├── Notifications
                │   └── User Menu
                │
                └── MainContent
                    ├── GrowthScoreCard
                    │   ├── Score (0-100)
                    │   ├── Change %
                    │   └── Visual Ring
                    │
                    ├── TrendSummary
                    │   └── Insight Badges
                    │
                    ├── QuickStatsGrid
                    │   ├── MetricCard (GitHub)
                    │   ├── MetricCard (Twitter)
                    │   ├── MetricCard (Reddit)
                    │   ├── MetricCard (Product Hunt)
                    │   ├── MetricCard (Newsletter)
                    │   └── MetricCard (Website)
                    │
                    ├── InsightsPanel
                    │   ├── InsightCard (Action)
                    │   ├── InsightCard (Alert)
                    │   └── InsightCard (Tip)
                    │
                    └── Platform Cards Grid
                        ├── GitHubCard
                        │   ├── Stats Grid
                        │   └── Top Repos List
                        │
                        ├── TwitterCard
                        │   ├── Stats Grid
                        │   └── Top Tweets List
                        │
                        └── [More cards to be added]
                            ├── RedditCard
                            ├── ProductHuntCard
                            ├── NewsletterCard
                            └── AnalyticsCard
```

## Data Flow (Future)

```
User Browser
     │
     ├─── Auth Token ────► Backend API
     │                         │
     │                         ├─── GitHub API
     │                         ├─── Twitter API
     │                         ├─── Reddit API
     │                         ├─── Product Hunt API
     │                         ├─── Newsletter Service
     │                         └─── Analytics API
     │                               │
     │                               ▼
     │                         [ Database ]
     │                         Cache & Store
     │                               │
     │◄──── Dashboard Data ──────────┘
     │
     └─── React Components Render Data
```

## Color Coding

- 🟢 Green (↑): Positive growth
- 🔴 Red (↓): Negative growth/decline
- 🔵 Blue: Primary actions/elements
- 🟡 Yellow: Warnings
- 🟣 Purple: Accents/highlights

## Responsive Breakpoints

- Mobile: Stack everything vertically
- Tablet (md): 2 columns for grids
- Desktop (lg): 3 columns for grids, side-by-side cards
- Wide: Maximum container width, centered content
