import { Card, CardBody, Button } from "@heroui/react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  GithubLogoIcon,
  CheckCircleIcon,
  ChartLineIcon,
  SparkleIcon,
} from "@phosphor-icons/react";

import { theme } from "../styles/theme";
import { useAuthStore } from "../stores/authStore";

const Login = () => {
  const navigate = useNavigate();
  const { signInWithGitHub, user, initialize } = useAuthStore();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    initialize();
  }, [initialize]);

  // Redirect if already logged in
  useEffect(() => {
    if (user) {
      navigate("/dashboard", { replace: true });
    }
  }, [user, navigate]);

  const handleGitHubLogin = async () => {
    try {
      setLoading(true);
      await signInWithGitHub();
    } catch (error) {
      console.error("Failed to sign in:", error);
      setLoading(false);
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center p-4"
      style={{ background: theme.colors.background.gradient }}
    >
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="flex justify-center mb-8">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-400 rounded-lg flex items-center justify-center shadow-lg shadow-blue-500/30">
              <ChartLineIcon size={24} weight="bold" className="text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-100 to-blue-200 bg-clip-text text-transparent select-none">
              DevMetrics
            </span>
          </div>
        </div>

        {/* Login Card */}
        <Card
          className="border"
          style={{
            background: theme.effects.glass.background,
            backdropFilter: theme.effects.glass.backdropFilter,
            borderColor: theme.colors.glass.border,
          }}
        >
          <CardBody className="p-8">
            {/* Header */}
            <div className="text-center mb-8">
              <h1
                className="text-2xl font-bold mb-2"
                style={{ color: theme.colors.text.primary }}
              >
                Welcome Back
              </h1>
              <p
                className="text-sm"
                style={{ color: theme.colors.text.tertiary }}
              >
                Sign in to access your dashboard
              </p>
            </div>

            {/* GitHub Login Button */}
            <Button
              size="lg"
              className="w-full font-semibold mb-6"
              style={{
                backgroundColor: "#000000",
                color: "white",
              }}
              startContent={<GithubLogoIcon size={20} weight="fill" />}
              onPress={handleGitHubLogin}
              isLoading={loading}
              isDisabled={loading}
            >
              Continue with GitHub
            </Button>

            {/* Benefits Section */}
            <div
              className="space-y-3 pt-6 border-t"
              style={{ borderColor: theme.colors.glass.border }}
            >
              <p
                className="text-xs font-semibold uppercase tracking-wide mb-3"
                style={{ color: theme.colors.text.muted }}
              >
                Why GitHub?
              </p>

              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 mt-0.5">
                  <CheckCircleIcon
                    size={18}
                    weight="fill"
                    style={{ color: "#10b981" }}
                  />
                </div>
                <div>
                  <p
                    className="text-sm font-medium"
                    style={{ color: theme.colors.text.primary }}
                  >
                    Instant Platform Connection
                  </p>
                  <p
                    className="text-xs mt-0.5"
                    style={{ color: theme.colors.text.tertiary }}
                  >
                    GitHub will be automatically connected as your first
                    platform
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 mt-0.5">
                  <ChartLineIcon
                    size={18}
                    weight="fill"
                    style={{ color: "#6366f1" }}
                  />
                </div>
                <div>
                  <p
                    className="text-sm font-medium"
                    style={{ color: theme.colors.text.primary }}
                  >
                    See Your Data Immediately
                  </p>
                  <p
                    className="text-xs mt-0.5"
                    style={{ color: theme.colors.text.tertiary }}
                  >
                    View your repository stars, forks, and activity right away
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 mt-0.5">
                  <SparkleIcon
                    size={18}
                    weight="fill"
                    style={{ color: "#8b5cf6" }}
                  />
                </div>
                <div>
                  <p
                    className="text-sm font-medium"
                    style={{ color: theme.colors.text.primary }}
                  >
                    Secure & Fast
                  </p>
                  <p
                    className="text-xs mt-0.5"
                    style={{ color: theme.colors.text.tertiary }}
                  >
                    One-click authentication with industry-standard OAuth
                  </p>
                </div>
              </div>
            </div>

            {/* Privacy Note */}
            <div
              className="mt-6 p-3 rounded-lg"
              style={{
                backgroundColor: theme.colors.glass.dark,
              }}
            >
              <p
                className="text-xs text-center"
                style={{ color: theme.colors.text.muted }}
              >
                🔒 We only request read-only access to your public repositories.
                Your code and private data remain secure.
              </p>
            </div>
          </CardBody>
        </Card>

        {/* Footer */}
        <p
          className="text-center text-xs mt-6"
          style={{ color: theme.colors.text.muted }}
        >
          By continuing, you agree to our Terms of Service and Privacy Policy
        </p>
      </div>
    </div>
  );
};

export default Login;
