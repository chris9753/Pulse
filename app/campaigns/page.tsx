"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { ArrowUpRight, TrendingUp, Mail, Send, Archive, BarChart3 } from "lucide-react"
import Link from "next/link"
import { useCampaigns } from "@/hooks/use-campaigns"
import { Skeleton } from "@/components/ui/skeleton"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { useToast } from "@/hooks/use-toast"
import { GrSend } from "react-icons/gr";
import { PiMailboxDuotone } from "react-icons/pi";

export default function CampaignsPage() {
  const { campaigns, loading, error, deleteCampaign } = useCampaigns()
  const [deletingId, setDeletingId] = useState<number | null>(null)
  const { toast } = useToast()

  const handleDelete = async (id: number) => {
    setDeletingId(id)
    try {
      await deleteCampaign(id)
    } catch (err) {
      // Error handling is done in the hook
    } finally {
      setDeletingId(null)
    }
  }

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "sent":
        return <Badge className="bg-green-100 text-green-700">Sent</Badge>
      case "scheduled":
        return <Badge variant="secondary" className="bg-blue-100 text-blue-800">Scheduled</Badge>
      case "draft":
      default:
        return <Badge variant="secondary" className="bg-muted text-foreground">Draft</Badge>
    }
  }

  if (loading) {
    return (
      <div className="max-w-4xl mx-auto space-y-16 py-8 px-6">
        <div className="space-y-4">
          <Skeleton className="h-10 w-48" />
          <Skeleton className="h-6 w-96" />
          <div className="flex items-center gap-4 pt-4">
            <Skeleton className="h-10 w-32" />
            <Skeleton className="h-4 w-48" />
          </div>
        </div>

        <div className="space-y-8">
          <Skeleton className="h-4 w-24" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="space-y-2">
                <Skeleton className="h-8 w-20" />
                <Skeleton className="h-4 w-32" />
                <Skeleton className="h-4 w-40" />
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-8">
          <Skeleton className="h-4 w-24" />
          <div className="space-y-6">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="flex items-center justify-between py-6">
                <div className="space-y-2">
                  <Skeleton className="h-6 w-64" />
                  <Skeleton className="h-4 w-48" />
                </div>
                <div className="flex items-center gap-8">
                  <Skeleton className="h-6 w-16" />
                  <Skeleton className="h-6 w-16" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }

  const draftCampaigns = campaigns.filter((c) => c.status === "draft")
  const sentCampaigns = campaigns.filter((c) => c.status === "sent")

  return (
    <div className="max-w-4xl mx-auto space-y-16 py-8 px-6">
      <div className="space-y-4">
        <h1 className="text-4xl font-medium tracking-tight">Campaigns</h1>
        <p className="text-lg text-muted-foreground max-w-2xl">
          Create, manage, and track your Pulse campaigns. Monitor performance metrics and optimize your email
          marketing strategy.
        </p>

        <div className="flex items-center gap-4 pt-4">
          <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-6">
            <Link href="/campaigns/new">
              New Campaign
              <ArrowUpRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <span className="text-sm text-muted-foreground">{campaigns.length} campaigns this month</span>
          </div>
        </div>
      </div>

      {error && (
        <Alert variant="destructive">
          <AlertDescription>
            {error}
          </AlertDescription>
        </Alert>
      )}

      {/* Quick Stats */}
      <div className="space-y-8">
        <h2 className="text-sm font-medium text-muted-foreground uppercase tracking-wider">PERFORMANCE</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-2">
            <div className="text-3xl font-medium">27.2%</div>
            <div className="text-muted-foreground">Average Open Rate</div>
            <div className="flex items-center gap-1 text-sm">
              <TrendingUp className="h-3 w-3 text-green-600" />
              <span className="text-green-600">+2.4%</span>
              <span className="text-muted-foreground">from last month</span>
            </div>
          </div>

          <div className="space-y-2">
            <div className="text-3xl font-medium">3.9%</div>
            <div className="text-muted-foreground">Average Click Rate</div>
            <div className="flex items-center gap-1 text-sm">
              <TrendingUp className="h-3 w-3 text-green-600" />
              <span className="text-green-600">+0.7%</span>
              <span className="text-muted-foreground">from last month</span>
            </div>
          </div>

          <div className="space-y-2">
            <div className="text-3xl font-medium">$8,730</div>
            <div className="text-muted-foreground">Total Revenue</div>
            <div className="flex items-center gap-1 text-sm">
              <TrendingUp className="h-3 w-3 text-green-600" />
              <span className="text-green-600">+18.2%</span>
              <span className="text-muted-foreground">from last month</span>
            </div>
          </div>
        </div>
      </div>

      {/* Campaigns Tabs */}
      <div className="space-y-8">
        <h2 className="text-sm font-medium text-muted-foreground uppercase tracking-wider">CAMPAIGNS</h2>

        <Tabs defaultValue="all" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4 max-w-lg bg-transparent p-0 h-auto">
            <TabsTrigger
              value="all"
              className="flex items-center gap-2 px-4 py-2 border border-border rounded-xl data-[state=active]:border-transparent data-[state=active]:bg-gradient-to-r data-[state=active]:from-violet-500/90 data-[state=active]:via-indigo-500/90 data-[state=active]:to-blue-500/90 data-[state=active]:text-white data-[state=active]:shadow-md data-[state=active]:shadow-indigo-500/20 bg-white/[0.03]"
            >
              <Mail className="h-4 w-4" />
              All
            </TabsTrigger>
            <TabsTrigger
              value="sent"
              className="flex items-center gap-2 px-4 py-2 border border-border rounded-xl data-[state=active]:border-transparent data-[state=active]:bg-gradient-to-r data-[state=active]:from-violet-500/90 data-[state=active]:via-indigo-500/90 data-[state=active]:to-blue-500/90 data-[state=active]:text-white data-[state=active]:shadow-md data-[state=active]:shadow-indigo-500/20 bg-white/[0.03] ml-2"
            >
              <GrSend className="h-4 w-4" />
              Sent
            </TabsTrigger>
            <TabsTrigger
              value="drafts"
              className="flex items-center gap-2 px-4 py-2 border border-border rounded-xl data-[state=active]:border-transparent data-[state=active]:bg-gradient-to-r data-[state=active]:from-violet-500/90 data-[state=active]:via-indigo-500/90 data-[state=active]:to-blue-500/90 data-[state=active]:text-white data-[state=active]:shadow-md data-[state=active]:shadow-indigo-500/20 bg-white/[0.03] ml-2"
            >
              <Archive className="h-4 w-4" />
              Drafts
            </TabsTrigger>
            <TabsTrigger
              value="analytics"
              className="flex items-center gap-2 px-4 py-2 border border-border rounded-xl data-[state=active]:border-transparent data-[state=active]:bg-gradient-to-r data-[state=active]:from-violet-500/90 data-[state=active]:via-indigo-500/90 data-[state=active]:to-blue-500/90 data-[state=active]:text-white data-[state=active]:shadow-md data-[state=active]:shadow-indigo-500/20 bg-white/[0.03] ml-2"
            >
              <BarChart3 className="h-4 w-4" />
              Analytics
            </TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="space-y-6">
            {campaigns.length === 0 ? (
              <div className="text-center py-12">
                <PiMailboxDuotone className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-lg font-medium text-foreground mb-2">No campaigns</h3>
                <p className="text-muted-foreground">Create your first campaign to get started</p>
              </div>
            ) : (
              campaigns.map((campaign) => (
                <div
                  key={campaign.id}
                  className="flex items-center justify-between py-6 border-b border-border last:border-b-0"
                >
                  <div className="space-y-2">
                    <div className="font-medium text-lg">{campaign.title}</div>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      {getStatusBadge(campaign.status)}
                      {campaign.sentDate && (
                        <span>
                          Sent{" "}
                          {new Date(campaign.sentDate).toLocaleDateString("en-US", {
                            month: "short",
                            day: "numeric",
                            year: "numeric",
                          })}
                        </span>
                      )}
                      {campaign.subscribers && <span>{campaign.subscribers.toLocaleString()} recipients</span>}
                    </div>
                  </div>

                  <div className="flex items-center gap-8 text-sm">
                    {campaign.openRate && (
                      <div className="text-right">
                        <div className="font-medium text-lg">{campaign.openRate}%</div>
                        <div className="text-muted-foreground">Opens</div>
                      </div>
                    )}
                    {campaign.clickRate && (
                      <div className="text-right">
                        <div className="font-medium text-lg">{campaign.clickRate}%</div>
                        <div className="text-muted-foreground">Clicks</div>
                      </div>
                    )}
                    {!campaign.openRate && !campaign.clickRate && <div className="text-muted-foreground">Draft</div>}
                  </div>
                </div>
              ))
            )}
          </TabsContent>

          <TabsContent value="sent" className="space-y-6">
            {sentCampaigns.length > 0 ? (
              sentCampaigns.map((campaign) => (
                <div
                  key={campaign.id}
                  className="flex items-center justify-between py-6 border-b border-border last:border-b-0"
                >
                  <div className="space-y-2">
                    <div className="font-medium text-lg">{campaign.title}</div>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <Badge className="bg-green-100 text-green-700">sent</Badge>
                      <span>
                        Sent{" "}
                        {new Date(campaign.sentDate!).toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                          year: "numeric",
                        })}
                      </span>
                      <span>{campaign.subscribers!.toLocaleString()} recipients</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-8 text-sm">
                    <div className="text-right">
                      <div className="font-medium text-lg">{campaign.openRate}%</div>
                      <div className="text-muted-foreground">Opens</div>
                    </div>
                    <div className="text-right">
                      <div className="font-medium text-lg">{campaign.clickRate}%</div>
                      <div className="text-muted-foreground">Clicks</div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center py-12">
                <GrSend className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-lg font-medium text-foreground mb-2">No sent campaigns</h3>
                <p className="text-muted-foreground">Your sent campaigns will appear here</p>
              </div>
            )}
          </TabsContent>

          <TabsContent value="drafts" className="space-y-6">
            {draftCampaigns.length > 0 ? (
              draftCampaigns.map((campaign) => (
                <div
                  key={campaign.id}
                  className="flex items-center justify-between py-6 border-b border-border last:border-b-0"
                >
                  <div className="space-y-2">
                    <div className="font-medium text-lg">{campaign.title}</div>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <Badge variant="secondary">draft</Badge>
                      <span>Not sent yet</span>
                    </div>
                  </div>
                  <div className="text-muted-foreground">Draft</div>
                </div>
              ))
            ) : (
              <div className="text-center py-12">
                <Archive className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-lg font-medium text-foreground mb-2">No drafts</h3>
                <p className="text-muted-foreground">All your campaigns have been sent</p>
              </div>
            )}
          </TabsContent>

          <TabsContent value="analytics" className="space-y-6">
            <div className="text-center py-12">
              <BarChart3 className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-lg font-medium text-foreground mb-2">Campaign Analytics</h3>
              <p className="text-muted-foreground">Detailed performance metrics for your campaigns</p>
              <Button asChild className="mt-4 bg-primary text-primary-foreground hover:bg-primary/90">
                <Link href="/analytics">View Full Analytics</Link>
              </Button>
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {/* Footer */}
      <div className="pt-8 border-t border-border">
        <div className="text-sm text-muted-foreground">
          Last updated:{" "}
          {new Date().toLocaleTimeString("en-US", {
            hour: "2-digit",
            minute: "2-digit",
            timeZoneName: "short",
          })}
        </div>
      </div>
    </div>
  )
}
