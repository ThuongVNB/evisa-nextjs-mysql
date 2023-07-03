import Link from 'next/link';
import React from 'react'

export default function AdminSidebar() {
    const links = [
    {
        id: 1,
        title: "User",
        url: "/admin/dashboard/user",
    },
    {
        id: 2,
        title: "Visa",
        url: "/admin/dashboard/visa",
    },
    {
        id: 3,
        title: "Loại Visa",
        url: "/admin/dashboard/type_visa",
    },
    ];
  return (
    <aside>
        {links.map((link) => (
            <>
                <Link style={{height: '50px'}} key={link.id} href={link.url}>
                    {link.title}
                </Link>
                <br/>
            </>
            ))}
    </aside>
  )
}
