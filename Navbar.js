// components/Navbar.js
import Link from "next/link";
import { FaSearch } from 'react-icons/fa';

function Navbar() {
  return (
    <nav className="bg-blue-500 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl text-white">
          <Link href="/">For U Online Shopping</Link>
        </div>
        <div className="flex items-center border rounded-md p-2 space-x-4">
      <input
        type="text"
        placeholder="What can we help you find?"
        className="border-b-1 w-full  focus:outline-none focus:border-indigo-500"
      />
      <button className="text-indigo-100">
        <FaSearch />
      </button>
    </div>
        <ul>
          <li className="space-x-1">
            <Link href="/products">
              <p className="text-white hover:underline"> Products </p>
            </Link>
          </li>
          <li className="space-x-4">
            <Link href="/cart">
              <p className="text-white hover:underline"> Cart </p>
            </Link>
          </li>
          <ul>
            <li>

            </li>
          </ul>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;