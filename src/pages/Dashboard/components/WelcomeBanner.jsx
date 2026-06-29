function WelcomeBanner({ name }) {
  return (
    <section className="welcome-banner">
      <h1>Good Morning, {name} 👋</h1>

      <p>
        Welcome back! Here's what's happening in your organization today.
      </p>
    </section>
  );
}

export default WelcomeBanner;