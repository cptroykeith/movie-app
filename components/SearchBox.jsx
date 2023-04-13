"use client";
import React, { useState } from 'react'
import { useRouter } from 'next/navigation';

export default function 
() { 
  const [search, setSearch] =useState("");
  const router =useRouter();
  function handleSubmit(e) {
    e.preventDefault();
    if (!search) return;
    router.push('/search/$')
  }

  return (
    <form
    onSubmit={handleSubmit}
    className='flex max-w-6l mx-auto justy-between items-center px-5'>
        <input 
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        type= "text" placeholder='Search box.....'
          className='w-full h-14 rounded-sm placeholder-gary-500 outline-none bg-transparent'
        />
        <button
        disabled={!search}
        type="submit"
        className="text-amber-600 disabled:text-gray-400"
      >
        Search
        </button>
    </form>
  )
}
