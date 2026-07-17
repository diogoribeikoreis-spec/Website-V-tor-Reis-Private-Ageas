import React from 'react';
import {
  Heart,
  Home,
  Shield,
  Activity,
  TrendingUp,
  Car,
  Users,
  ShieldAlert,
  Building,
  Check,
  X,
  ChevronRight,
  Info,
  Phone,
  Mail,
  ArrowRight,
  Lock,
  Building2,
  UserCheck,
  Award,
  AlertTriangle,
  Menu,
  MapPin,
  Calendar,
  DollarSign
} from 'lucide-react';

interface DynamicIconProps {
  name: string;
  className?: string;
  size?: number;
}

export const DynamicIcon: React.FC<DynamicIconProps> = ({ name, className = '', size = 24 }) => {
  switch (name) {
    case 'Heart':
      return <Heart className={className} size={size} />;
    case 'Home':
      return <Home className={className} size={size} />;
    case 'Shield':
      return <Shield className={className} size={size} />;
    case 'Activity':
      return <Activity className={className} size={size} />;
    case 'TrendingUp':
      return <TrendingUp className={className} size={size} />;
    case 'Car':
      return <Car className={className} size={size} />;
    case 'Users':
      return <Users className={className} size={size} />;
    case 'ShieldAlert':
      return <ShieldAlert className={className} size={size} />;
    case 'Building':
      return <Building className={className} size={size} />;
    case 'Check':
      return <Check className={className} size={size} />;
    case 'X':
      return <X className={className} size={size} />;
    case 'ChevronRight':
      return <ChevronRight className={className} size={size} />;
    case 'Info':
      return <Info className={className} size={size} />;
    case 'Phone':
      return <Phone className={className} size={size} />;
    case 'Mail':
      return <Mail className={className} size={size} />;
    case 'ArrowRight':
      return <ArrowRight className={className} size={size} />;
    case 'Lock':
      return <Lock className={className} size={size} />;
    case 'Building2':
      return <Building2 className={className} size={size} />;
    case 'UserCheck':
      return <UserCheck className={className} size={size} />;
    case 'Award':
      return <Award className={className} size={size} />;
    case 'AlertTriangle':
      return <AlertTriangle className={className} size={size} />;
    case 'Menu':
      return <Menu className={className} size={size} />;
    case 'MapPin':
      return <MapPin className={className} size={size} />;
    case 'Calendar':
      return <Calendar className={className} size={size} />;
    case 'DollarSign':
      return <DollarSign className={className} size={size} />;
    default:
      return <Shield className={className} size={size} />;
  }
};
