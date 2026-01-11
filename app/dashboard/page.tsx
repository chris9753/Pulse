"use client"

import { ArrowUpRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useDashboardMetrics } from "@/hooks/use-dashboard-metrics"
import { OverviewCards } from "@/components/dashboard/OverviewCards"
import { RecentCampaigns } from "@/components/dashboard/RecentCampaigns"

export default function DashboardPage() {
  const { totalSubscribers, campaignsSent, recentCampaigns } = useDashboardMetrics()

  return (
    <div className="max-w-4xl mx-auto space-y-16 py-8 px-6">
      <div className="space-y-4">
        <h1 className="bg-gradient-to-r from-white via-white to-indigo-200/80 bg-clip-text text-4xl font-semibold tracking-tight text-transparent">
          Dashboard
        </h1>
        <p className="max-w-2xl text-lg text-muted-foreground">
          Welcome back to your Pulse dashboard. Here&apos;s an overview of your recent activity and key performance metrics.
        </p>
        <div className="flex items-center gap-4 pt-4">
          <Button className="rounded-full px-6">
            Create Campaign
            <ArrowUpRight className="ml-2 h-4 w-4" />
          </Button>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full" />
            <span className="text-sm text-muted-foreground">All systems operational</span>
          </div>
        </div>
      </div>

      <div className="space-y-8">
        <h2 className="text-sm font-medium text-muted-foreground uppercase tracking-wider">OVERVIEW</h2>
        <OverviewCards totalSubscribers={totalSubscribers} campaignsSent={campaignsSent} />
      </div>

      <div className="space-y-8">
        <h2 className="text-sm font-medium text-muted-foreground uppercase tracking-wider">RECENT CAMPAIGNS</h2>
        <RecentCampaigns campaigns={recentCampaigns} />
      </div>

      <div className="pt-8 border-t border-border">
        <div className="text-sm text-muted-foreground">
          Last updated:{" "}
          {new Date().toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit", timeZoneName: "short" })}
        </div>
      </div>
    </div>
  )
}
