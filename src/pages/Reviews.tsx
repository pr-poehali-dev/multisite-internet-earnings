import Navigation from '@/components/Navigation';
import AdBlock from '@/components/AdBlock';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import Icon from '@/components/ui/icon';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

export default function Reviews() {
  const reviews = [
    {
      author: 'Мария К.',
      avatar: 'МК',
      method: 'Фриланс на биржах',
      rating: 5,
      date: '2 дня назад',
      income: '45 000 ₽',
      period: '2 месяца',
      text: 'Начала с нуля, сейчас уже стабильный доход. Главное — не сдаваться на первых порах. Рекомендую начать с Kwork, там проще получить первые заказы.',
      helpful: 234,
      verified: true,
    },
    {
      author: 'Алексей П.',
      avatar: 'АП',
      method: 'YouTube канал',
      rating: 4,
      date: '5 дней назад',
      income: '28 000 ₽',
      period: '6 месяцев',
      text: 'Долгий старт, но результат того стоит. Первые деньги пришли только через 4 месяца, но сейчас рост стабильный. Важно выбрать интересную нишу.',
      helpful: 187,
      verified: true,
    },
    {
      author: 'Елена С.',
      avatar: 'ЕС',
      method: 'Копирайтинг',
      rating: 5,
      date: '1 неделю назад',
      income: '52 000 ₽',
      period: '3 месяца',
      text: 'Отличный способ для начинающих! Прошла бесплатные курсы, создала портфолио и уже через месяц были первые заказы. Доход растет каждый месяц.',
      helpful: 312,
      verified: true,
    },
    {
      author: 'Дмитрий В.',
      avatar: 'ДВ',
      method: 'Инвестиции',
      rating: 3,
      date: '2 недели назад',
      income: '15 000 ₽',
      period: '4 месяца',
      text: 'Для новичков сложно, много нужно изучать. Начинал с малых сумм, доход нестабильный. Нужно быть готовым к рискам и долгому обучению.',
      helpful: 98,
      verified: false,
    },
    {
      author: 'Ольга Н.',
      avatar: 'ОН',
      method: 'Онлайн-репетиторство',
      rating: 5,
      date: '3 недели назад',
      income: '63 000 ₽',
      period: '2 месяца',
      text: 'Имею педагогическое образование, решила попробовать онлайн. Результат превзошел ожидания! Удобный график, хороший доход, благодарные ученики.',
      helpful: 421,
      verified: true,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <section className="py-12 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Отзывы и опыт пользователей</h1>
          <p className="text-lg text-muted-foreground mb-8">
            Реальные истории людей, которые зарабатывают в интернете. Более 1200 проверенных отзывов
          </p>

          <div className="flex flex-col md:flex-row gap-4">
            <Select>
              <SelectTrigger className="md:w-64">
                <SelectValue placeholder="Способ заработка" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Все способы</SelectItem>
                <SelectItem value="freelance">Фриланс</SelectItem>
                <SelectItem value="content">Контент</SelectItem>
                <SelectItem value="trading">Инвестиции</SelectItem>
              </SelectContent>
            </Select>

            <Select>
              <SelectTrigger className="md:w-48">
                <SelectValue placeholder="Рейтинг" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Любой</SelectItem>
                <SelectItem value="5">5 звезд</SelectItem>
                <SelectItem value="4">4+ звезды</SelectItem>
                <SelectItem value="3">3+ звезды</SelectItem>
              </SelectContent>
            </Select>

            <Button className="gap-2">
              <Icon name="Plus" size={16} />
              Оставить отзыв
            </Button>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <AdBlock position="Рекламный блок на странице отзывов" size="medium" />
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-6">
              {reviews.map((review, idx) => (
                <Card key={idx} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <Avatar className="w-12 h-12">
                        <AvatarFallback className="bg-primary/10 text-primary font-bold">
                          {review.avatar}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="font-bold">{review.author}</h3>
                          {review.verified && (
                            <Badge variant="secondary" className="gap-1">
                              <Icon name="BadgeCheck" size={12} />
                              Проверено
                            </Badge>
                          )}
                        </div>
                        <p className="text-sm text-muted-foreground mb-2">{review.method}</p>
                        <div className="flex items-center gap-3 mb-2">
                          <div className="flex">
                            {[...Array(5)].map((_, i) => (
                              <Icon
                                key={i}
                                name="Star"
                                size={14}
                                className={
                                  i < review.rating ? 'text-yellow-500 fill-yellow-500' : 'text-gray-300'
                                }
                              />
                            ))}
                          </div>
                          <span className="text-xs text-muted-foreground">{review.date}</span>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-2 gap-4 p-4 bg-accent/20 rounded-lg">
                      <div>
                        <p className="text-xs text-muted-foreground mb-1">Доход за период</p>
                        <p className="font-bold text-lg text-primary">{review.income}</p>
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground mb-1">Период работы</p>
                        <p className="font-bold text-lg">{review.period}</p>
                      </div>
                    </div>

                    <p className="text-sm leading-relaxed">{review.text}</p>

                    <div className="flex items-center gap-4 pt-2 border-t">
                      <Button variant="ghost" size="sm" className="gap-2">
                        <Icon name="ThumbsUp" size={16} />
                        Полезно ({review.helpful})
                      </Button>
                      <Button variant="ghost" size="sm" className="gap-2">
                        <Icon name="MessageSquare" size={16} />
                        Ответить
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}

              <div className="text-center pt-4">
                <Button size="lg" variant="outline">
                  Показать больше отзывов
                </Button>
              </div>
            </div>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <h3 className="font-bold flex items-center gap-2">
                    <Icon name="MessageSquarePlus" size={20} className="text-primary" />
                    Поделитесь опытом
                  </h3>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground">
                    Ваш отзыв поможет тысячам людей сделать правильный выбор
                  </p>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Способ заработка" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="freelance">Фриланс</SelectItem>
                      <SelectItem value="content">Контент</SelectItem>
                      <SelectItem value="trading">Инвестиции</SelectItem>
                    </SelectContent>
                  </Select>
                  <Textarea placeholder="Расскажите о своем опыте..." rows={4} />
                  <Button className="w-full gap-2">
                    <Icon name="Send" size={16} />
                    Отправить отзыв
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <h3 className="font-bold flex items-center gap-2">
                    <Icon name="TrendingUp" size={20} className="text-primary" />
                    Статистика отзывов
                  </h3>
                </CardHeader>
                <CardContent className="space-y-3">
                  {[
                    { stars: 5, count: 687, percent: 57 },
                    { stars: 4, count: 342, percent: 28 },
                    { stars: 3, count: 123, percent: 10 },
                    { stars: 2, count: 45, percent: 4 },
                    { stars: 1, count: 12, percent: 1 },
                  ].map((stat) => (
                    <div key={stat.stars} className="flex items-center gap-2">
                      <div className="flex items-center gap-1 w-16">
                        <span className="text-sm font-medium">{stat.stars}</span>
                        <Icon name="Star" size={14} className="text-yellow-500 fill-yellow-500" />
                      </div>
                      <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
                        <div
                          className="h-full bg-primary rounded-full"
                          style={{ width: `${stat.percent}%` }}
                        />
                      </div>
                      <span className="text-xs text-muted-foreground w-12 text-right">{stat.count}</span>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <AdBlock position="Боковой блок отзывов" size="medium" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
