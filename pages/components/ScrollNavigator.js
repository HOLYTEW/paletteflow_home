import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";

const sections = [
  { name: 'PaletteFlow', start: 0, end: 99 },
  { name: 'ทฤษฎี 60:30:10', start: 100, end: 499 },
  { name: 'สีหลัก 60%', start: 925, end: 1225 },
  { name: 'สีรอง 30%', start: 1500, end: 1725 },
  { name: 'สีเน้น 10%', start: 2125, end: 2500 },
  { name: 'วิธีใช้งานเว็บไซต์', start: 2800, end: 2900 },
];

export default function ScrollNavigator({ scrollY }) {
  const [currentSection, setCurrentSection] = useState('');
  const [hoveredSection, setHoveredSection] = useState('');

  // หา section ปัจจุบัน
  useEffect(() => {
    const active = sections.find(
      (section) => scrollY >= section.start && scrollY <= section.end
    );
    setCurrentSection(active?.name || '');
  }, [scrollY]);

  // scroll ไปยัง section
  const handleClick = (sectionName) => {
    const section = sections.find((s) => s.name === sectionName);
    if (section) {
      window.scrollTo({
        top: section.start,
        behavior: 'smooth',
      });
    }
  };

  // กดลูกศรขึ้น
  const scrollToPrev = () => {
    const index = sections.findIndex((s) => s.name === currentSection);
    if (index > 0) {
      handleClick(sections[index - 1].name);
    }
  };

  // กดลูกศรลง
  const scrollToNext = () => {
    const index = sections.findIndex((s) => s.name === currentSection);
    if (index < sections.length - 1) {
      handleClick(sections[index + 1].name);
    }
  };

  return (
    <div style={styles.navContainer}>
      {/* ปุ่มขึ้น */}
      <div onClick={scrollToPrev} style={styles.arrowButton}>
      <FontAwesomeIcon icon={faChevronUp} />
      </div>

      {/* วงกลมเลื่อน scroll */}
      {sections.map((section) => (
        <div
          key={section.name}
          onClick={() => handleClick(section.name)}
          onMouseEnter={() => setHoveredSection(section.name)}
          onMouseLeave={() => setHoveredSection('')}
          style={styles.navItemWrapper}
        >
          <div
            style={{
              ...styles.navItem,
              ...(currentSection === section.name ? styles.activeItem : {}),
            }}
          ></div>
          {hoveredSection === section.name && (
            <span style={styles.navLabel}>{section.name}</span>
          )}
        </div>
      ))}

      {/* ปุ่มลง */}
      <div onClick={scrollToNext} style={styles.arrowButton}>
      <FontAwesomeIcon icon={faChevronDown} />
      </div>
    </div>
  );
}

const styles = {
  navContainer: {
    position: 'fixed',
    top: '50%',
    right: '20px',
    transform: 'translateY(-50%)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '10px',
    zIndex: 1000,
  },
  arrowButton: {
    margin: '10px 0',
    fontSize: '1.5rem',
    color: '#ccc',
    padding: '5px 10px',
    borderRadius: '6px',
    cursor: 'pointer',
    userSelect: 'none',
    transition: 'background 0.2s ease',
  },
  navItemWrapper: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
  },
  navItem: {
    width: '20px',
    height: '20px',
    borderRadius: '50%',
    background: '#ccc',
    transition: 'all 0.3s ease',
  },
  activeItem: {
    background: '#222',
    boxShadow: '0 0 0 3px rgba(0, 0, 0, 0.2)',
  },
  navLabel: {
    position: 'absolute',
    right: '30px',
    background: '#fff',
    color: '#333',
    padding: '5px 10px',
    borderRadius: '6px',
    whiteSpace: 'nowrap',
    opacity: 1,
    transform: 'translateX(0)',
    transition: 'opacity 0.3s ease, transform 0.3s ease',
  },
};