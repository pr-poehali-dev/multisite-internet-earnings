import { Card } from '@/components/ui/card';

interface AdBlockProps {
  position: string;
  size?: 'small' | 'medium' | 'large';
}

export default function AdBlock({ position, size = 'medium' }: AdBlockProps) {
  const heights = {
    small: 'h-24',
    medium: 'h-48',
    large: 'h-64',
  };

  return (
    <Card className={`${heights[size]} bg-muted border-2 border-dashed border-border flex items-center justify-center`}>
      <div className="text-center text-muted-foreground">
        <p className="text-sm font-medium">Рекламный блок РСЯ</p>
        <p className="text-xs mt-1">{position}</p>
      </div>
    </Card>
  );
}
