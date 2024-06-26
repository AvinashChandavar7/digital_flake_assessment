import React from "react"
import { useNavigate } from 'react-router-dom';


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

  const navigate = useNavigate();

  return (
    <div className='flex flex-row items-center gap-2' onClick={() => navigate(-1)}>
      <img src={src} alt={alt} width={width} height={height} loading={loading} />
      <p className='text-2xl font-bold'>{label}</p>
    </div>
  );
};

export default IconWithLabel;
