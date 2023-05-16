import React from "react";
import './Home1.css';


const Home1 = () => {
  const companyNames = [
    "ABC Technologies",
    "XYZ Solutions",
    "DEF Enterprises",
    "PQR Innovations",
    "MNO Systems",
    "GHI Technologies",
    "STU Solutions",
    "JKL Enterprises",
    "VWX Innovations",
    "LMN Systems",
    "RST Technologies",
    "NOP Solutions",
    "QWE Enterprises",
    "UIO Innovations",
    "TYU Systems",
    "FGH Technologies",
    "ZXC Solutions",
    "WER Enterprises",
    "BNM Innovations",
    "CVB Systems",
    "JFH Technologies",
    "LDK Solutions",
    "MVD Enterprises",
    "NFE Innovations",
    "KCM Systems",
    "PRU Technologies",
    "QAY Solutions",
    "ZWE Enterprises",
    "XBN Innovations",
    "DCM Systems",
    "KLP Technologies",
    "GVT Solutions",
    "FHD Enterprises",
    "RTN Innovations",
    "PLM Systems",
    "JCY Technologies",
    "NKH Solutions",
    "WDF Enterprises",
    "VBM Innovations",
    "QOL Systems",
    "ZXP Technologies",
    "MJH Solutions",
    "FVE Enterprises",
    "LNR Innovations",
    "QPL Systems",
    "BST Technologies",
    "DKN Solutions",
    "KMG Enterprises",
    "VRF Innovations",
    "XJM Systems"
  ]; // Replace with the names of the companies

  return (
    <div className="code">
      <h1>StudentS Placed companies List!</h1>
      <h2>List of Companies:</h2>
      <ul>
        {companyNames.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Home1;
