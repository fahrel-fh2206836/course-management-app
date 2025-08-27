import React from 'react';

export default function LoadingSpinner({ center = false }) {
  return (
    <div className={`${center ? 'loading-center' : ''} loading-wrapper`}>
      <div style={styles.spinner} />
      <p style={styles.text}>Loading...</p>
    </div>
  );
}

const styles = {
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
