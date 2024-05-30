import * as React from "react"
import clsx from "clsx"

// Define your button variants
const buttonVariants = {
  primary: "px-2 py-2 text-white  bg-purple-650 w-[116px] h-[48px]",
  loginBtn: "px-2 py-2 w-full font-poppins text-white rounded-md mt-10  bg-purple-650 h-[48px]",
  secondary: "px-2 py-2 text-purple-650 border border-purple-650  bg-white w-[116px] h-[48px]",

}

// Utility type to get the keys of buttonVariants
type VariantProps<T> = {
  variant?: keyof T;
}

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
  VariantProps<typeof buttonVariants> {
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", ...props }, ref) => {
    return (
      <button
        className={clsx(buttonVariants[variant], className)}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button }
