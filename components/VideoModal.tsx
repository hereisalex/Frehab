'use client'

import { useState } from 'react'
import { X } from 'lucide-react'

interface VideoModalProps {
  isOpen: boolean
  onClose: () => void
  title: string
  url: string
}

export default function VideoModal({ isOpen, onClose, title, url }: VideoModalProps) {
  if (!isOpen) return null

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
            <X className="w-5 h-5" />
          </button>
        </div>
        
        {/* Video Content */}
        <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
          <iframe
            src={url}
            className="absolute top-0 left-0 w-full h-full"
            frameBorder="0"
            allowFullScreen
            title={title}
          />
        </div>
        
        {/* Footer */}
        <div className="p-4 border-t bg-gray-50">
          <p className="text-sm text-gray-600">
            Video opens in a new window. Close this modal to return to your lesson.
          </p>
        </div>
      </div>
    </div>
  )
}
