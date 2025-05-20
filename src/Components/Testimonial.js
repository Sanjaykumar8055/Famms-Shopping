import React from 'react';

const Testimonial = () => {
  const styles = {
    intro: {
      textAlign: 'center',
      backgroundColor: '#f7444e',
      padding: '55px',
    },
    heading: {
      fontSize: '45px',
      fontWeight: '800',
      color: 'aliceblue',
      margin: 0,
    },
    customerSection: {
      textAlign: 'center',
      padding: '80px 20px',
      fontFamily: 'sans-serif',
    },
    title: {
      fontSize: '55px',
      fontWeight: '800',
      marginBottom: '10px',
    },
    underline: {
      width: '80px',
      height: '5px',
      backgroundColor: '#f7444e',
      margin: '10px auto 50px',
    },
    image: {
      width: '180px',
      height: '180px',
      borderRadius: '50%',
      objectFit: 'cover',
      marginBottom: '25px',
    },
    name: {
      fontSize: '26px',
      fontWeight: '700',
      marginBottom: '8px',
    },
    role: {
      fontSize: '18px',
      color: '#888',
      marginBottom: '30px',
    },
    paragraph: {
      maxWidth: '900px',
      margin: '0 auto',
      fontSize: '20px',
      color: '#222',
      lineHeight: '1.8',
      padding: '0 20px',
    },
  };

  return (
    <div>
      <div style={styles.intro}>
        <h2 style={styles.heading}>Testimonial</h2>
      </div>
      <div style={styles.customerSection}>
        <h3 style={styles.title}>Customer's Testimonial</h3>
        <div style={styles.underline}></div>
        <img src="images/client.jpg" alt="Client" style={styles.image} />
        <h5 style={styles.name}>Anna Trevor</h5>
        <div style={styles.role}>Customer</div>
        <p style={styles.paragraph}>
          Dignissimos reprehenderit repellendus nobis error quibusdam? Atque animi sint unde quis reprehenderit, et,
          perspiciatis, debitis totam est deserunt eius officiis ipsum ducimus ad labore modi voluptatibus accusantium
          sapiente nam! Quaerat.
        </p>
      </div>
    </div>
  );
};

export default Testimonial;
