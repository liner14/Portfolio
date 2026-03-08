import { motion } from "framer-motion";

/**
 * SkillBar — Animated progress bar for a single skill
 *
 * Uses Framer Motion `whileInView` to animate the bar width
 * from 0% to the skill's level when it scrolls into view.
 *
 * Props:
 *  - name: skill name label
 *  - level: 0–100 proficiency percentage
 *  - darkMode: boolean
 *  - index: number (for stagger animation delay)
 */
const SkillBar = ({ name, level, darkMode, index }) => {
  return (
    <div className="mb-4">
      {/* Skill name and percentage */}
      <div className="flex justify-between items-center mb-1.5">
        <span
          className={`text-sm font-medium ${
            darkMode ? "text-text-dark" : "text-text-light"
          }`}
        >
          {name}
        </span>
        <span
          className={`text-xs font-semibold ${
            darkMode ? "text-primary-400" : "text-primary-600"
          }`}
        >
          {level}%
        </span>
      </div>

      {/* Progress bar track */}
      <div
        className={`h-2.5 rounded-full overflow-hidden ${
          darkMode ? "bg-white/10" : "bg-black/5"
        }`}
      >
        {/* Animated fill bar */}
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: index * 0.08, ease: "easeOut" }}
          className="h-full rounded-full bg-gradient-to-r from-primary-500 to-primary-400"
        />
      </div>
    </div>
  );
};

export default SkillBar;
