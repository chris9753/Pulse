"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

interface Props {
  testEmail: string
  setTestEmail: (v: string) => void
  disabled: boolean
  onSendTest: () => void
}

export function TestEmailPanel({ testEmail, setTestEmail, disabled, onSendTest }: Props) {
  return (
    <div className="space-y-6">
      <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wider">TEST EMAIL</h3>
      <div className="space-y-4">
        <div className="space-y-2">
          <Label className="text-sm font-medium">Test Recipients</Label>
          <Input
            placeholder="Enter email addresses"
            value={testEmail}
            onChange={(e) => setTestEmail(e.target.value)}
            className="border-0 bg-muted focus-visible:ring-0 focus-visible:ring-offset-0"
          />
          <p className="text-xs text-muted-foreground">Press Enter to add multiple recipients</p>
        </div>
        <Button onClick={onSendTest} disabled={disabled} className="w-full bg-primary hover:bg-primary/90 text-white">
          Send Test Email
        </Button>
      </div>
    </div>
  )
}


