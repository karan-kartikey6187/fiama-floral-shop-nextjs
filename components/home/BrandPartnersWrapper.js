'use client'

import dynamic from 'next/dynamic'

const BrandPartners = dynamic(
    () => import('./BrandPartners').then((mod) => mod.BrandPartners),
    {
        ssr: false,
    }
)

export default function BrandPartnersWrapper() {
    return <BrandPartners />
}