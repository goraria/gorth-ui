// "use client"
//
// import React from "react"
// import Image from "next/image"
// import Link from "next/link"
// import { ArchiveX, File, Inbox, Send, Trash2 } from "lucide-react"
//
// import { NavUser } from "@/components/dashboard/nav-user"
// // import { NavUser } from "@/app/(protected)/message/components/nav-user"
// import { Label } from "@/components/ui/label"
// import {
//   Sidebar,
//   SidebarContent,
//   SidebarFooter,
//   SidebarGroup,
//   SidebarGroupContent,
//   SidebarHeader,
//   SidebarInput,
//   SidebarMenu,
//   SidebarMenuButton,
//   SidebarMenuItem,
//   useSidebar,
// } from "@/components/element/sidebar"
// import { Button } from "@/components/ui/button"
// import { Switch } from "@/components/ui/switch"
// import { appGlobal } from "@/lib/constants"
// import { useUser } from "@/hooks/use-user"
// import { useConversationList } from "@/hooks/use-realtime-chat"
// import { UserRole } from "@/lib/interfaces"
// import {
//   ConversationItem,
//   type ConversationWithRelations,
// } from "@/components/element/message"
// import { getConversationLabel } from "@/components/element/message"
// import { useParams, useRouter } from "next/navigation"
//
// // This is sample data
// const data = {
//   user: {
//     name: "Japtor",
//     email: "japtor@gorth.org",
//     avatar: "/avatar/waddles.jpeg",
//   },
//   navMain: [
//     {
//       title: "Hộp thư đến",
//       url: "/message",
//       icon: Inbox,
//       isActive: true,
//     },
//     {
//       title: "Thư nháp",
//       url: "#",
//       icon: File,
//       isActive: false,
//     },
//     {
//       title: "Đã gửi",
//       url: "#",
//       icon: Send,
//       isActive: false,
//     },
//     {
//       title: "Thư rác",
//       url: "#",
//       icon: ArchiveX,
//       isActive: false,
//     },
//     {
//       title: "Thùng rác",
//       url: "#",
//       icon: Trash2,
//       isActive: false,
//     },
//   ],
// }
//
// export function MessSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
//   const { user } = useUser()
//   // Note: I'm using state to show active item.
//   // IRL you should use the url/router.
//   const [activeItem, setActiveItem] = React.useState(data.navMain[0])
//   const [searchQuery, setSearchQuery] = React.useState("")
//   const currentUserId = user?.id ?? ""
//   const { setOpen } = useSidebar()
//   const router = useRouter()
//   const params = useParams()
//   const rawId = params?.id as string | string[] | undefined
//   const activeConversationId = Array.isArray(rawId) ? rawId[0] : rawId
//   const {
//     conversations,
//     isLoading,
//     error,
//     refresh,
//   } = useConversationList({
//     userId: currentUserId || null,
//     role: (user?.role as UserRole | null) ?? null,
//   })
//
//   const normalizedQuery = searchQuery.trim().toLowerCase()
//   const filteredConversations = React.useMemo(() => {
//     if (!normalizedQuery) return conversations
//     return conversations.filter((conv) => {
//       const conversation = conv as ConversationWithRelations
//       return getConversationLabel(conversation, currentUserId)
//         .toLowerCase()
//         .includes(normalizedQuery)
//     })
//   }, [conversations, currentUserId, normalizedQuery])
//
//   return (
//     <Sidebar
//       collapsible="icon"
//       className="overflow-hidden *:data-[sidebar=sidebar]:flex-row"
//       {...props}
//     >
//       {/* This is the first sidebar */}
//       {/* We disable collapsible and adjust width to icon. */}
//       {/* This will make the sidebar appear as icons. */}
//       <Sidebar
//         collapsible="none"
//         className="w-[calc(var(--sidebar-width-icon)+1px)]! border-r"
//       >
//         <SidebarHeader>
//           <SidebarMenu>
//             <SidebarMenuItem>
//               <SidebarMenuButton size="default" asChild className="md:p-0">
//                 <Link href="/">
//                   {/* <div className="bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg"> */}
//                   {/* <Command className="size-4" /> */}
//                   {/* </div> */}
//                   <Image src="/logo/icon.png" alt={appGlobal.name} width={36} height={36} />
//                   <div className="grid flex-1 text-left text-sm leading-tight">
//                     <span className="truncate font-medium">{appGlobal.name}</span>
//                     <span className="truncate text-xs">Nhà hàng{/** Enterprise */}</span>
//                   </div>
//                 </Link>
//               </SidebarMenuButton>
//             </SidebarMenuItem>
//           </SidebarMenu>
//         </SidebarHeader>
//         <SidebarContent>
//           <SidebarGroup>
//             <SidebarGroupContent className="px-1.5 md:px-0">
//               <SidebarMenu>
//                 {data.navMain.map((item) => (
//                   <SidebarMenuItem key={item.title}>
//                     <SidebarMenuButton
//                       tooltip={{
//                         children: item.title,
//                         hidden: false,
//                       }}
//                       onClick={() => {
//                         setActiveItem(item)
//                         setOpen(true)
//                       }}
//                       isActive={activeItem?.title === item.title}
//                       className="px-2.5"
//                     >
//                       <item.icon />
//                       <span>{item.title}</span>
//                     </SidebarMenuButton>
//                   </SidebarMenuItem>
//                 ))}
//               </SidebarMenu>
//             </SidebarGroupContent>
//           </SidebarGroup>
//         </SidebarContent>
//         <SidebarFooter>
//           <NavUser
//             user={user}
//             type="sidebar"
//             size="icon"
//             side="right"
//             align="end"
//           />
//           {/* <NavUser/> */}
//         </SidebarFooter>
//       </Sidebar>
//
//       {/* This is the second sidebar */}
//       {/* We disable collapsible and let it fill remaining space */}
//       <Sidebar collapsible="none" className="hidden flex-1 md:flex">
//         <SidebarHeader className="gap-3.5 border-b p-4">
//           <div className="flex w-full items-center justify-between">
//             <div className="text-foreground text-base font-medium">
//               {activeItem?.title}
//             </div>
//             <Label className="flex items-center gap-2 text-sm">
//               <span>Chưa đọc</span>
//               <Switch className="shadow-none" />
//             </Label>
//           </div>
//           <SidebarInput
//             placeholder="Tìm kiếm..."
//             value={searchQuery}
//             onChange={(event) => setSearchQuery(event.target.value)}
//           />
//         </SidebarHeader>
//         <SidebarContent>
//           <SidebarGroup className="p-0">
//             <SidebarGroupContent className="flex flex-col gap-1 mt-2">
//               {isLoading && filteredConversations.length === 0 ? (
//                 <div className="p-4 text-xs text-muted-foreground">
//                   Đang tải cuộc trò chuyện...
//                 </div>
//               ) : error ? (
//                 <div className="p-4 space-y-2">
//                   <p className="text-xs text-destructive">{error}</p>
//                   <Button size="sm" variant="outline" onClick={refresh}>
//                     Thử lại
//                   </Button>
//                 </div>
//               ) : filteredConversations.length > 0 ? (
//                 filteredConversations.map((conversation) => {
//                   const conv = conversation as ConversationWithRelations
//                   return (
//                     <ConversationItem
//                       key={conv.id}
//                       conversation={conv}
//                       isActive={conv.id === activeConversationId}
//                       action={() => {
//                         router.push(`/message/${conv.id}`)
//                         setOpen(true)
//                       }}
//                       currentUserId={currentUserId}
//                     />
//                   )
//                 })
//               ) : (
//                 <div className="p-4 text-xs text-muted-foreground">
//                   Không có cuộc trò chuyện.
//                 </div>
//               )}
//             </SidebarGroupContent>
//           </SidebarGroup>
//         </SidebarContent>
//       </Sidebar>
//     </Sidebar>
//   )
// }
