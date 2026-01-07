import Navigation from '@/components/Navigation';
import AdBlock from '@/components/AdBlock';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

export default function News() {
  const news = [
    {
      title: 'YouTube запустил новые инструменты монетизации для малых каналов',
      category: 'Платформы',
      date: '2 часа назад',
      image: '📺',
      summary: 'Теперь монетизировать контент можно уже с 500 подписчиков',
      views: 3420,
      comments: 45,
    },
    {
      title: 'Топ-5 новых фриланс-бирж для русскоязычных специалистов',
      category: 'Обзор',
      date: '5 часов назад',
      image: '💼',
      summary: 'Альтернативы зарубежным платформам с удобным выводом средств',
      views: 2890,
      comments: 67,
    },
    {
      title: 'Изменения в налогообложении самозанятых с 2024 года',
      category: 'Законы',
      date: '1 день назад',
      image: '📊',
      summary: 'Что нужно знать фрилансерам и онлайн-предпринимателям',
      views: 5670,
      comments: 123,
    },
    {
      title: 'Telegram Premium: новые возможности для монетизации каналов',
      category: 'Платформы',
      date: '2 дня назад',
      image: '✈️',
      summary: 'Обзор инструментов для создателей контента',
      views: 4230,
      comments: 89,
    },
    {
      title: 'Dropshipping в 2024: что изменилось и как адаптироваться',
      category: 'Бизнес',
      date: '3 дня назад',
      image: '📦',
      summary: 'Актуальные стратегии и новые ниши для заработка',
      views: 6120,
      comments: 156,
    },
    {
      title: 'Искусственный интеллект в онлайн-заработке: возможности и риски',
      category: 'Тренды',
      date: '4 дня назад',
      image: '🤖',
      summary: 'Как ИИ меняет рынок фриланса и удаленной работы',
      views: 7890,
      comments: 201,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <section className="py-12 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Новости и обновления</h1>
          <p className="text-lg text-muted-foreground mb-8">
            Актуальная информация о трендах, изменениях на платформах и новых возможностях заработка
          </p>

          <div className="flex gap-3 flex-wrap">
            {['Все новости', 'Платформы', 'Законы', 'Тренды', 'Обзоры', 'Бизнес'].map((cat) => (
              <Badge
                key={cat}
                variant={cat === 'Все новости' ? 'default' : 'secondary'}
                className="cursor-pointer px-4 py-2"
              >
                {cat}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-6">
              {news.map((item, idx) => (
                <Card key={idx} className="hover:shadow-lg transition-shadow cursor-pointer">
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className="text-5xl">{item.image}</div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <Badge variant="secondary">{item.category}</Badge>
                          <span className="text-xs text-muted-foreground flex items-center gap-1">
                            <Icon name="Clock" size={12} />
                            {item.date}
                          </span>
                        </div>
                        <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                        <p className="text-muted-foreground mb-4">{item.summary}</p>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Icon name="Eye" size={14} />
                            {item.views.toLocaleString()}
                          </div>
                          <div className="flex items-center gap-1">
                            <Icon name="MessageSquare" size={14} />
                            {item.comments}
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              ))}

              <div className="text-center pt-4">
                <Button size="lg" variant="outline">
                  Загрузить больше новостей
                </Button>
              </div>
            </div>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <h3 className="font-bold flex items-center gap-2">
                    <Icon name="TrendingUp" size={20} className="text-primary" />
                    Популярное сейчас
                  </h3>
                </CardHeader>
                <CardContent className="space-y-4">
                  {[
                    'Новые правила монетизации',
                    'Лучшие ниши 2024',
                    'AI-инструменты для фриланса',
                    'Изменения в налогах',
                    'Топ платформ для новичков',
                  ].map((topic, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2 p-2 hover:bg-accent rounded-lg cursor-pointer transition-colors"
                    >
                      <div className="w-6 h-6 bg-primary/10 rounded flex items-center justify-center text-xs font-bold text-primary">
                        {idx + 1}
                      </div>
                      <span className="text-sm">{topic}</span>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <AdBlock position="Боковой рекламный блок" size="large" />

              <Card>
                <CardHeader>
                  <h3 className="font-bold flex items-center gap-2">
                    <Icon name="Bell" size={20} className="text-primary" />
                    Подписка на рассылку
                  </h3>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Получайте важные новости и обновления прямо на почту
                  </p>
                  <Button className="w-full gap-2">
                    <Icon name="Mail" size={16} />
                    Подписаться
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
