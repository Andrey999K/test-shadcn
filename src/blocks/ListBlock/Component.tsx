import React from 'react';
import type { ListBlock as ListBlockProps } from '@/payload-types'
import { List2 } from "@/components/list2";
import { Award, Building2, HeartHandshake, Leaf, Lightbulb, Trophy } from "lucide-react";

type IconComponent = React.FC<React.SVGProps<SVGSVGElement>>;

const iconMap: Record<string, IconComponent> = {
  Trophy,
  Award,
  Lightbulb,
  HeartHandshake,
  Building2,
  Leaf,
};

export const ListBlock: React.FC<ListBlockProps> = (props) => {
  const {
    heading, items
  } = props;

  const featuresForComponent = items?.map(({ icon, title, category, description, link }) => ({
    icon: React.createElement(iconMap[icon] || 'div', { className: 'size-6' }),
    title,
    category,
    description,
    link,
  })) || [];

  const listProps = {
    heading,
    items: featuresForComponent
  }

  return (
    <List2 {...listProps} />
  );
};
