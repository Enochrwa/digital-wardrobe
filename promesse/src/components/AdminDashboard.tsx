
import React, { useState } from 'react';
import { Users, TrendingUp, ShoppingBag, Star, BarChart3, Settings, UserPlus, AlertTriangle, Calendar, DollarSign, Activity, Crown, Zap, Target, Globe, Shield, Database, Cpu } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, PieChart, Pie, Cell, AreaChart, Area } from 'recharts';

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [timeRange, setTimeRange] = useState('7d');

  // Mock data for charts
  const userGrowthData = [
    { month: 'Jan', users: 1200, premium: 180, revenue: 28500 },
    { month: 'Feb', users: 1350, premium: 210, revenue: 32400 },
    { month: 'Mar', users: 1500, premium: 245, revenue: 38200 },
    { month: 'Apr', users: 1680, premium: 280, revenue: 42800 },
    { month: 'May', users: 1850, premium: 320, revenue: 48600 },
    { month: 'Jun', users: 2100, premium: 375, revenue: 56200 }
  ];

  const deviceData = [
    { name: 'Mobile', value: 65, color: '#8B5CF6' },
    { name: 'Desktop', value: 30, color: '#06B6D4' },
    { name: 'Tablet', value: 5, color: '#8B5CF6' }
  ];

  const regionData = [
    { region: 'North America', users: 850, growth: 12 },
    { region: 'Europe', users: 650, growth: 18 },
    { region: 'Asia Pacific', users: 420, growth: 25 },
    { region: 'Latin America', users: 180, growth: 35 }
  ];

  const realtimeData = [
    { time: '09:00', activeUsers: 245, outfitsCreated: 12, revenue: 890 },
    { time: '10:00', activeUsers: 320, outfitsCreated: 18, revenue: 1240 },
    { time: '11:00', activeUsers: 410, outfitsCreated: 25, revenue: 1650 },
    { time: '12:00', activeUsers: 485, outfitsCreated: 32, revenue: 2100 },
    { time: '13:00', activeUsers: 520, outfitsCreated: 38, revenue: 2450 },
    { time: '14:00', activeUsers: 465, outfitsCreated: 35, revenue: 2180 }
  ];

  const topFeatures = [
    { feature: 'AI Outfit Analysis', usage: 85, trend: '+12%' },
    { feature: 'Weekly Planning', usage: 72, trend: '+8%' },
    { feature: 'Style Communities', usage: 68, trend: '+15%' },
    { feature: 'Wardrobe Management', usage: 94, trend: '+5%' },
    { feature: 'Fashion Challenges', usage: 56, trend: '+22%' }
  ];

  const systemHealth = {
    apiLatency: '125ms',
    uptime: '99.97%',
    errorRate: '0.02%',
    throughput: '2.4k req/min'
  };

  const renderOverview = () => (
    <div className="space-y-6">
      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="bg-gradient-to-r from-blue-500 to-blue-600 text-white">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-blue-100 text-sm">Total Users</p>
                <p className="text-3xl font-bold">2,847</p>
                <p className="text-blue-200 text-sm mt-1">+12% from last month</p>
              </div>
              <Users size={32} className="text-blue-200" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-r from-green-500 to-green-600 text-white">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-green-100 text-sm">Monthly Revenue</p>
                <p className="text-3xl font-bold">$56.2K</p>
                <p className="text-green-200 text-sm mt-1">+18% from last month</p>
              </div>
              <DollarSign size={32} className="text-green-200" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-r from-purple-500 to-purple-600 text-white">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-purple-100 text-sm">Premium Users</p>
                <p className="text-3xl font-bold">375</p>
                <p className="text-purple-200 text-sm mt-1">+25% conversion rate</p>
              </div>
              <Crown size={32} className="text-purple-200" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-r from-orange-500 to-orange-600 text-white">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-orange-100 text-sm">Outfits Created</p>
                <p className="text-3xl font-bold">12,458</p>
                <p className="text-orange-200 text-sm mt-1">+32% this week</p>
              </div>
              <ShoppingBag size={32} className="text-orange-200" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* User Growth Chart */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp size={20} />
              User Growth & Revenue
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={userGrowthData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Area type="monotone" dataKey="users" stackId="1" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
                <Area type="monotone" dataKey="premium" stackId="1" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.6} />
              </AreaChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Device Distribution */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BarChart3 size={20} />
              Device Distribution
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={deviceData}
                  cx="50%"
                  cy="50%"
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                  label={({ name, value }) => `${name}: ${value}%`}
                >
                  {deviceData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Real-time Activity */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Activity size={20} />
            Real-time Activity
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={realtimeData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="time" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="activeUsers" stroke="#8884d8" strokeWidth={2} />
              <Line type="monotone" dataKey="outfitsCreated" stroke="#82ca9d" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );

  const renderAnalytics = () => (
    <div className="space-y-6">
      {/* Time Range Selector */}
      <div className="flex gap-2 mb-6">
        {['24h', '7d', '30d', '90d'].map((range) => (
          <Button
            key={range}
            variant={timeRange === range ? 'default' : 'outline'}
            size="sm"
            onClick={() => setTimeRange(range)}
          >
            {range}
          </Button>
        ))}
      </div>

      {/* Regional Performance */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Globe size={20} />
            Regional Performance
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {regionData.map((region, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <div>
                  <h4 className="font-semibold">{region.region}</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{region.users} users</p>
                </div>
                <div className="text-right">
                  <div className="text-green-600 font-semibold">+{region.growth}%</div>
                  <div className="text-xs text-gray-500">growth</div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Feature Usage */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Target size={20} />
            Feature Usage Analytics
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {topFeatures.map((feature, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="font-medium">{feature.feature}</span>
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-green-600">{feature.trend}</span>
                    <span className="text-sm text-gray-600">{feature.usage}%</span>
                  </div>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full transition-all duration-500"
                    style={{ width: `${feature.usage}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );

  const renderSystemHealth = () => (
    <div className="space-y-6">
      {/* System Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-green-100 dark:bg-green-900/20 rounded-lg">
                <Zap className="text-green-600" size={20} />
              </div>
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400">API Latency</p>
                <p className="text-xl font-bold">{systemHealth.apiLatency}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-blue-100 dark:bg-blue-900/20 rounded-lg">
                <Shield className="text-blue-600" size={20} />
              </div>
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400">Uptime</p>
                <p className="text-xl font-bold">{systemHealth.uptime}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-red-100 dark:bg-red-900/20 rounded-lg">
                <AlertTriangle className="text-red-600" size={20} />
              </div>
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400">Error Rate</p>
                <p className="text-xl font-bold">{systemHealth.errorRate}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-purple-100 dark:bg-purple-900/20 rounded-lg">
                <Cpu className="text-purple-600" size={20} />
              </div>
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400">Throughput</p>
                <p className="text-xl font-bold">{systemHealth.throughput}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* System Status */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Database size={20} />
            System Status
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="font-medium">API Services</span>
              </div>
              <span className="text-green-600 font-semibold">Operational</span>
            </div>
            
            <div className="flex items-center justify-between p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="font-medium">Database</span>
              </div>
              <span className="text-green-600 font-semibold">Operational</span>
            </div>
            
            <div className="flex items-center justify-between p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                <span className="font-medium">AI Processing</span>
              </div>
              <span className="text-purple-600 font-semibold">High Load</span>
            </div>
            
            <div className="flex items-center justify-between p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="font-medium">Storage</span>
              </div>
              <span className="text-green-600 font-semibold">Operational</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );

  const tabs = [
    { id: 'overview', label: 'Overview', icon: BarChart3 },
    { id: 'analytics', label: 'Analytics', icon: TrendingUp },
    { id: 'system', label: 'System Health', icon: Shield },
    { id: 'settings', label: 'Settings', icon: Settings }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 dark:from-gray-900 dark:via-blue-900 dark:to-indigo-900 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Admin Dashboard
              </h1>
              <p className="text-gray-600 dark:text-gray-300 mt-2">
                Monitor and manage your fashion platform
              </p>
            </div>
            <div className="flex gap-3">
              <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700">
                <UserPlus size={20} className="mr-2" />
                Add User
              </Button>
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex gap-2 mb-8 bg-white/50 dark:bg-gray-800/50 rounded-xl p-2 backdrop-blur-sm">
          {tabs.map((tab) => {
            const IconComponent = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-lg transition-all ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg'
                    : 'text-gray-600 dark:text-gray-300 hover:bg-white/70 dark:hover:bg-gray-700/70'
                }`}
              >
                <IconComponent size={18} />
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Content */}
        <div className="animate-fade-in">
          {activeTab === 'overview' && renderOverview()}
          {activeTab === 'analytics' && renderAnalytics()}
          {activeTab === 'system' && renderSystemHealth()}
          {activeTab === 'settings' && (
            <Card>
              <CardHeader>
                <CardTitle>System Settings</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-400">
                  Advanced system configuration options will be available here.
                </p>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
