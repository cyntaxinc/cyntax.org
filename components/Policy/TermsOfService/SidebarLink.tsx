"use client";
import Link from "next/link";

const SidebarLink = () => {
  return (
    <>
      <li className="block">
        <Link
          href={`/policy`}
          className={`flex w-full rounded-sm px-3 py-2 text-base text-black dark:text-white`}
        >
          Introduction
        </Link>
        <Link
          href={`/policy/privacy`}
          className={`flex w-full rounded-sm px-3 py-2 text-base text-black dark:text-white `}
        >
          Privacy Policy
        </Link>
        <Link
          href={`/policy/termsofservice`}
          className={`flex w-full rounded-sm bg-stroke px-3 py-2 text-base text-black dark:bg-blackho dark:text-white `}
        >
          Terms of Service
        </Link>
      </li>
    </>
  );
};

export default SidebarLink;
