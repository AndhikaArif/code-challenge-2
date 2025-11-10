import Link from "next/link";

export default function About() {
  return (
    <main>
      {/* Page Title */}
      <h1>About Us</h1>

      {/* Content Section */}
      <section>
        {/* Company History */}
        <div>
          <h2>Company History</h2>
        </div>

        {/* Work Culture */}
        <div>
          <h2>Culture</h2>
        </div>
      </section>

      {/* Team Page Link */}
      <div>
        <Link href="team">Team</Link>
      </div>
    </main>
  );
}
