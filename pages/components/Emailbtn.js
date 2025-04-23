import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faCopy } from "@fortawesome/free-solid-svg-icons";

const EmailCopyIcon = () => {
  const [hovered, setHovered] = useState(false);
  const [copied, setCopied] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  const email = "paletteflow.team@gmail.com";

  useEffect(() => {
    const checkScreenSize = () => {
      setIsSmallScreen(window.innerWidth <= 1599);
    };

    checkScreenSize(); // check on load
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  const wrapperStyle = {
    display: "flex",
    alignItems: "center",
    position: "relative",
    marginLeft: "15px",
    cursor: "pointer",
  };

  const iconStyle = {
    width: "26px",
    height: "26px",
    padding: "10px",
    color: hovered
      ? isSmallScreen
        ? "white"
        : "black"
      : isSmallScreen
      ? "black"
      : "white",
    backgroundColor: hovered
      ? isSmallScreen
        ? "black"
        : "white"
      : isSmallScreen
      ? "white"
      : "black",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transition: "color 0.3s ease, background-color 0.3s ease, transform 0.3s ease",
  };

  const emailTextStyle = {
    position: "absolute",
    top: isSmallScreen ? "155%" : "120%",
    left: "50%",
    transform: "translateX(-50%)",
    backgroundColor: "#ffffff",
    color: "#333333",
    padding: "4px 10px",
    borderRadius: "6px",
    fontSize: "1rem",
    whiteSpace: "nowrap",
    boxShadow: "0 2px 5px rgba(0, 0, 0, 0.2)",
    zIndex: 10,
  };

  return (
    <div
      style={wrapperStyle}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => {
        setHovered(false);
        setCopied(false);
      }}
      onClick={handleCopy}
    >
      <FontAwesomeIcon
        icon={hovered ? faCopy : faEnvelope}
        style={iconStyle}
      />
      {hovered && (
        <span style={emailTextStyle}>
          {copied ? "คัดลอกแล้ว!" : email}
        </span>
      )}
    </div>
  );
};

export default EmailCopyIcon;
