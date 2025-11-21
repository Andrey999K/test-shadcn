import React from 'react';
import type { HeroBlock as HeroBlockProps } from '@/payload-types'
import { Hero47 } from "@/components/hero47";

export const HeroBlock: React.FC<HeroBlockProps> = (props) => {
  const {
    title,
    subTitle,
    description,
    primaryButton,
    secondaryButton,
    image
  } = props;

  const imageProp = {
    src: image.url,
    alt: image.alt
  };

  // Подготовим объект buttons в нужном формате для Hero47
  const buttonsForHero47 = {
    primary: primaryButton ? {
      text: primaryButton.text,
      url: primaryButton.url,
    } : undefined, // Или значения по умолчанию, если кнопка не заполнена
    secondary: secondaryButton ? {
      text: secondaryButton.text,
      url: secondaryButton.url,
    } : undefined, // Или значения по умолчанию
  };

  // Проверим, есть ли хотя бы одна кнопка, чтобы передавать объект buttons
  const buttonsProp = (buttonsForHero47.primary || buttonsForHero47.secondary) ? buttonsForHero47 : undefined;

  return (
    <Hero47
      heading={title}
      subheading={subTitle}
      description={description}
      buttons={buttonsProp}
      image={imageProp}
    />
  );
};
