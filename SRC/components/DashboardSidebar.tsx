import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  LayoutDashboard, FileCheck, CreditCard, BookOpen, Clock,
  Building2, MessageCircle, Settings, LogOut, ChevronLeft, ChevronRight,
} from "lucide-react";

const navItems = [
  { icon: LayoutDashboard, label: "Dashboard", path: "/dashboard" },
  { icon: FileCheck, label: "Documents", path: "/dashboard/documents" },
  { icon: CreditCard, label: "Fee Payment", path: "/dashboard/fees" },
  { icon: BookOpen, label: "Courses", path: "/dashboard/courses" },
  { icon: Clock, label: "Timetable", path: "/dashboard/timetable" },
  { icon: Building2, label: "Hostel", path: "/dashboard/hostel" },
  { icon: Settings, label: "Settings", path: "/dashboard/settings" },
];

const DashboardSidebar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation();

  return (
    <aside
      className={`flex h-screen flex-col border-r border-border bg-card/50 backdrop-blur-xl transition-all duration-300 ${
        collapsed ? "w-16" : "w-60"
      }`}
    >
      <div className="flex items-center justify-between p-4">
        {!collapsed && (
          <Link to="/" className="gradient-text text-lg font-bold">EduNOVA</Link>
        )}
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="rounded-lg p-1.5 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
        >
          {collapsed ? <ChevronRight className="h-4 w-4" /> : <ChevronLeft className="h-4 w-4" />}
        </button>
      </div>

      <nav className="flex-1 space-y-1 px-2 py-4">
        {navItems.map((item) => {
          const active = location.pathname === item.path;
          return (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm transition-all ${
                active
                  ? "bg-primary/10 text-primary font-medium"
                  : "text-muted-foreground hover:bg-muted hover:text-foreground"
              }`}
            >
              <item.icon className="h-5 w-5 shrink-0" />
              {!collapsed && <span>{item.label}</span>}
            </Link>
          );
        })}
      </nav>

      <div className="border-t border-border p-2">
        <Link
          to="/login"
          className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
        >
          <LogOut className="h-5 w-5 shrink-0" />
          {!collapsed && <span>Logout</span>}
        </Link>
      </div>
    </aside>
  );
};

export default DashboardSidebar;
