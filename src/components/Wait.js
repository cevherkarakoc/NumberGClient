import React from 'react'

function Wait({gameName}) {
  return (
    <div className="is-flex is-flex-direction-column is-align-items-center">
    <p className="is-size-4">Rakip bekleniyor...</p>
    <p className="is-size-4">
      Bağlanabilmesi için bunu rakibine yolla :{" "}
      <span className="has-text-primary has-text-weight-bold">
        "{gameName}"
      </span>
    </p>
  </div>
  )
}

export default Wait