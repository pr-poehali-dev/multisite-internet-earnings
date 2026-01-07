import Navigation from '@/components/Navigation';
import AdBlock from '@/components/AdBlock';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { Link } from 'react-router-dom';

export default function Index() {
  const topMethods = [
    {
      title: 'Фриланс на биржах',
      rating: 4.8,
      votes: 1247,
      income: 'от 30 000 ₽/мес',
      difficulty: 'Средняя',
      icon: 'Briefcase',
    },
    {
      title: 'Создание контента',
      rating: 4.6,
      votes: 892,
      income: 'от 20 000 ₽/мес',
      difficulty: 'Легкая',
      icon: 'Video',
    },
    {
      title: 'Инвестиции и трейдинг',
      rating: 4.2,
      votes: 654,
      income: 'от 50 000 ₽/мес',
      difficulty: 'Высокая',
      icon: 'TrendingUp',
    },
  ];

  const stats = [
    { value: '250+', label: 'Способов заработка', icon: 'DollarSign' },
    { value: '50K+', label: 'Активных пользователей', icon: 'Users' },
    { value: '1200+', label: 'Проверенных отзывов', icon: 'MessageSquare' },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <section className="bg-gradient-to-br from-primary/10 via-background to-secondary/10 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <Badge className="mb-2">🚀 Ваш путеводитель в мир онлайн-заработка</Badge>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Заработок в <span className="text-primary">интернете</span> без вложений
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              Проверенные способы, реальные отзывы, пошаговые инструкции. Начните зарабатывать уже сегодня!
            </p>
            <div className="flex flex-wrap gap-4 justify-center pt-4">
              <Link to="/methods">
                <Button size="lg" className="gap-2">
                  <Icon name="Search" size={20} />
                  Все способы заработка
                </Button>
              </Link>
              <Link to="/guides">
                <Button size="lg" variant="outline" className="gap-2">
                  <Icon name="BookOpen" size={20} />
                  Начать с гайдов
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 border-b">
        <div className="container mx-auto px-4">
          <AdBlock position="Верхний горизонтальный блок" size="medium" />
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, idx) => (
              <Card key={idx} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name={stat.icon as any} size={32} className="text-primary" />
                  </div>
                  <p className="text-4xl font-bold text-primary mb-2">{stat.value}</p>
                  <p className="text-muted-foreground">{stat.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-accent/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Топ способов заработка</h2>
            <p className="text-muted-foreground text-lg">По оценкам пользователей нашего сообщества</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {topMethods.map((method, idx) => (
              <Card key={idx} className="hover:shadow-xl transition-all hover:-translate-y-1">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-3">
                    <Icon name={method.icon as any} size={24} className="text-primary" />
                  </div>
                  <CardTitle className="text-xl">{method.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-2">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Icon
                          key={i}
                          name="Star"
                          size={16}
                          className={i < Math.floor(method.rating) ? 'text-yellow-500 fill-yellow-500' : 'text-gray-300'}
                        />
                      ))}
                    </div>
                    <span className="font-semibold">{method.rating}</span>
                    <span className="text-sm text-muted-foreground">({method.votes} голосов)</span>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Icon name="Wallet" size={16} className="text-primary" />
                      <span className="text-sm font-medium">{method.income}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Icon name="BarChart" size={16} className="text-secondary" />
                      <span className="text-sm">Сложность: {method.difficulty}</span>
                    </div>
                  </div>
                  <Button className="w-full gap-2" variant="outline">
                    Подробнее
                    <Icon name="ArrowRight" size={16} />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Link to="/methods">
              <Button size="lg" variant="default">
                Смотреть все способы →
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <AdBlock position="Средний горизонтальный блок" size="large" />
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Почему выбирают нас?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  icon: 'Shield',
                  title: 'Проверенная информация',
                  desc: 'Все способы заработка проверены реальными людьми',
                },
                {
                  icon: 'Users',
                  title: 'Живое сообщество',
                  desc: 'Тысячи пользователей делятся опытом и отзывами',
                },
                {
                  icon: 'BookOpen',
                  title: 'Пошаговые гайды',
                  desc: 'Подробные инструкции для каждого способа заработка',
                },
                {
                  icon: 'TrendingUp',
                  title: 'Система рейтинга',
                  desc: 'Голосуйте за лучшие способы и помогайте другим',
                },
              ].map((feature, idx) => (
                <Card key={idx} className="hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6 flex gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon name={feature.icon as any} size={24} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-2">{feature.title}</h3>
                      <p className="text-muted-foreground">{feature.desc}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Готовы начать зарабатывать?</h2>
          <p className="text-lg mb-8 opacity-90">Присоединяйтесь к тысячам людей, которые уже изменили свою жизнь</p>
          <Link to="/methods">
            <Button size="lg" variant="secondary" className="gap-2">
              <Icon name="Rocket" size={20} />
              Начать сейчас
            </Button>
          </Link>
        </div>
      </section>

      <footer className="py-12 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="font-bold mb-4">О проекте</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>О нас</li>
                <li>Контакты</li>
                <li>Реклама</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Разделы</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Способы заработка</li>
                <li>Гайды</li>
                <li>Новости</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Помощь</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>FAQ</li>
                <li>Поддержка</li>
                <li>Правила</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Соцсети</h4>
              <div className="flex gap-3">
                <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                  <Icon name="MessageCircle" size={16} className="text-primary" />
                </div>
                <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                  <Icon name="Send" size={16} className="text-primary" />
                </div>
              </div>
            </div>
          </div>
          <div className="text-center text-sm text-muted-foreground border-t pt-8">
            © 2024 Заработок.online — Все права защищены
          </div>
        </div>
      </footer>
    </div>
  );
}
