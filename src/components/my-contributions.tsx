import Link from 'next/link'
import { CardHoverEffect, hoverClassName } from './card-hovering'
import clsx from 'clsx'
import { SiGithub } from 'react-icons/si'
import { FiArrowRight } from 'react-icons/fi'
import matrix from '@/images/matrix.gif'

export default function MyContributions() {
    return (
        <>
            <CardHoverEffect className="col-span-3 h-full md:col-span-3">
                <Link
                    href="https://github.com/cpcbnme"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={clsx(
                        'group relative flex h-full w-full flex-col justify-between overflow-hidden rounded-2xl text-white',
                        hoverClassName
                    )}
                >
                    <span
                        aria-hidden
                        className="pointer-events-none absolute inset-0 -z-20"
                    >
                        <img
                            src={matrix.src}
                            alt="The Matrix scrolling characters effect"
                            className="absolute inset-0 h-full w-full object-cover object-center invert dark:brightness-[0.7] dark:invert-0"
                        />

                        <span
                            aria-hidden
                            className="absolute inset-0 bg-gradient-to-t from-neutral-900/60 to-neutral-900/20 dark:bg-neutral-900/50"
                        />
                    </span>

                    <span aria-hidden className="px-6 pt-6">
                        <span className="flex justify-between">
                            <SiGithub className="text-3xl" />
                            <FiArrowRight className="text-xl opacity-50 transition duration-500 group-hover:opacity-100" />
                        </span>
                    </span>

                    <span className="space-y-0.5 px-6 pb-6">
                        <span className="block font-semibold">GitHub</span>

                        <span className="block text-sm">
                            My open source work &amp; contributions.
                        </span>
                    </span>
                </Link>
            </CardHoverEffect>
        </>
    )
}
