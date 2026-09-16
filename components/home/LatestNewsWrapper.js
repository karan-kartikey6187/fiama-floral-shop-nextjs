'use client'

import dynamic from 'next/dynamic'

const LatestNews = dynamic(() => import('./LatestNews').then((mod) => mod.LatestNews),
    {
        ssr: false,
    }
)

export default function LatestNewsWrapper() {
    return <LatestNews />
}