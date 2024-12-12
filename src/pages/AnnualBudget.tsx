import { AboutCarousal, BudgetTable } from "../components";
import { motion } from "framer-motion";
import { hero2 } from "../assets";
import styles from "../styles";

const AnnualBudget = () => {
  return (
    <motion.div
      id="home"
      transition={{
        when: "beforeChildren",
        staggerChildren: 2,
      }}
      className="bg-white w-full overflow-hidden"
    >
      {/* carousal */}
      <div className={` ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <AboutCarousal
            image={hero2}
            title={"Annual Budget"}
            content={
              " Explore Kono District Council's annual budget, detailing the allocation of funds for key development areas, including infrastructure, education, healthcare, and community services to support the district's growth and sustainability."
            }
          />
        </div>
      </div>

      <BudgetTable />
    </motion.div>
  );
};

export default AnnualBudget;
