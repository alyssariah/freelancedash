import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import styles from './input.module.scss';
import clsx from 'clsx';

/**
 * Primary UI component for user interaction
 */
export const Input = ({
  config,
  label,
  type,
  name,
  required,
  status,
  helpText,
  leadingIcon,
  followingIcon,
}) => {
  const textInput = useRef(null);
  return (
    <div
      className={clsx('w-[100%] flex flex-col', {
        ['text-error']: status == 'error',
      })}
    >
      <label
        htmlFor={name}
        className={clsx('w-[100%] relative flex items-start', {
          ['rounded-md bg-transparent' + styles['outline-input']]: config == 'outline',
          ['border-b-[0.5px] rounded-sm bg-surface--variant pt-4 ' + styles['filled-input']]:
            config == 'filled',
        })}
      >
        {leadingIcon && (
          <div
            className={clsx('absolute left-[12px] top-[35px]', {
              ['top-[35px]']: config == 'outline',
              ['top-[38px]']: config == 'filled',
            })}
          >
            {leadingIcon}
          </div>
        )}
        <input
          type={type}
          ref={textInput}
          name={name}
          className={clsx('w-[100%] py-[10px] mt-[20px] border-black-400 outline-none', {
            ['border-[0.5px] rounded-md bg-transpareny ' + styles['outline-input']]:
              config == 'outline',
            ['border-b-[0.5px] rounded-sm bg-surface--variant pt-4 ' + styles['filled-input']]:
              config == 'filled',
            ['px-[35px]']: leadingIcon,
            ['px-[15px]']: !leadingIcon,
            ['border-error']: status === 'error',
            ['border-disabled']: status === 'disabled',
          })}
          required={required}
          disabled={status == 'disabled'}
          placeholder={label}
        />
        {followingIcon && (
          <div
            className={clsx('absolute right-[15px]', {
              ['top-[35px]']: config == 'outline',
              ['top-[38px]']: config == 'filled',
            })}
          >
            {followingIcon}
          </div>
        )}
        <span
          className={clsx(
            'absolute left-[10px] text-[14px] duration-300 px-[5px] whitespace-nowrap overflow-hidden text-ellipsis max-w-[90%]',
            {
              ['translate-y-[32px]']: config == 'outline',
              ['translate-y-[35px]']: config == 'filled',
              ['text-disabled']: status == 'disabled',
              ['ml-6']: leadingIcon,
            }
          )}
          onClick={() => textInput.current.focus()}
        >
          {label} {required && '*'}
        </span>
      </label>
      {helpText && (
        <div className="w-[100%] flex justify-between items-center px-4 mt-1">
          <p
            className={clsx('inline-block text-[12px]', {
              ['text-error']: status == 'error',
              ['text-disabled']: status == 'disabled',
              ['text-text-helper']: status == 'enabled',
            })}
          >
            {helpText}
          </p>
        </div>
      )}
    </div>
  );
};

Input.propTypes = {
  /**
   * Configuration
   */
  config: PropTypes.oneOf(['outline', 'filled']),
  /**
   * Input Label
   */
  label: PropTypes.string,
  /**
   * Input type
   */
  type: PropTypes.oneOf(['text', 'email', 'tel', 'url']),
  /**
   * Input name
   */
  name: PropTypes.string,
  /**
   * Help Text
   */
  helpText: PropTypes.string,
  /**
   * Input required
   */
  required: PropTypes.bool,
  /**
   * Input Status
   */
  status: PropTypes.oneOf(['enabled', 'error', 'disabled']),
  /**
   * Leading Icon
   */
  leadingIcon: PropTypes.element,
  /**
   * Following Icon
   */
  followingIcon: PropTypes.element,
};

Input.defaultProps = {
  config: 'outline',
  label: 'Full Name',
  type: 'text',
  name: 'fullName',
  required: true,
  status: 'enabled',
};
