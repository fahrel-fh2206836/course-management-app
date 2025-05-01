import Link from 'next/link';
import React from 'react'

export default function NavItem({ href, label, icon, active }) {
    return (
        <div className={`nav-index ${active ? 'active' : ''}`}>
        <li><i className={`bx ${icon}`}></i> <Link href={href}>{label}</Link></li>
        </div>
    );
}
