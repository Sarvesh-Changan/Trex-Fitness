/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import {
  Dumbbell,
  Activity,
  Flame,
  UserCheck,
  Apple,
  Music,
  Sparkles,
  Heart,
  ShieldCheck,
  MapPin,
  Clock,
  Phone,
  Star,
  Tv,
  Award,
  DollarSign,
  Calendar,
  MessageSquare,
  X,
  Menu,
  ChevronLeft,
  ChevronRight,
  ArrowUp,
  Check,
  ExternalLink,
  ChevronUp,
} from "lucide-react";

const iconMap = {
  Dumbbell,
  Activity,
  Flame,
  UserCheck,
  Apple,
  Music,
  Sparkles,
  Heart,
  ShieldCheck,
  MapPin,
  Clock,
  Phone,
  Star,
  Tv,
  Award,
  DollarSign,
  Calendar,
  MessageSquare,
  X,
  Menu,
  ChevronLeft,
  ChevronRight,
  ArrowUp,
  Check,
  ExternalLink,
  ChevronUp,
};

export type IconType = keyof typeof iconMap;

interface LucideIconProps {
  name: IconType;
  className?: string;
  size?: number;
}

export default function LucideIcon({ name, className = "", size = 24 }: LucideIconProps) {
  const IconComponent = iconMap[name];
  if (!IconComponent) {
    // Fallback to Dumbbell if something unrecognized is passed
    return <Dumbbell className={className} size={size} />;
  }
  return <IconComponent className={className} size={size} />;
}
