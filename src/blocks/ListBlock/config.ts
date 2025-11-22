import { Block } from 'payload';
import { Trophy } from "lucide-react";
import React from "react";

export const ListBlock: Block = {
  slug: 'listBlock', // <-- Уникальный слаг для блока
  labels: {
    singular: 'List Block',
    plural: 'List Blocks',
  },
  imageURL: "http://localhost:3000/api/media/file/HeroBlock.jpg",
  fields: [
    {
      name: 'heading',
      type: 'text',
      required: true,
      label: 'Заголовок',
    },
    {
      name: "items",
      type: 'array',
      required: true,
      label: "Элементы",
      fields: [
        {
          name: 'title',
          type: 'text',
          required: true,
          label: "Заголовок элемента"
        },
        {
          name: 'description',
          type: 'text',
          required: true,
          label: "Описание элемента"
        },
        {
          name: "category",
          type: "select",
          required: true,
          options: [
            { value: "Achievement", label: "Achievement" },
            { value: "Recognition", label: "Recognition" },
            { value: "Technology", label: "Technology" },
            { value: "Service", label: "Service" },
            { value: "Management", label: "Management" },
            { value: "Environmental", label: "Environmental" },
          ]
        },
        {
          name: "icon",
          type: "select",
          required: true,
          options: [
            { value: "Trophy", label: "Trophy" },
            { value: "Award", label: "Award" },
            { value: "Lightbulb", label: "Lightbulb" },
            { value: "HeartHandshake", label: "HeartHandshake" },
            { value: "Building2", label: "Building2" },
            { value: "Leaf", label: "Leaf" },
          ]
        },
        {
          name: 'link',
          type: 'text',
          required: true,
          label: "Ссылка элемента"
        }
      ]
    }
    // {
    //   name: 'title',
    //   type: 'text',
    //   required: true,
    //   label: 'Заголовок',
    // },
    // {
    //   name: 'subTitle',
    //   type: 'textarea',
    //   label: 'Подзаголовок',
    // },
    // {
    //   name: 'description',
    //   type: 'textarea',
    //   label: 'Описание',
    // },
    // {
    //   name: 'primaryButton', // <-- Название группы для первой кнопки
    //   type: 'group', // <-- Используем group
    //   label: 'Основная кнопка',
    //   fields: [
    //     {
    //       name: 'text',
    //       type: 'text',
    //       required: true, // Сделай текст обязательным для кнопки
    //       label: 'Текст кнопки',
    //     },
    //     {
    //       name: 'url',
    //       type: 'text', // Или 'url', если хочешь валидацию URL
    //       required: true, // Сделай URL обязательным для кнопки
    //       label: 'Ссылка',
    //     },
    //   ],
    // },
    // {
    //   name: 'secondaryButton', // <-- Название группы для второй кнопки
    //   type: 'group', // <-- Используем group
    //   label: 'Второстепенная кнопка',
    //   fields: [
    //     {
    //       name: 'text',
    //       type: 'text',
    //       required: true, // Сделай текст обязательным для кнопки
    //       label: 'Текст кнопки',
    //     },
    //     {
    //       name: 'url',
    //       type: 'text', // Или 'url', если хочешь валидацию URL
    //       required: true, // Сделай URL обязательным для кнопки
    //       label: 'Ссылка',
    //     },
    //   ],
    // },
    // {
    //   name: 'image',
    //   type: 'upload',
    //   relationTo: 'media',
    //   required: true,
    // }
  ],
};
