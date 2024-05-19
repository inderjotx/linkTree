import React from 'react'

export default function Badge(item: { icon: string, text: string }) {
    return (
        <div className=' p-1 px-2 gap-1 flex  text-xs   border border-gray-500 cursor  text-white rounded-xl'>
            <span>{item.icon}</span>
            <span >{item.text}</span>
        </div>
    )
}
