export default function Home() {
  return (
    <div
      style={{
        display: "flex",
        minHeight: "100vh",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div style={{ textAlign: "center" }}>
        <h1>Webhook Backend</h1>
        <p>Endpoint: /api/webhook</p>
      </div>
    </div>
  )
}
