"use client"

import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { SidebarTrigger } from "@/components/ui/sidebar"

export function Header() {
  return (
    <header className="glass-header flex h-14 shrink-0 items-center gap-4 px-5">
      <SidebarTrigger className="-ml-1 text-muted-foreground hover:text-foreground" />

      <div className="flex flex-1 items-center justify-end gap-4">
        <div className="relative max-w-sm flex-1 sm:max-w-xs md:max-w-sm">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search..."
            className="h-10 rounded-xl border-white/[0.06] bg-white/[0.04] pl-10 focus-visible:ring-1 focus-visible:ring-primary/40"
          />
        </div>

        <Avatar className="h-9 w-9 ring-2 ring-white/10 ring-offset-2 ring-offset-transparent">
          <AvatarImage src="/placeholder.svg?height=32&width=32" alt="User" />
          <AvatarFallback className="bg-gradient-to-br from-violet-500 to-indigo-600 text-xs font-medium text-white">
            JS
          </AvatarFallback>
        </Avatar>
      </div>
    </header>
  )
}
