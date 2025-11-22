import { Block } from 'payload';

export const FeatureBlock: Block = {
  slug: 'featureBlock', // <-- Уникальный слаг для блока
  labels: {
    singular: 'Feature Block',
    plural: 'Feature Blocks',
  },
  imageURL: "http://localhost:3000/api/media/file/FeatureBlock.jpg",
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      label: 'Заголовок',
    },
    {
      name: 'features',
      type: 'array',
      label: 'Элементы',
      fields: [
        {
          name: 'heading',
          type: 'text',
          required: true, // Обязательно, так как в компоненте есть значение по умолчанию, но лучше требовать
          label: 'Заголовок элемента',
        },
        {
          name: 'description',
          type: 'textarea', // textarea обычно лучше для многострочного текста
          required: true, // Обязательно, так как в компоненте есть значение по умолчанию, но лучше требовать
          label: 'Описание элемента',
        },
        {
          name: 'icon',
          type: 'select', // Используем select для выбора иконки
          required: true, // Обязательно
          label: 'Иконка элемента',
          options: [
            { label: 'Git Pull Request', value: 'GitPullRequest' },
            { label: 'Square Kanban', value: 'SquareKanban' },
            { label: 'Radio Tower', value: 'RadioTower' },
            { label: 'Wand Sparkles', value: 'WandSparkles' },
            { label: 'Layers', value: 'Layers' },
            { label: 'Battery Charging', value: 'BatteryCharging' },
            // Добавь другие иконки из lucide-react, которые хочешь использовать
          ],
        },
      ]
    },
    {
      name: "button",
      type: "group",
      label: "Текст кнопки",
      fields: [
        {
          name: 'text',
          type: 'text',
          required: true,
          label: "Текст кнопки"
        },
        {
          name: 'url',
          type: 'text', // Или 'url', если хочешь валидацию URL
          required: true, // Сделай URL обязательным для кнопки
          label: 'Ссылка',
        },
      ]
    },
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
