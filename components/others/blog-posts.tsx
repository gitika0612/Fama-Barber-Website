"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const blogPosts = [
    {
        id: 1,
        title: "Top 5 Hairstyles Trending in 2025",
        excerpt:
            "Discover the hottest hairstyles that are dominating this year, from classic fades to bold textured cuts.",
        image:
            "https://www.uklash.com/cdn/shop/articles/Copy_of_Advent_Calendars_520x500_520x500_520x500_520x500_96e037ef-ab81-4a92-ac3d-91a3a897d2af.png?v=1736947737&width=414",
        url: "https://www.uklash.com/blogs/news/2025-hair-trends-hairstyles-haircare-tips",
    },
    {
        id: 2,
        title: "Grooming Tips for a Perfect Beard",
        excerpt:
            "Learn how to maintain and style your beard like a pro with our expert grooming tips and product recommendations.",
        image:
            "https://www.toppik.com/cdn/shop/articles/How_to_Grow_the_Perfect_Beard_Hero_69e024a0-2c62-4222-ace3-acb1a357991e.jpg?v=1743616332",
        url: "https://www.toppik.com/blogs/hair-blog/the-perfect-beard-beard-growing-grooming-tips",
    },
    {
        id: 3,
        title: "Skin Care Routine for Men",
        excerpt:
            "A simple and effective skincare routine tailored for men to keep your skin fresh and healthy every day.",
        image:
            "https://peteandpedro.com/cdn/shop/articles/shutterstock_1679091283_1024x1024.jpg",
        url: "https://peteandpedro.com/blogs/the-pedro-post/mens-face-body-skincare-routine-guide-tips",
    },
];

const BlogSection = () => {
    const [showFullPostId, setShowFullPostId] = useState<number | null>(null);

    return (
        <section
            id="blog"
            className="bg-white dark:bg-[#0a0a23] md:py-20 py-12 px-6 md:px-20 text-black dark:text-white"
        >
            <div className="max-w-7xl mx-auto text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-bold text-blue-600 mb-4">
                    Tips & Style Guide
                </h2>
                <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
                    Stay updated with the latest grooming trends, style advice, and expert tips
                    to keep you looking sharp.
                </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3 max-w-7xl mx-auto">
                {blogPosts.map((post) => (
                    <div
                        key={post.id}
                        className="relative rounded-xl p-1 bg-transparent transition-all duration-300 group
                 hover:bg-gradient-to-r hover:from-blue-500 hover:via-purple-600 hover:to-pink-500
                 hover:scale-105 hover:shadow-xl"
                        style={{ transformOrigin: 'center' }}
                    >
                        <div className="bg-gray-100 dark:bg-[#1a1a2e] rounded-lg overflow-hidden shadow-md flex flex-col">
                            <div className="relative w-full h-48 overflow-hidden rounded-t-lg">
                                <Image
                                    src={post.image}
                                    alt={post.title}
                                    fill
                                    sizes="(max-width: 768px) 100vw, 33vw"
                                    className="object-cover rounded-t-lg transition-transform duration-300 group-hover:scale-105"
                                    unoptimized={post.image.startsWith("data:")}
                                />
                            </div>
                            <div className="p-6 flex flex-col flex-grow">
                                <h3 className="text-xl font-semibold mb-2 text-white">{post.title}</h3>
                                <p className="text-gray-700 dark:text-gray-300 flex-grow mb-6">
                                    {post.excerpt}
                                </p>
                                <a href={post.url} target="_blank" rel="noopener noreferrer">
                                    <Button
                                        className="cursor-pointer relative overflow-hidden"
                                    >
                                        <span className="transition-colors duration-300 group-hover:text-transparent 
                   bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 
                   bg-clip-text">
                                            Read More
                                        </span>
                                    </Button>

                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>


        </section>
    );
};

export default BlogSection;
