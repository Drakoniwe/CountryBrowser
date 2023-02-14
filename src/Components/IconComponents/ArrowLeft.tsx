import React from 'react'

interface ArrowLeftProps {
  size?: number
}

const ArrowLeft: React.FC<ArrowLeftProps> = ({ size = 20 }) => {
  return (
    <svg
      width={size}
      height={size}
      stroke="black"
      strokeWidth={0.7}
      xmlns="http://www.w3.org/2000/svg"
      fillRule="evenodd"
      clipRule="evenodd"
    >
      <path d="M2.117 12l7.527 6.235-.644.765-9-7.521 9-7.479.645.764-7.529 6.236h21.884v1h-21.883z" />
    </svg>
  )
}
export default ArrowLeft
