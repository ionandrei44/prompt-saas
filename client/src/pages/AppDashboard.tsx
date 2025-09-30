import { Container, Section } from "../components/layout";
import { Button } from "@heroui/react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Lightning } from "@phosphor-icons/react";

const AppDashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Simple Header */}
      <div className="bg-white/80 backdrop-blur-md border-b border-slate-200/20 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <Lightning size={20} weight="bold" className="text-white" />
            </div>
            <span className="text-xl font-bold text-slate-900">PromptFlow</span>
          </div>
          <Button
            variant="bordered"
            startContent={<ArrowLeft size={16} />}
            onClick={() => navigate("/")}
            className="border-slate-300 text-slate-700"
          >
            Back to Home
          </Button>
        </div>
      </div>

      <Section padding="xl">
        <Container maxWidth="7xl" className="text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
              Welcome to
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {" "}
                PromptFlow
              </span>
            </h1>

            <p className="text-xl text-slate-600 mb-12 max-w-2xl mx-auto">
              Your AI prompt management dashboard is under construction. We're
              building something amazing for you!
            </p>

            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-12 border border-slate-200/50 shadow-lg">
              <h2 className="text-2xl font-bold text-slate-800 mb-6">
                Coming Soon Features
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs font-bold">✓</span>
                    </div>
                    <span className="text-slate-700">
                      Create & organize prompts
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs font-bold">✓</span>
                    </div>
                    <span className="text-slate-700">Team collaboration</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs font-bold">✓</span>
                    </div>
                    <span className="text-slate-700">
                      Multi-tool integration
                    </span>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs font-bold">✓</span>
                    </div>
                    <span className="text-slate-700">Smart workflows</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs font-bold">✓</span>
                    </div>
                    <span className="text-slate-700">
                      Performance analytics
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs font-bold">✓</span>
                    </div>
                    <span className="text-slate-700">Quick capture tools</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12">
              <p className="text-slate-500 mb-6">
                Want to be notified when we launch?
              </p>
              <Button
                size="lg"
                color="primary"
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold px-8 py-3"
              >
                Join Waitlist
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
};

export default AppDashboard;
