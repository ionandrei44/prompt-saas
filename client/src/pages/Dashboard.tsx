import { Container } from "../components/layout";
import { GlassCard } from "../components/ui";
import { theme } from "../styles/theme";

const Dashboard = () => {
  return (
    <div className="min-h-screen py-20">
      <Container>
        <GlassCard padding="xl" className="text-center">
          <h1
            className="text-4xl font-bold mb-4"
            style={{ color: theme.colors.text.primary }}
          >
            Dashboard
          </h1>
          <p className="text-lg" style={{ color: theme.colors.text.secondary }}>
            Coming soon...
          </p>
        </GlassCard>
      </Container>
    </div>
  );
};

export default Dashboard;
