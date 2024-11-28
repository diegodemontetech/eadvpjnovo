import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import CourseSection from '../../components/CourseSection';
import NewsCard from '../../components/NewsCard';
import CategoryFilter from '../../components/CategoryFilter';
import { Course, News } from '../../types';
import { courseService, newsService, categoryService } from '../../services/api';
import { useApi } from '../../hooks/useApi';

const Dashboard = () => {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState('Todos');
  const [categories, setCategories] = useState<string[]>(['Todos']);
  const [featuredCourses, setFeaturedCourses] = useState<Course[]>([]);
  const [news, setNews] = useState<News[]>([]);

  const { loading: loadingCourses } = useApi();
  const { loading: loadingNews } = useApi();

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch categories
        const categoriesData = await categoryService.getAllCategories();
        setCategories(['Todos', ...categoriesData.map((cat: any) => cat.name)]);

        // Fetch featured courses
        const coursesData = await courseService.getFeaturedCourses();
        setFeaturedCourses(coursesData);

        // Fetch news
        const newsData = await newsService.getAllNews();
        setNews(newsData);
      } catch (error) {
        console.error('Error fetching dashboard data:', error);
      }
    };

    fetchData();
  }, []);

  const handleStartCourse = () => {
    navigate('/courses/1');
  };

  const handleMoreInfo = () => {
    navigate('/courses');
  };

  const handleCourseClick = (course: Course) => {
    navigate(`/courses/${course.id}`);
  };

  const handleNewsClick = (newsItem: News) => {
    navigate(`/blog/${newsItem.id}`);
  };

  if (loadingCourses || loadingNews) {
    return (
      <div className="min-h-screen bg-[#121212] flex items-center justify-center">
        <div className="text-white">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#121212] flex flex-col">
      <div className="flex-1 px-8 pb-16">
        {/* Featured Course Section */}
        {featuredCourses.length > 0 && (
          <motion.div 
            className="relative h-[500px] rounded-xl overflow-hidden mb-16 mt-6 cursor-pointer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            onClick={handleStartCourse}
          >
            <img 
              src={featuredCourses[0].thumbnail}
              alt={featuredCourses[0].title}
              className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
            />
            {/* ... rest of the featured course section ... */}
          </motion.div>
        )}

        <CategoryFilter 
          categories={categories}
          activeCategory={activeCategory}
          onSelect={setActiveCategory}
        />

        <CourseSection 
          title="Destaques" 
          icon={<TrendingUp className="h-6 w-6 text-[#E50914]" />}
          courses={featuredCourses}
          onCourseClick={handleCourseClick}
        />

        {/* News Section */}
        <div className="mt-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl text-white font-semibold">Últimas Notícias</h2>
            <button 
              onClick={() => navigate('/blog')}
              className="flex items-center gap-2 text-[#E50914] hover:text-[#b8070f] transition-colors"
            >
              <span>Ver todas</span>
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
          <div className="grid grid-cols-3 gap-8">
            {news.map((item) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                onClick={() => handleNewsClick(item)}
                className="cursor-pointer"
              >
                <NewsCard news={item} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;