"use client"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { X } from "lucide-react"

interface Props {
  title: string
  setTitle: (v: string) => void
  subject: string
  setSubject: (v: string) => void
}

export function CampaignForm({ title, setTitle, subject, setSubject }: Props) {
  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <Label htmlFor="name" className="text-sm font-medium">Campaign Name</Label>
        <Input
          id="name"
          placeholder="e.g., Weekly Newsletter #48"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border-0 bg-muted focus-visible:ring-0 focus-visible:ring-offset-0"
        />
        <p className="text-sm text-muted-foreground">Internal reference name</p>
      </div>

      <div className="space-y-2">
        <Label htmlFor="subject" className="text-sm font-medium">Email Subject</Label>
        <Input
          id="subject"
          placeholder="e.g., This week's updates and insights"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          className="border-0 bg-muted focus-visible:ring-0 focus-visible:ring-offset-0"
        />
        <p className="text-sm text-muted-foreground">What subscribers will see</p>
      </div>

      <div className="space-y-2">
        <Label htmlFor="fromAddress" className="text-sm font-medium">From Address</Label>
        <Input id="fromAddress" value="Pulse@chris.tech" disabled className="border-0 bg-muted focus-visible:ring-0 focus-visible:ring-offset-0" />
        <p className="text-sm text-muted-foreground">Sender email address</p>
      </div>

      <div className="space-y-4">
        <Label className="text-sm font-medium">Subscriber Lists</Label>
        <div className="flex flex-wrap gap-2">
          <Badge variant="secondary" className="bg-muted text-foreground hover:bg-muted px-3 py-1">
            Default list
            <button className="ml-2 hover:text-foreground">
              <X className="h-3 w-3" />
            </button>
          </Badge>
        </div>
        <Input placeholder="Add subscriber list..." className="border-0 bg-muted focus-visible:ring-0 focus-visible:ring-offset-0" />
        <p className="text-sm text-muted-foreground">Press Enter to add a list</p>
      </div>

      <div className="space-y-2">
        <Label className="text-sm font-medium">Email Format</Label>
        <Select defaultValue="rich-text">
          <SelectTrigger className="border-0 bg-muted focus-visible:ring-0 focus-visible:ring-offset-0">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="rich-text">Rich text</SelectItem>
            <SelectItem value="html">HTML</SelectItem>
            <SelectItem value="plain-text">Plain text</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  )
}


