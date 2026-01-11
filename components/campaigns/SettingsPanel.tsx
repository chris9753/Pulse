"use client"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export function SettingsPanel() {
  return (
    <div className="space-y-8">
      <h2 className="text-sm font-medium text-muted-foreground uppercase tracking-wider">CAMPAIGN SETTINGS</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div className="space-y-2">
            <Label className="text-sm font-medium">Campaign Priority</Label>
            <Select defaultValue="normal">
              <SelectTrigger className="border-0 bg-muted focus-visible:ring-0 focus-visible:ring-offset-0">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="low">Low</SelectItem>
                <SelectItem value="normal">Normal</SelectItem>
                <SelectItem value="high">High</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label className="text-sm font-medium">Tracking</Label>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm">Track opens</span>
                <input type="checkbox" defaultChecked className="rounded" />
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Track clicks</span>
                <input type="checkbox" defaultChecked className="rounded" />
              </div>
            </div>
          </div>
        </div>
        <div className="space-y-6">
          <div className="space-y-2">
            <Label className="text-sm font-medium">Schedule</Label>
            <Select defaultValue="now">
              <SelectTrigger className="border-0 bg-muted focus-visible:ring-0 focus-visible:ring-offset-0">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="now">Send now</SelectItem>
                <SelectItem value="schedule">Schedule for later</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label className="text-sm font-medium">Tags</Label>
            <Input placeholder="Add tags (comma separated)" className="border-0 bg-muted focus-visible:ring-0 focus-visible:ring-offset-0" />
            <p className="text-sm text-muted-foreground">Help organize your campaigns</p>
          </div>
        </div>
      </div>
    </div>
  )
}


