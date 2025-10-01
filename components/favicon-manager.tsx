"use client"

import { useEffect } from "react"

function upsertLink(rel: string, attributes: Record<string, string>) {
  let link = document.querySelector<HTMLLinkElement>(`link[rel="${rel}"]${attributes.sizes ? `[sizes='${attributes.sizes}']` : ""}`)
  if (!link) {
    link = document.createElement("link")
    link.rel = rel
    if (attributes.sizes) link.sizes = attributes.sizes
    document.head.appendChild(link)
  }
  Object.entries(attributes).forEach(([k, v]) => {
    if (k === "sizes") return
    // @ts-ignore
    link![k] = v
  })
}

async function imageToPngDataUrl(imageUrl: string, size: number): Promise<string> {
  const img = new Image()
  img.crossOrigin = "anonymous"
  await new Promise<void>((resolve, reject) => {
    img.onload = () => resolve()
    img.onerror = () => reject(new Error("Failed to load image for rasterization"))
    img.src = imageUrl
  })
  const canvas = document.createElement("canvas")
  canvas.width = size
  canvas.height = size
  const ctx = canvas.getContext("2d")!
  ctx.clearRect(0, 0, size, size)
  // draw centered with cover behavior
  const ratio = Math.max(size / img.width, size / img.height)
  const newW = img.width * ratio
  const newH = img.height * ratio
  const dx = (size - newW) / 2
  const dy = (size - newH) / 2
  ctx.drawImage(img, dx, dy, newW, newH)
  return canvas.toDataURL("image/png")
}

export function FaviconManager() {
  useEffect(() => {
    const baseSvg = "/favicon.svg"
    const animatedSvg = "/favicon-animated.svg"

    // Show animated favicon during initial load
    upsertLink("icon", { href: animatedSvg, type: "image/svg+xml" })

    let cancelled = false

    ;(async () => {
      try {
        const sizes = [16, 32, 180]
        const pngs = await Promise.all(sizes.map((s) => imageToPngDataUrl(baseSvg, s)))
        if (cancelled) return

        // Inject PNG favicons
        upsertLink("icon", { href: pngs[0], sizes: "16x16", type: "image/png" })
        upsertLink("icon", { href: pngs[1], sizes: "32x32", type: "image/png" })
        upsertLink("apple-touch-icon", { href: pngs[2], sizes: "180x180", type: "image/png" })

        // After a short delay, switch to static SVG for efficiency
        setTimeout(() => {
          if (cancelled) return
          upsertLink("icon", { href: pngs[1], sizes: "32x32", type: "image/png" })
        }, 1800)
      } catch {
        // Fallback to static SVG if anything fails
        upsertLink("icon", { href: baseSvg, type: "image/svg+xml" })
      }
    })()

    return () => {
      cancelled = true
    }
  }, [])

  return null
}
