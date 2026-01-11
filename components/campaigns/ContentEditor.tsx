"use client"

import { Switch } from "@/components/ui/switch"
import { Code, Type } from "lucide-react"
import { HtmlCodeEditor } from "@/components/html-code-editor"
import { EmailBuilder } from "@/components/EmailBuilder"

interface Props {
  useRawHtml: boolean
  setUseRawHtml: (v: boolean) => void
  rawHtml: string
  setRawHtml: (v: string) => void
  onSaveRich: (html: string) => void
  onExportToHtml: (html: string) => void
  subject: string
  previewHtml: string
}

export function ContentEditor({ useRawHtml, setUseRawHtml, rawHtml, setRawHtml, onSaveRich, onExportToHtml, subject, previewHtml }: Props) {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-sm font-medium text-muted-foreground uppercase tracking-wider">EMAIL CONTENT</h2>
          <p className="text-muted-foreground mt-2">{useRawHtml ? "Write your HTML email content" : "Create your Pulse content"}</p>
        </div>
        <div className="flex items-center space-x-2">
          <Type className="h-4 w-4 text-muted-foreground" />
          <span className="text-sm text-muted-foreground">Rich Text</span>
          <Switch checked={useRawHtml} onCheckedChange={setUseRawHtml} />
          <Code className="h-4 w-4 text-muted-foreground" />
          <span className="text-sm text-muted-foreground">Raw HTML</span>
        </div>
      </div>

      <div className="border border-border rounded-lg">
        <div className="h-[600px] w-full">
          {useRawHtml ? (
            <HtmlCodeEditor value={rawHtml} onChange={setRawHtml} placeholder="<html><body><h1>Your HTML content here...</h1></body></html>" />
          ) : (
            <EmailBuilder onSave={onSaveRich} onExportToHtml={onExportToHtml} className="w-full h-full" storageKey="campaign-email-design" />
          )}
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wider">PREVIEW</h3>
        <div className="max-w-2xl">
          <div className="border border-border rounded-lg bg-card">
            <div className="border-b border-border p-6">
              <div className="font-medium text-lg">{subject || "Email Subject"}</div>
              <div className="text-muted-foreground text-sm mt-1">from Pulse@chris.tech</div>
            </div>
            <div className="p-6">
              {previewHtml ? (
                <div className="prose prose-sm max-w-none" dangerouslySetInnerHTML={{ __html: previewHtml }} />
              ) : (
                <p className="text-muted-foreground italic">Your email content will appear here...</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


