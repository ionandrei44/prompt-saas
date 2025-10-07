import { useNavigate } from "react-router-dom";
import { GlassCard, GlassButton } from "../components/ui";
import { Container } from "../components/layout";
import { theme } from "../styles/theme";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl opacity-20 animate-pulse"
          style={{
            background: `radial-gradient(circle, ${theme.colors.primary[500]} 0%, transparent 70%)`,
          }}
        />
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full blur-3xl opacity-20 animate-pulse"
          style={{
            background: `radial-gradient(circle, ${theme.colors.secondary[500]} 0%, transparent 70%)`,
            animationDelay: "1s",
          }}
        />
      </div>

      <Container>
        <div className="max-w-2xl mx-auto">
          <GlassCard padding="xl" className="text-center relative z-10">
            {/* Large 404 number */}
            <div className="mb-8">
              <h1
                className="text-9xl font-bold mb-4 bg-clip-text text-transparent animate-pulse"
                style={{
                  backgroundImage: `linear-gradient(135deg, ${theme.colors.primary[400]} 0%, ${theme.colors.secondary[400]} 50%, ${theme.colors.accent.purple} 100%)`,
                }}
              >
                404
              </h1>
              <div
                className="h-1 w-32 mx-auto rounded-full"
                style={{
                  background: `linear-gradient(90deg, ${theme.colors.primary[500]}, ${theme.colors.secondary[500]})`,
                }}
              />
            </div>

            {/* Error message */}
            <div className="mb-8 space-y-4">
              <h2
                className="text-3xl font-bold"
                style={{ color: theme.colors.text.primary }}
              >
                Page Not Found
              </h2>
              <p
                className="text-lg leading-relaxed max-w-md mx-auto"
                style={{ color: theme.colors.text.secondary }}
              >
                Oops! The page you're looking for seems to have wandered off
                into the digital void. Don't worry, we'll help you get back on
                track.
              </p>
            </div>

            {/* Animated icon */}
            <div className="mb-8 flex justify-center">
              <div className="relative">
                <svg
                  className="w-32 h-32 animate-bounce"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z"
                    stroke={theme.colors.primary[400]}
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <div
                  className="absolute inset-0 w-32 h-32 rounded-full blur-xl opacity-50"
                  style={{
                    background: `radial-gradient(circle, ${theme.colors.primary[500]} 0%, transparent 70%)`,
                  }}
                />
              </div>
            </div>

            {/* Action buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <GlassButton
                variant="primary"
                size="lg"
                onClick={() => navigate("/")}
              >
                <span className="flex items-center gap-2">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                    />
                  </svg>
                  Go Home
                </span>
              </GlassButton>

              <GlassButton
                variant="glass"
                size="lg"
                onClick={() => navigate(-1)}
              >
                <span className="flex items-center gap-2">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 19l-7-7m0 0l7-7m-7 7h18"
                    />
                  </svg>
                  Go Back
                </span>
              </GlassButton>
            </div>

            {/* Additional help text */}
            <div
              className="mt-8 pt-8 border-t"
              style={{ borderColor: theme.colors.primary[800] }}
            >
              <p
                className="text-sm"
                style={{ color: theme.colors.text.tertiary }}
              >
                If you believe this is an error, please{" "}
                <a
                  href="mailto:support@example.com"
                  className="underline hover:no-underline transition-all"
                  style={{ color: theme.colors.primary[400] }}
                >
                  contact support
                </a>
              </p>
            </div>
          </GlassCard>
        </div>
      </Container>
    </div>
  );
};

export default NotFound;
