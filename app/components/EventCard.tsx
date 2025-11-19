"use client";

import Image from "next/image";
import Link from "next/link";
import { useTransition } from "react";

interface Props {
    title: string;
    image: string;
    slug: string;
    location: string;
    date: string;
    time: string;
}

const EventCard = ({ title, image, slug, location, date, time }: Props) => {
    const [isPending, startTransition] = useTransition();

    const handleClick = (e: React.MouseEvent) => {
        startTransition(() => {
        });
    };

    return (
        <div className="relative">
            {isPending && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/40 z-10">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white"></div>
                </div>
            )}

            <Link href={`/events/${slug}`} id="event-card" onClick={handleClick}>
                <Image src={image} alt={title} width={410} height={300} className="poster" />
                <div className="flex flex-row gap-2">
                    <Image src="/icons/pin.svg" alt="location" width={14} height={14} />
                    <p>{location}</p>
                </div>

                <p className="title">{title}</p>

                <div className="datetime">
                    <div>
                        <Image src="/icons/calendar.svg" alt="date" width={14} height={14} />
                        <p>{date}</p>
                    </div>
                    <div>
                        <Image src="/icons/clock.svg" alt="date" width={14} height={14} />
                        <p>{time}</p>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default EventCard;
