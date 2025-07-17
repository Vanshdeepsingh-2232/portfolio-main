import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Github } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface ProjectCardProps {
    title: string;
    description: string;
    image: string;
    link: string;
    tags: string[];
}

export default function ProjectCard({
    title,
    description,
    image,
    link,
    tags,
}: ProjectCardProps) {
    const slug = title.toLowerCase().replace(/[^a-z0-9\s-]/g, '').replace(/\s+/g, '-');

    return (
        <Card className="flex flex-col h-full overflow-hidden rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-black shadow-lg hover:shadow-xl transition-transform duration-300 transform hover:scale-105">
            <Link href={`/projects/${slug}`} className="flex flex-col flex-grow">
                {/* Image Section */}
                <div className="relative aspect-[2/1] w-full">
                    <Image
                        src={image || "/placeholder.svg?height=400&width=600"}
                        alt={title}
                        fill
                        className="object-cover transition-transform duration-300 hover:scale-105"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        priority
                    />
                </div>

                {/* Content Section */}
                <CardContent className="p-5 flex-grow">
                    <h3 className="font-bold text-xl mb-3 text-black dark:text-white">
                        {title}
                    </h3>
                    <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                        {description}
                    </p>

                    {/* Tech Tags */}
                    <div className="flex flex-wrap gap-2">
                        {tags.map((tag) => (
                            <span
                                key={tag}
                                className="inline-flex items-center rounded-md bg-gray-200 dark:bg-gray-800 px-2 py-1 text-xs font-medium text-gray-900 dark:text-gray-100 ring-1 ring-gray-500/10"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                </CardContent>
            </Link>

            {/* Footer Section (GitHub Link) */}
            <CardFooter className="p-5 pt-0 mt-auto">
                <Link
                    href={link}
                    target="_blank"
                    className="inline-flex items-center gap-2 text-sm font-medium text-black dark:text-white hover:underline transition-colors"
                >
                    <Github className="h-4 w-4" />
                    View on GitHub
                </Link>
            </CardFooter>
        </Card>
    );
}
