import React, { useState, useRef, useEffect } from 'react';
import { Box } from '@mui/material';

const OptimizedImage = ({ 
  src, 
  alt, 
  width = 600, 
  height = 300, 
  isLCP = false,
  className = '',
  style = {},
  ...props 
}) => {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);
  const imgRef = useRef(null);

  useEffect(() => {
    const img = imgRef.current;
    if (img && img.complete) {
      setLoaded(true);
    }
  }, [src]);

  const handleLoad = () => {
    setLoaded(true);
    setError(false);
  };

  const handleError = () => {
    setError(true);
    setLoaded(true);
  };

  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        maxWidth: width,
        height: height,
        backgroundColor: '#f0f0f0',
        borderRadius: 1,
        overflow: 'hidden',
        ...style
      }}
      className={className}
    >
      {!loaded && (
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#f0f0f0',
            zIndex: 1,
          }}
        >
          <Box
            sx={{
              width: 40,
              height: 40,
              borderRadius: '50%',
              border: '3px solid #e0e0e0',
              borderTop: '3px solid #1976d2',
              animation: 'spin 1s linear infinite',
            }}
          />
        </Box>
      )}

      {error && (
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#f5f5f5',
            color: '#666',
            fontSize: 14,
            zIndex: 2,
          }}
        >
          Изображение недоступно
        </Box>
      )}

      <img
        ref={imgRef}
        src={src}
        alt={alt}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          opacity: loaded && !error ? 1 : 0,
          transition: 'opacity 0.3s ease',
          position: 'relative',
          zIndex: 0,
        }}
        width={width}
        height={height}
        onLoad={handleLoad}
        onError={handleError}
        {...(isLCP ? {
          fetchPriority: 'high',
          loading: 'eager',
          decoding: 'sync'
        } : {
          loading: 'lazy',
          decoding: 'async'
        })}
        {...props}
      />
    </Box>
  );
};

export default OptimizedImage; 