import { useState } from "react"

type ButtonProps = {
  handleClick: (event: React.MouseEvent<HTMLButtonElement>, id: number) => void
}

export const Button = (props: ButtonProps) => {

  const [inLoggedIn, setinLoggedIn] = useState(false)
  return <button onClick={event => props.handleClick(event, 1)}>Click</button>
}
