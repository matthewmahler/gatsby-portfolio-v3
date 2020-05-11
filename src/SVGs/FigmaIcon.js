import React from 'react';
import { motion } from 'framer-motion';

const FigmaIcon = ({ scale, translate }) => {
  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 14.397 7.2"
      width="120"
      height="60"
      animate={{
        opacity: 1,
        transform: `scale(${scale}) translate(${translate})`,
      }}
      initial={{
        opacity: 0,
        transform: `scale(1,1) translate(${translate})`,
      }}
    >
      <motion.path
        animate={{ pathLength: 1, transition: { duration: 1 } }}
        initial={{ pathLength: 0 }}
        d="M2.156 6.46c.526 0 .953-.427.953-.953v-.953h-.953c-.526 0-.953.427-.953.953s.427.953.953.953z"
        fill="#0acf83"
      />
      <motion.path
        animate={{ pathLength: 1, transition: { duration: 1 } }}
        initial={{ pathLength: 0 }}
        d="M1.202 3.6c0-.526.427-.953.953-.953h.953v1.907h-.953c-.526 0-.953-.427-.953-.953z"
        fill="#a259ff"
      />
      <motion.path
        animate={{ pathLength: 1, transition: { duration: 1 } }}
        initial={{ pathLength: 0 }}
        d="M1.202 1.693c0-.526.427-.953.953-.953h.953v1.907h-.953c-.526 0-.953-.427-.953-.953z"
        fill="#f24e1e"
      />
      <motion.path
        animate={{ pathLength: 1, transition: { duration: 1 } }}
        initial={{ pathLength: 0 }}
        d="M3.1.74h.953c.526 0 .953.427.953.953s-.427.953-.953.953H3.1z"
        fill="#ff7262"
      />
      <motion.path
        animate={{ pathLength: 1, transition: { duration: 1 } }}
        initial={{ pathLength: 0 }}
        d="M5.016 3.6c0 .526-.427.953-.953.953S3.1 4.126 3.1 3.6s.427-.953.953-.953.953.427.953.953z"
        fill="#1abcfe"
      />
      <motion.path
        animate={{ pathLength: 1, transition: { duration: 1 } }}
        initial={{ pathLength: 0 }}
        d="M6.058 2.32v1.998h.257v-.954h.618v-.248h-.618V2.57h.803v-.25zm1.525.406c.093 0 .168-.075.168-.168S7.675 2.4 7.583 2.4s-.168.075-.168.168c0 .045.018.087.05.12s.074.05.12.05zm-.13.252v1.34H7.7v-1.34h-.255zm1.212-.04c-.342 0-.58.3-.58.632s.24.63.58.63a.51.51 0 0 0 .379-.159v.178a.42.42 0 0 1-.116.287.4.4 0 0 1-.286.12.42.42 0 0 1-.228-.076l-.13.223a.66.66 0 0 0 1.017-.557v-1.24h-.257v.12a.51.51 0 0 0-.379-.159zm-.322.632a.35.35 0 0 1 .166-.33c.114-.07.257-.07.37 0s.177.198.166.33a.35.35 0 0 1-.166.33c-.114.07-.257.07-.37 0s-.177-.198-.166-.33z"
      />
      <motion.path
        animate={{ pathLength: 1, transition: { duration: 1 } }}
        initial={{ pathLength: 0 }}
        d="M10.228 3.2a.28.28 0 0 0-.279.279v.848h-.257v-1.34h.257V3.1c.078-.104.202-.164.332-.162.164-.004.317.084.398.227.1-.14.244-.225.4-.227.293 0 .475.236.476.528v.853h-.257v-.85a.28.28 0 0 0-.427-.276.28.28 0 0 0-.124.276v.848H10.5V3.47a.28.28 0 0 0-.279-.279zm2.7-.07a.62.62 0 0 0-.453-.191c-.383 0-.65.324-.65.7s.27.7.65.7a.62.62 0 0 0 .453-.191V4.3h.257V2.96h-.257zm-.85.52c-.013-.16.065-.314.202-.398s.3-.084.446 0a.43.43 0 0 1 .202.398c.013.16-.065.314-.202.398s-.3.084-.446 0a.43.43 0 0 1-.202-.398z"
      />
    </motion.svg>
  );
};

export default FigmaIcon;
