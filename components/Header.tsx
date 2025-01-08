import { BookOpenText, FilePen } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

function Header() {
return (
    <header className="relative p-16 text-center bg-black">
        <Link href="/">
            <h1 className="text-6xl mb-5 bg-gradient-to-r from-[#5295d2] from-10% via-[#52b5d2] via-30% to-[#54d6c6] to-90% text-transparent bg-clip-text">StoryTeller</h1>
            <div className="space-x-5 h-20 lg:h-24 text-4xl lg:text-6xl bg-gradient-to-r from-[#5295d2] from-10% via-[#52b5d2] via-30% to-[#54d6c6] to-90% text-transparent bg-clip-text">
                <h2>Seeing Life Through Stories</h2>
                
            </div>
        </Link>
        <div className="absolute -top-5 right-5 flex space-x-2">
            <Link href="/">
                <FilePen
                    className='w-9 h-9 lg:w-10 lg:h-10 mx-auto p-2 text-[#527bd2] mt-10 border border-[#5295d2] rounded-md hover:opacity-55 cursor-pointer'
                />
            </Link>
            <Link href="/stories">
                <BookOpenText 
                
                className='w-9 h-9 lg:w-10 lg:h-10 mx-auto p-2 text-[#527bd2] mt-10 border border-[#5295d2] rounded-md hover:opacity-55 cursor-pointer'                />
            </Link>
        </div>
    </header>
)
}

export default Header                            