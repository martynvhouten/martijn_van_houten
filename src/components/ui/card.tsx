import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cn } from "@/lib/utils"

type CardVariant = "default" | "elevated" | "accent" | "glass" | "glassBrand"

type CardProps = React.ComponentProps<"div"> & {
  variant?: CardVariant
  clickable?: boolean
  asChild?: boolean
}

function Card({ className, variant = "default", clickable = false, asChild = false, ...props }: CardProps) {
  const Comp = asChild ? Slot : "div"

  const base = "text-card-foreground flex flex-col gap-5 md:gap-6 rounded-2xl border p-6 md:p-8 transition-all duration-200 ease-out will-change-transform transform-gpu"
  const variants: Record<CardVariant, string> = {
    default: "bg-slate-50/80 dark:bg-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[--brand] focus-visible:ring-offset-2 focus-visible:ring-offset-background",
    elevated: "bg-white shadow-elev-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[--brand] focus-visible:ring-offset-2 focus-visible:ring-offset-background",
    accent: "bg-gradient-to-br from-[color:var(--brand-50)]/70 via-white/60 to-[color:var(--brand-50)]/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[--brand] focus-visible:ring-offset-2 focus-visible:ring-offset-background",
    glass: "card-glass", // focus handled by .card-glass
    glassBrand:
      "card-glass bg-[linear-gradient(135deg,_color-mix(in_oklab,_var(--brand-50)_65%,_transparent),_color-mix(in_oklab,_#ffffff_40%,_transparent))] dark:bg-[linear-gradient(135deg,_color-mix(in_oklab,_var(--brand-400)_10%,_transparent),_color-mix(in_oklab,_#000000_30%,_transparent))]",
  }
  const interactive = clickable ? "spotlight-hover hover:-translate-y-0.5 hover:scale-[1.01] shadow-hover-elev-sm cursor-pointer" : "cursor-default"

  return (
    <Comp
      data-slot="card"
      className={cn(base, variants[variant], interactive, className)}
      {...props}
    />
  )
}

function CardHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-header"
      className={cn(
        "@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-2 px-0 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6",
        className
      )}
      {...props}
    />
  )
}

function CardTitle({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-title"
      className={cn("leading-tight text-lg md:text-xl font-semibold", className)}
      {...props}
    />
  )
}

function CardDescription({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-description"
      className={cn("text-muted-foreground text-sm md:text-[0.95rem] leading-relaxed", className)}
      {...props}
    />
  )
}

function CardAction({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-action"
      className={cn(
        "col-start-2 row-span-2 row-start-1 self-start justify-self-end",
        className
      )}
      {...props}
    />
  )
}

function CardContent({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-content"
      className={cn("px-0", className)}
      {...props}
    />
  )
}

function CardFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-footer"
      className={cn("flex items-center px-0 [.border-t]:pt-6", className)}
      {...props}
    />
  )
}

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardAction,
  CardDescription,
  CardContent,
}
