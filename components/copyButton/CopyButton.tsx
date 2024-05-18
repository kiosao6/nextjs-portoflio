'use client'
import { useState } from "react";
import styles from "./copyButton.module.css"


interface Props {
  code: string;
}
export const CopyButton = ({ code }: Props) => {

  const [isActiveAnimation, setIsActiveAnimation] = useState<boolean>(false)

  const copyToClipboard = async () => {

    try {
      await navigator.clipboard.writeText(code);
      setIsActiveAnimation(true)
      setTimeout(() => {
        setIsActiveAnimation(false)
      }, 2000)
    } catch (error) {
      console.error("Error copying to clipboard", error);
    }
  };



  return (
    <button
      className={`${styles.copy} size-8 flex items-center justify-center hover:bg-[#404053] rounded transition-all relative`}
      onClick={copyToClipboard}
      disabled={isActiveAnimation}
      aria-label="Copy Button"
    >
      <CopySvg data-hide={isActiveAnimation} />
      <CheckIcon data-hide={!isActiveAnimation} />

    </button>
  )
}



const CopySvg = (props: JSX.IntrinsicElements['svg']) => {
  return (
    <svg className="size-5 absolute" data-testid="geist-icon" fill="none" height="24" shapeRendering="geometricPrecision" stroke="#D4D4D8" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" {...props}>
      <path d="M6 17C4.89543 17 4 16.1046 4 15V5C4 3.89543 4.89543 3 6 3H13C13.7403 3 14.3866 3.4022 14.7324 4M11 21H18C19.1046 21 20 20.1046 20 19V9C20 7.89543 19.1046 7 18 7H11C9.89543 7 9 7.89543 9 9V19C9 20.1046 9.89543 21 11 21Z"></path>
    </svg>
  )
}

const CheckIcon = (props: JSX.IntrinsicElements['svg']) => {
  return (
    <svg className="size-5 absolute" data-testid="geist-icon" fill="none" height="24" shapeRendering="geometricPrecision" stroke="#D4D4D8" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" {...props}>
      <path d="M20 6L9 17l-5-5"></path>
    </svg>
  )
}