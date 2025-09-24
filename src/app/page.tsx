import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { ArrowRight, Search, Shield, Star, Store, TrendingUp, Users, Zap } from 'lucide-react';

const HomePage = () => {
    const featuredStores = [
        {
            id: 1,
            name: 'Kerajinan Bambu Nusantara',
            category: 'Kerajinan',
            rating: 4.8,
            products: 156,
            location: 'Yogyakarta',
            image: 'KB',
        },
        {
            id: 2,
            name: 'Batik Heritage',
            category: 'Fashion',
            rating: 4.9,
            products: 234,
            location: 'Solo',
            image: 'BH',
        },
        {
            id: 3,
            name: 'Kuliner Tradisional',
            category: 'Makanan',
            rating: 4.7,
            products: 89,
            location: 'Bandung',
            image: 'KT',
        },
        {
            id: 4,
            name: 'Furniture Kayu Jati',
            category: 'Furniture',
            rating: 4.6,
            products: 67,
            location: 'Jepara',
            image: 'FK',
        },
    ];

    const categories = [
        { name: 'Fashion', count: 1234, icon: '👔' },
        { name: 'Makanan', count: 892, icon: '🍜' },
        { name: 'Kerajinan', count: 567, icon: '🎨' },
        { name: 'Furniture', count: 345, icon: '🪑' },
        { name: 'Elektronik', count: 234, icon: '📱' },
        { name: 'Kecantikan', count: 456, icon: '💄' },
    ];

    const stats = [
        { label: 'UMKM Terdaftar', value: '12,500+', icon: Store },
        { label: 'Produk Aktif', value: '45,000+', icon: TrendingUp },
        { label: 'Pengguna Aktif', value: '250,000+', icon: Users },
        { label: 'Transaksi Selesai', value: '1,000,000+', icon: Shield },
    ];

    return (
        <div className="min-h-screen bg-white">
            {/* Header */}
            <header className="border-b border-gray-200 bg-white">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="flex h-16 items-center justify-between">
                        <div className="flex items-center space-x-8">
                            <div className="text-2xl font-bold tracking-tight text-black">UMKM.ID</div>
                            <nav className="hidden space-x-8 md:flex">
                                <a href="#" className="font-medium text-gray-900 hover:text-black">
                                    Beranda
                                </a>
                                <a href="#" className="font-medium text-gray-600 hover:text-black">
                                    Kategori
                                </a>
                                <a href="#" className="font-medium text-gray-600 hover:text-black">
                                    Toko
                                </a>
                                <a href="#" className="font-medium text-gray-600 hover:text-black">
                                    Tentang
                                </a>
                            </nav>
                        </div>
                        <div className="flex items-center space-x-4">
                            <Button variant="ghost" className="text-gray-600 hover:text-black">
                                Masuk
                            </Button>
                            <Button className="bg-black text-white hover:bg-gray-800">Daftar Toko</Button>
                        </div>
                    </div>
                </div>
            </header>

            {/* Hero Section */}
            <section className="px-4 py-20 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-7xl">
                    <div className="text-center">
                        <h1 className="mb-6 text-5xl leading-tight font-bold tracking-tight text-black md:text-7xl">
                            Platform Terdepan
                            <br />
                            <span className="text-gray-600">untuk UMKM Indonesia</span>
                        </h1>
                        <p className="mx-auto mb-12 max-w-3xl text-xl leading-relaxed text-gray-600">
                            Bergabunglah dengan ribuan UMKM yang telah mempercayai platform kami untuk mengembangkan
                            bisnis mereka secara digital.
                        </p>

                        {/* Search Bar */}
                        <div className="mx-auto mb-12 max-w-2xl">
                            <div className="relative">
                                <Search className="absolute top-1/2 left-4 h-5 w-5 -translate-y-1/2 transform text-gray-400" />
                                <Input
                                    placeholder="Cari produk, toko, atau kategori..."
                                    className="rounded-none border-2 border-gray-200 py-6 pr-4 pl-12 text-lg focus:border-black"
                                />
                                <Button className="absolute top-1/2 right-2 -translate-y-1/2 transform rounded-none bg-black hover:bg-gray-800">
                                    Cari
                                </Button>
                            </div>
                        </div>

                        {/* CTA Buttons */}
                        <div className="flex flex-col justify-center gap-4 sm:flex-row">
                            <Button className="rounded-none bg-black px-8 py-6 text-lg text-white hover:bg-gray-800">
                                Jelajahi Produk
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </Button>
                            <Button
                                variant="outline"
                                className="rounded-none border-2 border-black px-8 py-6 text-lg text-black hover:bg-black hover:text-white"
                            >
                                Daftar Sebagai Penjual
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="bg-gray-50 px-4 py-16 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-7xl">
                    <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
                        {stats.map((stat, index) => (
                            <div key={index} className="text-center">
                                <stat.icon className="mx-auto mb-4 h-8 w-8 text-black" />
                                <div className="mb-2 text-3xl font-bold text-black">{stat.value}</div>
                                <div className="font-medium text-gray-600">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Categories Section */}
            <section className="px-4 py-20 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-7xl">
                    <div className="mb-16 text-center">
                        <h2 className="mb-4 text-4xl font-bold tracking-tight text-black">Jelajahi Kategori</h2>
                        <p className="mx-auto max-w-2xl text-xl text-gray-600">
                            Temukan berbagai produk UMKM berkualitas dari seluruh Indonesia
                        </p>
                    </div>

                    <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-6">
                        {categories.map((category, index) => (
                            <Card
                                key={index}
                                className="cursor-pointer rounded-none border-2 border-gray-200 transition-colors hover:border-black"
                            >
                                <CardContent className="p-6 text-center">
                                    <div className="mb-4 text-4xl">{category.icon}</div>
                                    <h3 className="mb-2 font-bold text-black">{category.name}</h3>
                                    <p className="text-sm text-gray-600">{category.count.toLocaleString()} produk</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Featured Stores Section */}
            <section className="bg-gray-50 px-4 py-20 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-7xl">
                    <div className="mb-16 text-center">
                        <h2 className="mb-4 text-4xl font-bold tracking-tight text-black">Toko Pilihan</h2>
                        <p className="mx-auto max-w-2xl text-xl text-gray-600">
                            UMKM terpercaya dengan produk berkualitas tinggi dan layanan terbaik
                        </p>
                    </div>

                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                        {featuredStores.map((store) => (
                            <Card
                                key={store.id}
                                className="cursor-pointer rounded-none border-2 border-gray-200 transition-colors hover:border-black"
                            >
                                <CardContent className="p-6">
                                    <div className="mb-4 flex items-center">
                                        <div className="flex h-12 w-12 items-center justify-center bg-black text-lg font-bold text-white">
                                            {store.image}
                                        </div>
                                        <div className="ml-3">
                                            <Badge variant="outline" className="rounded-none text-xs">
                                                {store.category}
                                            </Badge>
                                        </div>
                                    </div>

                                    <h3 className="mb-2 text-lg font-bold text-black">{store.name}</h3>
                                    <p className="mb-4 text-sm text-gray-600">{store.location}</p>

                                    <div className="flex items-center justify-between text-sm">
                                        <div className="flex items-center">
                                            <Star className="mr-1 h-4 w-4 fill-current text-black" />
                                            <span className="font-medium">{store.rating}</span>
                                        </div>
                                        <span className="text-gray-600">{store.products} produk</span>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>

                    <div className="mt-12 text-center">
                        <Button
                            variant="outline"
                            className="rounded-none border-2 border-black px-8 py-4 text-black hover:bg-black hover:text-white"
                        >
                            Lihat Semua Toko
                            <ArrowRight className="ml-2 h-5 w-5" />
                        </Button>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="px-4 py-20 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-7xl">
                    <div className="mb-16 text-center">
                        <h2 className="mb-4 text-4xl font-bold tracking-tight text-black">Mengapa Memilih Kami?</h2>
                        <p className="mx-auto max-w-2xl text-xl text-gray-600">
                            Platform yang dirancang khusus untuk membantu UMKM berkembang pesat
                        </p>
                    </div>

                    <div className="grid gap-12 md:grid-cols-3">
                        <div className="text-center">
                            <Zap className="mx-auto mb-6 h-12 w-12 text-black" />
                            <h3 className="mb-4 text-xl font-bold text-black">Setup Cepat</h3>
                            <p className="leading-relaxed text-gray-600">
                                Buat toko online Anda dalam hitungan menit. Tidak perlu keahlian teknis.
                            </p>
                        </div>
                        <div className="text-center">
                            <Shield className="mx-auto mb-6 h-12 w-12 text-black" />
                            <h3 className="mb-4 text-xl font-bold text-black">Keamanan Terjamin</h3>
                            <p className="leading-relaxed text-gray-600">
                                Transaksi aman dengan sistem pembayaran yang terpercaya dan terenkripsi.
                            </p>
                        </div>
                        <div className="text-center">
                            <TrendingUp className="mx-auto mb-6 h-12 w-12 text-black" />
                            <h3 className="mb-4 text-xl font-bold text-black">Analitik Mendalam</h3>
                            <p className="leading-relaxed text-gray-600">
                                Dapatkan insight bisnis dengan laporan penjualan dan analitik pelanggan.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="bg-black px-4 py-20 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-4xl text-center">
                    <h2 className="mb-6 text-4xl font-bold tracking-tight text-white md:text-5xl">Siap Memulai?</h2>
                    <p className="mx-auto mb-12 max-w-2xl text-xl text-gray-300">
                        Bergabunglah dengan ribuan UMKM yang sudah merasakan kemudahan berbisnis online bersama kami.
                    </p>

                    <div className="flex flex-col justify-center gap-4 sm:flex-row">
                        <Button className="rounded-none bg-white px-8 py-6 text-lg text-black hover:bg-gray-200">
                            Mulai Berjualan
                            <ArrowRight className="ml-2 h-5 w-5" />
                        </Button>
                        <Button
                            variant="outline"
                            className="rounded-none border-2 border-white px-8 py-6 text-lg text-white hover:bg-white hover:text-black"
                        >
                            Hubungi Tim Kami
                        </Button>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-gray-50 px-4 py-16 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-7xl">
                    <div className="mb-8 grid gap-8 md:grid-cols-4">
                        <div>
                            <div className="mb-4 text-2xl font-bold text-black">UMKM.ID</div>
                            <p className="mb-4 text-gray-600">Platform e-commerce terdepan untuk UMKM Indonesia.</p>
                        </div>
                        <div>
                            <h3 className="mb-4 font-bold text-black">Produk</h3>
                            <ul className="space-y-2 text-gray-600">
                                <li>
                                    <a href="#" className="hover:text-black">
                                        Buat Toko
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-black">
                                        Kelola Produk
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-black">
                                        Analitik
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-black">
                                        Pembayaran
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="mb-4 font-bold text-black">Dukungan</h3>
                            <ul className="space-y-2 text-gray-600">
                                <li>
                                    <a href="#" className="hover:text-black">
                                        Pusat Bantuan
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-black">
                                        Tutorial
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-black">
                                        Komunitas
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-black">
                                        Kontak
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="mb-4 font-bold text-black">Perusahaan</h3>
                            <ul className="space-y-2 text-gray-600">
                                <li>
                                    <a href="#" className="hover:text-black">
                                        Tentang Kami
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-black">
                                        Karir
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-black">
                                        Blog
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-black">
                                        Press Kit
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="border-t border-gray-200 pt-8">
                        <div className="flex flex-col items-center justify-between md:flex-row">
                            <p className="mb-4 text-gray-600 md:mb-0">© 2025 UMKM.ID. Hak cipta dilindungi.</p>
                            <div className="flex space-x-8 text-gray-600">
                                <a href="#" className="hover:text-black">
                                    Kebijakan Privasi
                                </a>
                                <a href="#" className="hover:text-black">
                                    Syarat Layanan
                                </a>
                                <a href="#" className="hover:text-black">
                                    Cookie
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default HomePage;
