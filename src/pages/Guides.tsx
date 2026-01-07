import Navigation from '@/components/Navigation';
import AdBlock from '@/components/AdBlock';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

export default function Guides() {
  const guides = [
    {
      title: 'Как начать работать на фрилансе с нуля',
      category: 'Для новичков',
      difficulty: 'Легко',
      time: '30 мин',
      steps: 8,
      icon: 'BookOpen',
      views: 15420,
    },
    {
      title: 'Создание YouTube канала: от идеи до монетизации',
      category: 'Контент',
      difficulty: 'Средне',
      time: '45 мин',
      steps: 12,
      icon: 'Video',
      views: 12350,
    },
    {
      title: 'Пассивный доход через инвестиции: пошаговый план',
      category: 'Инвестиции',
      difficulty: 'Сложно',
      time: '60 мин',
      steps: 15,
      icon: 'TrendingUp',
      views: 9870,
    },
    {
      title: 'Копирайтинг для начинающих: первые заказы за неделю',
      category: 'Для новичков',
      difficulty: 'Легко',
      time: '25 мин',
      steps: 6,
      icon: 'FileText',
      views: 18200,
    },
    {
      title: 'Запуск интернет-магазина без вложений',
      category: 'Бизнес',
      difficulty: 'Средне',
      time: '50 мин',
      steps: 10,
      icon: 'ShoppingCart',
      views: 11560,
    },
    {
      title: 'Telegram-канал: рост аудитории и заработок',
      category: 'Контент',
      difficulty: 'Легко',
      time: '35 мин',
      steps: 9,
      icon: 'Send',
      views: 14320,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <section className="py-12 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Пошаговые гайды</h1>
          <p className="text-lg text-muted-foreground mb-8">
            Подробные инструкции для каждого способа заработка — начните прямо сейчас
          </p>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {[
              { icon: 'Rocket', label: 'Для новичков', count: '45 гайдов' },
              { icon: 'Zap', label: 'Быстрый старт', count: '28 гайдов' },
              { icon: 'Target', label: 'Продвинутые', count: '32 гайда' },
              { icon: 'Crown', label: 'Популярные', count: '20 гайдов' },
            ].map((cat, idx) => (
              <Card key={idx} className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardContent className="pt-6 text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Icon name={cat.icon as any} size={24} className="text-primary" />
                  </div>
                  <h3 className="font-bold mb-1">{cat.label}</h3>
                  <p className="text-sm text-muted-foreground">{cat.count}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <AdBlock position="Рекламный блок на странице гайдов" size="medium" />
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {guides.map((guide, idx) => (
              <Card key={idx} className="hover:shadow-xl transition-all hover:-translate-y-1 cursor-pointer">
                <CardHeader>
                  <div className="flex items-start justify-between mb-3">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Icon name={guide.icon as any} size={24} className="text-primary" />
                    </div>
                    <Badge>{guide.category}</Badge>
                  </div>
                  <CardTitle className="text-lg leading-tight">{guide.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-3 gap-2 text-sm">
                    <div className="flex items-center gap-1">
                      <Icon name="Clock" size={14} className="text-primary" />
                      <span className="text-xs">{guide.time}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Icon name="ListChecks" size={14} className="text-primary" />
                      <span className="text-xs">{guide.steps} шагов</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Icon name="Eye" size={14} className="text-muted-foreground" />
                      <span className="text-xs">{guide.views.toLocaleString()}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <Icon
                      name={
                        guide.difficulty === 'Легко'
                          ? 'CircleCheckBig'
                          : guide.difficulty === 'Средне'
                            ? 'Circle'
                            : 'AlertCircle'
                      }
                      size={16}
                      className={
                        guide.difficulty === 'Легко'
                          ? 'text-green-500'
                          : guide.difficulty === 'Средне'
                            ? 'text-yellow-500'
                            : 'text-orange-500'
                      }
                    />
                    <span className="text-sm">Сложность: {guide.difficulty}</span>
                  </div>

                  <Button className="w-full gap-2">
                    Открыть гайд
                    <Icon name="ArrowRight" size={16} />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button size="lg" variant="outline">
              Показать все гайды
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <Icon name="Lightbulb" size={48} className="mx-auto mb-4" />
          <h2 className="text-3xl font-bold mb-4">Не нашли нужный гайд?</h2>
          <p className="text-lg mb-6 opacity-90">Предложите тему, и мы создадим подробную инструкцию!</p>
          <Button size="lg" variant="secondary" className="gap-2">
            <Icon name="MessageSquarePlus" size={20} />
            Предложить тему
          </Button>
        </div>
      </section>
    </div>
  );
}
