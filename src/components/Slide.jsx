import { motion } from 'framer-motion'

const variants = {
  enter: (direction) => ({
    opacity: 0,
    y: direction > 0 ? 30 : -30,
    scale: 0.98,
  }),
  center: {
    opacity: 1,
    y: 0,
    scale: 1,
  },
  exit: (direction) => ({
    opacity: 0,
    y: direction > 0 ? -20 : 20,
    scale: 0.98,
  }),
}

export default function Slide({ children, direction }) {
  return (
    <motion.div
      className="slide"
      custom={direction}
      variants={variants}
      initial="enter"
      animate="center"
      exit="exit"
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      style={{
        position: 'absolute',
        inset: 0,
        zIndex: 1,
        display: 'flex',
        flexDirection: 'column',
        padding: '60px 72px 88px',
      }}
    >
      {children}
    </motion.div>
  )
}
