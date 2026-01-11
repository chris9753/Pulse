"use client"

import Link from "next/link"
import { ArrowLeft, ArrowUpRight } from "lucide-react"
import { Button } from "@/components/ui/button"

interface Props {
  disabled: boolean
  recipientsReady: number
  onSend: () => void
}

export function NewCampaignHeader({ disabled, recipientsReady, onSend }: Props) {
  return (
    <div className="space-y-4">
      <Button variant="ghost" size="sm" asChild className="text-muted-foreground hover:text-foreground p-0">
        <Link href="/campaigns">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Campaigns
        </Link>
      </Button>

      <h1 className="text-4xl font-medium tracking-tight">New Campaign</h1>
      <p className="text-lg text-muted-foreground max-w-2xl">
        Create and send a new Pulse campaign to your subscribers. Design your content and track performance metrics.
      </p>

      <div className="flex items-center gap-4 pt-4">
        <Button onClick={onSend} disabled={disabled} className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-6">
          Send Campaign
          <ArrowUpRight className="ml-2 h-4 w-4" />
        </Button>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-green-500 rounded-full" />
          <span className="text-sm text-muted-foreground">{recipientsReady} recipients ready</span>
        </div>
      </div>
    </div>
  )
}


