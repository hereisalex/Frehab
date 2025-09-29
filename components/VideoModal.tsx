'use client'

import { useState } from 'react'

interface VideoModalProps {
  isOpen: boolean
  onClose: () => void
  title: string
  url: string
}

export default function VideoModal({ isOpen, onClose, title, url }: VideoModalProps) {
  if (!isOpen) return null

  // Check if URL is a YouTube video
  const isYouTube = url.includes('youtube.com') || url.includes('youtu.be')
  
  // Check if URL is a YouTube short
  const isYouTubeShort = url.includes('youtube.com/shorts')
  
  // Check if URL is a YouTube playlist
  const isYouTubePlaylist = url.includes('youtube.com/playlist')
  
  // Check if URL is an external website
  const isExternalSite = !isYouTube && !url.includes('youtube.com')

  // Convert YouTube URL to embed format
  const getEmbedUrl = (url: string) => {
    if (url.includes('youtube.com/watch?v=')) {
      const videoId = url.split('v=')[1].split('&')[0]
      return `https://www.youtube.com/embed/${videoId}`
    } else if (url.includes('youtu.be/')) {
      const videoId = url.split('youtu.be/')[1].split('?')[0]
      return `https://www.youtube.com/embed/${videoId}`
    } else if (url.includes('youtube.com/shorts/')) {
      const videoId = url.split('shorts/')[1].split('?')[0]
      return `https://www.youtube.com/embed/${videoId}`
    }
    return url
  }

  const handleExternalClick = () => {
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75">
      <div className="relative w-full max-w-4xl mx-4 bg-white rounded-lg overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b">
          <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        {/* Video Content */}
        {isExternalSite ? (
          <div className="p-8 text-center">
            <div className="mb-4">
              <svg className="w-16 h-16 mx-auto text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </div>
            <h4 className="text-xl font-semibold text-gray-900 mb-2">External Resource</h4>
            <p className="text-gray-600 mb-4">
              This content is hosted on an external website. Click the button below to open it in a new tab.
            </p>
            <button
              onClick={handleExternalClick}
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Open External Resource
            </button>
          </div>
        ) : isYouTubePlaylist ? (
          <div className="p-8 text-center">
            <div className="mb-4">
              <svg className="w-16 h-16 mx-auto text-red-500" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </div>
            <h4 className="text-xl font-semibold text-gray-900 mb-2">YouTube Playlist</h4>
            <p className="text-gray-600 mb-4">
              This is a YouTube playlist with multiple videos. Click the button below to open it in a new tab.
            </p>
            <button
              onClick={handleExternalClick}
              className="px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
            >
              Open YouTube Playlist
            </button>
          </div>
        ) : (
          <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
            <iframe
              src={getEmbedUrl(url)}
              className="absolute top-0 left-0 w-full h-full"
              frameBorder="0"
              allowFullScreen
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              title={title}
            />
          </div>
        )}
        
        {/* Footer */}
        <div className="p-4 border-t bg-gray-50">
          <p className="text-sm text-gray-600">
            {isExternalSite 
              ? "External resource opens in a new tab. Close this modal to return to your lesson."
              : isYouTubePlaylist
              ? "Playlist opens in a new tab. Close this modal to return to your lesson."
              : "Video embedded from YouTube. Close this modal to return to your lesson."
            }
          </p>
        </div>
      </div>
    </div>
  )
}
