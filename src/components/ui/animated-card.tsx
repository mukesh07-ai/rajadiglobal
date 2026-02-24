"use client";

import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";
import React from "react";
import { transitionProps } from "@/lib/animations";

interface AnimatedCardProps extends HTMLMotionProps<"div"> {
    children: React.ReactNode;
    delay?: number;
    hoverEffect?: boolean;
}

export function AnimatedCard({
    children,
    className,
    delay = 0,
    hoverEffect = true,
    ...props
}: AnimatedCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{
                ...transitionProps,
                delay
            }}
            className={cn(
                "rounded-2xl glass-card overflow-hidden transition-transform",
                hoverEffect && "hover:-translate-y-2",
                className
            )}
            {...props}
        >
            {children}
        </motion.div>
    );
}
