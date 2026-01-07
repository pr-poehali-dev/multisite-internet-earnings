import Navigation from '@/components/Navigation';
import AdBlock from '@/components/AdBlock';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useState } from 'react';

export default function Methods() {
  const [voteStates, setVoteStates] = useState<Record<number, 'up' | 'down' | null>>({});

  const methods = [
    {
      id: 1,
      title: 'Фриланс на биржах',
      category: 'Услуги',
      rating: 4.8,
      votes: 1247,
      income: 'от 30 000 ₽/мес',
      difficulty: 'Средняя',
      icon: 'Briefcase',
      description: 'Выполнение заказов на Upwork, Kwork, FL.ru',
    },
    {
      id: 2,
      title: 'Создание контента',
      category: 'Креатив',
      rating: 4.6,
      votes: 892,
      income: 'от 20 000 ₽/мес',
      difficulty: 'Легкая',
      icon: 'Video',
      description: 'YouTube, TikTok, Instagram - монетизация контента',
    },
    {
      id: 3,
      title: 'Инвестиции и трейдинг',
      category: 'Финансы',
      rating: 4.2,
      votes: 654,
      income: 'от 50 000 ₽/мес',
      difficulty: 'Высокая',
      icon: 'TrendingUp',
      description: 'Торговля акциями, криптовалютой, инвестиции',
    },
    {
      id: 4,
      title: 'Копирайтинг',
      category: 'Услуги',
      rating: 4.5,
      votes: 1103,
      income: 'от 25 000 ₽/мес',
      difficulty: 'Средняя',
      icon: 'FileText',
      description: 'Написание текстов для сайтов и рекламы',
    },
    {
      id: 5,
      title: 'Dropshipping',
      category: 'Бизнес',
      rating: 4.1,
      votes: 521,
      income: 'от 40 000 ₽/мес',
      difficulty: 'Средняя',
      icon: 'Package',
      description: 'Интернет-магазин без склада и товара',
    },
    {
      id: 6,
      title: 'Онлайн-репетиторство',
      category: 'Образование',
      rating: 4.7,
      votes: 876,
      income: 'от 35 000 ₽/мес',
      difficulty: 'Легкая',
      icon: 'GraduationCap',
      description: 'Обучение по Skype, Zoom - любой предмет',
    },
  ];

  const handleVote = (id: number, type: 'up' | 'down') => {
    setVoteStates((prev) => ({
      ...prev,
      [id]: prev[id] === type ? null : type,
    }));
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <section className="py-12 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Способы заработка в интернете</h1>
          <p className="text-lg text-muted-foreground mb-8">Проверенные способы с рейтингами от реальных пользователей</p>

          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <Input placeholder="Поиск по названию..." className="md:max-w-md" />
            <Select>
              <SelectTrigger className="md:w-48">
                <SelectValue placeholder="Категория" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Все категории</SelectItem>
                <SelectItem value="services">Услуги</SelectItem>
                <SelectItem value="creative">Креатив</SelectItem>
                <SelectItem value="finance">Финансы</SelectItem>
                <SelectItem value="business">Бизнес</SelectItem>
                <SelectItem value="education">Образование</SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger className="md:w-48">
                <SelectValue placeholder="Сложность" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Любая</SelectItem>
                <SelectItem value="easy">Легкая</SelectItem>
                <SelectItem value="medium">Средняя</SelectItem>
                <SelectItem value="hard">Высокая</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <AdBlock position="Рекламный блок на странице способов" size="medium" />
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {methods.map((method) => (
              <Card key={method.id} className="hover:shadow-xl transition-all">
                <CardHeader>
                  <div className="flex items-start justify-between mb-3">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Icon name={method.icon as any} size={24} className="text-primary" />
                    </div>
                    <Badge variant="secondary">{method.category}</Badge>
                  </div>
                  <CardTitle className="text-xl">{method.title}</CardTitle>
                  <p className="text-sm text-muted-foreground">{method.description}</p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Icon
                            key={i}
                            name="Star"
                            size={14}
                            className={
                              i < Math.floor(method.rating)
                                ? 'text-yellow-500 fill-yellow-500'
                                : 'text-gray-300'
                            }
                          />
                        ))}
                      </div>
                      <span className="text-sm font-semibold">{method.rating}</span>
                    </div>
                    <span className="text-xs text-muted-foreground">{method.votes} голосов</span>
                  </div>

                  <div className="flex items-center gap-4 border rounded-lg p-3 bg-accent/20">
                    <Button
                      size="sm"
                      variant={voteStates[method.id] === 'up' ? 'default' : 'ghost'}
                      className="gap-1 flex-1"
                      onClick={() => handleVote(method.id, 'up')}
                    >
                      <Icon name="ThumbsUp" size={16} />
                      Полезно
                    </Button>
                    <Button
                      size="sm"
                      variant={voteStates[method.id] === 'down' ? 'destructive' : 'ghost'}
                      className="gap-1 flex-1"
                      onClick={() => handleVote(method.id, 'down')}
                    >
                      <Icon name="ThumbsDown" size={16} />
                      Нет
                    </Button>
                  </div>

                  <div className="space-y-2 pt-2">
                    <div className="flex items-center gap-2">
                      <Icon name="Wallet" size={16} className="text-primary" />
                      <span className="text-sm font-medium">{method.income}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Icon name="BarChart" size={16} className="text-secondary" />
                      <span className="text-sm">Сложность: {method.difficulty}</span>
                    </div>
                  </div>

                  <Button className="w-full gap-2">
                    Подробнее
                    <Icon name="ArrowRight" size={16} />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button size="lg" variant="outline">
              Загрузить ещё
            </Button>
          </div>
        </div>
      </section>

      <section className="py-12 border-t">
        <div className="container mx-auto px-4">
          <AdBlock position="Нижний рекламный блок" size="large" />
        </div>
      </section>
    </div>
  );
}