/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Service {
  id: string;
  title: string;
  description: string;
  features: string[];
  image: string;
  iconName: "Dumbbell" | "Activity" | "Flame" | "UserCheck" | "Apple" | "Music" | "Sparkles" | "Heart";
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  rating: number;
  text: string;
  date: string;
  image: string;
}

export interface MemberStory {
  id: string;
  name: string;
  duration: string;
  achievement: string;
  weightLoss?: string;
  muscleGain?: string;
  beforeImg: string;
  afterImg: string;
}

export interface GalleryItem {
  id: string;
  category: "all" | "interior" | "weight" | "cardio" | "functional" | "personal" | "members" | "events";
  title: string;
  image: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  popular?: boolean;
}

export interface FeatureDetail {
  title: string;
  description: string;
  iconName: string;
}
