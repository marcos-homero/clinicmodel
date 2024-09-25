"use client";

import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";

const Search = () => {
  const [input, setInput] = useState("");
  console.log(input);

  return (
    <div
      role="search"
      className={`flex items-center rounded-md border-x border-b-2 border-b-slate-400 border-t bg-slate-100 py-2 px-8 dark:border-none dark:border-muted-foreground dark:bg-tertiary w-full`}
    >
      <label htmlFor="search" className="sr-only">
        Pesquisa
      </label>
      <FaSearch size={24} className="text-slate-600" aria-hidden="true" />
      <input
        id="search"
        aria-label="Campo de pesquisa"
        className={`flex h-11 w-full bg-background py-3 pl-4 text-base text-slate-600 bg-slate-100 outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50 dark:bg-tertiary dark:text-white`}
        placeholder="Buscar consulta ou exame"
        onChange={(e) => setInput(e.target.value)}
      />
    </div>
  );
};

export default Search;
