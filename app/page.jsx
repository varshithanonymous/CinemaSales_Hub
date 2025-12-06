import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="hero">
          <div className="container">
            <h1>Your Ultimate Movie Ticket Booking Solution</h1>
            <p>Streamline ticket sales, enhance customer experience, and boost your theatre’s performance.</p>
          </div>
        </section>

        {/* Features Section */}
        <section className="container">
          <h2>Features</h2>
          <div className="grid grid-3">
            <div>
              <h3>Online Ticketing</h3>
              <p>Seamlessly book tickets online with a user-friendly interface.</p>
            </div>
            <div>
              <h3>Mobile Integration</h3>
              <p>Optimize for mobile platforms to reach customers on the go.</p>
            </div>
            <div>
              <h3>Secure Payments</h3>
              <p>Ensure secure transactions with trusted payment gateways.</p>
            </div>
          </div>
        </section>

        {/* About */}
        <section className="container">
          <h2>About Us</h2>
          <p>We specialize in providing scalable software solutions for movie theatres, making operations seamless with cutting-edge tools like Veezi and POSitive Cinema.</p>
        </section>

        {/* Services */}
        <section className="container">
          <h2>Services</h2>
          <ul>
            <li>Customizable ticket booking systems</li>
            <li>Insights and analytics for sales optimization</li>
            <li>Customer experience enhancements using AI</li>
          </ul>
        </section>

        {/* Testimonials */}
        <section className="container">
          <h2>Testimonials</h2>
          <div className="grid grid-3">
            <blockquote>
              “This platform has transformed our cinema operations!”
            </blockquote>
            <blockquote>
              “Amazing customer service and user-friendly tools.”
            </blockquote>
            <blockquote>
              “Our ticket sales have increased by 40% since using this.”
            </blockquote>
          </div>
        </section>

        {/* Pricing */}
        <section className="container">
          <h2>Pricing</h2>
          <div className="grid grid-3">
            <div>
              <h3>Basic</h3>
              <p>$99/month</p>
            </div>
            <div>
              <h3>Pro</h3>
              <p>$199/month</p>
            </div>
            <div>
              <h3>Enterprise</h3>
              <p>Contact for pricing</p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="container">
          <h2>FAQ</h2>
          <div>
            <h3>How does the online ticketing work?</h3>
            <p>Customers can easily book tickets through our web or mobile app.</p>
          </div>
          <div>
            <h3>Is it secure?</h3>
            <p>Absolutely! We use trusted payment gateways to ensure secure transactions.</p>
          </div>
          <div>
            <h3>Can I customize the platform?</h3>
            <p>Yes, our platform is highly customizable to suit your needs.</p>
          </div>
        </section>

        {/* Contact */}
        <section className="container">
          <h2>Contact Us</h2>
          <p>Email: support@movieapp.com</p>
          <p>Phone: +123-456-7890</p>
        </section>
      </main>
    </>
  );
}