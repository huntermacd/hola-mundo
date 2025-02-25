import * as React from "react"

const pageStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}

const IndexPage = () => {
  return (
    <main style={pageStyles}>
      <h1>Hola, Mundo.</h1>
    </main>
  )
}

export default IndexPage

export const Head = () => <title>Hola Mundo</title>
