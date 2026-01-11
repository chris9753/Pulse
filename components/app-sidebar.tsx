"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import Image from "next/image"
import { MdDashboardCustomize } from "react-icons/md"
import { IoIosMail } from "react-icons/io"
import { IoPeople } from "react-icons/io5"
import { FaFileAlt } from "react-icons/fa"
import { AiFillSetting } from "react-icons/ai"
import { cn } from "@/lib/utils"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

const navigation = [
  { title: "Dashboard", url: "/dashboard", icon: MdDashboardCustomize },
  { title: "Campaigns", url: "/campaigns", icon: IoIosMail },
  { title: "Subscribers", url: "/subscribers", icon: IoPeople },
  { title: "Templates", url: "/templates", icon: FaFileAlt },
  { title: "Settings", url: "/settings", icon: AiFillSetting },
]

export function AppSidebar() {
  const pathname = usePathname()

  return (
    <Sidebar
      variant="floating"
      collapsible="icon"
      className="border-none bg-transparent [&_[data-sidebar=sidebar]]:glass-panel [&_[data-sidebar=sidebar]]:border-white/[0.08] [&_[data-sidebar=sidebar]]:bg-sidebar/75"
    >
      <SidebarHeader className="px-4 py-6">
        <div className="flex items-center gap-3 rounded-2xl border border-white/[0.08] bg-gradient-to-br from-white/[0.06] to-transparent p-3 shadow-glow-sm">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500 to-indigo-600 shadow-md shadow-indigo-500/30">
            <Image src="/logo.png" alt="Chris.tech" width={32} height={32} className="h-7 w-7 rounded-lg object-cover" />
          </div>
          <div className="min-w-0 group-data-[collapsible=icon]:hidden">
            <div className="truncate text-lg font-semibold tracking-tight text-sidebar-foreground">Chris</div>
            <div className="text-xs text-muted-foreground">Dashboard</div>
          </div>
        </div>
      </SidebarHeader>
      <SidebarContent className="px-3">
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu className="gap-1">
              {navigation.map((item) => {
                const isActive = pathname === item.url
                return (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton
                      asChild
                      isActive={isActive}
                      className={cn(
                        "nav-pill h-11 px-3 text-muted-foreground hover:bg-white/[0.04] hover:text-sidebar-foreground",
                        isActive && "nav-pill-active font-medium text-sidebar-foreground",
                      )}
                    >
                      <Link href={item.url}>
                        <item.icon className="!size-5 shrink-0" />
                        <span>{item.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                )
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}
