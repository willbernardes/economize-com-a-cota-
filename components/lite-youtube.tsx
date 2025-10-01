"use client"

import { useEffect, useMemo, useRef, useState } from "react"

type Props = {
  videoId: string
  title: string
  caption?: string
  className?: string
}

export function LiteYouTube({ videoId, title, caption, className }: Props) {
  const [activated, setActivated] = useState(false)
  const [visible, setVisible] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  const thumbnail = useMemo(
    () => `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`,
    [videoId]
  )

  useEffect(() => {
    if (!containerRef.current) return
    const el = containerRef.current
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setVisible(true)
        })
      },
      { rootMargin: "200px" }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <figure className={className}>
      <div
        ref={containerRef}
        className="relative w-full overflow-hidden rounded-2xl border border-gray-200 shadow-xl bg-white"
        style={{ aspectRatio: "16 / 9" }}
      >
        {!activated && (
          <button
            type="button"
            onClick={() => setActivated(true)}
            className="group absolute inset-0 w-full h-full"
            aria-label={`Reproduzir vídeo: ${title}`}
          >
            {/* Skeleton */}
            <div className="absolute inset-0 animate-pulse bg-gray-100" />
            {/* Thumbnail loads once visible */}
            {visible && (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={thumbnail}
                alt=""
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
              />
            )}
            {/* Play button */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="h-16 w-16 rounded-full bg-white/90 shadow-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="#FF6B00" aria-hidden="true">
                  <path d="M8 5v14l11-7z"></path>
                </svg>
              </div>
            </div>
          </button>
        )}

        {activated && (
          <iframe
            title={title}
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
            className="absolute top-0 left-0 w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        )}
      </div>
      {caption && (
        <figcaption className="text-center text-sm text-gray-500 mt-3">
          {caption}
        </figcaption>
      )}
    </figure>
  )
}
