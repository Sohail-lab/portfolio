import { HTMLMotionProps } from "framer-motion"

declare module "framer-motion" {
  export interface MotionProps {
    className?: string
    onClick?: () => void
    style?: any
  }
} 