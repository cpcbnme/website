'use client'

import { discordId } from '@/utils/constants'
import clsx from 'clsx'
import Image from 'next/image'
import { SiDiscord, SiSpotify } from 'react-icons/si'
import { Data, useLanyardWS } from 'use-lanyard'
import { CardHoverEffect, hoverClassName } from './card-hovering'
import { FiArrowUp } from 'react-icons/fi'

export interface DiscordStatusProps {
    presence: Data
}

export default function DiscordStatus({ presence }: DiscordStatusProps) {
    const andromeda = useLanyardWS(discordId, {
        initialData: presence,
    })!

    const status = andromeda.discord_status ?? 'offline'
    return (
        <>
            <CardHoverEffect
                className={clsx('col-span-3 flex h-52 md:col-span-2')}
            >
                <div
                    className={clsx(
                        `group relative flex h-full overflow-hidden rounded-2xl w-full`,
                        hoverClassName,
                        {
                            online: 'bg-green-500 border border-green-600',
                            offline: 'bg-gray-500 border border-gray-600',
                            dnd: 'bg-red-500 border border-red-600',
                            idle: 'bg-yellow-500 border border-yellow-600',
                        }[status]
                    )}
                >
                    <span className="absolute inset-0 -z-10">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                            src={`https://cdn.discordapp.com/avatars/${discordId}/${presence.discord_user.avatar}`}
                            className="absolute inset-0 h-full w-full bg-black object-cover object-center brightness-50"
                            alt={`Discord avatar of ${presence.discord_user.username}`}
                        />
                    </span>

                    <span className="flex flex-1 flex-col justify-between p-6 text-white">
                        <span className="flex justify-between space-x-12 items-center">
                            <SiDiscord className="text-2xl" />
                            <span className="text-sm opacity-80 transition duration-500 group-hover:opacity-100">
                                {presence.discord_user.username}
                            </span>
                        </span>

                        <div className="space-y-0.5">
                            <h2 className="font-title font-bold">{status}</h2>
                        </div>
                    </span>
                </div>
            </CardHoverEffect>
        </>
    )
}
