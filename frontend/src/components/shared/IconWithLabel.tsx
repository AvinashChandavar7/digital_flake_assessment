import React from "react"

interface IconWithLabelProps {
  src: string;
  alt: string;
  label: string;
  width?: number;
  height?: number;
  loading?: "lazy" | "eager";
}

const IconWithLabel: React.FC<IconWithLabelProps> = ({
  src,
  alt,
  label,
  width = 30,
  height = 30,
  loading = "lazy",
}) => {
  return (
    <div className='flex flex-row items-center gap-2'>
      <img src={src} alt={alt} width={width} height={height} loading={loading} />
      <p className='text-2xl font-bold'>{label}</p>
    </div>
  );
};

export default IconWithLabel;
