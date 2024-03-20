import type { Metadata } from 'next'
import './globals.css'
import { Inter, Newsreader } from 'next/font/google'
import font from 'next/font/local'

export const metadata: Metadata = {
    title: 'François López',
    description:
        "Hi. My name is François López. I'm a software engineer from the Ecuador. I've been programming for as long as I can remember. I'm passionate about software and DevOps. I love to learn new things and share my knowledge with others.",
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <>
            <html lang="en">
                <body
                    className={`bg-grid-neutral-200/40 bg-neutral-100 text-neutral-900 antialiased dark:bg-grid-neutral-800/50 dark:bg-neutral-900 dark:text-neutral-100`}
                >
                    {children}
                </body>
            </html>
        </>
    )
}
