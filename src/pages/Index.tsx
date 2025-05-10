
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-6 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold text-purple-600">Learning Buddy</span>
            <span className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded-full">beta</span>
          </div>
          <div className="flex gap-4">
            <Button variant="ghost">Войти</Button>
            <Button>Регистрация</Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-12 md:py-24 flex flex-col items-center text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-slate-800">
          Изучай английский <span className="text-purple-600">с удовольствием</span>
        </h1>
        <p className="text-xl text-slate-600 max-w-2xl mb-10">
          Образовательная платформа для школьников с трудностями в обучении английскому языку. Учись, соревнуйся и получай помощь!
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
            Начать обучение
            <Icon name="ArrowRight" className="ml-2" />
          </Button>
          <Button size="lg" variant="outline">
            Стать волонтером
            <Icon name="Heart" className="ml-2 text-red-500" />
          </Button>
        </div>
      </section>

      {/* Статистика */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">500+</div>
              <div className="text-slate-600">Активных учеников</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">75+</div>
              <div className="text-slate-600">Учителей-волонтеров</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">12,000+</div>
              <div className="text-slate-600">Решенных задач</div>
            </div>
          </div>
        </div>
      </section>

      {/* Рейтинговая система */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12 text-slate-800">Рейтинговая система</h2>
        
        <Tabs defaultValue="students" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="students">Ученики</TabsTrigger>
            <TabsTrigger value="classes">Классы</TabsTrigger>
            <TabsTrigger value="teachers">Учителя</TabsTrigger>
          </TabsList>
          
          {/* Рейтинг учеников */}
          <TabsContent value="students">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3].map((index) => (
                <Card key={`student-${index}`}>
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-center">
                      <CardTitle className="text-lg">Ученик {index}</CardTitle>
                      <div className="flex items-center gap-1">
                        <span className="text-amber-500 font-semibold">{90 - index * 5}%</span>
                        <Icon name="Trophy" className="text-amber-500" />
                      </div>
                    </div>
                    <CardDescription>8 класс, Школа №{200 + index}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-4 mb-2">
                      <div className="bg-purple-100 rounded-full p-3">
                        <Icon name="BookOpen" className="text-purple-600" />
                      </div>
                      <div>
                        <div className="text-sm text-slate-500">Решено задач</div>
                        <div className="font-medium">{100 - index * 15}</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="bg-blue-100 rounded-full p-3">
                        <Icon name="Timer" className="text-blue-600" />
                      </div>
                      <div>
                        <div className="text-sm text-slate-500">Среднее время</div>
                        <div className="font-medium">{3 + index} мин</div>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="ghost" size="sm" className="w-full">Посмотреть профиль</Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>
          
          {/* Рейтинг классов */}
          <TabsContent value="classes">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3].map((index) => (
                <Card key={`class-${index}`}>
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-center">
                      <CardTitle className="text-lg">8-{String.fromCharCode(64 + index)} класс</CardTitle>
                      <div className="flex items-center gap-1">
                        <span className="text-amber-500 font-semibold">{95 - index * 5} баллов</span>
                        <Icon name="Award" className="text-amber-500" />
                      </div>
                    </div>
                    <CardDescription>Школа №{200 + index}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-4 mb-2">
                      <div className="bg-green-100 rounded-full p-3">
                        <Icon name="Users" className="text-green-600" />
                      </div>
                      <div>
                        <div className="text-sm text-slate-500">Учеников</div>
                        <div className="font-medium">{20 + index}</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="bg-indigo-100 rounded-full p-3">
                        <Icon name="Star" className="text-indigo-600" />
                      </div>
                      <div>
                        <div className="text-sm text-slate-500">Средний балл</div>
                        <div className="font-medium">{85 - index * 3}%</div>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="ghost" size="sm" className="w-full">Детали класса</Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>
          
          {/* Рейтинг учителей */}
          <TabsContent value="teachers">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3].map((index) => (
                <Card key={`teacher-${index}`}>
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-center">
                      <CardTitle className="text-lg">Учитель {index}</CardTitle>
                      <div className="flex items-center gap-1">
                        <span className="text-amber-500 font-semibold">{4.9 - index * 0.2} / 5</span>
                        <Icon name="Star" className="text-amber-500" />
                      </div>
                    </div>
                    <CardDescription>{index === 1 ? 'Волонтер' : 'Школа №' + (200 + index)}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-4 mb-2">
                      <div className="bg-orange-100 rounded-full p-3">
                        <Icon name="UserCheck" className="text-orange-600" />
                      </div>
                      <div>
                        <div className="text-sm text-slate-500">Помог ученикам</div>
                        <div className="font-medium">{50 - index * 10}</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="bg-cyan-100 rounded-full p-3">
                        <Icon name="Clock" className="text-cyan-600" />
                      </div>
                      <div>
                        <div className="text-sm text-slate-500">Часов на платформе</div>
                        <div className="font-medium">{120 - index * 25}</div>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="ghost" size="sm" className="w-full">Профиль преподавателя</Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </section>

      {/* Анонимный чат */}
      <section className="bg-purple-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-slate-800">Анонимный чат поддержки</h2>
            <p className="text-slate-600">Задавайте вопросы, получайте помощь от учителей и других учеников анонимно. Не бойтесь спрашивать!</p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Чат поддержки</CardTitle>
                <CardDescription>Общайтесь без раскрытия личности</CardDescription>
              </CardHeader>
              <CardContent className="pb-2">
                <div className="border rounded-lg p-4 mb-4 max-h-60 overflow-y-auto space-y-4">
                  <div className="flex gap-3">
                    <div className="bg-slate-200 rounded-full h-8 w-8 flex items-center justify-center">
                      <span className="text-xs">A</span>
                    </div>
                    <div className="bg-slate-100 rounded-lg p-3 max-w-[80%]">
                      <p className="text-sm">Как правильно использовать Present Perfect?</p>
                      <div className="text-xs text-slate-500 mt-1">10:42</div>
                    </div>
                  </div>
                  
                  <div className="flex gap-3 justify-end">
                    <div className="bg-purple-100 rounded-lg p-3 max-w-[80%]">
                      <p className="text-sm">Present Perfect используется для действий, которые начались в прошлом и имеют связь с настоящим. Формула: have/has + V3</p>
                      <div className="text-xs text-slate-500 mt-1">10:45</div>
                    </div>
                    <div className="bg-blue-500 text-white rounded-full h-8 w-8 flex items-center justify-center">
                      <span className="text-xs">T</span>
                    </div>
                  </div>
                  
                  <div className="flex gap-3">
                    <div className="bg-slate-200 rounded-full h-8 w-8 flex items-center justify-center">
                      <span className="text-xs">A</span>
                    </div>
                    <div className="bg-slate-100 rounded-lg p-3 max-w-[80%]">
                      <p className="text-sm">Спасибо! А можно пример?</p>
                      <div className="text-xs text-slate-500 mt-1">10:47</div>
                    </div>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="icon" className="shrink-0">
                    <Icon name="Paperclip" className="h-4 w-4" />
                  </Button>
                  <div className="relative flex-1">
                    <input 
                      type="text" 
                      placeholder="Введите сообщение..." 
                      className="w-full py-2 px-4 rounded-full border focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                  </div>
                  <Button size="icon" className="shrink-0 rounded-full">
                    <Icon name="Send" className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
              <CardFooter className="text-xs text-slate-500">
                Все сообщения анонимны и шифруются
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* Стать волонтером */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-slate-800">Станьте учителем-волонтером</h2>
            <p className="text-slate-600">Делитесь своими знаниями и помогайте школьникам преодолеть трудности в изучении английского языка</p>
          </div>
          
          <Card className="bg-gradient-to-r from-purple-50 to-indigo-50 border-none">
            <CardContent className="pt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="bg-indigo-100 rounded-full p-2">
                      <Icon name="Clock" className="text-indigo-600" />
                    </div>
                    <div>
                      <h3 className="font-medium">Гибкий график</h3>
                      <p className="text-sm text-slate-600">Уделяйте столько времени, сколько можете</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div className="bg-green-100 rounded-full p-2">
                      <Icon name="Users" className="text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-medium">Помощь школьникам</h3>
                      <p className="text-sm text-slate-600">Ваши знания действительно важны</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div className="bg-amber-100 rounded-full p-2">
                      <Icon name="Award" className="text-amber-600" />
                    </div>
                    <div>
                      <h3 className="font-medium">Признание</h3>
                      <p className="text-sm text-slate-600">Рейтинг и благодарности от учеников</p>
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-col gap-4 justify-center">
                  <h3 className="font-medium text-lg">Присоединяйтесь к нам!</h3>
                  <p className="text-sm text-slate-600 mb-2">Заполните форму, и мы свяжемся с вами в ближайшее время</p>
                  <Button className="w-full bg-purple-600 hover:bg-purple-700">
                    Стать волонтером
                    <Icon name="Heart" className="ml-2 text-red-200" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Learning Buddy</h3>
              <p className="text-slate-300">Помощь школьникам в изучении английского языка</p>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-4">Разделы</h3>
              <ul className="space-y-2">
                <li><Link to="/" className="text-slate-300 hover:text-white">Главная</Link></li>
                <li><Link to="/" className="text-slate-300 hover:text-white">О проекте</Link></li>
                <li><Link to="/" className="text-slate-300 hover:text-white">Волонтерам</Link></li>
                <li><Link to="/" className="text-slate-300 hover:text-white">Блог</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-4">Контакты</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <Icon name="Mail" className="h-4 w-4" />
                  <a href="mailto:info@learningbuddy.ru" className="text-slate-300 hover:text-white">info@learningbuddy.ru</a>
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Phone" className="h-4 w-4" />
                  <a href="tel:+78001234567" className="text-slate-300 hover:text-white">8 (800) 123-45-67</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 mt-8 pt-8 text-center text-slate-400">
            <p>© {new Date().getFullYear()} Learning Buddy. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
