"use client"

import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { MoreHorizontal, User, Mail, Calendar, Database } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { DeleteSubscriberButton } from "./delete-subscriber-button"

interface Contact {
  id: string
  firstName?: string
  lastName?: string
  email: string
  unsubscribed: boolean
  createdAt: string
}

interface SubscribersTableProps {
  contacts: Contact[]
  onDelete: (contactId: string) => Promise<{ success: boolean; error?: string }>
  isLoading?: boolean
}

export function SubscribersTable({ contacts, onDelete, isLoading = false }: SubscribersTableProps) {
  const getContactName = (contact: Contact) => {
    const firstName = contact.firstName || ""
    const lastName = contact.lastName || ""
    const fullName = `${firstName} ${lastName}`.trim()
    return fullName || "No name"
  }

  const getStatusBadge = (contact: Contact) => {
    if (contact.unsubscribed) {
      return (
        <Badge variant="secondary" className="border-red-500/30 bg-red-500/15 text-red-300">
          Unsubscribed
        </Badge>
      )
    } else {
      return (
        <Badge variant="default" className="border-emerald-500/30 bg-emerald-500/15 text-emerald-300">
          Active
        </Badge>
      )
    }
  }

  if (isLoading) {
    return (
      <div className="space-y-4">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="flex items-center space-x-4 p-4 border rounded-lg animate-pulse">
            <div className="h-10 w-10 bg-muted rounded-full"></div>
            <div className="flex-1 space-y-2">
              <div className="h-4 bg-muted rounded w-1/4"></div>
              <div className="h-3 bg-muted rounded w-1/3"></div>
            </div>
            <div className="h-6 bg-muted rounded w-20"></div>
            <div className="h-6 bg-muted rounded w-24"></div>
            <div className="h-6 bg-muted rounded w-16"></div>
          </div>
        ))}
      </div>
    )
  }

  if (contacts.length === 0) {
    return (
      <div className="text-center py-12">
        <User className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
        <h3 className="text-lg font-medium text-foreground mb-2">No subscribers found</h3>
        <p className="text-muted-foreground">Add your first subscriber to get started.</p>
      </div>
    )
  }

  return (
    <div className="overflow-hidden rounded-2xl border border-white/[0.08] bg-card/60 shadow-lg shadow-black/10 backdrop-blur-sm">
      <Table>
        <TableHeader>
          <TableRow className="border-white/[0.06] bg-white/[0.03] hover:bg-white/[0.03]">
            <TableHead className="font-semibold text-foreground">Name</TableHead>
            <TableHead className="font-semibold text-foreground">Email</TableHead>
            <TableHead className="font-semibold text-foreground">Status</TableHead>
            <TableHead className="font-semibold text-foreground">Subscribed Date</TableHead>
            <TableHead className="font-semibold text-foreground">Source</TableHead>
            <TableHead className="w-[50px]"></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {contacts.map((contact) => (
            <TableRow key={contact.id} className="border-white/[0.04] transition-colors hover:bg-white/[0.04]">
              <TableCell>
                <div className="flex items-center space-x-3">
                  <div className="h-8 w-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <User className="h-4 w-4 text-blue-600" />
                  </div>
                                     <div>
                     <div className="font-medium text-foreground">{getContactName(contact)}</div>
                   </div>
                </div>
              </TableCell>
              <TableCell>
                <div className="flex items-center space-x-2">
                  <Mail className="h-4 w-4 text-muted-foreground" />
                  <span className="text-foreground">{contact.email}</span>
                </div>
              </TableCell>
              <TableCell>
                {getStatusBadge(contact)}
              </TableCell>
              <TableCell>
                <div className="flex items-center space-x-2">
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                  <span className="text-foreground">
                    {new Date(contact.createdAt).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    })}
                  </span>
                </div>
              </TableCell>
              <TableCell>
                <div className="flex items-center space-x-2">
                  <Database className="h-4 w-4 text-muted-foreground" />
                  <Badge variant="outline" className="text-muted-foreground border-border">
                    Resend
                  </Badge>
                </div>
              </TableCell>
              <TableCell>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-48">
                    <DropdownMenuItem className="cursor-pointer">
                      <User className="mr-2 h-4 w-4" />
                      View Profile
                    </DropdownMenuItem>
                    <DropdownMenuItem className="cursor-pointer">
                      <Mail className="mr-2 h-4 w-4" />
                      Send Email
                    </DropdownMenuItem>
                    <DropdownMenuItem className="cursor-pointer">
                      <Calendar className="mr-2 h-4 w-4" />
                      View Activity
                    </DropdownMenuItem>
                    <DropdownMenuItem className="cursor-pointer">
                      <Database className="mr-2 h-4 w-4" />
                      Export Data
                    </DropdownMenuItem>
                    <DropdownMenuItem className="p-0">
                      <DeleteSubscriberButton
                        contactId={contact.id}
                        contactName={getContactName(contact)}
                        onDelete={onDelete}
                        isLoading={isLoading}
                        variant="dropdown-item"
                      />
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
} 