import styles from "./Video.module.css";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

export default function Video ({ scrollY, fadeStart }) {
    const fadeInStart = fadeStart; // เริ่ม fade หลังจาก Gallery จบ
    const fadeInEnd = fadeInStart + 300; // Fade เต็มที่หลังจาก 300px
  const opacity = scrollY < fadeInStart 
    ? 0 
    : scrollY > fadeInEnd 
      ? 1 
      : (scrollY - fadeInStart) / (fadeInEnd - fadeInStart);

  return (
    <section id="video" style={{ height: '100vh' }}>
    <div className={styles.bg} style={{ opacity }}>
            {/* Background Section */}
            <div className={styles.background}>
                <div className={styles.bar1}></div>
            </div>

                  {/* YouTube Video (ไม่หมุน) */}
            <div className={styles.videoWrapper}>
                <iframe 
                    width="1903px" 
                    height="750px" 
                    src="https://www.youtube.com/embed/G6HuSLwJc74" 
                    title="PaletteFlow" 
                    frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    referrerpolicy="strict-origin-when-cross-origin" 
                    allowfullscreen>
                </iframe>
            </div>

            <img className={styles.hVideo} src="/hVideo.png" width={800}/>


            <div className={styles.btnTool}>
                <motion.div className={styles.iconContainer}>
                        {[...Array(3)].map((_, i) => (
                        <motion.div
                            key={i}
                            animate={{ y: [0, 10, 0] }}
                            transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
                        >
                            <FontAwesomeIcon icon={faChevronDown} />
                        </motion.div>
                        ))}
                </motion.div>
                <a href="https://paletteflowtoolabout.vercel.app/tool" target="_blank" rel="noopener noreferrer">
                    <img className={styles.btn} src="/btn.png" width={450} alt="Button" />
                </a>    
            </div>


            <a href="https://youtu.be/G6HuSLwJc74?si=MqlE3fLZiHN7FgcM" target="_blank" className={styles.ytlink} rel="noopener noreferrer">
                <img className={styles.yt_icon} src="/yt_icon.png" width={65} alt="Button" />
                <img className={styles.circle} src="/circle.png" width={190} alt="Button" />
            </a>    

            <img className={styles.easy} src="/easy.png" width={710}/>

            <img className={styles.easyS} src="/easyS.png" />
            
          </div>
          </section>
  );
}
