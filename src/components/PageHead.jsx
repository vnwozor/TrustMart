export default function PageHead({ title, children }) {
  return (
    <section className="page-hero">
      <div className="container">
        <h1>{title}</h1>
        <p className="lead lead--on-dark">{children}</p>
      </div>
    </section>
  )
}
