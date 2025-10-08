import { theme } from "../../styles/theme";

const LoadingState = () => {
  return (
    <div className="flex items-center justify-center min-h-[400px]">
      <div className="text-center">
        <div
          className="w-12 h-12 border-4 border-t-transparent rounded-full animate-spin mx-auto mb-4"
          style={{
            borderColor: `${theme.colors.primary[400]} transparent transparent transparent`,
          }}
        />
        <p
          className="text-sm font-medium"
          style={{ color: theme.colors.text.secondary }}
        >
          Loading your dashboard...
        </p>
      </div>
    </div>
  );
};

export default LoadingState;
