// src/components/blocks/FeatureBlock.tsx
import React from 'react';
// Импортируй иконки из lucide-react
import { GitPullRequest, SquareKanban, RadioTower, WandSparkles, Layers, BatteryCharging } from 'lucide-react';
import type { FeatureBlock as FeatureBlockProps } from '@/payload-types'; // Убедись в правильном пути
import { Feature43 } from '@/components/feature43'; // Убедись в правильном пути к твоему компоненту

// Тип для иконки (опционально, если хочешь строгую типизацию)
type IconComponent = React.FC<React.SVGProps<SVGSVGElement>>;

// Маппинг строковых значений из Payload на компоненты иконок
const iconMap: Record<string, IconComponent> = {
  GitPullRequest,
  SquareKanban,
  RadioTower,
  WandSparkles,
  Layers,
  BatteryCharging,
  // Добавь другие, если добавлял в select
};

export const FeatureBlock: React.FC<FeatureBlockProps> = (props) => {

  const { title, features, buttonText, buttonUrl } = props;

  // Преобразуем features из Payload в формат, ожидаемый Feature43
  const featuresForComponent = features?.map(feature => ({
    heading: feature.heading,
    description: feature.description,
    icon: React.createElement(iconMap[feature.icon] || 'div', { className: 'size-6' }), // Рендерим иконку или заглушку
  })) || [];

  // Подготовим пропсы для Feature43
  const feature43Props = {
    title: title,
    features: featuresForComponent,
    // Передаем buttonText и buttonUrl как отдельные пропсы, если Feature43 их принимает
    // или объединим в объект buttons, если там такая структура
    // Пример, если Feature43 принимает buttonText и buttonUrl напрямую:
    buttonText: buttonText,
    buttonUrl: buttonUrl,
    // Если Feature43 ожидает объект buttons: { text, url }, используй:
    // buttons: buttonText && buttonUrl ? { text: buttonText, url: buttonUrl } : undefined
  };

  return <Feature43 {...feature43Props} />;
};
