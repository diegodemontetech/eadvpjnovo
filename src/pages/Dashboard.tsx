import React from 'react';
import CourseSection from '../components/CourseSection';
import NewsCard from '../components/NewsCard';
import CategoryFilter from '../components/CategoryFilter';
import { Course, News } from '../types';

const categories = ['Todos', 'Gestão', 'Nutrição', 'Reprodução', 'Sanidade', 'Sustentabilidade'];

const featuredCourses: Course[] = [
  {
    id: '1',
    title: 'Gestão de Pastagens',
    thumbnail: 'https://images.unsplash.com/photo-1500595046743-cd271d694d30?w=640',
    progress: 45,
    duration: '2h 30min',
    rating: 4.8,
    category: 'Gestão',
    date: '2024-03-01',
    description: 'Aprenda técnicas avançadas de gestão de pastagens',
    lessons: [],
    status: 'in_progress'
  },
  {
    id: '2',
    title: 'Nutrição Animal Avançada',
    thumbnail: 'https://images.unsplash.com/photo-1516467508483-a7212febe31a?w=640',
    progress: 70,
    duration: '3h 15min',
    rating: 4.5,
    category: 'Nutrição',
    date: '2024-02-28',
    description: 'Domine os conceitos de nutrição animal',
    lessons: [],
    status: 'in_progress'
  },
  {
    id: '3',
    title: 'Manejo Sanitário',
    thumbnail: 'https://images.unsplash.com/photo-1605118983127-00fe86695e6f?w=640',
    progress: 20,
    duration: '1h 45min',
    rating: 4.9,
    category: 'Sanidade',
    date: '2024-02-25',
    description: 'Aprenda sobre manejo sanitário do rebanho',
    lessons: [],
    status: 'in_progress'
  }
];

const news: News[] = [
  {
    id: '1',
    title: 'Como a Inteligência Artificial está revolucionando a pecuária moderna',
    thumbnail: 'https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?w=800',
    category: 'Tecnologia',
    date: '15 Mar 2024',
    readTime: '5 min de leitura',
    content: '',
    author: {
      name: 'João Silva',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e'
    }
  },
  {
    id: '2',
    title: 'Novos métodos de manejo sustentável aumentam produtividade em 40%',
    thumbnail: 'https://images.unsplash.com/photo-1605118983127-00fe86695e6f?w=800',
    category: 'Sustentabilidade',
    date: '14 Mar 2024',
    readTime: '7 min de leitura',
    content: '',
    author: {
      name: 'Maria Santos',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80'
    }
  },
  {
    id: '3',
    title: 'VPJ Alimentos lidera ranking de bem-estar animal no Brasil',
    thumbnail: 'https://images.unsplash.com/photo-1516467508483-a7212febe31a?w=800',
    category: 'Institucional',
    date: '13 Mar 2024',
    readTime: '4 min de leitura',
    content: '',
    author: {
      name: 'Pedro Costa',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e'
    }
  }
];

const Dashboard = () => {
  const [activeCategory, setActiveCategory] = React.useState('Todos');

  return (
    <div className="px-8">
      <div className="relative h-[500px] mb-16 rounded-lg overflow-hidden group">
        <img 
          src="https://images.unsplash.com/photo-1516467508483-a7212febe31a?w=1920"
          alt="Featured Course"
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent">
          <div className="absolute bottom-0 left-0 right-0 p-12">
            <div className="max-w-2xl">
              <span className="inline-block px-3 py-1 bg-[#E50914] text-white text-sm font-medium rounded-md mb-4">
                Em Destaque
              </span>
              <h1 className="text-5xl font-bold text-white mb-4 leading-tight">
                Curso Completo de Gestão Pecuária
              </h1>
              <p className="text-gray-300 text-lg mb-8 line-clamp-2">
                Aprenda as melhores práticas de gestão para maximizar a produtividade e rentabilidade do seu negócio pecuário.
              </p>
              <div className="flex items-center gap-4">
                <button className="bg-[#E50914] text-white px-8 py-4 rounded-md hover:bg-[#b8070f] transition-colors text-lg font-medium">
                  Começar Agora
                </button>
                <button className="bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-md hover:bg-white/30 transition-colors text-lg font-medium">
                  Mais Informações
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <CategoryFilter 
        categories={categories}
        activeCategory={activeCategory}
        onSelect={setActiveCategory}
      />

      <CourseSection title="Destaques" courses={featuredCourses} />

      <div className="mt-16">
        <h2 className="text-2xl text-white font-semibold mb-8">Últimas Notícias</h2>
        <div className="grid grid-cols-3 gap-8">
          {news.map((item) => (
            <NewsCard key={item.id} news={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;