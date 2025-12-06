import { useEffect, useState } from "react";
import {
  DollarSign,
  ShoppingBag,
  Users,
  Package,
  TrendingUp,
  Activity,
} from "lucide-react";

const Dashboard = () => {
  const [revenue, setRevenue] = useState(0);
  const [orders, setOrders] = useState(0);
  const [customers, setCustomers] = useState(0);
  const [productsCount, setProductsCount] = useState(0);

  useEffect(() => {
    // Animate counters
    const animateCounter = (
      setter: (value: number) => void,
      target: number,
      duration: number
    ) => {
      const steps = 60;
      const increment = target / steps;
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          setter(target);
          clearInterval(timer);
        } else {
          setter(Math.floor(current));
        }
      }, duration / steps);
    };

    animateCounter(setRevenue, 234567, 2000);
    animateCounter(setOrders, 1543, 2000);
    animateCounter(setCustomers, 8234, 2000);
    animateCounter(setProductsCount, 55, 2000);
  }, []);

  const metrics = [
    {
      title: "Total Revenue",
      value: `$${revenue.toLocaleString()}`,
      icon: DollarSign,
      change: "+12.5%",
      trend: "up",
    },
    {
      title: "Total Orders",
      value: orders.toLocaleString(),
      icon: ShoppingBag,
      change: "+8.2%",
      trend: "up",
    },
    {
      title: "Customers",
      value: customers.toLocaleString(),
      icon: Users,
      change: "+15.3%",
      trend: "up",
    },
    {
      title: "Products",
      value: productsCount,
      icon: Package,
      change: "+2",
      trend: "up",
    },
  ];

  const recentActivity = [
    { id: 1, action: "New order placed", user: "John Doe", time: "2 min ago" },
    { id: 2, action: "Product added", user: "Admin", time: "15 min ago" },
    { id: 3, action: "New customer", user: "Jane Smith", time: "1 hour ago" },
    { id: 4, action: "Order completed", user: "Mike Johnson", time: "2 hours ago" },
    { id: 5, action: "Review posted", user: "Sarah Williams", time: "3 hours ago" },
  ];

  return (
    <div className="min-h-screen pt-20">
      <div className="container mx-auto px-6 py-12">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-4xl font-bold">Dashboard</h1>
          <div className="flex items-center gap-2 glass-card px-4 py-2 rounded-lg">
            <Activity size={20} className="text-accent" />
            <span className="text-sm">Live</span>
          </div>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {metrics.map((metric, index) => (
            <div
              key={index}
              className="glass-card rounded-xl p-6 hover-lift animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-full gradient-primary flex items-center justify-center">
                  <metric.icon size={24} />
                </div>
                <span
                  className={`text-sm font-semibold ${
                    metric.trend === "up" ? "text-accent" : "text-destructive"
                  }`}
                >
                  {metric.change}
                </span>
              </div>
              <h3 className="text-sm text-muted-foreground mb-2">
                {metric.title}
              </h3>
              <p className="text-3xl font-bold gradient-text">{metric.value}</p>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Sales Chart Placeholder */}
          <div className="glass-card rounded-xl p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold">Sales Overview</h2>
              <TrendingUp className="text-accent" />
            </div>
            <div className="h-64 flex items-center justify-center border border-border rounded-lg">
              <p className="text-muted-foreground">
                Chart visualization would go here
              </p>
            </div>
          </div>

          {/* Revenue by Category */}
          <div className="glass-card rounded-xl p-6">
            <h2 className="text-2xl font-bold mb-6">Revenue by Category</h2>
            <div className="space-y-4">
              {[
                { name: "Electronics", value: 45, amount: "$105,435" },
                { name: "Fashion", value: 30, amount: "$70,290" },
                { name: "Sports", value: 15, amount: "$35,145" },
                { name: "Home", value: 10, amount: "$23,430" },
              ].map((category, index) => (
                <div key={index}>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium">{category.name}</span>
                    <span className="text-sm text-muted-foreground">
                      {category.amount}
                    </span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div
                      className="h-full gradient-primary transition-all duration-1000"
                      style={{ width: `${category.value}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="glass-card rounded-xl p-6 mt-8">
          <h2 className="text-2xl font-bold mb-6">Recent Activity</h2>
          <div className="space-y-4">
            {recentActivity.map((activity, index) => (
              <div
                key={activity.id}
                className="flex items-center gap-4 p-4 rounded-lg hover:bg-muted/50 transition-colors animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-10 h-10 rounded-full gradient-accent flex items-center justify-center flex-shrink-0">
                  <Activity size={20} />
                </div>
                <div className="flex-1">
                  <p className="font-medium">{activity.action}</p>
                  <p className="text-sm text-muted-foreground">{activity.user}</p>
                </div>
                <span className="text-sm text-muted-foreground whitespace-nowrap">
                  {activity.time}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
