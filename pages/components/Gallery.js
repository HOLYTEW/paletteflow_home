import { motion, useScroll, useTransform , useSpring } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import styles from "./Gallery.module.css";

export default function Gallery({ fadeEnd }) {
  const { scrollY } = useScroll(); // Get scrollY as a MotionValue
  const [currentScroll, setCurrentScroll] = useState(0);

  useEffect(() => {
    const unsubscribe = scrollY.on("change", (v) => {
      setCurrentScroll(v);
      console.log("ScrollY:", v); 
    });
    return () => unsubscribe();
  }, [scrollY]);

  // Control opacity
  const opacity = currentScroll > fadeEnd ? 1 : 0;



  const rawOpacity1 = useTransform(scrollY, [850, 925, 1000], [0, 1, 0]);

  const showLight1 = useSpring(rawOpacity1, {
    stiffness: 60,   // นุ่ม ๆ
    damping: 20,     // ลดการกระเด้ง
    mass: 1.2        // เคลื่อนไหวลื่น ๆ
  });

  const rawOpacity2 = useTransform(scrollY, [1425, 1500, 1575], [0, 1, 0]);

  const showLight2 = useSpring(rawOpacity2, {
    stiffness: 60,   // นุ่ม ๆ
    damping: 20,     // ลดการกระเด้ง
    mass: 1.2        // เคลื่อนไหวลื่น ๆ
  });

  const rawOpacity3 = useTransform(scrollY, [2000, 2125, 2200], [0, 1, 0]);

  const showLight3 = useSpring(rawOpacity3, {
    stiffness: 10,   // นุ่ม ๆ
    damping: 5,     // ลดการกระเด้ง
    mass: 0.5        // เคลื่อนไหวลื่น ๆ
  });


  // Desktop
  //60

  const Pic60 = useTransform(scrollY, 
    [fadeEnd, fadeEnd + 300, fadeEnd + 600], // 3 ระยะ
    ["1500vh", "100vh", "1500vh"] // เริ่มจากล่าง -> อยู่ตรงกลาง -> กลับไปล่าง
  );

  const Pic60Move = useSpring(Pic60, {
    stiffness: 100, // เพิ่มให้หน่วงขึ้น
    damping: 20,
    mass: 1.5 // เพิ่มมวลให้เคลื่อนที่ต่อเนื่อง
  });

  const P60 = useTransform(scrollY, 
    [fadeEnd, fadeEnd + 300, fadeEnd + 600], // 3 ระยะ
    ["1000vh", "-500vh", "1000vh"] // วิ่งเข้ามา -> อยู่ตรงกลาง -> วิ่งออกไป
  );

  const P60Move = useSpring(P60, {
    stiffness: 100, // เพิ่มให้หน่วงขึ้น
    damping: 20,
    mass: 1.5 // เพิ่มมวลให้เคลื่อนที่ต่อเนื่อง
  });

  //30

    // pic30 เลื่อนขึ้นมาจากล่างแล้วกลับไปล่าง
    const Pic30 = useTransform(scrollY, 
      [fadeEnd + 600, fadeEnd + 900, fadeEnd + 1200], // เพิ่ม range ให้ scroll ได้มากขึ้น
      ["1500vh", "190vh", "1500vh"]
    );
  
    const Pic30Move = useSpring(Pic30, {
      stiffness: 100, // เพิ่มให้หน่วงขึ้น
      damping: 20,
      mass: 1.5 // เพิ่มมวลให้เคลื่อนที่ต่อเนื่อง
    });
  
    // p30 เลื่อนมาจากซ้ายแล้วกลับไปซ้าย
    const P30 = useTransform(scrollY, 
      [fadeEnd + 600, fadeEnd + 900, fadeEnd + 1200], // เพิ่ม range ให้ scroll ได้มากขึ้น
      ["-1500vh", "330vh", "-1500vh"]
    );
  
    const P30Move = useSpring(P30, {
      stiffness: 100, // เพิ่มให้หน่วงขึ้น
      damping: 20,
      mass: 1.5 // เพิ่มมวลให้เคลื่อนที่ต่อเนื่อง
    });

    
    //10

    const Pic10 = useTransform(scrollY, 
      [fadeEnd + 1200, fadeEnd + 1500, fadeEnd + 1800], // ลดช่วงให้มาเร็วขึ้น
      ["1500vh", "150vh", "1500vh"]
    );
  
    const Pic10Move = useSpring(Pic10, {
      stiffness: 100, // เพิ่มให้หน่วงขึ้น
      damping: 20,
      mass: 1.5 // เพิ่มมวลให้เคลื่อนที่ต่อเนื่อง
    });
  
    const P10 = useTransform(scrollY, 
      [fadeEnd + 1200, fadeEnd + 1500, fadeEnd + 1800], // ลดช่วงให้มาเร็วขึ้น
      ["1500vh", "-500vh", "1500vh"]
    );
  
    const P10Move = useSpring(P10, {
      stiffness: 100, // เพิ่มให้หน่วงขึ้น
      damping: 20,
      mass: 1.5 // เพิ่มมวลให้เคลื่อนที่ต่อเนื่อง
    });

    // Desktop


  // SmallDesktop
  //60

  const Pic60S = useTransform(scrollY, 
    [fadeEnd, fadeEnd + 300, fadeEnd + 600], // 3 ระยะ
    ["1500vh", "250vh", "1500vh"] // เริ่มจากล่าง -> อยู่ตรงกลาง -> กลับไปล่าง
  );

  const Pic60MoveS = useSpring(Pic60S, {
    stiffness: 100, // เพิ่มให้หน่วงขึ้น
    damping: 20,
    mass: 1.5 // เพิ่มมวลให้เคลื่อนที่ต่อเนื่อง
  });

  const P60S = useTransform(scrollY, 
    [fadeEnd, fadeEnd + 300, fadeEnd + 600], // 3 ระยะ
    ["1000vh", "-450vh", "1000vh"] // วิ่งเข้ามา -> อยู่ตรงกลาง -> วิ่งออกไป
  );

  const P60MoveS = useSpring(P60S, {
    stiffness: 100, // เพิ่มให้หน่วงขึ้น
    damping: 20,
    mass: 1.5 // เพิ่มมวลให้เคลื่อนที่ต่อเนื่อง
  });

  //30

    // pic30 เลื่อนขึ้นมาจากล่างแล้วกลับไปล่าง
    const Pic30S = useTransform(scrollY, 
      [fadeEnd + 600, fadeEnd + 900, fadeEnd + 1200], // เพิ่ม range ให้ scroll ได้มากขึ้น
      ["1500vh", "350vh", "1500vh"]
    );
  
    const Pic30MoveS = useSpring(Pic30S, {
      stiffness: 100, // เพิ่มให้หน่วงขึ้น
      damping: 20,
      mass: 1.5 // เพิ่มมวลให้เคลื่อนที่ต่อเนื่อง
    });
  
    // p30 เลื่อนมาจากซ้ายแล้วกลับไปซ้าย
    const P30S = useTransform(scrollY, 
      [fadeEnd + 600, fadeEnd + 900, fadeEnd + 1200], // เพิ่ม range ให้ scroll ได้มากขึ้น
      ["-1500vh", "270vh", "-1500vh"]
    );
  
    const P30MoveS = useSpring(P30S, {
      stiffness: 100, // เพิ่มให้หน่วงขึ้น
      damping: 20,
      mass: 1.5 // เพิ่มมวลให้เคลื่อนที่ต่อเนื่อง
    });

    
    //10

    const Pic10S = useTransform(scrollY, 
      [fadeEnd + 1200, fadeEnd + 1500, fadeEnd + 1800], // ลดช่วงให้มาเร็วขึ้น
      ["1500vh", "270vh", "1500vh"]
    );
  
    const Pic10MoveS = useSpring(Pic10S, {
      stiffness: 100, // เพิ่มให้หน่วงขึ้น
      damping: 20,
      mass: 1.5 // เพิ่มมวลให้เคลื่อนที่ต่อเนื่อง
    });
  
    const P10S = useTransform(scrollY, 
      [fadeEnd + 1200, fadeEnd + 1500, fadeEnd + 1800], // ลดช่วงให้มาเร็วขึ้น
      ["1500vh", "-400vh", "1500vh"]
    );
  
    const P10MoveS = useSpring(P10S, {
      stiffness: 100, // เพิ่มให้หน่วงขึ้น
      damping: 20,
      mass: 1.5 // เพิ่มมวลให้เคลื่อนที่ต่อเนื่อง
    });

    // SmallDesktop


    // Tablet
  //60

  const Pic60T = useTransform(scrollY, 
    [fadeEnd, fadeEnd + 300, fadeEnd + 600], // 3 ระยะ
    ["1500vh", "250vh", "1500vh"] // เริ่มจากล่าง -> อยู่ตรงกลาง -> กลับไปล่าง
  );

  const Pic60MoveT = useSpring(Pic60T, {
    stiffness: 100, // เพิ่มให้หน่วงขึ้น
    damping: 20,
    mass: 1.5 // เพิ่มมวลให้เคลื่อนที่ต่อเนื่อง
  });

  const P60T = useTransform(scrollY, 
    [fadeEnd, fadeEnd + 300, fadeEnd + 600], // 3 ระยะ
    ["1000vh", "-270vh", "1000vh"] // วิ่งเข้ามา -> อยู่ตรงกลาง -> วิ่งออกไป
  );

  const P60MoveT = useSpring(P60T, {
    stiffness: 100, // เพิ่มให้หน่วงขึ้น
    damping: 20,
    mass: 1.5 // เพิ่มมวลให้เคลื่อนที่ต่อเนื่อง
  });

  //30

    // pic30 เลื่อนขึ้นมาจากล่างแล้วกลับไปล่าง
    const Pic30T = useTransform(scrollY, 
      [fadeEnd + 600, fadeEnd + 900, fadeEnd + 1200], // เพิ่ม range ให้ scroll ได้มากขึ้น
      ["1500vh", "350vh", "1500vh"]
    );
  
    const Pic30MoveT = useSpring(Pic30T, {
      stiffness: 100, // เพิ่มให้หน่วงขึ้น
      damping: 20,
      mass: 1.5 // เพิ่มมวลให้เคลื่อนที่ต่อเนื่อง
    });
  
    // p30 เลื่อนมาจากซ้ายแล้วกลับไปซ้าย
    const P30T = useTransform(scrollY, 
      [fadeEnd + 600, fadeEnd + 900, fadeEnd + 1200], // เพิ่ม range ให้ scroll ได้มากขึ้น
      ["-1500vh", "200vh", "-1500vh"]
    );
  
    const P30MoveT = useSpring(P30T, {
      stiffness: 100, // เพิ่มให้หน่วงขึ้น
      damping: 20,
      mass: 1.5 // เพิ่มมวลให้เคลื่อนที่ต่อเนื่อง
    });

    
    //10

    const Pic10T = useTransform(scrollY, 
      [fadeEnd + 1200, fadeEnd + 1500, fadeEnd + 1800], // ลดช่วงให้มาเร็วขึ้น
      ["1500vh", "270vh", "1500vh"]
    );
  
    const Pic10MoveT = useSpring(Pic10T, {
      stiffness: 100, // เพิ่มให้หน่วงขึ้น
      damping: 20,
      mass: 1.5 // เพิ่มมวลให้เคลื่อนที่ต่อเนื่อง
    });
  
    const P10T = useTransform(scrollY, 
      [fadeEnd + 1200, fadeEnd + 1500, fadeEnd + 1800], // ลดช่วงให้มาเร็วขึ้น
      ["1500vh", "-350vh", "1500vh"]
    );
  
    const P10MoveT = useSpring(P10T, {
      stiffness: 100, // เพิ่มให้หน่วงขึ้น
      damping: 20,
      mass: 1.5 // เพิ่มมวลให้เคลื่อนที่ต่อเนื่อง
    });

    // Tablet


    //Mobile
      //60
        const Pic60M = useTransform(scrollY, 
          [fadeEnd, fadeEnd + 300, fadeEnd + 600], // 3 ระยะ
          ["-1500vh", "450vh", "-1500vh"] // เริ่มจากล่าง -> อยู่ตรงกลาง -> กลับไปล่าง
        );

        const Pic60MoveM = useSpring(Pic60M, {
          stiffness: 100, // เพิ่มให้หน่วงขึ้น
          damping: 20,
          mass: 1.5 // เพิ่มมวลให้เคลื่อนที่ต่อเนื่อง
        });

        const P60M = useTransform(scrollY, 
          [fadeEnd, fadeEnd + 300, fadeEnd + 600], // 3 ระยะ
          ["1000vh", "-650vh", "1000vh"] // วิ่งเข้ามา -> อยู่ตรงกลาง -> วิ่งออกไป
        );

        const P60MoveM = useSpring(P60M, {
          stiffness: 100, // เพิ่มให้หน่วงขึ้น
          damping: 20,
          mass: 1.5 // เพิ่มมวลให้เคลื่อนที่ต่อเนื่อง
        });

    
      //30

        // pic30 เลื่อนขึ้นมาจากล่างแล้วกลับไปล่าง
        const Pic30M = useTransform(scrollY, 
          [fadeEnd + 600, fadeEnd + 900, fadeEnd + 1200], // เพิ่ม range ให้ scroll ได้มากขึ้น
          ["-1500vh", "250vh", "-1500vh"]
        );

        const Pic30MoveM = useSpring(Pic30M, {
          stiffness: 100, // เพิ่มให้หน่วงขึ้น
          damping: 20,
          mass: 1.5 // เพิ่มมวลให้เคลื่อนที่ต่อเนื่อง
        });

        // p30 เลื่อนมาจากซ้ายแล้วกลับไปซ้าย
        const P30M = useTransform(scrollY, 
          [fadeEnd + 600, fadeEnd + 900, fadeEnd + 1200], // เพิ่ม range ให้ scroll ได้มากขึ้น
          ["-1500vh", "400vh", "-1500vh"]
        );

        const P30MoveM = useSpring(P30M, {
          stiffness: 100, // เพิ่มให้หน่วงขึ้น
          damping: 20,
          mass: 1.5 // เพิ่มมวลให้เคลื่อนที่ต่อเนื่อง
        });



            //10

        const Pic10M = useTransform(scrollY, 
          [fadeEnd + 1200, fadeEnd + 1500, fadeEnd + 1800], // ลดช่วงให้มาเร็วขึ้น
          ["-1500vh", "170vh", "-1500vh"]
        );
      
        const Pic10MoveM = useSpring(Pic10M, {
          stiffness: 100, // เพิ่มให้หน่วงขึ้น
          damping: 20,
          mass: 1.5 // เพิ่มมวลให้เคลื่อนที่ต่อเนื่อง
        });
      
        const P10M = useTransform(scrollY, 
          [fadeEnd + 1200, fadeEnd + 1500, fadeEnd + 1800], // ลดช่วงให้มาเร็วขึ้น
          ["1500vh", "-600vh", "1500vh"]
        );
      
        const P10MoveM = useSpring(P10M, {
          stiffness: 100, // เพิ่มให้หน่วงขึ้น
          damping: 20,
          mass: 1.5 // เพิ่มมวลให้เคลื่อนที่ต่อเนื่อง
        });


    //Mobile



  return (
    <section id="gallery" style={{ height: '100vh' }}>
    <div className={styles.body}>
    <motion.div 
      className={styles.bg}
      style={{
        position: "fixed", // ให้พื้นหลังอยู่กับที่
        top: 0,
        left: 0,
        width: "100%",
        height: "100vh",
        backgroundImage: "url('/BG.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        zIndex: 1,
        opacity: opacity,
        transition: "opacity 0.5s ease",
        overflow: "hidden", // ป้องกันพื้นหลังขยายตามเนื้อหา
      }}
    >

      <div className={styles.desktop}>
        <motion.div
          style={{
            left: "25vh",
            top: "0",
            position: "absolute",
            zIndex: "100",
            opacity: showLight1,
          }}
        >
          <img src="/light.png" width={815} />
        </motion.div>
        <motion.div
          style={{
            position: "absolute",
            transform: "translate(-50%, -50%)",
            left: "43vh",
            top: "0",
            y : Pic60Move, // ควบคุมตำแหน่งตาม scroll
          }}
        >
          <img src="/pic60.png" width={480} />
        </motion.div>
        <motion.div
          style={{
            position: "absolute",
            transform: "translate(-50%, -50%)",
            right: "0",
            top: "23vh",
            x : P60Move, // ควบคุมตำแหน่งตาม scroll
          }}
        >
          <img src="/p60.png" width={480} />
        </motion.div>
        


        <motion.div
          style={{
            right: "24vh",
            top: "0",
            position: "absolute",
            zIndex: "100",
            opacity: showLight2,
          }}
        >
          <img src="/light.png" width={815} />
        </motion.div>
        <motion.div
            style={{
            position: "absolute",
            transform: "translate(-50%, -50%)",
            right: "42vh",
            top: 0,
            y: Pic30Move, // ควบคุมให้เลื่อนขึ้น-ลง
            }}
        >
            <img src="/pic30.png" width={480} />
        </motion.div>
        <motion.div
          style={{
            position: "absolute",
            transform: "translate(-50%, -50%)",
            left: 0, // เริ่มจากซ้าย
            top: "30vh",
            x: P30Move, // ควบคุมให้เลื่อนซ้าย-ขวา
          }}
        >
          <img src="/p30.png" width={500} />
        </motion.div>



        <motion.div
          style={{
            left: "22vh",
            top: "0",
            position: "absolute",
            zIndex: "100",
            opacity: showLight3,
          }}
        >
          <img src="/light.png" width={815} />
        </motion.div>
        <motion.div
            style={{
            position: "absolute",
            transform: "translate(-50%, -50%)",
            left: "35vh",
            top: "0",
            y : Pic10Move,
            }}
        >
            <img  src="/pic10.png" width={570} />
        </motion.div>
        <motion.div
            style={{
            position: "absolute",
            transform: "translate(-50%, -50%)",
            right: 0,
            top: "30vh",
            x : P10Move,
            }}
        >
            <img src="/p10.png" width={500} />
        </motion.div>
      </div>


      <div className={styles.SmallDesktop}>
        <motion.div
          style={{
            left: "17vh",
            top: "0",
            position: "absolute",
            zIndex: "100",
            opacity: showLight1,
          }}
        >
          <img src="/light.png" width={715} />
        </motion.div>
        <motion.div
          style={{
            position: "absolute",
            transform: "translate(-50%, -50%)",
            left: "30vh",
            top: "0",
            y : Pic60MoveS, // ควบคุมตำแหน่งตาม scroll
          }}
        >
          <img src="/pic60.png" width={430} />
        </motion.div>
        <motion.div
          style={{
            position: "absolute",
            transform: "translate(-50%, -50%)",
            right: "0",
            top: "30vh",
            x : P60MoveS, // ควบคุมตำแหน่งตาม scroll
          }}
        >
          <img src="/p60.png" width={430} />
        </motion.div>
        


        <motion.div
          style={{
            right: "18vh",
            top: "0",
            position: "absolute",
            zIndex: "100",
            opacity: showLight2,
          }}
        >
          <img src="/light.png" width={715} />
        </motion.div>
        <motion.div
            style={{
            position: "absolute",
            transform: "translate(-50%, -50%)",
            right: "32vh",
            top: 0,
            y: Pic30MoveS, // ควบคุมให้เลื่อนขึ้น-ลง
            }}
        >
            <img src="/pic30.png" width={400} />
        </motion.div>
        <motion.div
          style={{
            position: "absolute",
            transform: "translate(-50%, -50%)",
            left: 0, // เริ่มจากซ้าย
            top: "35vh",
            x: P30MoveS, // ควบคุมให้เลื่อนซ้าย-ขวา
          }}
        >
          <img src="/p30.png" width={450} />
        </motion.div>



        <motion.div
          style={{
            left: "14vh",
            top: "0",
            position: "absolute",
            zIndex: "100",
            opacity: showLight3,
          }}
        >
          <img src="/light.png" width={715} />
        </motion.div>
        <motion.div
            style={{
            position: "absolute",
            transform: "translate(-50%, -50%)",
            left: "25vh",
            top: "0",
            y : Pic10MoveS,
            }}
        >
            <img  src="/pic10.png" width={470} />
        </motion.div>
        <motion.div
            style={{
            position: "absolute",
            transform: "translate(-50%, -50%)",
            right: 0,
            top: "30vh",
            x : P10MoveS,
            }}
        >
            <img src="/p10.png" width={500} />
        </motion.div>
      </div>


      <div className={styles.tablet}>
        <motion.div
          style={{
            left: "7vh",
            top: "0",
            position: "absolute",
            zIndex: "100",
            opacity: showLight1,
          }}
        >
          <img src="/light.png" width={685} />
        </motion.div>
        <motion.div
          style={{
            position: "absolute",
            transform: "translate(-50%, -50%)",
            left: "20vh",
            top: "0",
            y : Pic60MoveT, // ควบคุมตำแหน่งตาม scroll
          }}
        >
          <img src="/pic60.png" width={400} />
        </motion.div>
        <motion.div
          style={{
            position: "absolute",
            transform: "translate(-50%, -50%)",
            right: "0",
            top: "30vh",
            x : P60MoveT, // ควบคุมตำแหน่งตาม scroll
          }}
        >
          <img src="/60M.png" width={320} />
        </motion.div>
        


        <motion.div
          style={{
            right: "4vh",
            top: "0",
            position: "absolute",
            zIndex: "100",
            opacity: showLight2,
          }}
        >
          <img src="/light.png" width={685} />
        </motion.div>
        <motion.div
            style={{
            position: "absolute",
            transform: "translate(-50%, -50%)",
            right: "18vh",
            top: 0,
            y: Pic30MoveT, // ควบคุมให้เลื่อนขึ้น-ลง
            }}
        >
            <img src="/pic30.png" width={370} />
        </motion.div>
        <motion.div
          style={{
            position: "absolute",
            transform: "translate(-50%, -50%)",
            left: 0, // เริ่มจากซ้าย
            top: "35vh",
            x: P30MoveT, // ควบคุมให้เลื่อนซ้าย-ขวา
          }}
        >
          <img src="/30M.png" width={320} />
        </motion.div>



        <motion.div
          style={{
            left: "7vh",
            top: "0",
            position: "absolute",
            zIndex: "100",
            opacity: showLight3,
          }}
        >
          <img src="/light.png" width={685} />
        </motion.div>
        <motion.div
            style={{
            position: "absolute",
            transform: "translate(-50%, -50%)",
            left: "18vh",
            top: "0",
            y : Pic10MoveT,
            }}
        >
            <img  src="/pic10.png" width={440} />
        </motion.div>
        <motion.div
            style={{
            position: "absolute",
            transform: "translate(-50%, -50%)",
            right: 0,
            top: "30vh",
            x : P10MoveT,
            }}
        >
            <img src="/10M.png" width={320} />
        </motion.div>
      </div>


      <div className={styles.mobile}>
        <motion.div
            style={{
              position: "absolute",
              zIndex: "100",
              left: "5vh",
              top: "-10vh",
            }}
          >
          <img src="/light.png" width={650} />
        </motion.div>
        <motion.div
          style={{
            position: "absolute",
            transform: "translate(-50%, -50%)",
            left: "13vh",
            top: "-15vh",
            y : Pic60MoveM, 
          }}
        >
          <img src="/pic60.png" width={480} />
        </motion.div>
        <motion.div
          style={{
            position: "absolute",
            transform: "translate(-50%, -50%)",
            left: "62vh",
            top: "50vh",
            x : P60MoveM, 
          }}
        >
          <img src="/60M.png" width={420} />
        </motion.div>



        <motion.div
            style={{
            position: "absolute",
            transform: "translate(-50%, -50%)",
            left: "15vh",
            top: "-13vh",
            y: Pic30MoveM, // ควบคุมให้เลื่อนขึ้น-ลง
            }}
        >
            <img src="/pic30.png" width={420} />
        </motion.div>
        <motion.div
          style={{
            position: "absolute",
            transform: "translate(-50%, -50%)",
            left: "-20vh",
            top: "52vh",
            x: P30MoveM, // ควบคุมให้เลื่อนซ้าย-ขวา
          }}
        >
          <img src="/30M.png" width={420} />
        </motion.div>


      <motion.div
            style={{
            position: "absolute",
            transform: "translate(-50%, -50%)",
            left: "11vh",
            top: "10vh",
            y : Pic10MoveM,
            }}
        >
            <img  src="/pic10.png" width={510} />
        </motion.div>

        <motion.div
            style={{
            position: "absolute",
            transform: "translate(-50%, -50%)",
            left: "53vh",
            top: "50vh",
            x : P10MoveM,
            }}
        >
            <img src="/10M.png" width={420} />
        </motion.div>
      </div>


      <div className={styles.xs}>
        <motion.div
            style={{
              position: "absolute",
              zIndex: "100",
              left: "2vh",
              top: "-10vh",
            }}
          >
          <img src="/light.png" width={390} />
        </motion.div>
        <motion.div
          style={{
            position: "absolute",
            transform: "translate(-50%, -50%)",
            left: "10vh",
            top: "-15vh",
            y : Pic60MoveM, 
          }}
        >
          <img src="/pic60.png" width={260} />
        </motion.div>
        <motion.div
          style={{
            position: "absolute",
            transform: "translate(-50%, -50%)",
            left: "70vh",
            top: "50vh",
            x : P60MoveM, 
          }}
        >
          <img src="/60M.png" width={260} />
        </motion.div>



        <motion.div
            style={{
            position: "absolute",
            transform: "translate(-50%, -50%)",
            left: "11vh",
            top: "-15vh",
            y: Pic30MoveM, // ควบคุมให้เลื่อนขึ้น-ลง
            }}
        >
            <img src="/pic30.png" width={240} />
        </motion.div>
        <motion.div
          style={{
            position: "absolute",
            transform: "translate(-50%, -50%)",
            left: "-37vh",
            top: "52vh",
            x: P30MoveM, // ควบคุมให้เลื่อนซ้าย-ขวา
          }}
        >
          <img src="/30M.png" width={250} />
        </motion.div>


      <motion.div
            style={{
            position: "absolute",
            transform: "translate(-50%, -50%)",
            left: "8vh",
            top: "15vh",
            y : Pic10MoveM,
            }}
        >
            <img  src="/pic10.png" width={290} />
        </motion.div>

        <motion.div
            style={{
            position: "absolute",
            transform: "translate(-50%, -50%)",
            left: "60vh",
            top: "50vh",
            x : P10MoveM,
            }}
        >
            <img src="/10M.png" width={260} />
        </motion.div>
      </div>


    </motion.div>
    </div>
    </section>
  );
}
