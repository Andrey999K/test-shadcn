import React from 'react';
import type { TimelineBlock as TimelineBlockProps } from '@/payload-types'
import { Timeline9 } from "@/components/timeline9";

export const TimelineBlock: React.FC<TimelineBlockProps> = (props) => {
  const { title, data } = props;

  return (
    <Timeline9 title={title} data={data} />
  );
};
