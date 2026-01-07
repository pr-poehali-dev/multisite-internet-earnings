import { Link, useLocation } from 'react-router-dom';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

export default function Navigation() {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  const links = [
    { path: '/', label: 'Главная', icon: 'Home' },
    { path: '/methods', label: 'Способы заработка', icon: 'DollarSign' },
    { path: '/guides', label: 'Гайды', icon: 'BookOpen' },
    { path: '/news', label: 'Новости', icon: 'Newspaper' },
    { path: '/reviews', label: 'Отзывы', icon: 'MessageSquare' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-border shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2 font-bold text-xl text-primary">
            <Icon name="TrendingUp" size={28} />
            <span className="hidden sm:inline">Заработок.online</span>
          </Link>

          <div className="hidden md:flex items-center gap-1">
            {links.map((link) => (
              <Link key={link.path} to={link.path}>
                <Button
                  variant={location.pathname === link.path ? 'default' : 'ghost'}
                  className="gap-2"
                >
                  <Icon name={link.icon as any} size={18} />
                  {link.label}
                </Button>
              </Link>
            ))}
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <Icon name={mobileOpen ? 'X' : 'Menu'} size={24} />
          </Button>
        </div>

        {mobileOpen && (
          <div className="md:hidden py-4 space-y-2 border-t animate-in slide-in-from-top-2">
            {links.map((link) => (
              <Link key={link.path} to={link.path} onClick={() => setMobileOpen(false)}>
                <Button
                  variant={location.pathname === link.path ? 'default' : 'ghost'}
                  className="w-full justify-start gap-2"
                >
                  <Icon name={link.icon as any} size={18} />
                  {link.label}
                </Button>
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
