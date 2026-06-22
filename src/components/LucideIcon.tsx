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

export type IconType = keyof typeof iconMap | "WhatsApp";

interface LucideIconProps {
  name: IconType;
  className?: string;
  size?: number;
}

export default function LucideIcon({ name, className = "", size = 24 }: LucideIconProps) {
  if (name === "WhatsApp") {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 175.216 175.552"
        width={size}
        height={size}
        className={className}
      >
        {/* Vibrant Emerald Green squircle background */}
        <rect width="175.216" height="175.552" rx="38" fill="#00A884" />
        
        {/* Outlined White speech bubble */}
        <path 
          fill="none" 
          stroke="#ffffff" 
          strokeWidth="10" 
          strokeLinecap="round" 
          strokeLinejoin="round"
          d="M12.966 161.238 l10.439 -38.114 a73.42 73.42 0 0 1 -9.821 -36.772 c0.017 -40.556 33.021 -73.55 73.578 -73.55 c19.681 0.01 38.154 7.669 52.047 21.572 s21.537 32.383 21.53 52.037 c-0.018 40.553 -33.027 73.553 -73.578 73.553 h-0.032 c-12.313 -0.005 -24.412 -3.094 -35.159 -8.954 z"
        />
        
        {/* Solid White handset phone receiver inside speech bubble */}
        <path 
          fill="#ffffff" 
          fillRule="evenodd" 
          d="M68.772 55.603c-1.378-3.061-2.828-3.123-4.137-3.176l-3.524-.043c-1.226 0-3.218.46-4.902 2.3s-6.435 6.287-6.435 15.332 6.588 17.785 7.506 19.013 12.718 20.381 31.405 27.75c15.529 6.124 18.689 4.906 22.061 4.6s10.877-4.447 12.408-8.74 1.532-7.971 1.073-8.74-1.685-1.226-3.525-2.146-10.877-5.367-12.562-5.981-2.91-.919-4.137.921-4.746 5.979-5.819 7.206-2.144 1.381-3.984.462-7.76-2.861-14.784-9.124c-5.465-4.873-9.154-10.891-10.228-12.73s-.114-2.835.808-3.751c.825-.824 1.838-2.147 2.759-3.22s1.224-1.84 1.836-3.065.307-2.301-.153-3.22-4.032-10.011-5.666-13.647"
        />
      </svg>
    );
  }
  const IconComponent = iconMap[name as keyof typeof iconMap];
  if (!IconComponent) {
    // Fallback to Dumbbell if something unrecognized is passed
    return <Dumbbell className={className} size={size} />;
  }
  return <IconComponent className={className} size={size} />;
}
