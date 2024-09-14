"use client";
import React from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

const ToggleButton = () => {
    // Define links with name and href
    const links = [
        { name: "Today", href: "/" },
        { name: "This Week", href: "/thisweek" }
    ];

    const pathname = usePathname(); // Get the current pathname

    return (
        <div className="flex space-x-4 container mx-auto px-2 mt-10">
            <h2 className='text-3xl font-bold'>Trending</h2>
            <div className='border-2 dark:border-white border-black rounded-full items-center  flex  gap-4'>
            {links.map((item, index) => {
                // Determine if the current link is active more precisely
                const isActive = pathname === item.href;
            
                return (
                    <Link href={item.href} key={index}>
                        <span
                            className={`${isActive ? "bg-input-gradient " : ""} 
                                px-3 py-1 w-20 transition-all duration-500 ease-in-out cursor-pointer rounded-full p-3 `}
                        >
                            {item.name}
                        </span>
                    </Link>
                );
            }
            )}
        </div>
        </div>
    );
};

export default ToggleButton;
