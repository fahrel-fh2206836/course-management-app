import React from 'react';

export default function LoadingSpinner() {
  return (
    <div style={styles.wrapper}>
      <div style={styles.spinner} />
      <p style={styles.text}>Loading...</p>
    </div>
  );
}

const styles = {
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    gap: '1rem'
  },
  spinner: {
    width: '50px',
    height: '50px',
    border: '6px solid #f3f3f3',
    borderTop: '6px solid #555',
    borderRadius: '50%',
    animation: 'spin 1s linear infinite'
  },
  text: {
    fontSize: '1.2rem',
    color: '#333'
  }
};
