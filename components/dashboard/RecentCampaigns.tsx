"use client"

interface RecentCampaign {
  id: number
  title: string
  date: string | null
  status: string
  openRate: number | null | undefined
}

export function RecentCampaigns({ campaigns }: { campaigns: RecentCampaign[] }) {
  if (campaigns.length === 0) {
    return (
      <div className="gradient-card py-10 text-center text-muted-foreground">
        No campaigns yet. Create your first broadcast to see activity here.
      </div>
    )
  }

  return (
    <div className="space-y-3">
      {campaigns.map((campaign) => (
        <div
          key={campaign.id}
          className="flex items-center justify-between rounded-xl border border-white/[0.06] bg-white/[0.03] px-5 py-4 transition-colors hover:bg-white/[0.05]"
        >
          <div className="space-y-1">
            <div className="font-medium">{campaign.title}</div>
            <div className="text-sm text-muted-foreground">
              {campaign.date ? new Date(campaign.date).toLocaleDateString() : "—"}
            </div>
          </div>
          <div className="space-y-1 text-right">
            <div className="text-sm font-medium capitalize text-indigo-300/90">{campaign.status}</div>
            {campaign.openRate != null && (
              <div className="text-sm text-muted-foreground">{campaign.openRate}% open rate</div>
            )}
          </div>
        </div>
      ))}
    </div>
  )
}
