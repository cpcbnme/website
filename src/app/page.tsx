import Link from 'next/link'
import { FiArrowUpRight as FiArrowUpIcon } from 'react-icons/fi'
import { CardHoverEffect, hoverClassName } from '../components/card-hovering'
import clsx from 'clsx'
import { SiX } from 'react-icons/si'
import { Data } from 'use-lanyard'
import { getDiscordStatus } from '@/server/discord'
import { age, discordId } from '@/utils/constants'
import DiscordStatus from '../components/discord-status'
import { Time } from '../components/time'
import MyContributions from '../components/my-contributions'
import SpotifyNow from '../components/spotify-now'
import StackThatIUse from '../components/stack'
import Introduction from '../components/introduction'
import ContactForm from '../components/contact-form'

interface Props {
    discord_status: Data
}

const revalidate = 10

const getData = async () => {
    const discord_status = await getDiscordStatus(discordId)

    return {
        discord_status,
    }
}

export default async function Home() {
    const data = await getData()
    return (
        <div className="space-y-6">
            <main className="mx-auto grid max-w-3xl grid-cols-6 gap-6 px-6 pt-16">
                <div className="col-span-6 flex h-52 flex-col justify-between overflow-hidden rounded-2xl bg-green-200 px-8 py-8 dark:border-pink-500 dark:bg-green-500/20 dark:shadow-none dark:backdrop-blur-2xl md:col-span-4">
                    <div className="flex">
                        <Link
                            className="flex items-center justify-center space-x-1.5 rounded-full bg-pink-300 px-2 py-0.5 font-title dark:bg-pink-500/25"
                            href="#"
                            rel="noopener noreferrer"
                        >
                            <span>brands that i've worked together</span>
                            <span>
                                <FiArrowUpIcon />
                            </span>
                        </Link>
                    </div>

                    <div className="space-y-4">
                        <div>
                            <h1 className="text-xl text-green-900 dark:text-green-300 dark:text-glow-green-500/50">
                                François López
                            </h1>

                            <p className="text-green-600 dark:text-green-300/80 dark:text-glow-green-500/50 leading-4 mt-0.5">
                                {age} y/o software engineer, digital nomad,
                                product designer, and entrepreneur.
                            </p>
                        </div>
                    </div>
                </div>

                <CardHoverEffect className="col-span-3 h-full md:col-span-2">
                    <Link
                        href="https://twitter.com/frantwothousand"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={clsx(
                            'flex h-full items-center justify-center rounded-2xl bg-neutral-200 text-4xl text-black dark:bg-neutral-800 dark:text-white',
                            hoverClassName
                        )}
                    >
                        <span className="sr-only">X</span>
                        <span className="transform-gpu transition duration-500 group-hover:scale-[1.3]">
                            <SiX />
                        </span>
                    </Link>
                </CardHoverEffect>

                <DiscordStatus presence={data.discord_status} />
                <Time />
                <MyContributions />
                <SpotifyNow richpresence={data.discord_status} />
                <StackThatIUse />
                <Introduction />
                <div className="col-span-6 space-y-4 rounded-2xl bg-lime-400 p-6 text-black dark:bg-lime-500 md:col-span-6">
                    <ContactForm />
                </div>
            </main>
        </div>
    )
}
