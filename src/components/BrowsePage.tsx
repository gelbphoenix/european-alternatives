import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { alternatives } from '../data';
import AlternativeCard from './AlternativeCard';
import Filters from './Filters';
import type { CategoryId, SelectedFilters, SortBy, ViewMode } from '../types';

export default function BrowsePage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilters, setSelectedFilters] = useState<SelectedFilters>({
    category: [],
    country: [],
    pricing: [],
    openSourceOnly: false,
  });
  const [sortBy, setSortBy] = useState<SortBy>('name');
  const [viewMode, setViewMode] = useState<ViewMode>('grid');

  const filteredAlternatives = useMemo(() => {
    let result = [...alternatives];

    if (searchTerm.trim()) {
      const term = searchTerm.toLowerCase();
      result = result.filter(
        (alt) =>
          alt.name.toLowerCase().includes(term) ||
          alt.description.toLowerCase().includes(term) ||
          alt.replacesUS.some((r) => r.toLowerCase().includes(term)) ||
          alt.tags.some((t) => t.toLowerCase().includes(term))
      );
    }

    if (selectedFilters.category.length > 0) {
      result = result.filter((alt) =>
        selectedFilters.category.includes(alt.category as CategoryId)
      );
    }

    if (selectedFilters.country.length > 0) {
      result = result.filter((alt) =>
        selectedFilters.country.includes(alt.country)
      );
    }

    if (selectedFilters.pricing.length > 0) {
      result = result.filter((alt) =>
        selectedFilters.pricing.includes(alt.pricing)
      );
    }

    if (selectedFilters.openSourceOnly) {
      result = result.filter((alt) => alt.isOpenSource);
    }

    result.sort((a, b) => {
      switch (sortBy) {
        case 'name':
          return a.name.localeCompare(b.name);
        case 'country':
          return a.country.localeCompare(b.country);
        case 'category':
          return a.category.localeCompare(b.category);
        default:
          return 0;
      }
    });

    return result;
  }, [searchTerm, selectedFilters, sortBy]);

  const handleFilterChange = (filterType: keyof SelectedFilters, values: string[] | boolean) => {
    setSelectedFilters((prev) => ({
      ...prev,
      [filterType]: values,
    }));
  };

  return (
    <div className="browse-page">
      <motion.div
        className="browse-header"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="browse-title">All Alternatives</h1>
        <p className="browse-subtitle">
          Explore European and open-source alternatives to US tech giants.
          Filter by category, country, or pricing to find what you need.
        </p>
      </motion.div>

      <motion.div
        className="browse-content"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <Filters
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
          selectedFilters={selectedFilters}
          onFilterChange={handleFilterChange}
          sortBy={sortBy}
          onSortChange={setSortBy}
          viewMode={viewMode}
          onViewModeChange={setViewMode}
          totalCount={alternatives.length}
          filteredCount={filteredAlternatives.length}
        />

        {filteredAlternatives.length > 0 ? (
          <div className={`alt-grid${viewMode === 'list' ? ' list-view' : ''}`}>
            {filteredAlternatives.map((alt, index) => (
              <motion.div
                key={alt.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 + index * 0.05 }}
              >
                <AlternativeCard alternative={alt} viewMode={viewMode} />
              </motion.div>
            ))}
          </div>
        ) : (
          <motion.div
            className="no-results"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
          >
            {alternatives.length === 0 ? (
              <div className="empty-catalogue">
                <div className="empty-icon" aria-hidden="true">
                  <span className="fi fi-eu"></span>
                </div>
                <h2>Catalogue Coming Soon</h2>
                <p>
                  We're building a comprehensive directory of European and open-source
                  alternatives. Check back soon or contribute to the project.
                </p>
              </div>
            ) : (
              <p>No alternatives found. Try different filter criteria.</p>
            )}
          </motion.div>
        )}
      </motion.div>
    </div>
  );
}
