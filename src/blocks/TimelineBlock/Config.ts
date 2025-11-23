import { Block } from 'payload';

export const TimelineBlock: Block = {
  slug: 'timelineBlock', // <-- Уникальный слаг для блока
  labels: {
    singular: 'Timeline Block',
    plural: 'Timeline Blocks',
  },
  imageURL: "http://localhost:3000/api/media/file/TimelineBlock.jpg",
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      label: "Заголовок"
    },
    {
      name: 'data',
      type: 'array',
      required: true,
      label: "Даты",
      fields: [
        {
          name: "date",
          type: 'text',
          required: true,
          label: "Дата"
        },
        {
          name: "title",
          type: 'text',
          required: true,
          label: "Заголовок"
        },
        {
          name: "content",
          type: 'text',
          required: true,
          label: "Контент"
        },
      ]
    }
  ],
  interfaceName: "TimelineBlock"
};
