import * as React from "react"; 
import { cn } from "@/lib/utils"; 

//Commented out code for InputProps interface (agar zarurat ho):
export interface InputProps
export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  customProp?: string; // Aap apne custom properties yahaan add kar sakte hain
}

  //export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}


const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type} // Input ka type theek se props ke zariye pass ho raha hai
        className={cn(
          // `cn` function class names ko conditionally join karne ke liye istamaal ho raha hai
          "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
          className // Additional classes jo props se aayi hain
        )}
        ref={ref} // Ref ko forward kar rahe hain
        {...props} // Baqi props jaise ke placeholder, value, etc. ko spread kar rahe hain
      />
    );
  }
);

Input.displayName = "Input"; // Debugging ke liye display name theek se assign ho gaya

export { Input }; // Theek export
