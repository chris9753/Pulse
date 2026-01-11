"use client"

import { TrendingUp } from "lucide-react"

interface Props {
  totalSubscribers: number
  campaignsSent: number
}

const metrics = [
  { key: "subscribers", label: "Total Subscribers", trend: "+12%" },
  { key: "sent", label: "Campaigns Sent", trend: "+3" },
  { key: "open", label: "Average Open Rate", trend: "+2.1%" },
  { key: "click", label: "Click Rate", trend: "+0.5%" },
] as const

export function OverviewCards({ totalSubscribers, campaignsSent }: Props) {
  const values: Record<string, string | number> = {
    subscribers: totalSubscribers.toLocaleString(),
    sent: campaignsSent,
    open: "24.8%",
    click: "3.2%",
  }

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
      {metrics.map((metric) => (
        <div key={metric.key} className="gradient-card">
          <div className="text-3xl font-semibold tracking-tight">{values[metric.key]}</div>
          <div className="mt-1 text-sm text-muted-foreground">{metric.label}</div>
          <div className="mt-3 flex items-center gap-1 text-sm">
            <TrendingUp className="h-3.5 w-3.5 text-emerald-400" />
            <span className="font-medium text-emerald-400">{metric.trend}</span>
            <span className="text-muted-foreground">this month</span>
          </div>
        </div>
      ))}
    </div>
  )
}
