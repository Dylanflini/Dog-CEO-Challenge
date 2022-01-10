import React from 'react'

export const PrimaryButton = ({
  children,
  onClick,
}: {
  children: React.ReactNode
  onClick: React.MouseEventHandler<HTMLButtonElement>
}) => (
  <button className="button is-primary" onClick={onClick}>
    {children}
  </button>
)
