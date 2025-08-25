'use client';
//hooks
import {
  useEffect,
  useRef,
  useState,
} from 'react';
//ui
import Image from 'next/image';
import { Avatar } from '@mui/material';
//icons
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';
//utils
import { cn } from '@/utils/cn';
import { fieldErrorCls } from '@/utils/consts/clsVariable';

export type TBaseUploadImageProps = {
  className?: string;
  value?: File | null;
  onChange?: (file: File | null) => void;
  text?: string | React.ReactNode;
  size?: number;
  error?: string;
};

export const BaseUploadImage: React.FC<TBaseUploadImageProps> = ({
  className,
  value = null,
  onChange,
  text,
  size = 56,
  error,
}) => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [preview, setPreview] = useState<string | null>(null);

  useEffect(() => {
    if (!value)
      setPreview(null);
    else {
      const url = URL.createObjectURL(value);
      setPreview(url);
      return () => URL.revokeObjectURL(url);
    }
  }, [value]);

  const handlePick = () => inputRef.current?.click();

  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] ?? null;
    onChange?.(file);
    e.target.value = '';
  };

  return (
    <div>
      <div className={cn(
        className,
        'flex gap-[12px] items-center'
      )}>
        <button
          className="cursor-pointer"
          type="button"
          onClick={handlePick}
        >
          <Avatar
            sx={{
              width: size,
              height: size,
              backgroundColor: 'var(--bg-2, var(--palette-background-paper))',
            }}
          >
            {
              preview
                ?
                <Image
                  src={preview}
                  alt="preview"
                  width={size}
                  height={size}
                />
                :
                <ImageOutlinedIcon color="primary"/>
            }
          </Avatar>

          <input
            ref={inputRef}
            type="file"
            accept="image/*"
            hidden
            onChange={handleFile}
          />
        </button>
        {
          typeof text === 'string'
            ? <p>{text}</p>
            : text
        }
      </div>
      {
        error &&
        <p className={fieldErrorCls}>{error}</p>
      }
    </div>
  );
};
