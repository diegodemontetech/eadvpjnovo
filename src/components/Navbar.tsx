import React, { useState } from 'react';
import { Bell, Trophy, Clock, Award, Search, User } from 'lucide-react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import ProfileMenu from './ProfileMenu';

const Navbar = () => {
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const navigate = useNavigate();

  const mockUser = {
    name: 'João Silva',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e',
    rating: 8.5,
    alerts: [
      { id: '1', message: 'Novo curso disponível', date: '2 min atrás' },
      { id: '2', message: 'Parabéns! Você concluiu o curso', date: '1 hora atrás' },
    ]
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-[#141414] h-14 flex items-center px-4 z-50">
      <div className="flex items-center gap-8">
        <img 
          src="https://vpjalimentos.com.br/wp-content/uploads/elementor/thumbs/Logo_VPJ_Pecuaria_500x500-1-px12mqh8pvyvzznziu3oe03857dsw7iucidb5ihm2o.png"
          alt="VPJ Logo"
          className="h-8"
        />
      </div>

      <div className="flex-1 flex justify-center px-32">
        <div className="relative w-64">
          <input
            type="text"
            placeholder="Buscar..."
            className="w-full bg-[#2A2A2A] text-white pl-10 pr-4 py-1.5 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-[#E50914]"
            onFocus={() => setIsSearchFocused(true)}
            onBlur={() => setIsSearchFocused(false)}
          />
          <Search className={`absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 transition-colors ${
            isSearchFocused ? 'text-white' : 'text-gray-400'
          }`} />
        </div>
      </div>

      <div className="flex items-center gap-6">
        {[
          { icon: Trophy, color: 'text-yellow-500', label: '8.5' },
          { icon: Clock, color: 'text-blue-500', label: '24h' },
          { icon: Award, color: 'text-green-500', label: '12', onClick: () => navigate('/certificates') },
        ].map((item, index) => (
          <motion.button
            key={index}
            className="flex flex-col items-center"
            whileHover={{ scale: 1.1 }}
            onClick={item.onClick}
          >
            <item.icon className={`h-4 w-4 ${item.color}`} />
            <span className="text-xs text-gray-400 mt-0.5">{item.label}</span>
          </motion.button>
        ))}

        <div className="h-6 w-px bg-gray-700" />

        <div className="relative">
          <motion.button
            whileHover={{ scale: 1.1 }}
            className="relative"
            onClick={() => setShowNotifications(!showNotifications)}
          >
            <Bell className="h-5 w-5 text-gray-400" />
            <span className="absolute -top-1 -right-1 h-4 w-4 bg-[#E50914] text-white text-xs flex items-center justify-center rounded-full">
              3
            </span>
          </motion.button>

          {showNotifications && (
            <div className="absolute right-0 mt-2 w-80 bg-[#141414] border border-gray-800 rounded-md shadow-lg">
              <div className="p-4 border-b border-gray-800">
                <h3 className="text-white font-medium">Notificações</h3>
              </div>
              <div className="py-2">
                {mockUser.alerts.map(alert => (
                  <div key={alert.id} className="px-4 py-3 hover:bg-[#2A2A2A] transition-colors">
                    <p className="text-sm text-gray-300">{alert.message}</p>
                    <span className="text-xs text-gray-500 mt-1">{alert.date}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="relative">
          <button 
            className="flex items-center gap-2"
            onClick={() => setShowProfileMenu(!showProfileMenu)}
          >
            <img
              src={mockUser.avatar}
              alt="Profile"
              className="h-8 w-8 rounded-full"
            />
          </button>

          {showProfileMenu && (
            <ProfileMenu user={mockUser} onClose={() => setShowProfileMenu(false)} />
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;