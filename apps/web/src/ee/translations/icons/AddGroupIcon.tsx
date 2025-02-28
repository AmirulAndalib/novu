/* eslint-disable max-len */
import React from 'react';

export const AddGroupIcon = (props: React.ComponentPropsWithoutRef<'svg'>) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none" {...props}>
      <path
        d="M3.16732 12V4V6.86666V6.66666V12ZM3.16732 13.3333C2.80065 13.3333 2.48676 13.2028 2.22565 12.9417C1.96454 12.6806 1.83398 12.3667 1.83398 12V4C1.83398 3.63333 1.96454 3.31944 2.22565 3.05833C2.48676 2.79722 2.80065 2.66666 3.16732 2.66666H7.16732L8.50065 4H13.834C14.2007 4 14.5145 4.13055 14.7757 4.39166C15.0368 4.65278 15.1673 4.96666 15.1673 5.33333V7.51666C14.9673 7.37222 14.7562 7.24722 14.534 7.14166C14.3118 7.03611 14.0784 6.94444 13.834 6.86666V5.33333H7.95065L6.61732 4H3.16732V12H7.88398C7.91732 12.2333 7.9701 12.4611 8.04232 12.6833C8.11454 12.9056 8.20065 13.1222 8.30065 13.3333H3.16732Z"
        fill={props.fill || 'currentColor'}
      />
      <path
        d="M11.834 11.3333V13.3333H13.1673V11.3333H15.1673V10H13.1673V8H11.834V10H9.83398V11.3333H11.834Z"
        fill={props.fill || 'currentColor'}
      />
    </svg>
  );
};
