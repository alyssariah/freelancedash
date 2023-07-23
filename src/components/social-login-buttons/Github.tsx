import React from 'react';
import clsx from 'clsx';
import { FaGithub } from 'react-icons/fa';

export interface ButtonProps {
  size?: string;
  label?: string;
  shape?: string;
  type?: 'button' | 'submit' | 'reset' | undefined;
  disabled?: boolean;
  startIcon?: any;
  endIcon?: any;
  boxShadow?: string;
  configuration?: string;
  onClick?: any;
  stretch?: boolean;
  modal?: boolean;
}

export const GithubButton = ({
  size = 'large',
  shape = 'square',
  type = 'button',
  boxShadow = '4',
  configuration = 'filled',
  onClick,
}: ButtonProps) => {
  return (
    <button
      type={type}
      className={clsx(
        'flex justify-start items-center cursor-pointer font-[500] pl-[21px] w-[300px] tracking-[0.5px] shadow-4',
        {
          [`shadow-${boxShadow}`]: configuration === 'filled',
          ['rounded-[5px]']: shape == 'square',
          ['rounded-[50px]']: shape == 'round',
          ['text-[12px] leading-[16px] h-[30px]']: size === 'small',
          ['text-[14px] leading-[16px] h-[36px]']: size === 'medium',
          ['text-[16px] leading-[20px] h-[40px]']: size === 'large',
          ['bg-black-800 text-white-500 outline-0 border-none hover:opacity-80']:
            configuration === 'filled',
          ['border-blue-600 border-[1px] border-solid text-black-800 bg-transparent hover:opacity-80']:
            configuration === 'outlined',
        }
      )}
      onClick={onClick}
    >
      <span className="mr-4 text-[18px]">
        <FaGithub />
      </span>
      Continue with Github
    </button>
  );
};
