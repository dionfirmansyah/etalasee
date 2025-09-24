// components/Layout.js
import Head from 'next/head';
import { useState } from 'react';

export default function Layout({
    children,
    title = 'My App',
}: Readonly<{ children: React.ReactNode; title?: string }>) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>

            <div className="min-h-screen bg-gray-50">
                {/* Header */}
                <header className="sticky top-0 z-50 bg-white shadow-sm">
                    <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
                        <div className="flex h-16 items-center justify-between">
                            {/* Logo */}
                            <div className="flex-shrink-0">
                                <h1 className="text-xl font-bold text-gray-900">MyApp</h1>
                            </div>

                            {/* Desktop Navigation */}
                            <nav className="hidden space-x-8 md:flex">
                                <a href="/" className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-blue-600">
                                    Home
                                </a>
                                <a
                                    href="/about"
                                    className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-blue-600"
                                >
                                    About
                                </a>
                                <a
                                    href="/services"
                                    className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-blue-600"
                                >
                                    Services
                                </a>
                                <a
                                    href="/contact"
                                    className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-blue-600"
                                >
                                    Contact
                                </a>
                            </nav>

                            {/* Mobile menu button */}
                            <button
                                className="rounded-md p-2 text-gray-700 hover:bg-gray-100 md:hidden"
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                            >
                                <svg
                                    className="h-6 w-6"
                                    fill="none"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    {isMenuOpen ? (
                                        <path d="M6 18L18 6M6 6l12 12" />
                                    ) : (
                                        <path d="M4 6h16M4 12h16M4 18h16" />
                                    )}
                                </svg>
                            </button>
                        </div>
                    </div>

                    {/* Mobile Navigation */}
                    {isMenuOpen && (
                        <div className="border-t border-gray-200 bg-white md:hidden">
                            <div className="space-y-1 px-4 py-2">
                                <a href="/" className="block rounded-md px-3 py-2 text-gray-700 hover:bg-gray-100">
                                    Home
                                </a>
                                <a href="/about" className="block rounded-md px-3 py-2 text-gray-700 hover:bg-gray-100">
                                    About
                                </a>
                                <a
                                    href="/services"
                                    className="block rounded-md px-3 py-2 text-gray-700 hover:bg-gray-100"
                                >
                                    Services
                                </a>
                                <a
                                    href="/contact"
                                    className="block rounded-md px-3 py-2 text-gray-700 hover:bg-gray-100"
                                >
                                    Contact
                                </a>
                            </div>
                        </div>
                    )}
                </header>

                {/* Main Content */}
                <main className="mx-auto max-w-4xl px-4 py-6 sm:px-6 lg:px-8">{children}</main>

                {/* Footer */}
                <footer className="mt-12 border-t bg-white">
                    <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                            {/* Company Info */}
                            <div>
                                <h3 className="mb-4 text-lg font-semibold text-gray-900">MyApp</h3>
                                <p className="text-sm text-gray-600">
                                    Aplikasi terbaik untuk kebutuhan Anda dengan desain yang responsif dan modern.
                                </p>
                            </div>

                            {/* Quick Links */}
                            <div>
                                <h4 className="text-md mb-4 font-semibold text-gray-900">Quick Links</h4>
                                <ul className="space-y-2 text-sm">
                                    <li>
                                        <a href="/" className="text-gray-600 hover:text-blue-600">
                                            Home
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/about" className="text-gray-600 hover:text-blue-600">
                                            About
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/services" className="text-gray-600 hover:text-blue-600">
                                            Services
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/contact" className="text-gray-600 hover:text-blue-600">
                                            Contact
                                        </a>
                                    </li>
                                </ul>
                            </div>

                            {/* Contact */}
                            <div>
                                <h4 className="text-md mb-4 font-semibold text-gray-900">Contact</h4>
                                <div className="space-y-2 text-sm text-gray-600">
                                    <p>Email: info@myapp.com</p>
                                    <p>Phone: +62 123 456 789</p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-8 border-t border-gray-200 pt-6 text-center">
                            <p className="text-sm text-gray-500">© 2025 MyApp. All rights reserved.</p>
                        </div>
                    </div>
                </footer>
            </div>
        </>
    );
}
