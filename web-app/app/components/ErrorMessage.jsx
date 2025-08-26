"use client";
import React from "react";

export default function ErrorMessage({ message }) {
    return (
        <div className={styles.errorBox}>
            <span className={styles.icon}>⚠️</span>
            <span className={styles.text}>{message}</span>
        </div>
    );
}

const styles = {
    errorBox: {
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        gap: "0.5rem",
        backgroundColor: "#fdecea",   // soft red background
        border: "1px solid #f5c2c0",  // slightly darker border
        color: "#b00020",             // red text
        fontWeight: 500,
        padding: "0.75rem 1rem",
        borderRadius: "0.5rem",
        margin: "0.5rem 0",
    },

    icon: {
        fontSize: "1.2rem",
    },

    text: {
        flex: 1,
    },
};
