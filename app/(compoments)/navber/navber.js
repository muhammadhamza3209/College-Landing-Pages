import React from "react";

import Image from "next/image";

import Link from "next/link";

import { FaBars } from "react-icons/fa6";

export default function Navber() {
  return (
    <>
      <nav>
        <div class="logo">Xplore kill</div>
        <input type="checkbox" id="click" />
        <label for="click">
          <FaBars className="text-white text-2xl" />
        </label>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="coures">Coures</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/blog">Blog</Link>
          </li>
          <li>
            <Link href="/contect">Contect</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
