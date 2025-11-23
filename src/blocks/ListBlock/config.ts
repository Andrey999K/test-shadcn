import { Block } from 'payload';

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
    },
  ],
  interfaceName: "ListBlock"
};
