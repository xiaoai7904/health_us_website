<script setup lang="ts">
const canvasRef = ref<HTMLCanvasElement | null>(null)

onMounted(() => {
  const canvas = canvasRef.value
  if (!canvas) {
    return
  }

  const context = canvas.getContext('2d')
  if (!context) {
    return
  }

  const reduceMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
  let animationFrame = 0
  let width = 0
  let height = 0
  let time = 0

  const resize = () => {
    const ratio = Math.min(window.devicePixelRatio || 1, 2)
    const rect = canvas.getBoundingClientRect()
    width = rect.width
    height = rect.height
    canvas.width = Math.floor(width * ratio)
    canvas.height = Math.floor(height * ratio)
    context.setTransform(ratio, 0, 0, ratio, 0, 0)
  }

  const drawThreads = () => {
    context.clearRect(0, 0, width, height)

    const gradient = context.createLinearGradient(0, 0, width, height)
    gradient.addColorStop(0, 'rgba(28, 142, 203, 0.18)')
    gradient.addColorStop(0.5, 'rgba(255, 255, 255, 0.08)')
    gradient.addColorStop(1, 'rgba(56, 189, 248, 0.14)')
    context.fillStyle = gradient
    context.fillRect(0, 0, width, height)

    const lineCount = width < 768 ? 18 : 30
    const amplitude = Math.max(18, height * 0.12)
    const spacing = height / (lineCount - 1)

    for (let line = 0; line < lineCount; line += 1) {
      const baseY = line * spacing
      const offset = line * 0.34

      context.beginPath()
      for (let x = -40; x <= width + 40; x += 18) {
        const waveA = Math.sin(x * 0.007 + time + offset) * amplitude
        const waveB = Math.sin(x * 0.014 - time * 0.72 + offset * 1.6) * (amplitude * 0.36)
        const y = baseY + waveA + waveB

        if (x === -40) {
          context.moveTo(x, y)
        } else {
          context.lineTo(x, y)
        }
      }

      context.strokeStyle = `rgba(118, 208, 245, ${line % 4 === 0 ? 0.34 : 0.18})`
      context.lineWidth = line % 5 === 0 ? 1.2 : 0.7
      context.stroke()
    }

    const glow = context.createRadialGradient(width * 0.5, height * 0.15, 0, width * 0.5, height * 0.15, width * 0.55)
    glow.addColorStop(0, 'rgba(255, 255, 255, 0.12)')
    glow.addColorStop(1, 'rgba(255, 255, 255, 0)')
    context.fillStyle = glow
    context.fillRect(0, 0, width, height)
  }

  const render = () => {
    time += 0.014
    drawThreads()
    animationFrame = window.requestAnimationFrame(render)
  }

  const start = () => {
    window.cancelAnimationFrame(animationFrame)
    resize()
    drawThreads()

    if (!reduceMotionQuery.matches) {
      animationFrame = window.requestAnimationFrame(render)
    }
  }

  const resizeObserver = new ResizeObserver(start)
  resizeObserver.observe(canvas)
  reduceMotionQuery.addEventListener('change', start)
  start()

  onBeforeUnmount(() => {
    window.cancelAnimationFrame(animationFrame)
    resizeObserver.disconnect()
    reduceMotionQuery.removeEventListener('change', start)
  })
})
</script>

<template>
  <footer class="site-footer relative mt-12 overflow-hidden bg-[#071019] text-white">
    <canvas
      ref="canvasRef"
      class="pointer-events-none absolute inset-0 size-full"
      aria-hidden="true"
    />
    <div class="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(27,132,190,0.26),transparent_42%),linear-gradient(180deg,rgba(7,16,25,0.18),rgba(7,16,25,0.92))]" aria-hidden="true" />

    <div class="relative z-10 mx-auto grid max-w-7xl gap-8 px-4 py-14 sm:px-6 md:grid-cols-[1.4fr_1fr_1fr] lg:px-8">
      <div>
        <p class="text-lg font-black uppercase tracking-wide">Health US</p>
        <p class="mt-3 max-w-xl text-sm leading-6 text-white/70">
          Public product, certificate, report, and support information for qualified research procurement workflows.
        </p>
        <p class="mt-4 text-xs leading-5 text-white/55">
          Products and content are for research information workflows only unless approved business copy states otherwise.
        </p>
      </div>
      <div>
        <p class="text-sm font-semibold">Company</p>
        <ul class="mt-3 space-y-2 text-sm text-white/70">
          <li><NuxtLink to="/about" class="hover:text-white">About us</NuxtLink></li>
          <li><NuxtLink to="/contact" class="hover:text-white">Contact</NuxtLink></li>
          <li><NuxtLink to="/feedback" class="hover:text-white">Feedback</NuxtLink></li>
        </ul>
      </div>
      <div>
        <p class="text-sm font-semibold">Resources</p>
        <ul class="mt-3 space-y-2 text-sm text-white/70">
          <li><NuxtLink to="/reports" class="hover:text-white">Test reports</NuxtLink></li>
          <li><NuxtLink to="/certificates" class="hover:text-white">Certificates</NuxtLink></li>
          <li><NuxtLink to="/faq" class="hover:text-white">FAQ</NuxtLink></li>
        </ul>
      </div>
    </div>
  </footer>
</template>
