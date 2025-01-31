import React from 'react';
import { Link } from 'react-router-dom';
import SearchOrder from '../Features/order/SearchOrder';
import UserName from '../Features/user/UserName';

export default function Header() {
  return (
    <header className="flex items-center justify-between border-b  border-stone-200 bg-yellow-500 px-4 py-3 uppercase sm:px-6">
      <Link to="/" className="tracking-widest">
        Fast React Pizza Co.
      </Link>
      <SearchOrder />
      <UserName />
    </header>
  );
}
