import React from 'react';
import { motion } from 'motion/react';
import { 
  LayoutDashboard, 
  FileText, 
  Clock, 
  MessageSquare, 
  Calendar, 
  Shield, 
  Settings,
  Bell,
  Search,
  ChevronRight,
  User,
  LogOut
} from 'lucide-react';

export const ClientDashboard = () => {
  return (
    <div className="pt-20 min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-gray-100 hidden lg:flex flex-col sticky top-20 h-[calc(100vh-80px)]">
        <div className="p-6">
          <div className="flex items-center gap-3 mb-10">
            <div className="w-10 h-10 rounded-xl bg-black flex items-center justify-center text-white">
              <Shield size={20} />
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-widest">Client Portal</p>
              <p className="text-[10px] text-gray-400">Legal Connect v2.0</p>
            </div>
          </div>

          <nav className="space-y-1">
            {[
              { icon: LayoutDashboard, label: 'Overview', active: true },
              { icon: FileText, label: 'Documents' },
              { icon: MessageSquare, label: 'Messages' },
              { icon: Calendar, label: 'Meetings' },
              { icon: Clock, label: 'Case History' },
              { icon: Settings, label: 'Settings' }
            ].map((item, i) => (
              <button 
                key={i}
                className={`w-full flex items-center justify-between px-4 py-3 rounded-xl transition-all ${
                  item.active ? 'bg-black text-white shadow-lg shadow-black/20' : 'text-gray-500 hover:bg-gray-50'
                }`}
              >
                <div className="flex items-center gap-3">
                  <item.icon size={18} />
                  <span className="text-sm font-semibold">{item.label}</span>
                </div>
                {item.active && <ChevronRight size={14} />}
              </button>
            ))}
          </nav>
        </div>

        <div className="mt-auto p-6 border-t border-gray-100">
          <button className="w-full flex items-center gap-3 px-4 py-3 text-red-600 hover:bg-red-50 rounded-xl transition-colors">
            <LogOut size={18} />
            <span className="text-sm font-semibold">Log out</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8 lg:p-12 overflow-y-auto">
        <div className="max-w-6xl mx-auto">
          <header className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
            <div>
              <h1 className="text-3xl font-bold" style={{ fontFamily: "'Playfair Display', serif" }}>
                Welcome back, Alexander
              </h1>
              <p className="text-gray-500 text-sm">You have 3 active matters and 2 pending notifications.</p>
            </div>
            <div className="flex items-center gap-4">
              <button className="p-2 bg-white border border-gray-100 rounded-full hover:bg-gray-50 transition-colors relative">
                <Bell size={20} />
                <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white" />
              </button>
              <button className="px-6 py-3 bg-black text-white rounded-full font-bold uppercase tracking-widest text-[10px] hover:bg-gray-800 transition-colors">
                New Service Request
              </button>
            </div>
          </header>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {[
              { label: 'Active Matters', value: '03', sub: '+1 from last month', color: 'text-blue-600' },
              { label: 'Pending Invoices', value: '$4,250', sub: 'Due in 5 days', color: 'text-orange-600' },
              { label: 'Unread Messages', value: '12', sub: 'from 4 attorneys', color: 'text-green-600' }
            ].map((stat, i) => (
              <div key={i} className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 mb-2">{stat.label}</p>
                <h2 className={`text-4xl font-bold mb-1 ${stat.color}`}>{stat.value}</h2>
                <p className="text-xs text-gray-500">{stat.sub}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Active Matters */}
            <section className="bg-white rounded-3xl border border-gray-100 overflow-hidden shadow-sm">
              <div className="p-6 border-b border-gray-100 flex items-center justify-between">
                <h3 className="font-bold">Active Matters</h3>
                <button className="text-xs font-bold text-blue-600 hover:underline">View All</button>
              </div>
              <div className="divide-y divide-gray-50">
                {[
                  { title: 'Corporate Restructuring', id: 'LC-2026-001', status: 'In Progress', progress: 65 },
                  { title: 'IP Portfolio Audit', id: 'LC-2026-042', status: 'Pending Review', progress: 30 },
                  { title: 'Commercial Real Estate Acq.', id: 'LC-2025-982', status: 'Closing Stage', progress: 95 }
                ].map((matter, i) => (
                  <div key={i} className="p-6 hover:bg-gray-50 transition-colors cursor-pointer group">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h4 className="font-semibold group-hover:text-blue-600 transition-colors">{matter.title}</h4>
                        <p className="text-[10px] text-gray-400 font-bold tracking-widest">{matter.id}</p>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest ${
                        matter.status === 'Closing Stage' ? 'bg-green-50 text-green-600' : 'bg-blue-50 text-blue-600'
                      }`}>
                        {matter.status}
                      </span>
                    </div>
                    <div className="w-full bg-gray-100 h-1 rounded-full overflow-hidden">
                      <div className="bg-blue-600 h-full rounded-full" style={{ width: `${matter.progress}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Recent Activity */}
            <section className="bg-white rounded-3xl border border-gray-100 overflow-hidden shadow-sm">
              <div className="p-6 border-b border-gray-100 flex items-center justify-between">
                <h3 className="font-bold">Recent Activity</h3>
                <button className="text-xs font-bold text-blue-600 hover:underline">Full Log</button>
              </div>
              <div className="p-6 space-y-8">
                {[
                  { user: 'Sarah Thompson', action: 'uploaded a new document', target: 'NDA_Draft_v2.pdf', time: '2h ago' },
                  { user: 'Michael Chen', action: 'added a comment to', target: 'IP Audit Matter', time: '5h ago' },
                  { user: 'System', action: 'scheduled a meeting for', target: 'Tuesday at 10:00 AM', time: '1d ago' }
                ].map((activity, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-gray-100 flex-shrink-0" />
                    <div>
                      <p className="text-sm text-gray-600">
                        <span className="font-bold text-black">{activity.user}</span> {activity.action} <span className="font-semibold text-blue-600">{activity.target}</span>
                      </p>
                      <p className="text-xs text-gray-400 mt-1">{activity.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
};
