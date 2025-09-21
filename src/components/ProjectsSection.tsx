import { motion } from 'framer-motion';
import { useState } from 'react';
import { MatrixProjectCard } from './MatrixProjectCard';
import { projects } from '../data/projects';

export const ProjectsSection = () => {
  const [filter, setFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  // Get unique categories from projects
  const categories = ['all', ...new Set(projects.map(project => {
    // Simple categorization based on title/description
    const title = project.title.toLowerCase();
    const desc = project.description.toLowerCase();
    
    if (title.includes('ai') || title.includes('neuro') || desc.includes('ai') || desc.includes('machine learning')) return 'ai';
    if (title.includes('game') || title.includes('quest') || desc.includes('game')) return 'games';
    if (title.includes('physics') || title.includes('simulator') || desc.includes('simulation')) return 'simulation';
    if (title.includes('task') || title.includes('calendar') || title.includes('note') || desc.includes('management')) return 'productivity';
    if (title.includes('cinema') || title.includes('photo') || title.includes('gallery') || desc.includes('media')) return 'media';
    return 'utilities';
  }))];

  // Filter projects based on category and search term
  const filteredProjects = projects.filter(project => {
    const matchesFilter = filter === 'all' || (() => {
      const title = project.title.toLowerCase();
      const desc = project.description.toLowerCase();
      
      switch (filter) {
        case 'ai':
          return title.includes('ai') || title.includes('neuro') || desc.includes('ai') || desc.includes('machine learning');
        case 'games':
          return title.includes('game') || title.includes('quest') || desc.includes('game');
        case 'simulation':
          return title.includes('physics') || title.includes('simulator') || desc.includes('simulation');
        case 'productivity':
          return title.includes('task') || title.includes('calendar') || title.includes('note') || desc.includes('management');
        case 'media':
          return title.includes('cinema') || title.includes('photo') || title.includes('gallery') || desc.includes('media');
        case 'utilities':
          return !['ai', 'games', 'simulation', 'productivity', 'media'].some(cat => {
            switch (cat) {
              case 'ai':
                return title.includes('ai') || title.includes('neuro') || desc.includes('ai') || desc.includes('machine learning');
              case 'games':
                return title.includes('game') || title.includes('quest') || desc.includes('game');
              case 'simulation':
                return title.includes('physics') || title.includes('simulator') || desc.includes('simulation');
              case 'productivity':
                return title.includes('task') || title.includes('calendar') || title.includes('note') || desc.includes('management');
              case 'media':
                return title.includes('cinema') || title.includes('photo') || title.includes('gallery') || desc.includes('media');
              default:
                return false;
            }
          });
        default:
          return true;
      }
    })();

    const matchesSearch = searchTerm === '' || 
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase());

    return matchesFilter && matchesSearch;
  });

  return (
    <section id="projects" className="min-h-screen py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto"
        >
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-mono">
              <span className="text-green-400">{'>'}</span> projects.exe
            </h2>
            <div className="h-1 w-32 bg-gradient-to-r from-green-400 to-blue-400 mb-6"></div>
            <p className="text-gray-400 text-lg max-w-2xl">
              A collection of applications and experiments showcasing my journey in software development.
            </p>
          </motion.div>

          {/* Search and Filter Controls */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }} // Much faster transition
            className="mb-8"
          >
            <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
              {/* Search */}
              <div className="relative flex-1 max-w-md">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <span className="text-green-400 font-mono">$</span>
                </div>
                <input
                  type="text"
                  placeholder="search projects..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-8 pr-4 py-2 bg-black/50 border border-green-500/30 rounded text-white placeholder-gray-500 font-mono focus:outline-none focus:border-green-400 transition-colors"
                />
              </div>

              {/* Category Filter */}
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <motion.button
                    key={category}
                    onClick={() => setFilter(category)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`px-4 py-2 rounded font-mono text-sm border transition-all ${
                      filter === category
                        ? 'bg-green-500/20 border-green-400 text-green-400'
                        : 'bg-black/50 border-gray-600 text-gray-400 hover:border-green-500/50 hover:text-green-300'
                    }`}
                  >
                    {category === 'all' ? 'all' : `--${category}`}
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Results count */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mt-4 text-sm text-gray-400 font-mono"
            >
              Found {filteredProjects.length} project{filteredProjects.length !== 1 ? 's' : ''}
              {searchTerm && ` matching "${searchTerm}"`}
              {filter !== 'all' && ` in category "${filter}"`}
            </motion.div>
          </motion.div>

          {/* Projects Grid */}
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project, index) => (
              <MatrixProjectCard
                key={project.title}
                project={project}
                index={index}
              />
            ))}
          </motion.div>

          {/* No results message */}
          {filteredProjects.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-xl font-mono text-green-400 mb-2">No projects found</h3>
              <p className="text-gray-400">Try adjusting your search or filter criteria.</p>
              <motion.button
                onClick={() => {
                  setSearchTerm('');
                  setFilter('all');
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-4 px-4 py-2 bg-green-500/20 border border-green-500 text-green-400 rounded font-mono hover:bg-green-500/30 transition-colors"
              >
                {'>'} reset filters
              </motion.button>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
};
