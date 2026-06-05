import { ExternalLink, Heart } from "lucide-react"

import { cn } from "@/lib/utils"

function DevelopedByKaizencode({ className, ...props }: React.ComponentProps<"footer">) {
  return (
    <footer
      className={cn(
        "flex items-center justify-center gap-1 px-6 py-4 text-sm text-muted-foreground",
        className
      )}
      {...props}
    >
      <span>Developed with</span>
      <Heart className="size-4 fill-current text-red-500" />
      <span>by</span>
      <a
        href="https://kaizencode.es"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-0.5 font-medium text-foreground transition-colors hover:text-primary"
      >
        Kaizencode
        <ExternalLink className="size-3" />
      </a>
    </footer>
  )
}

export { DevelopedByKaizencode }
