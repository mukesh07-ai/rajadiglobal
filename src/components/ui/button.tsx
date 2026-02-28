import * as React from "react"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "default" | "outline" | "ghost" | "link" | "gradient";
    size?: "default" | "sm" | "lg" | "icon";
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = "default", size = "default", ...props }, ref) => {
        return (
            <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                ref={ref as any}
                className={cn(
                    "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50",
                    {
                        "bg-blue-600 text-[#ffffff] shadow hover:bg-blue-600/90": variant === "default",
                        "border border-white/20 bg-transparent shadow-sm hover:bg-slate-800 hover:text-[#ffffff]": variant === "outline",
                        "hover:bg-slate-800 hover:text-[#ffffff]": variant === "ghost",
                        "text-blue-500 underline-offset-4 hover:underline": variant === "link",
                        "bg-gradient-to-r from-blue-600 to-teal-500 text-[#ffffff] hover:from-blue-500 hover:to-teal-400 border-0": variant === "gradient",
                        "h-9 px-4 py-2": size === "default",
                        "h-8 rounded-md px-3 text-xs": size === "sm",
                        "h-10 rounded-md px-8": size === "lg",
                        "h-9 w-9": size === "icon",
                    },
                    className
                )}
                {...props as any}
            />
        )
    }
)
Button.displayName = "Button"

export { Button }
