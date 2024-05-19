import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function IconLinks({ url, image }: { url: string, image: any }) {
    return (
        <Link href={url} target='_blank' className='w-8 h-8 hover:scale-105 transition-all aspect-square inline-block relative' >

            <Image src={image} alt={url} sizes='100%' objectFit='contain' fill unoptimized className='relative ' ></Image>
        </Link>
    )
}
