'use client'

import { useState } from 'react'

export default function ContactForm() {
    const [submitted, setSubmitted] = useState(false)
    const [loading, setLoading] = useState(false)

    if (submitted) {
        return (
            <div className="flex items-center justify-center h-full">
                <div className="flex flex-col items-center space-y-4">
                    <h1 className="text-3xl font-bold text-center">
                        Thank you for reaching out!
                    </h1>
                    <p className="text-center">
                        I'll get back to you as soon as possible.
                    </p>
                </div>
            </div>
        )
    }
    return (
        <>
            <div className="space-y-1">
                <h2 className="font-semibold">Let's talk 📬</h2>
                <p className="text-black/75">
                    Drop me a message with the form below, I'll get back to the
                    non-spam
                </p>
            </div>
        </>
    )
}
