import React, { useState, useEffect } from "react";
import styles from "./Dashboard.module.css";

import Header from "../Common/Header";
import DashboardCard from "./DashboardCard";
import Card from "../Widgets/Card";
import Button from "../Widgets/Button";
import Footer from "../Common/Footer";

import axios from "axios";

import { Redirect } from "react-router-dom";

export default function Dashboard() {
  return (
    <div className={styles.dashboard}>
      <Header />
      <div className="container">
        <main className={styles.main}>
          <div className={styles.banner}>
            <div className={styles.bannerText}>
              <h1 className={styles.bannerHeader}>Your Shopping Cart</h1>
            </div>
          </div>

          <div className={styles.row}>
            <span className={styles.shop}>
              <h1>Countdown</h1>
            </span>
            <span className={styles.shop}>
              <h1>Paknsave</h1>
            </span>
          </div>

          <div className={styles.itemGrid}>
            <DashboardCard>
              <Card />
              <Card />
            </DashboardCard>
            <DashboardCard>
              <Card />
              <Card />
            </DashboardCard>
          </div>

          <div className={styles.total}>
            <div className={styles.row}>
              <h1>Total:</h1>
            </div>
            <div className={styles.row}>
              <span className={styles.shop}>
                <h1>Countdown</h1>
              </span>
              <span className={styles.shop}>
                <h1>Paknsave</h1>
              </span>
            </div>
            <div className={styles.row}>
              <span className={styles.shop}>
                <h1>$43.8</h1>
              </span>
              <span className={styles.shop}>
                <h1>$98.7</h1>
              </span>
            </div>
          </div>
        </main>
      </div>

      <Footer />
    </div>
  );
}

// sample data
// [
//   {
//       "_id": "5ff8cc11ee723e0b105e24c5",
//       "item_id": 123,
//       "item_name": "bread"
//   },
//   {
//       "_id": "5ff8cc11ee723e0b105e24c6"
//   }
// ]
