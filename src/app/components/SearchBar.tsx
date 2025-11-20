"use client";

import { useState } from "react";

interface SearchBarProps {
  data: Array<{ name: string; [key: string]: any }>;
  onSearch: (results: Array<any>) => void;
  placeholder?: string;
}

export default function SearchBar({ data, onSearch, placeholder }: SearchBarProps) {
  const [query, setQuery] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
    const results = data.filter((item) =>
      item.name.toLowerCase().includes(value.toLowerCase())
    );
    onSearch(results);
  };

  return (
    <div className="mb-6 flex justify-center">
      <input
        type="text"
        value={query}
        onChange={handleChange}
        placeholder={placeholder || "بحث..."}
        className="w-full max-w-md px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
}
