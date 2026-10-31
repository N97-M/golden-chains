"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

interface GalleryItem {
    id: number;
    type: 'image' | 'video';
    src: string;
    thumbnail?: string;
    title?: string;
    alt: string;
}

export default function NewPage() {
    const { t } = useTranslation();
    const [activeTab, setActiveTab] = useState<'all' | 'image' | 'video'>('all');
    const [playingVideo, setPlayingVideo] = useState<number | null>(null);
    const [items, setItems] = useState<GalleryItem[]>([]);
    const [loading, setLoading] = useState(true);
    const videoRefs = useRef<{ [key: number]: HTMLVideoElement | null }>({});

    useEffect(() => {
        const fetchMedia = async () => {
            try {
                const res = await fetch('/api/media');
                const data = await res.json();

                if (data.files) {
                    const mappedItems = data.files.map((file: any, index: number) => ({
                        id: index,
                        type: file.type,
                        src: file.path,
                        alt: file.name,
                        // Format title: remove extension, replace dashes/underscores with spaces, capitalize
                        title: file.name
                            .replace(/\.[^/.]+$/, "")
                            .replace(/[-_]/g, " ")
                            .replace(/\b\w/g, (char: string) => char.toUpperCase())
                    }));
                    setItems(mappedItems);
                }
            } catch (error) {
                console.error("Failed to load media", error);
            } finally {
                setLoading(false);
            }
        };

        fetchMedia();
    }, []);

    const filteredItems = activeTab === 'all'
        ? items
        : items.filter(item => item.type === activeTab);

    const toggleVideo = (id: number) => {
        if (playingVideo === id) {
            setPlayingVideo(null);
            if (videoRefs.current[id]) {
                videoRefs.current[id]?.pause();
                // Reset rotation
                if (videoRefs.current[id]?.parentElement) {
                    videoRefs.current[id]!.parentElement!.style.transform = '';
                    videoRefs.current[id]!.dataset.rotation = '0';
                }
            }
        } else {
            setPlayingVideo(id);
            // Wait for render then play
            setTimeout(() => {
                if (videoRefs.current[id]) {
                    videoRefs.current[id]?.play();
                }
            }, 0);
        }
    };

    return (
        <div className="min-h-screen bg-[#722F37]">
            {/* Navigation Breadcrumb */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-4">
                <nav className="flex items-center text-gray-700">
                    <Link
                        href="/"
                        className="text-base text-white font-medium relative group"
                    >
                        {t('nav.home')}
                        <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
                    </Link>
                    <span className="mx-2 text-gray-400 text-lg">›</span>
                    <span className="text-base text-gray-300 font-medium">
                        {t('nav.new')}
                    </span>
                </nav>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
                {/* Header content */}
                <div className="mb-10 text-center md:text-start">
                    <h1 className="text-3xl sm:text-5xl font-extrabold text-white mb-3 tracking-tight">
                        {t('newPage.title')}
                    </h1>
                    <p className="text-base sm:text-lg text-gray-200 max-w-3xl leading-relaxed">
                        {t('newPage.description')}
                    </p>
                </div>

                {/* Filter Tabs Switcher */}
                <div className="flex justify-center md:justify-start mb-10">
                    <div className="bg-black/25 p-1.5 rounded-2xl backdrop-blur-md border border-white/20 inline-flex gap-2">
                        <button
                            onClick={() => setActiveTab('all')}
                            className={`px-6 py-2.5 rounded-xl font-bold text-sm transition-all duration-300 ${activeTab === 'all'
                                ? 'bg-white text-[#722F37] shadow-lg transform scale-102'
                                : 'text-white hover:bg-white/10'
                                }`}
                        >
                            {t('newPage.allTab')} ({items.length})
                        </button>
                        <button
                            onClick={() => setActiveTab('image')}
                            className={`px-6 py-2.5 rounded-xl font-bold text-sm transition-all duration-300 ${activeTab === 'image'
                                ? 'bg-white text-[#722F37] shadow-lg transform scale-102'
                                : 'text-white hover:bg-white/10'
                                }`}
                        >
                            {t('newPage.imagesTab')} ({items.filter(i => i.type === 'image').length})
                        </button>
                        <button
                            onClick={() => setActiveTab('video')}
                            className={`px-6 py-2.5 rounded-xl font-bold text-sm transition-all duration-300 ${activeTab === 'video'
                                ? 'bg-white text-[#722F37] shadow-lg transform scale-102'
                                : 'text-white hover:bg-white/10'
                                }`}
                        >
                            {t('newPage.videosTab')} ({items.filter(i => i.type === 'video').length})
                        </button>
                    </div>
                </div>

                {/* Loading State */}
                {loading && (
                    <div className="flex justify-center py-20">
                        <div className="animate-spin rounded-full h-16 w-16 border-4 border-white border-t-transparent"></div>
                    </div>
                )}

                {/* Gallery Grid - Masonry Layout */}
                {!loading && (
                    <div className="columns-1 md:columns-2 lg:columns-3 gap-7 space-y-7">
                        {filteredItems.map((item) => (
                            <div
                                key={item.id}
                                className="break-inside-avoid group relative bg-white rounded-2xl overflow-hidden shadow-xl border-[2px] border-black/20 hover:border-black/50 hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 cursor-pointer"
                                onClick={() => item.type === 'video' ? toggleVideo(item.id) : null}
                            >
                                {item.type === 'video' && playingVideo === item.id ? (
                                    <div className="relative bg-black group-video">
                                        <div
                                            className="relative overflow-hidden flex items-center justify-center bg-black transition-all duration-300 origin-center"
                                        >
                                            <video
                                                ref={(el) => { videoRefs.current[item.id] = el; }}
                                                data-rotation="0"
                                                src={item.src}
                                                className="w-full h-auto object-contain"
                                                controls
                                                autoPlay
                                                style={{ maxHeight: '80vh' }}
                                            />
                                        </div>

                                        {/* Controls Overlay */}
                                        <div className="absolute top-4 right-4 flex space-x-2 z-20" style={{ direction: 'ltr' }}>
                                            {/* Rotate Button */}
                                            <button
                                                className="bg-black/60 text-white p-2.5 rounded-full hover:bg-black/90 backdrop-blur-md transition-colors border border-white/20"
                                                title="Rotate 90°"
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    const videoEl = videoRefs.current[item.id];
                                                    if (videoEl && videoEl.parentElement) {
                                                        const currentRotation = parseInt(videoEl.dataset.rotation || '0');
                                                        const newRotation = currentRotation + 90;
                                                        videoEl.dataset.rotation = newRotation.toString();
                                                        videoEl.parentElement.style.transform = `rotate(${newRotation}deg)`;
                                                    }
                                                }}
                                            >
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                                                </svg>
                                            </button>

                                            {/* Close Button */}
                                            <button
                                                className="bg-black/60 text-white p-2.5 rounded-full hover:bg-black/90 backdrop-blur-md transition-colors border border-white/20"
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    toggleVideo(item.id);
                                                }}
                                            >
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                ) : (
                                    <>
                                        <div className="relative w-full overflow-hidden bg-gray-100">
                                            {/* Media display */}
                                            {item.type === 'video' ? (
                                                <div className="w-full bg-slate-900 flex items-center justify-center min-h-[220px]">
                                                    <video src={item.src} className="w-full h-auto object-cover opacity-60" muted />
                                                </div>
                                            ) : (
                                                <img
                                                    src={item.src}
                                                    alt={item.alt}
                                                    className="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-105"
                                                    loading="lazy"
                                                />
                                            )}

                                            {/* Subtle Gradient Overlay */}
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                                            {/* Content Overlay */}
                                            <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-3 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100">
                                                <h3 className="text-white font-bold text-xl mb-1.5 drop-shadow">{item.title}</h3>
                                                <span className="inline-block px-3 py-1 bg-[#722F37] text-white text-xs font-semibold rounded-lg uppercase tracking-wider shadow">
                                                    {item.type === 'image' ? t('newPage.imagesTab') : t('newPage.videosTab')}
                                                </span>
                                            </div>

                                            {/* Play Button for Videos */}
                                            {item.type === 'video' && (
                                                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                                                    <div className="w-16 h-16 bg-white/95 text-emerald-500 rounded-full flex items-center justify-center shadow-2xl transition-transform duration-300 group-hover:scale-110 border border-emerald-500/20">
                                                        <svg className="w-8 h-8 ml-1" fill="currentColor" viewBox="0 0 24 24">
                                                            <path d="M8 5v14l11-7z" />
                                                        </svg>
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    </>
                                )}
                            </div>
                        ))}
                    </div>
                )}

                {/* Empty State */}
                {!loading && filteredItems.length === 0 && (
                    <div className="text-center py-20 bg-white/10 rounded-2xl backdrop-blur-md border border-white/20 p-8 max-w-md mx-auto">
                        <svg className="mx-auto h-14 w-14 text-white/60 mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <h3 className="text-lg font-bold text-white">{t('newPage.noMedia')}</h3>
                        <p className="text-gray-300 mt-1 text-sm">Add files to public/NEW folder to see them here.</p>
                    </div>
                )}
            </div>
        </div>
    );
}
