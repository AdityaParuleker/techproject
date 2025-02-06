import React from "react";

const JobFilter = ({ filters, onFilterChange }) => {
  return (
    <div className="job-filter">
      <input
        type="text"
        placeholder="Search for Job"
        name="search"
        onChange={onFilterChange}
      />
      <select name="department" value={filters.department} onChange={onFilterChange}>
        <option value="">Department</option>
        <option value="SALES & MARKETING">SALES & MARKETING</option>
        <option value="CONTENT & DESIGN">CONTENT & DESIGN</option>
        <option value="ENGINEERING">ENGINEERING</option>
      </select>
      <select name="location" value={filters.location} onChange={onFilterChange}>
        <option value="">Location</option>
        <option value="Remote">Remote</option>
        <option value="Marinha Grande - Leiria">Marinha Grande - Leiria</option>
        <option value="Teknorix HQ-Verna">Teknorix HQ-Verna</option>
      </select>
    </div>
  );
};

export default JobFilter;