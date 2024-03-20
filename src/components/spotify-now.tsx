'use client'
import clsx from 'clsx'
import Link from 'next/link'
import { FiArrowUpRight } from 'react-icons/fi'
import { SiSpotify } from 'react-icons/si'
import { CardHoverEffect, hoverClassName } from './card-hovering'
import { Data, useLanyardWS } from 'use-lanyard'
import { formatList } from '@/utils/lists'
import { discordId } from '@/utils/constants'

export interface SpotifyNowProps {
    richpresence: Data
}

export default function SpotifyNow({ richpresence }: SpotifyNowProps) {
    const aurora = useLanyardWS(discordId, {
        initialData: richpresence,
    })!
    return (
        <>
            <CardHoverEffect className="col-span-6 h-52 md:col-span-3">
                {!aurora?.spotify || !aurora.spotify.album_art_url ? (
                    <Link
                        href="https://open.spotify.com/playlist/4wZT3WMphRpp9Zma0HyZw9?si=cc8945597a7a4e94"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={clsx(
                            'group relative flex h-full overflow-hidden rounded-2xl',
                            hoverClassName
                        )}
                    >
                        <span className="absolute inset-0 -z-10">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                                src="https://imgix.ranker.com/list_img_v2/14456/2774456/original/2774456-u1?auto=format&q=50&fit=crop&fm=pjpg&dpr=2&crop=faces&h=185.86387434554973&w=355"
                                className="absolute inset-0 h-full w-full bg-black object-cover object-center brightness-50"
                                alt="Album cover art"
                            />
                        </span>

                        <span className="flex flex-1 flex-col justify-between p-6 text-white">
                            <span className="flex justify-between">
                                <SiSpotify className="text-2xl" />
                                <FiArrowUpRight className="text-xl opacity-50 transition duration-500 group-hover:opacity-100" />
                            </span>

                            <div className="space-y-0.5">
                                <h2 className="font-title font-bold">
                                    <span className="font-medium">
                                        playlist:
                                    </span>{' '}
                                    80's
                                </h2>

                                <p className="text-sm">
                                    Listen to my favorite 80's songs. I'm pretty
                                    sure you'll love it.
                                </p>
                            </div>
                        </span>
                    </Link>
                ) : (
                    <Link
                        href={`https://open.spotify.com/track/${aurora.spotify.track_id}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={clsx(
                            'group relative flex h-full overflow-hidden rounded-2xl',
                            hoverClassName
                        )}
                    >
                        <span className="absolute inset-0 -z-10">
                            <img
                                src={aurora.spotify.album_art_url}
                                className="absolute inset-0 h-full w-full scale-[1.15] bg-black object-cover object-center brightness-50 transition-all duration-500 will-change-[transform,_filter] group-hover:scale-[1.35] group-hover:brightness-[0.4]"
                                alt="Album cover art"
                            />
                        </span>

                        <span className="flex flex-1 flex-col justify-between p-6 text-white">
                            <span className="flex justify-between">
                                <SiSpotify className="text-2xl" />
                                <FiArrowUpRight className="text-xl opacity-50 transition duration-500 group-hover:opacity-100" />
                            </span>

                            <span>
                                <h2>
                                    <span
                                        className="mb-0.5 mr-1 inline-block h-2 w-2 animate-pulse rounded-full bg-green-500"
                                        aria-hidden
                                    />{' '}
                                    Listening to{' '}
                                    <span
                                        className="font-bold"
                                        suppressHydrationWarning
                                    >
                                        {aurora.spotify.song}
                                    </span>{' '}
                                    by{' '}
                                    <span
                                        className="font-bold"
                                        suppressHydrationWarning
                                    >
                                        {formatList(
                                            aurora.spotify.artist.split('; '),
                                            'conjunction'
                                        )}
                                    </span>
                                    .
                                </h2>
                            </span>
                        </span>
                    </Link>
                )}
            </CardHoverEffect>
        </>
    )
}
