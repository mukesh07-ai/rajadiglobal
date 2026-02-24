import { Variants } from "framer-motion";

export const transitionProps = {
    type: "tween" as const,
    ease: [0.25, 0.1, 0.25, 1] as const, // ease-in-out / cubic-bezier
    duration: 0.6,
};

export const fadeUpVariant: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { ...transitionProps, duration: 0.7 }
    },
};

export const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.1,
        },
    },
};

export const scaleInVariant: Variants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: { ...transitionProps, duration: 0.7 }
    },
};

export const imageScaleVariant: Variants = {
    hidden: { opacity: 0, scale: 1.05 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: { ...transitionProps, duration: 0.8 }
    },
};

export const sectionRevealProps = {
    initial: "hidden",
    whileInView: "visible",
    viewport: { once: true, margin: "-100px 0px" },
};

export const navSlideDown: Variants = {
    hidden: { y: -100, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: { type: "spring", stiffness: 100, damping: 20 }
    }
};

export const hoverCardVariant = {
    rest: { y: 0, boxShadow: "0px 4px 20px rgba(0,0,0,0.05)" },
    hover: {
        y: -5,
        boxShadow: "0px 10px 30px rgba(0,0,0,0.1)",
        transition: { duration: 0.3, ease: "easeOut" }
    }
};
