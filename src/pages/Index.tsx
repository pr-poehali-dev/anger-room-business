import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar } from '@/components/ui/calendar';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import Icon from '@/components/ui/icon';
import { toast } from 'sonner';

const Index = () => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());
  const [selectedTariff, setSelectedTariff] = useState<string>('');
  const [selectedTime, setSelectedTime] = useState<string>('');

  const tariffs = [
    {
      id: 'basic',
      name: 'Базовый',
      price: 'от 4 000₽',
      duration: '30–45 минут',
      items: ['1–2 человека', '20 тарелок', '15 бутылок', '8 предметов мебели', 'Защитная экипировка', 'Музыка на выбор'],
      icon: 'Zap',
      color: 'from-red-600 to-orange-600'
    },
    {
      id: 'extended',
      name: 'Расширенный',
      price: 'от 10 000₽',
      duration: '60 минут',
      items: ['3–5 человек', '50 тарелок', '30 бутылок', '15 предметов мебели', 'Защитная экипировка', 'Музыка на выбор', 'Фотосессия'],
      icon: 'Flame',
      color: 'from-orange-600 to-red-700',
      popular: true
    },
    {
      id: 'corporate',
      name: 'Корпоратив',
      price: 'от 25 000₽',
      duration: 'индивидуально',
      items: ['До 10 человек', 'Неограниченные предметы', 'Защитная экипировка', 'Музыка на выбор', 'Видеосъёмка', 'Кейтеринг', 'Тематическое оформление'],
      icon: 'Users',
      color: 'from-red-700 to-red-900'
    }
  ];

  const timeSlots = [
    '10:00', '12:00', '14:00', '16:00', '18:00', '20:00', '22:00'
  ];

  const safetyRules = [
    { icon: 'ShieldCheck', title: 'Защитная экипировка обязательна', description: 'Шлем, перчатки, защитные очки выдаются бесплатно' },
    { icon: 'Users', title: 'Возраст 18+', description: 'Дети от 14 лет только в сопровождении взрослых' },
    { icon: 'AlertTriangle', title: 'Трезвость обязательна', description: 'Не допускаются лица в состоянии опьянения' },
    { icon: 'Footprints', title: 'Закрытая обувь', description: 'Кроссовки или ботинки — шлёпанцы запрещены' },
    { icon: 'HeartPulse', title: 'Здоровье важно', description: 'Противопоказано при сердечных заболеваниях' },
    { icon: 'FileWarning', title: 'Инструктаж обязателен', description: 'Перед сеансом проводится обязательный инструктаж' }
  ];

  const gallery = [
    { id: 1, desc: 'Разбитая посуда', img: 'https://cdn.poehali.dev/projects/cc5893f9-c4ca-44db-a53f-3f5250a2582c/files/00ddd149-88a1-4828-9eac-800e51ef7e5d.jpg' },
    { id: 2, desc: 'Уничтожение техники', img: 'https://cdn.poehali.dev/projects/cc5893f9-c4ca-44db-a53f-3f5250a2582c/files/d4751c2b-90dc-45c0-b1b4-958791d165bd.jpg' },
    { id: 3, desc: 'Мебель под ударом', img: 'https://cdn.poehali.dev/projects/cc5893f9-c4ca-44db-a53f-3f5250a2582c/files/58ba7611-afdc-4039-98bb-d64ad65b7381.jpg' },
    { id: 4, desc: 'Тарелки в полёте', img: 'https://cdn.poehali.dev/projects/cc5893f9-c4ca-44db-a53f-3f5250a2582c/files/c2e890bd-7683-4864-91ce-8f5c33ca92db.jpg' }
  ];

  const handleBooking = () => {
    if (!selectedTariff || !selectedTime) {
      toast.error('Выберите тариф и время');
      return;
    }
    const tariff = tariffs.find(t => t.id === selectedTariff);
    toast.success(`Бронирование оформлено! ${tariff?.name} на ${selectedDate?.toLocaleDateString('ru-RU')} в ${selectedTime}`);
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden crack-effect">
        <img 
          src="https://cdn.poehali.dev/projects/cc5893f9-c4ca-44db-a53f-3f5250a2582c/files/71794352-bdd1-4ec9-b966-be56354a46ae.jpg" 
          alt="Rage Room"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-red-950/40 to-black/70" />
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-red-600/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-orange-600/10 rounded-full blur-3xl animate-pulse delay-1000" />
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-5xl">
          <h1 className="text-7xl md:text-9xl font-bold mb-6 text-shadow-glow animate-fade-in">
            КОМНАТА ЯРОСТИ
          </h1>
          <p className="text-2xl md:text-3xl text-gray-300 mb-8 font-light animate-fade-in" style={{animationDelay: '0.2s'}}>
            Выплесни всю злость. Разрушай безопасно.
          </p>
          <div className="flex gap-4 justify-center flex-wrap animate-fade-in" style={{animationDelay: '0.4s'}}>
            <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white px-8 py-6 text-xl">
              <Icon name="Calendar" className="mr-2" />
              Забронировать сеанс
            </Button>
            <Button size="lg" variant="outline" className="border-red-600 text-red-600 hover:bg-red-600 hover:text-white px-8 py-6 text-xl">
              <Icon name="Play" className="mr-2" />
              Смотреть видео
            </Button>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <Icon name="ChevronDown" size={40} className="text-red-600" />
        </div>
      </section>

      {/* Tariffs Section */}
      <section id="tariffs" className="py-24 px-4 bg-gradient-to-b from-[#0A0A0A] to-[#1A0A0A]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-bold text-center mb-4 text-shadow-glow">ТАРИФЫ</h2>
          <p className="text-center text-gray-400 text-xl mb-16">Выбери свой уровень разрушения</p>
          
          <div className="grid md:grid-cols-3 gap-8">
            {tariffs.map((tariff, index) => (
              <Card 
                key={tariff.id} 
                className={`relative bg-gradient-to-br ${tariff.color} border-0 overflow-hidden hover:scale-105 transition-transform duration-300 animate-fade-in`}
                style={{animationDelay: `${index * 0.1}s`}}
              >
                {tariff.popular && (
                  <Badge className="absolute top-4 right-4 bg-orange-500 text-white border-0">
                    ПОПУЛЯРНЫЙ
                  </Badge>
                )}
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-4">
                    <Icon name={tariff.icon as any} size={48} className="text-white" />
                    <div className="text-right">
                      <CardTitle className="text-4xl text-white">{tariff.price}</CardTitle>
                      <CardDescription className="text-white/80 text-lg">{tariff.duration}</CardDescription>
                    </div>
                  </div>
                  <CardTitle className="text-3xl text-white">{tariff.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {tariff.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-white/90">
                        <Icon name="Check" size={20} className="mt-1 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className="w-full mt-6 bg-white text-red-600 hover:bg-gray-100 font-bold text-lg py-6"
                    onClick={() => setSelectedTariff(tariff.id)}
                  >
                    Выбрать тариф
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section id="booking" className="py-24 px-4 bg-[#0A0A0A]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-bold text-center mb-4 text-shadow-glow">БРОНИРОВАНИЕ</h2>
          <p className="text-center text-gray-400 text-xl mb-16">Выбери дату, время и тариф</p>
          
          <Card className="bg-[#1A1A1A] border-red-900">
            <CardContent className="p-8">
              <Tabs defaultValue="date" className="w-full">
                <TabsList className="grid w-full grid-cols-3 mb-8 bg-black/50">
                  <TabsTrigger value="date" className="data-[state=active]:bg-red-600">
                    <Icon name="Calendar" className="mr-2" size={18} />
                    Дата
                  </TabsTrigger>
                  <TabsTrigger value="time" className="data-[state=active]:bg-red-600">
                    <Icon name="Clock" className="mr-2" size={18} />
                    Время
                  </TabsTrigger>
                  <TabsTrigger value="confirm" className="data-[state=active]:bg-red-600">
                    <Icon name="CheckCircle" className="mr-2" size={18} />
                    Подтверждение
                  </TabsTrigger>
                </TabsList>
                
                <TabsContent value="date" className="space-y-4">
                  <div className="flex justify-center">
                    <Calendar
                      mode="single"
                      selected={selectedDate}
                      onSelect={setSelectedDate}
                      disabled={(date) => date < new Date()}
                      className="rounded-md border border-red-900 bg-black/30"
                    />
                  </div>
                </TabsContent>
                
                <TabsContent value="time" className="space-y-4">
                  <div className="grid grid-cols-4 gap-4">
                    {timeSlots.map((time) => (
                      <Button
                        key={time}
                        variant={selectedTime === time ? "default" : "outline"}
                        className={`py-6 text-lg ${selectedTime === time ? 'bg-red-600 hover:bg-red-700' : 'border-red-900 hover:bg-red-600/20'}`}
                        onClick={() => setSelectedTime(time)}
                      >
                        {time}
                      </Button>
                    ))}
                  </div>
                </TabsContent>
                
                <TabsContent value="confirm" className="space-y-6">
                  <div className="space-y-4 bg-black/30 p-6 rounded-lg border border-red-900">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400">Дата:</span>
                      <span className="text-xl font-bold">{selectedDate?.toLocaleDateString('ru-RU')}</span>
                    </div>
                    <Separator className="bg-red-900" />
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400">Время:</span>
                      <span className="text-xl font-bold">{selectedTime || 'Не выбрано'}</span>
                    </div>
                    <Separator className="bg-red-900" />
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400">Тариф:</span>
                      <span className="text-xl font-bold">
                        {selectedTariff ? tariffs.find(t => t.id === selectedTariff)?.name : 'Не выбран'}
                      </span>
                    </div>
                    <Separator className="bg-red-900" />
                    <div className="flex justify-between items-center text-2xl">
                      <span className="text-gray-400">Итого:</span>
                      <span className="font-bold text-red-600">
                        {selectedTariff ? tariffs.find(t => t.id === selectedTariff)?.price : '0₽'}
                      </span>
                    </div>
                  </div>
                  
                  <Button 
                    className="w-full bg-red-600 hover:bg-red-700 text-white font-bold text-xl py-8"
                    onClick={handleBooking}
                  >
                    <Icon name="Sparkles" className="mr-2" />
                    Подтвердить бронирование
                  </Button>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Safety Rules Section */}
      <section id="safety" className="py-24 px-4 bg-gradient-to-b from-[#0A0A0A] to-[#1A0A0A]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-bold text-center mb-4 text-shadow-glow">ПРАВИЛА БЕЗОПАСНОСТИ</h2>
          <p className="text-center text-gray-400 text-xl mb-16">Разрушай, но будь в безопасности</p>
          
          <div className="grid md:grid-cols-3 gap-6">
            {safetyRules.map((rule, index) => (
              <Card 
                key={index} 
                className="bg-[#1A1A1A] border-red-900 hover:border-red-600 transition-colors animate-fade-in"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-red-600/20 rounded-lg">
                      <Icon name={rule.icon as any} size={32} className="text-red-600" />
                    </div>
                    <CardTitle className="text-xl">{rule.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-400">{rule.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-24 px-4 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-bold text-center mb-4 text-shadow-glow">ГАЛЕРЕЯ</h2>
          <p className="text-center text-gray-400 text-xl mb-16">Посмотри, как это выглядит</p>
          
          <div className="grid md:grid-cols-2 gap-8">
            {gallery.map((item, index) => (
              <div 
                key={item.id}
                className="relative h-80 rounded-lg overflow-hidden group cursor-pointer animate-fade-in"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <img 
                  src={item.img} 
                  alt={item.desc}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-red-600/30 to-orange-600/30 group-hover:from-red-600/50 group-hover:to-orange-600/50 transition-all duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black to-transparent">
                  <h3 className="text-2xl font-bold">{item.desc}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacts" className="py-24 px-4 bg-gradient-to-b from-[#0A0A0A] to-black">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-bold mb-4 text-shadow-glow">КОНТАКТЫ</h2>
          <p className="text-gray-400 text-xl mb-12">Мы ждём тебя</p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="bg-[#1A1A1A] border-red-900">
              <CardContent className="pt-6 text-center">
                <Icon name="MapPin" size={48} className="mx-auto mb-4 text-red-600" />
                <h3 className="text-xl font-bold mb-2">Адрес</h3>
                <p className="text-gray-400">ул. 1 Мая, 344<br/>Краснодар</p>
              </CardContent>
            </Card>
            
            <Card className="bg-[#1A1A1A] border-red-900">
              <CardContent className="pt-6 text-center">
                <Icon name="Phone" size={48} className="mx-auto mb-4 text-red-600" />
                <h3 className="text-xl font-bold mb-2">Телефон</h3>
                <p className="text-gray-400">+7 (999) 123-45-67<br/>Ежедневно 10:00-23:00</p>
              </CardContent>
            </Card>
            
            <Card className="bg-[#1A1A1A] border-red-900">
              <CardContent className="pt-6 text-center">
                <Icon name="Mail" size={48} className="mx-auto mb-4 text-red-600" />
                <h3 className="text-xl font-bold mb-2">Email</h3>
                <p className="text-gray-400">info@rage-room.ru<br/>Ответим в течение часа</p>
              </CardContent>
            </Card>
          </div>
          
          <div className="mb-12">
            <Card className="bg-[#1A1A1A] border-red-900 overflow-hidden">
              <CardContent className="p-0">
                <iframe
                  src="https://yandex.ru/map-widget/v1/?ll=38.975313%2C45.035470&z=17&l=map&pt=38.975313,45.035470,pm2rdm"
                  width="100%"
                  height="400"
                  frameBorder="0"
                  className="w-full"
                  title="Карта Краснодар, ул. 1 Мая, 344"
                />
              </CardContent>
            </Card>
          </div>

          <div className="flex gap-4 justify-center">
            <Button size="lg" className="bg-red-600 hover:bg-red-700">
              <Icon name="MessageCircle" className="mr-2" />
              Написать в Telegram
            </Button>
            <Button size="lg" variant="outline" className="border-red-600 text-red-600 hover:bg-red-600 hover:text-white">
              <Icon name="Instagram" className="mr-2" />
              Instagram
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-black border-t border-red-900">
        <div className="max-w-7xl mx-auto text-center text-gray-500">
          <p>© 2024 Комната Ярости. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;