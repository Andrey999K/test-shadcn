import { Block } from 'payload';

export const HeroBlock: Block = {
  slug: 'heroBlock', // <-- Уникальный слаг для блока
  labels: {
    singular: 'Hero Block',
    plural: 'Hero Blocks',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      label: 'Заголовок',
    },
    {
      name: 'subTitle',
      type: 'textarea',
      label: 'Подзаголовок',
    },
    {
      name: 'description',
      type: 'textarea',
      label: 'Описание',
    },
    {
      name: 'primaryButton', // <-- Название группы для первой кнопки
      type: 'group', // <-- Используем group
      label: 'Основная кнопка',
      fields: [
        {
          name: 'text',
          type: 'text',
          required: true, // Сделай текст обязательным для кнопки
          label: 'Текст кнопки',
        },
        {
          name: 'url',
          type: 'text', // Или 'url', если хочешь валидацию URL
          required: true, // Сделай URL обязательным для кнопки
          label: 'Ссылка',
        },
      ],
    },
    {
      name: 'secondaryButton', // <-- Название группы для второй кнопки
      type: 'group', // <-- Используем group
      label: 'Второстепенная кнопка',
      fields: [
        {
          name: 'text',
          type: 'text',
          required: true, // Сделай текст обязательным для кнопки
          label: 'Текст кнопки',
        },
        {
          name: 'url',
          type: 'text', // Или 'url', если хочешь валидацию URL
          required: true, // Сделай URL обязательным для кнопки
          label: 'Ссылка',
        },
      ],
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      required: true,
    }
  ],
};
