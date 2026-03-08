import { motion } from "framer-motion";

/**
 * SectionWrapper — Reusable scroll-triggered fade-in wrapper
 *
 * Wraps each major section with a Framer Motion `motion.section`
 * that fades in and slides up when it enters the viewport.
 *
 * Props:
 *  - id: section HTML id for smooth scrolling
 *  - children: section content
 *  - className: additional classes
 */
const SectionWrapper = ({ id, children, className = "" }) => {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`py-20 px-4 sm:px-6 lg:px-8 ${className}`}
    >
      <div className="max-w-6xl mx-auto">{children}</div>
    </motion.section>
  );
};

export default SectionWrapper;
