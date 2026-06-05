import { ExternalLink, Heart } from "lucide-react"

import { cn } from "@/lib/utils"

function DevelopedByKaizencode({ className, ...props }: React.ComponentProps<"footer">) {
  return (
    <footer
      className={cn(
        "flex flex-wrap items-center justify-center gap-x-1 px-4 py-4 text-xs text-muted-foreground sm:gap-x-1.5 sm:text-sm",
        className
      )}
      {...props}
    >
      <span>Developed with</span>
      <Heart className="size-3.5 fill-current text-red-500 sm:size-4" />
      <span>by</span>
      <a
        href="https://kaizencode.es"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-0.5 font-medium text-foreground transition-colors hover:text-primary"
      >
        Kaizencode
        <ExternalLink className="size-3 sm:size-3.5" />
      </a>
    </footer>
  )
}

export { DevelopedByKaizencode }
