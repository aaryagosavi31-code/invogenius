import DashboardSidebar from "@/components/dashboard/DashboardSidebar";
import FloatingChatbot from "@/components/dashboard/FloatingChatbot";
import { CheckCircle, Circle, Clock } from "lucide-react";

const stages = [
  { label: "Registration", status: "done" },
  { label: "Document Submission", status: "done" },
  { label: "Document Verification", status: "current" },
  { label: "Fee Payment", status: "pending" },
  { label: "Course Registration", status: "pending" },
  { label: "Hostel Allocation", status: "pending" },
  { label: "LMS Setup", status: "pending" },
  { label: "Orientation", status: "pending" },
];

const stats = [
  { label: "Onboarding Progress", value: "25%", color: "text-primary" },
  { label: "Documents Submitted", value: "3/7", color: "text-secondary" },
  { label: "Pending Actions", value: "5", color: "text-destructive" },
  { label: "Days Remaining", value: "12", color: "text-foreground" },
];

const Dashboard = () => {
  return (
    <div className="flex min-h-screen bg-background">
      <DashboardSidebar />

      <main className="flex-1 overflow-y-auto p-6 lg:p-8">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-foreground">Welcome, John 👋</h1>
          <p className="text-muted-foreground">Here's your onboarding status overview.</p>
        </div>

        {/* Stats */}
        <div className="mb-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="glass-card p-5">
              <p className="text-sm text-muted-foreground">{s.label}</p>
              <p className={`text-3xl font-bold ${s.color}`}>{s.value}</p>
            </div>
          ))}
        </div>

        {/* Progress bar */}
        <div className="mb-8 glass-card p-6">
          <h2 className="mb-4 font-semibold text-foreground">Onboarding Progress</h2>
          <div className="mb-4 h-3 w-full overflow-hidden rounded-full bg-muted">
            <div
              className="h-full rounded-full transition-all duration-1000"
              style={{
                width: "25%",
                background: "linear-gradient(90deg, hsl(253 75% 64%), hsl(231 84% 60%))",
              }}
            />
          </div>

          <div className="space-y-3">
            {stages.map((stage, i) => (
              <div key={i} className="flex items-center gap-3">
                {stage.status === "done" ? (
                  <CheckCircle className="h-5 w-5 text-secondary" />
                ) : stage.status === "current" ? (
                  <Clock className="h-5 w-5 text-primary animate-pulse" />
                ) : (
                  <Circle className="h-5 w-5 text-muted-foreground/40" />
                )}
                <span
                  className={`text-sm ${
                    stage.status === "done"
                      ? "text-muted-foreground line-through"
                      : stage.status === "current"
                      ? "text-primary font-medium"
                      : "text-muted-foreground"
                  }`}
                >
                  {stage.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </main>

      <FloatingChatbot />
    </div>
  );
};

export default Dashboard;
