import React, { ComponentProps, ComponentType, ElementType } from "react";
import { Sidebar } from "@/components/ui/sidebar";
import { LucideIcon } from "lucide-react";

// ============================================================================
// SIDEBAR INTERFACES
// ============================================================================

export interface NavMainItem {
  title: string;
  url: string;
  icon: LucideIcon;
  isActive?: boolean;
  items?: NavSubItem[];
}

export interface NavSubItem {
  title: string
  url: string
}

export interface UserProps {
  name: string;
  email: string;
  avatar: string;
  // name?: string | null;
  // email?: string | null;
  // avatar?: string | null;
}

export interface AppSidebarUserProps {
  user?: any | null;
  type?: "sidebar" | "navbar";
  size?: "icon" | "sm" | "md" | "lg";
  side?: "top" | "bottom" | "left" | "right";
  align?: "start" | "center" | "end";
}

export interface SidebarProps {
  user: UserProps
  navMain: NavMainItem[]
  navSecondary: NavMainItem[]
  projects: ProjectProps[]
  teams?: TeamProps[]
}

export interface AppSidebarProps extends React.ComponentProps<typeof Sidebar> {
  data: SidebarProps
}

export interface AppSidebarPropsX extends ComponentProps<typeof Sidebar> {
  sidebar: {
    role: string;
    navMain: NavMainItem[];
    projects: { name: string; url: string; icon: LucideIcon }[];
    // user: { name: string; email: string; avatar: string };
  };
  global: {
    name: string;
    description: string;
  };
  user?: any | null;
  // user: AppSidebarUser;
}

export interface ProjectProps {
  name: string
  url: string
  icon: LucideIcon
}

export interface TeamProps {
  name: string
  logo: React.ElementType
  plan: string
}

export interface TeamSwitcherProps {
  teams: TeamProps[];
}

// ============================================================================
// SIDEBAR INTERFACES
// ============================================================================

export interface StatsBoxProps {
  title: string
  description: string
  icon: LucideIcon
  color?: string
  stats: string | number
}

export interface BadgeIconProps {
  color?: string
  icon: LucideIcon
}
