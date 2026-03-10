"use client"

import React from "react"

export default function Home() {
  const [loading, setLoading] = React.useState(false)
  const [submitted, setSubmitted] = React.useState(false)
  const [error, setError] = React.useState("")
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    setLoading(true)
    setError("")
    setSubmitted(false)

    const form = e.currentTarget
    const formData = new FormData(form)

    try {
      const response = await fetch("https://formspree.io/f/xojkqwye", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json"
        }
      })

      const data = await response.json().catch(() => null)

      if (response.ok) {
        setSubmitted(true)
        form.reset()
      } else {
        setError(
          data?.errors?.[0]?.message ||
            "Something went wrong while submitting your request. Please try again."
        )
      }
    } catch {
      setError("Network error. Please check your connection and try again.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="min-h-screen bg-black text-white selection:bg-white selection:text-black">
      {/* NAVBAR */}
      <header className="fixed top-0 left-0 z-50 w-full border-b border-white/10 bg-black/75 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
          <a
            href="#top"
            className="text-lg font-semibold tracking-tight text-white"
          >
            StoreForge
          </a>

          <nav className="hidden items-center gap-8 text-sm md:flex">
            <a
              href="#examples"
              className="text-white/65 transition hover:text-white"
            >
              Examples
            </a>

            <a
              href="#deliverables"
              className="text-white/65 transition hover:text-white"
            >
              What You Get
            </a>

            <a
              href="#how"
              className="text-white/65 transition hover:text-white"
            >
              How It Works
            </a>

            <a
              href="#pricing"
              className="text-white/65 transition hover:text-white"
            >
              Pricing
            </a>

            <a
              href="#faq"
              className="text-white/65 transition hover:text-white"
            >
              FAQ
            </a>

            <a
              href="#form"
              className="rounded-xl border border-white/15 bg-white px-4 py-2 text-black transition hover:opacity-90"
            >
              Start Store
            </a>
          </nav>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-white md:hidden"
            aria-label="Open menu"
          >
            <span className="text-lg">{mobileMenuOpen ? "×" : "☰"}</span>
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="border-t border-white/10 bg-black/95 px-6 py-4 md:hidden">
            <div className="flex flex-col gap-4 text-sm">
              <a
                href="#examples"
                onClick={() => setMobileMenuOpen(false)}
                className="text-white/70 transition hover:text-white"
              >
                Examples
              </a>

              <a
                href="#deliverables"
                onClick={() => setMobileMenuOpen(false)}
                className="text-white/70 transition hover:text-white"
              >
                What You Get
              </a>

              <a
                href="#how"
                onClick={() => setMobileMenuOpen(false)}
                className="text-white/70 transition hover:text-white"
              >
                How It Works
              </a>

              <a
                href="#pricing"
                onClick={() => setMobileMenuOpen(false)}
                className="text-white/70 transition hover:text-white"
              >
                Pricing
              </a>

              <a
                href="#faq"
                onClick={() => setMobileMenuOpen(false)}
                className="text-white/70 transition hover:text-white"
              >
                FAQ
              </a>

              <a
                href="#form"
                onClick={() => setMobileMenuOpen(false)}
                className="mt-2 rounded-xl bg-white px-4 py-3 text-center text-black"
              >
                Start Store
              </a>
            </div>
          </div>
        )}
      </header>

      {/* HERO */}
      <section
        id="top"
        className="relative flex min-h-screen items-center overflow-hidden bg-black pt-16"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.09),transparent_35%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_30%,rgba(255,255,255,0.05),transparent_25%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.02),transparent_30%,transparent_70%,rgba(255,255,255,0.03))]" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-6 py-24 md:grid-cols-2 md:py-28">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs uppercase tracking-[0.18em] text-white/55">
              <span className="inline-block h-2 w-2 rounded-full bg-white/70" />
              Shopify Store Build Service
            </div>

            <h1 className="mt-8 text-5xl font-semibold leading-[1.02] tracking-tight text-white sm:text-6xl md:text-7xl">
              Launch Your
              <br />
              Shopify Store
              <br />
              <span className="text-white/55">In 24 Hours</span>
            </h1>

            <p className="mt-7 max-w-xl text-base leading-8 text-white/68 sm:text-lg">
              We build clean, premium Shopify stores using proven DTC structure,
              mobile-first layout, and conversion-focused sections so you can
              stop struggling with theme setup and start selling faster.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#form"
                className="rounded-xl bg-white px-6 py-3 text-sm font-medium text-black transition hover:scale-[1.02] hover:opacity-90"
              >
                Start Your Store
              </a>

              <a
                href="#examples"
                className="rounded-xl border border-white/15 px-6 py-3 text-sm font-medium text-white transition hover:bg-white/[0.05]"
              >
                View Example Layouts
              </a>
            </div>

            <div className="mt-10 grid max-w-xl grid-cols-1 gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                <div className="text-2xl font-semibold text-white">24h</div>
                <div className="mt-1 text-sm text-white/50">Delivery target</div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                <div className="text-2xl font-semibold text-white">5</div>
                <div className="mt-1 text-sm text-white/50">
                  Products included
                </div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                <div className="text-2xl font-semibold text-white">$129</div>
                <div className="mt-1 text-sm text-white/50">One-time build</div>
              </div>
            </div>

            <p className="mt-8 text-sm text-white/42">
              Conversion optimized • Mobile optimized • Clean and premium
              aesthetic
            </p>
          </div>

          <div className="relative">
            <div className="absolute -inset-8 rounded-[2.5rem] bg-white/10 blur-3xl" />

            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 shadow-[0_30px_120px_rgba(0,0,0,0.65)]">
              <div className="border-b border-white/10 px-5 py-4">
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-white/25" />
                  <span className="h-2.5 w-2.5 rounded-full bg-white/10" />
                  <span className="h-2.5 w-2.5 rounded-full bg-white/10" />
                </div>
              </div>

              <div className="p-4 sm:p-6">
                <img
                  src="/shopify-mockup.png"
                  alt="Shopify Store Example"
                  className="w-full rounded-xl object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <section className="border-t border-b border-white/10 bg-black py-6">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-2 gap-6 text-center text-xs uppercase tracking-[0.22em] text-white/35 sm:grid-cols-4 md:grid-cols-6">
            <div>Dawn Theme</div>
            <div>Mobile Ready</div>
            <div>Fast Setup</div>
            <div>Clean Design</div>
            <div>Product Upload</div>
            <div>Launch Focused</div>
          </div>
        </div>
      </section>

      {/* EXAMPLES */}
      <section
        id="examples"
        className="scroll-mt-24 border-b border-white/10 bg-black py-28"
      >
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center">
            <h2 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">
              Few of the customers who used our service to kickstart their
              e-commerce journey
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-white/55">
              Clean Shopify layouts designed for modern DTC brands. Your final
              store will be customized to your niche, products, and desired
              visual direction.
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            <div className="group overflow-hidden rounded-[1.6rem] border border-white/10 bg-white/[0.03] transition hover:border-white/20 hover:bg-white/[0.045]">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src="/skincare.png"
                  alt="Skincare Shopify store"
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>

              <div className="p-6 text-left">
                <div className="mb-3 inline-flex rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[10px] uppercase tracking-[0.18em] text-white/40">
                  Beauty
                </div>

                <h3 className="text-lg font-semibold text-white">
                  Skincare Brand
                </h3>

                <p className="mt-2 text-sm leading-7 text-white/55">
                  Minimal product-focused layout optimized for trust, clean
                  visuals, and straightforward purchase flow.
                </p>
              </div>
            </div>

            <div className="group overflow-hidden rounded-[1.6rem] border border-white/10 bg-white/[0.03] transition hover:border-white/20 hover:bg-white/[0.045]">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src="/health.png"
                  alt="Health Shopify store"
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>

              <div className="p-6 text-left">
                <div className="mb-3 inline-flex rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[10px] uppercase tracking-[0.18em] text-white/40">
                  Wellness
                </div>

                <h3 className="text-lg font-semibold text-white">
                  Fitness Brand
                </h3>

                <p className="mt-2 text-sm leading-7 text-white/55">
                  Strong homepage structure with product highlights, conversion
                  blocks, and a premium health-brand aesthetic.
                </p>
              </div>
            </div>

            <div className="group overflow-hidden rounded-[1.6rem] border border-white/10 bg-white/[0.03] transition hover:border-white/20 hover:bg-white/[0.045]">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src="/coffee.png"
                  alt="coffee Shopify store"
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>

              <div className="p-6 text-left">
                <div className="mb-3 inline-flex rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[10px] uppercase tracking-[0.18em] text-white/40">
                  Beverage
                </div>

                <h3 className="text-lg font-semibold text-white">
                  Coffee Brand
                </h3>

                <p className="mt-2 text-sm leading-7 text-white/55">
                  Premium Shopify layout with brand-first presentation and a
                  strong visual hierarchy across key selling sections.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 grid gap-8 md:grid-cols-3">
            <div className="group overflow-hidden rounded-[1.6rem] border border-white/10 bg-white/[0.03] transition hover:border-white/20 hover:bg-white/[0.045]">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src="/fashion.png"
                  alt="fashion Shopify store"
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>

              <div className="p-6 text-left">
                <div className="mb-3 inline-flex rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[10px] uppercase tracking-[0.18em] text-white/40">
                  Apparel
                </div>

                <h3 className="text-lg font-semibold text-white">
                  Fashion Store
                </h3>

                <p className="mt-2 text-sm leading-7 text-white/55">
                  Editorial-style collection layout with clean CTAs, product
                  spotlighting, and a polished look on mobile.
                </p>
              </div>
            </div>

            <div className="group overflow-hidden rounded-[1.6rem] border border-white/10 bg-white/[0.03] transition hover:border-white/20 hover:bg-white/[0.045]">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src="/home-decor.png"
                  alt="homedecor Shopify store"
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>

              <div className="p-6 text-left">
                <div className="mb-3 inline-flex rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[10px] uppercase tracking-[0.18em] text-white/40">
                  Home
                </div>

                <h3 className="text-lg font-semibold text-white">
                  Home Decor Brand
                </h3>

                <p className="mt-2 text-sm leading-7 text-white/55">
                  Calm premium layout for catalog presentation, lifestyle
                  imagery, and better browsing flow.
                </p>
              </div>
            </div>

            <div className="group overflow-hidden rounded-[1.6rem] border border-white/10 bg-white/[0.03] transition hover:border-white/20 hover:bg-white/[0.045]">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src="/snacks.png"
                  alt="snacks Shopify store"
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>

              <div className="p-6 text-left">
                <div className="mb-3 inline-flex rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[10px] uppercase tracking-[0.18em] text-white/40">
                  Food
                </div>

                <h3 className="text-lg font-semibold text-white">
                  Snack Brand
                </h3>

                <p className="mt-2 text-sm leading-7 text-white/55">
                  DTC homepage structure built to highlight flavor, offer,
                  product bundles, and quick checkout intent.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT YOU GET */}
      <section
        id="deliverables"
        className="scroll-mt-24 border-b border-white/10 bg-black py-28"
      >
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center">
            <h2 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">
              What You Get
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-white/55">
              Everything needed for a clean starter Shopify store without you
              having to wrestle with theme settings, homepage sections, or basic
              setup confusion.
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            <div className="rounded-[1.6rem] border border-white/10 bg-white/[0.03] p-8 shadow-[0_0_0_1px_rgba(255,255,255,0.02)] transition hover:bg-white/[0.045]">
              <h3 className="text-xl font-semibold text-white">
                Premium Homepage
              </h3>

              <p className="mt-3 text-sm leading-8 text-white/65">
                A polished landing page with hero section, collection or product
                highlights, trust blocks, and clean DTC structure.
              </p>
            </div>

            <div className="rounded-[1.6rem] border border-white/10 bg-white/[0.03] p-8 shadow-[0_0_0_1px_rgba(255,255,255,0.02)] transition hover:bg-white/[0.045]">
              <h3 className="text-xl font-semibold text-white">
                Product Upload
              </h3>

              <p className="mt-3 text-sm leading-8 text-white/65">
                Up to 5 products uploaded with titles, descriptions, pricing,
                product images, and a clean structure inside Shopify.
              </p>
            </div>

            <div className="rounded-[1.6rem] border border-white/10 bg-white/[0.03] p-8 shadow-[0_0_0_1px_rgba(255,255,255,0.02)] transition hover:bg-white/[0.045]">
              <h3 className="text-xl font-semibold text-white">
                Theme Customization
              </h3>

              <p className="mt-3 text-sm leading-8 text-white/65">
                Shopify Dawn customized to match your niche with a cleaner
                layout, better spacing, and more premium presentation.
              </p>
            </div>

            <div className="rounded-[1.6rem] border border-white/10 bg-white/[0.03] p-8 shadow-[0_0_0_1px_rgba(255,255,255,0.02)] transition hover:bg-white/[0.045]">
              <h3 className="text-xl font-semibold text-white">
                Mobile Optimization
              </h3>

              <p className="mt-3 text-sm leading-8 text-white/65">
                Your store is built to look strong on mobile first, because most
                first-time traffic for DTC brands comes from phones.
              </p>
            </div>

            <div className="rounded-[1.6rem] border border-white/10 bg-white/[0.03] p-8 shadow-[0_0_0_1px_rgba(255,255,255,0.02)] transition hover:bg-white/[0.045]">
              <h3 className="text-xl font-semibold text-white">
                Payment Setup Guidance
              </h3>

              <p className="mt-3 text-sm leading-8 text-white/65">
                Payment gateway setup support so your checkout flow is ready for
                launch after delivery.
              </p>
            </div>

            <div className="rounded-[1.6rem] border border-white/10 bg-white/[0.03] p-8 shadow-[0_0_0_1px_rgba(255,255,255,0.02)] transition hover:bg-white/[0.045]">
              <h3 className="text-xl font-semibold text-white">
                Fast Turnaround
              </h3>

              <p className="mt-3 text-sm leading-8 text-white/65">
                Straightforward delivery process made for founders who want to
                move quickly instead of getting stuck building alone.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="border-b border-white/10 bg-black py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 md:grid-cols-[1.1fr_0.9fr] md:items-center">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">
              Built for people who started a Shopify store but never finished it
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-white/60">
              If your current store is stuck with a default Dawn layout, random
              placeholders, poor mobile spacing, and unfinished pages, this is
              exactly the kind of cleanup-and-launch service StoreForge is built
              for.
            </p>

            <div className="mt-10 space-y-5">
              <div className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                <div className="mt-1 inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-sm">
                  1
                </div>

                <div>
                  <h3 className="text-base font-semibold text-white">
                    No more empty default sections
                  </h3>

                  <p className="mt-2 text-sm leading-7 text-white/60">
                    We build you a high performing custom store based on your niche and use-case
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                <div className="mt-1 inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-sm">
                  2
                </div>

                <div>
                  <h3 className="text-base font-semibold text-white">
                    Clear launch structure
                  </h3>

                  <p className="mt-2 text-sm leading-7 text-white/60">
                    Hero, products, social proof style sections, offer blocks,
                    and clean navigation are arranged logically.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                <div className="mt-1 inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-sm">
                  3
                </div>

                <div>
                  <h3 className="text-base font-semibold text-white">
                    Built to convert better
                  </h3>

                  <p className="mt-2 text-sm leading-7 text-white/60">
                    The goal is not just a pretty store. It is a cleaner,
                    easier-to-understand storefront that supports first sales.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.02] p-8 shadow-[0_30px_120px_rgba(0,0,0,0.55)]">
            <div className="mb-6 inline-flex rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[10px] uppercase tracking-[0.18em] text-white/40">
              Before vs After Feel
            </div>

            <div className="grid gap-5">
              <div className="rounded-2xl border border-white/10 bg-black/50 p-5">
                <div className="text-sm font-medium text-white/45">Before</div>
                <ul className="mt-4 space-y-3 text-sm leading-7 text-white/55">
                  <li>• Default sections</li>
                  <li>• Weak product presentation</li>
                  <li>• Inconsistent spacing</li>
                  <li>• Poor mobile hierarchy</li>
                  <li>• No trust-building structure</li>
                </ul>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                <div className="text-sm font-medium text-white">After</div>
                <ul className="mt-4 space-y-3 text-sm leading-7 text-white/70">
                  <li>• Aesthetic high performing store</li>
                  <li>• Cleaner homepage flow</li>
                  <li>• Product-first sections</li>
                  <li>• Better mobile readability</li>
                  <li>• Launch-ready starter store</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section
        id="how"
        className="scroll-mt-24 border-b border-white/10 bg-black py-28"
      >
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center">
            <h2 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">
              How It Works
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-white/55">
              Simple founder-friendly workflow. No complicated onboarding. No
              bloated agency process.
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            <div className="rounded-[1.6rem] border border-white/10 bg-white/[0.03] p-8 text-left">
              <div className="mb-4 inline-flex rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[10px] uppercase tracking-[0.18em] text-white/40">
                Step 1
              </div>

              <h3 className="text-xl font-semibold text-white">
                Submit Your Request
              </h3>

              <p className="mt-3 text-sm leading-8 text-white/65">
                Tell us your niche, number of products, and any example store or
                style direction you want.
              </p>
            </div>

            <div className="rounded-[1.6rem] border border-white/10 bg-white/[0.03] p-8 text-left">
              <div className="mb-4 inline-flex rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[10px] uppercase tracking-[0.18em] text-white/40">
                Step 2
              </div>

              <h3 className="text-xl font-semibold text-white">
                We Review and Confirm
              </h3>

              <p className="mt-3 text-sm leading-8 text-white/65">
                We review your request, align on fit, and send the next steps
                for delivery and payment.
              </p>
            </div>

            <div className="rounded-[1.6rem] border border-white/10 bg-white/[0.03] p-8 text-left">
              <div className="mb-4 inline-flex rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[10px] uppercase tracking-[0.18em] text-white/40">
                Step 3
              </div>

              <h3 className="text-xl font-semibold text-white">
                Your Store Gets Delivered
              </h3>

              <p className="mt-3 text-sm leading-8 text-white/65">
                We build and deliver your finished Shopify starter store within
                the target turnaround window.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section
        id="pricing"
        className="scroll-mt-24 relative border-b border-white/10 bg-black py-32"
      >
        <div className="absolute left-1/2 top-1/2 h-[28rem] w-[36rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/10 blur-3xl opacity-15" />

        <div className="relative mx-auto max-w-4xl px-6">
          <div className="text-center">
            <h2 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">
              Shopify Store Setup
            </h2>

            <p className="mt-3 text-white/55">One-time starter build</p>
          </div>

          <div className="relative mt-16 overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-b from-white/[0.07] to-white/[0.02] p-10 shadow-[0_20px_100px_rgba(0,0,0,0.6)] backdrop-blur-xl md:p-14">
            <div className="grid gap-10 md:grid-cols-[0.9fr_1.1fr]">
              <div>
                <p className="text-sm uppercase tracking-[0.22em] text-white/40">
                  Launch Package
                </p>

                <p className="mt-4 text-6xl font-semibold tracking-tight text-white">
                  $129
                </p>

                <p className="mt-4 max-w-sm text-sm leading-7 text-white/58">
                  Best for founders who want a clean Shopify store set up fast
                  without paying full agency pricing.
                </p>

                <a
                  href="#form"
                  className="mt-8 inline-flex w-full items-center justify-center rounded-xl bg-white px-6 py-4 text-sm font-medium text-black transition hover:scale-[1.01] hover:opacity-90 md:w-auto"
                >
                  Start My Store
                </a>

                <p className="mt-4 text-xs text-white/40">
                  No payment required to submit request
                </p>
              </div>

              <div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-2xl border border-white/10 bg-black/35 p-4 text-sm text-white/75">
                    ✓ Clean homepage design
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-black/35 p-4 text-sm text-white/75">
                    ✓ Up to 5 products uploaded
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-black/35 p-4 text-sm text-white/75">
                    ✓ Shopify Dawn customization
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-black/35 p-4 text-sm text-white/75">
                    ✓ Mobile optimized
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-black/35 p-4 text-sm text-white/75">
                    ✓ Basic policy pages setup
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-black/35 p-4 text-sm text-white/75">
                    ✓ Payment setup guidance
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-black/35 p-4 text-sm text-white/75">
                    ✓ Navigation cleanup
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-black/35 p-4 text-sm text-white/75">
                    ✓ 24-hour target delivery
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section
        id="faq"
        className="scroll-mt-24 border-b border-white/10 bg-black py-28"
      >
        <div className="mx-auto max-w-5xl px-6">
          <div className="text-center">
            <h2 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">
              Frequently Asked Questions
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-white/55">
              Everything most founders ask before getting their first store
              built.
            </p>
          </div>

          <div className="mt-16 space-y-5">
            <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-6">
              <h3 className="text-lg font-semibold text-white">
                Do I need to already have a Shopify account?
              </h3>

              <p className="mt-3 text-sm leading-8 text-white/60">
                Yes. You should have your Shopify account created already so the
                build can be set up inside your account.
              </p>
            </div>

            <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-6">
              <h3 className="text-lg font-semibold text-white">
                Can you build on top of my current unfinished store?
              </h3>

              <p className="mt-3 text-sm leading-8 text-white/60">
                Yes, we'd finish up your store just with Shopify's collaborate access
              </p>
            </div>

            <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-6">
              <h3 className="text-lg font-semibold text-white">
                What if I have more than 5 products?
              </h3>

              <p className="mt-3 text-sm leading-8 text-white/60">
                Mention that in the form. The base package covers up to 5
                products, and extra upload work can be discussed separately.
              </p>
            </div>

            <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-6">
              <h3 className="text-lg font-semibold text-white">
                Do you provide logos or product images?
              </h3>

              <p className="mt-3 text-sm leading-8 text-white/60">
                Yes, we work with leading image generation AI models to generate perfect product images, hero images and logo images. 
                Mention your requirement and we'd navigate from there
              </p>
            </div>

            <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-6">
              <h3 className="text-lg font-semibold text-white">
                How soon can I get the store?
              </h3>

              <p className="mt-3 text-sm leading-8 text-white/60">
                Unlike other agencies which sits on a store for a month or longer, we run on speed. We value your time and understand how important is it to launch faster
                considering the changing global economic situation. Hence our standard SLA is always 24H.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FORM */}
      <section
        id="form"
        className="scroll-mt-24 border-b border-white/10 bg-black py-28"
      >
        <div className="mx-auto max-w-3xl px-6">
          <div className="text-center">
            <h2 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">
              Start Your Shopify Store
            </h2>

            <p className="mt-3 text-sm leading-7 text-white/55">
              Tell us about your store. Takes less than 30 seconds.
            </p>
          </div>

          <div className="mt-12 rounded-[2rem] border border-white/10 bg-white/[0.03] p-6 shadow-[0_20px_80px_rgba(0,0,0,0.45)] md:p-8">
            {submitted && (
              <div className="mb-8 flex flex-col items-center justify-center rounded-2xl border border-green-400/20 bg-green-500/10 px-6 py-8 text-center">
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-green-500/20 text-2xl text-green-400">
                  ✓
                </div>

                <h3 className="text-xl font-semibold text-white">
                  Request Submitted Successfully
                </h3>

                <p className="mt-3 max-w-md text-sm leading-6 text-white/70">
                  Your store request has been received.
                  <br />
                  We will review it and get back to you shortly.
                </p>
              </div>
            )}

            {!submitted && (
              <form onSubmit={handleSubmit} className="space-y-6 text-left">
                <input
                  type="hidden"
                  name="_subject"
                  value="New Store Request"
                />

                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-2 block text-sm text-white/70"
                    >
                      Your name
                    </label>

                    <input
                      id="name"
                      name="name"
                      required
                      placeholder="Your name"
                      className="w-full rounded-xl border border-white/10 bg-black px-4 py-3 text-sm text-white placeholder:text-white/35 focus:outline-none focus:ring-2 focus:ring-white/20"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2 block text-sm text-white/70"
                    >
                      Your email
                    </label>

                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="you@example.com"
                      className="w-full rounded-xl border border-white/10 bg-black px-4 py-3 text-sm text-white placeholder:text-white/35 focus:outline-none focus:ring-2 focus:ring-white/20"
                    />
                  </div>
                </div>

                <div>
                  <p className="mb-4 text-sm text-white/70">
                    What are you selling?
                  </p>

                  <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
                    <label className="cursor-pointer">
                      <input
                        type="radio"
                        name="category"
                        value="fashion"
                        className="peer hidden"
                        required
                      />
                      <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4 text-center text-sm text-white/80 transition hover:border-white/30 peer-checked:border-white peer-checked:bg-white/[0.08]">
                        Fashion
                      </div>
                    </label>

                    <label className="cursor-pointer">
                      <input
                        type="radio"
                        name="category"
                        value="skincare"
                        className="peer hidden"
                      />
                      <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4 text-center text-sm text-white/80 transition hover:border-white/30 peer-checked:border-white peer-checked:bg-white/[0.08]">
                        Skincare / Beauty
                      </div>
                    </label>

                    <label className="cursor-pointer">
                      <input
                        type="radio"
                        name="category"
                        value="fitness"
                        className="peer hidden"
                      />
                      <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4 text-center text-sm text-white/80 transition hover:border-white/30 peer-checked:border-white peer-checked:bg-white/[0.08]">
                        Fitness / Supplements
                      </div>
                    </label>

                    <label className="cursor-pointer">
                      <input
                        type="radio"
                        name="category"
                        value="food"
                        className="peer hidden"
                      />
                      <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4 text-center text-sm text-white/80 transition hover:border-white/30 peer-checked:border-white peer-checked:bg-white/[0.08]">
                        Food / Beverage
                      </div>
                    </label>

                    <label className="cursor-pointer">
                      <input
                        type="radio"
                        name="category"
                        value="home"
                        className="peer hidden"
                      />
                      <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4 text-center text-sm text-white/80 transition hover:border-white/30 peer-checked:border-white peer-checked:bg-white/[0.08]">
                        Home / Decor
                      </div>
                    </label>

                    <label className="cursor-pointer">
                      <input
                        type="radio"
                        name="category"
                        value="other"
                        className="peer hidden"
                      />
                      <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4 text-center text-sm text-white/80 transition hover:border-white/30 peer-checked:border-white peer-checked:bg-white/[0.08]">
                        Other
                      </div>
                    </label>
                  </div>
                </div>

                <div>
                  <p className="mb-4 text-sm text-white/70">
                    How many products will your store have?
                  </p>

                  <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
                    <label className="cursor-pointer">
                      <input
                        type="radio"
                        name="products"
                        value="1-3"
                        className="peer hidden"
                        required
                      />
                      <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4 text-center text-sm text-white/80 transition hover:border-white/30 peer-checked:border-white peer-checked:bg-white/[0.08]">
                        1–3 Products
                      </div>
                    </label>

                    <label className="cursor-pointer">
                      <input
                        type="radio"
                        name="products"
                        value="3-5"
                        className="peer hidden"
                      />
                      <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4 text-center text-sm text-white/80 transition hover:border-white/30 peer-checked:border-white peer-checked:bg-white/[0.08]">
                        3–5 Products
                      </div>
                    </label>

                    <label className="cursor-pointer">
                      <input
                        type="radio"
                        name="products"
                        value="5-10"
                        className="peer hidden"
                      />
                      <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4 text-center text-sm text-white/80 transition hover:border-white/30 peer-checked:border-white peer-checked:bg-white/[0.08]">
                        5–10 Products
                      </div>
                    </label>

                    <label className="cursor-pointer">
                      <input
                        type="radio"
                        name="products"
                        value="10+"
                        className="peer hidden"
                      />
                      <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4 text-center text-sm text-white/80 transition hover:border-white/30 peer-checked:border-white peer-checked:bg-white/[0.08]">
                        10+ Products
                      </div>
                    </label>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="store_name"
                    className="mb-2 block text-sm text-white/70"
                  >
                    Store name
                  </label>

                  <input
                    id="store_name"
                    name="store_name"
                    placeholder="Store name (optional)"
                    className="w-full rounded-xl border border-white/10 bg-black px-4 py-3 text-sm text-white placeholder:text-white/35 focus:outline-none focus:ring-2 focus:ring-white/20"
                  />
                </div>

                <div>
                  <label
                    htmlFor="example_store"
                    className="mb-2 block text-sm text-white/70"
                  >
                    Example store you like
                  </label>

                  <textarea
                    id="example_store"
                    name="example_store"
                    rows={4}
                    placeholder="Paste an example store link or describe the style you want (optional)"
                    className="w-full rounded-xl border border-white/10 bg-black px-4 py-3 text-sm text-white placeholder:text-white/35 focus:outline-none focus:ring-2 focus:ring-white/20"
                  />
                </div>

                <div>
                  <label
                    htmlFor="notes"
                    className="mb-2 block text-sm text-white/70"
                  >
                    Anything else we should know?
                  </label>

                  <textarea
                    id="notes"
                    name="notes"
                    rows={5}
                    placeholder="Brand vibe, timeline, pages needed, product type, anything useful"
                    className="w-full rounded-xl border border-white/10 bg-black px-4 py-3 text-sm text-white placeholder:text-white/35 focus:outline-none focus:ring-2 focus:ring-white/20"
                  />
                </div>

                <button
                  className="w-full rounded-xl bg-white py-4 text-sm font-medium text-black transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
                  type="submit"
                  disabled={loading}
                >
                  {loading ? "Submitting..." : "Start My Store"}
                </button>

                {error && (
                  <p className="text-center text-sm text-red-400">{error}</p>
                )}

                <p className="text-center text-xs text-white/40">
                  No payment required to submit • Response within 12 hours
                </p>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      {!submitted && (
  <section className="bg-black py-24">
        <div className="mx-auto max-w-5xl px-6">
          <div className="rounded-[2rem] border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.02] px-6 py-12 text-center shadow-[0_20px_90px_rgba(0,0,0,0.55)] md:px-10">
            <h2 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">
              Stop tweaking Dawn for days
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-white/58">
              Get a clean starter Shopify store that actually looks ready to
              sell, without spending weeks trying to make the default theme feel
              premium.
            </p>

            <a
              href="#form"
              className="mt-8 inline-flex items-center justify-center rounded-xl bg-white px-6 py-3 text-sm font-medium text-black transition hover:scale-[1.02] hover:opacity-90"
            >
              Submit Store Request
            </a>
          </div>
        </div>
      </section>
      )}

      {/* FOOTER */}
      <footer className="border-t border-white/10 bg-black py-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 text-xs text-white/40 md:flex-row md:items-center md:justify-between">
          <div>© {new Date().getFullYear()} StoreForge</div>

          <div className="flex flex-wrap gap-6">
            <a href="#" className="transition hover:text-white/75">
              Privacy
            </a>

            <a href="#" className="transition hover:text-white/75">
              Terms
            </a>

            <a href="#form" className="transition hover:text-white/75">
              Contact
            </a>
          </div>
        </div>
      </footer>
    </main>
  )
}