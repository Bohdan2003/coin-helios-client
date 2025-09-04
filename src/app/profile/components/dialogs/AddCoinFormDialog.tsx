'use client';
//hooks
import {
  useMediaQuery,
  useTheme
} from '@mui/material';
import { useForm } from 'react-hook-form';
//ui
import {
  Button,
  Dialog,
} from '@mui/material';
import { FormProvider } from 'react-hook-form';
import { FormTextField } from '@/ui/fields/FormTextField';
import { FormTextarea } from '@/ui/fields/FormTextarea';
import { FormSelect } from '@/ui/fields/FormSelect';
import { FormFieldArraySection } from '@/ui/fields/FormFieldArraySection';
import { FormUploadImageField } from '@/ui/fields/FormUploadImage';
//icons
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';
//types
import { Resolver } from 'react-hook-form';
//utils
import { yupResolver } from '@hookform/resolvers/yup';
import { smallTitleCls } from '@/utils/consts/clsVariable';
import { cn } from '@/utils/cn';
import { coinSchema } from '@/utils/validationSchemas';
//types
import { TCoin } from '@/utils/validationSchemas';

type TAddCoinFormDialogProps = {
  isOpen: boolean;
  onClose: () => void;
}

export const AddCoinFormDialog: React.FC<TAddCoinFormDialogProps> = ({
  isOpen,
  onClose,
}) => {
  const isLgDown = useMediaQuery(useTheme().breakpoints.down('lg'));

  const methods = useForm({
    mode: 'onBlur',
    reValidateMode: 'onChange',
    resolver: yupResolver(coinSchema) as Resolver<TCoin>,
    defaultValues: {
      name: '',
      icon: null,
      symbol: '',
      chain: '',
      listings: [{ platform: '', link: '' }],
      contracts: [{ address: '', network: '' }],
      otherLinks: [{ link: '' }],

      description: '',
      telegram: '',
      telegramUsername: '',
      reddit: '',
      discord: '',
      twitter: '',
      website: '',
      email: '',
      category: '',
    },
  });

  const onSubmit = (data: TCoin) => {
    console.log(data);
  };

  return (
    <Dialog
      fullWidth
      maxWidth="lg"
      open={isOpen}
      onClose={onClose}
      fullScreen={isLgDown}
      slotProps={{
        paper: {
          sx: {
            borderRadius: {
              xs: 0,
              lg: '16px'
            }
          }
        }
      }}
    >
      <FormProvider {...methods}>
        <form
          className="py-[24px] px-[32px]"
          onSubmit={methods.handleSubmit(onSubmit)}
        >
          <div className={cn(
            'grid md:grid-cols-[45%_1fr] gap-[20px] md:gap-[60px] pb-[24px] relative',
            'after:absolute after:left-0 after:right-0 after:bottom-0',
            'after:h-[1px] after:bg-[var(--darkGray)] after:rounded-[1px]',
          )}>
            <div className="flex justify-between items-center gap-[40px]">
              <p className={smallTitleCls}>Add coin</p>
              <p className="opacity-80 text-[14px] max-w-[100px]">
                <span className="text-orange">*</span> lines marked as mandatory
              </p>
            </div>
            <div className="flex justify-between items-center gap-[40px]">
              <p className="opacity-80 text-[14px] max-w-[400px]">
                Get your project noticed — submit a request, and your coin will
                appear on the site within 2 days after moderation
              </p>
              <IconButton
                aria-label="close"
                onClick={onClose}
              >
                <CloseIcon />
              </IconButton>
            </div>
          </div>
          <div className="mt-[24px] grid md:grid-cols-[45%_1fr] gap-[40px] md:gap-[60px]">
            <div>
              <div className="grid sm:grid-cols-2 gap-x-[20px] gap-y-[32px]">
                <FormUploadImageField
                  name="icon"
                  text={
                    <div className="font-inter text-[12px] opacity-70 font-medium text-left">
                      <p>Upload Coin image</p>
                      <p>(400x400px)</p>
                    </div>
                  }
                />
                <FormTextField
                  label="Coin name"
                  placeholder="Bitcoin"
                  name="name"
                  fullWidth
                  required
                />
                <FormTextField
                  name="symbol"
                  label="Coin symbol"
                  placeholder="BTC"
                  fullWidth
                  required
                />
                <FormSelect
                  name="chain"
                  label="Network/Chain"
                  placeholder="Select network"
                  fullWidth
                  required
                />
              </div>
              <FormFieldArraySection<TCoin>
                className="mt-[50px]"
                rowClassName="grid sm:grid-cols-2 gap-[12px] sm:gap-[20px]"
                name="listings"
                label="Listings"
                createDefault={() => ({ platform: '', link: '' })}
                renderRow={(getFieldName) => (
                  <>
                    <FormSelect
                      name={getFieldName('platform')}
                      placeholder="Select platform"
                      fullWidth
                    />
                    <FormTextField
                      name={getFieldName('link')}
                      placeholder="https://coins.com/your-coin"
                      fullWidth
                    />
                  </>
                )}
              />
              <FormFieldArraySection<TCoin>
                className="mt-[40px] md:mt-[50px]"
                rowClassName="grid sm:grid-cols-[1fr_200px] gap-[12px] sm:gap-[20px]"
                name="contracts"
                label="Contract Address"
                required
                createDefault={() => ({ address: '', network: '' })}
                renderRow={(getFieldName) => (
                  <>
                    <FormTextField
                      name={getFieldName('address')}
                      placeholder="0xA0b86"
                      fullWidth
                    />
                    <FormSelect
                      name={getFieldName('network')}
                      placeholder="Select network"
                      fullWidth
                    />
                  </>
                )}
              />
              <FormFieldArraySection<TCoin>
                className="mt-[40px] md:mt-[50px]"
                name="otherLinks"
                label="Other link"
                createDefault={() => ({ link: '' })}
                renderRow={(getFieldName) => (
                  <FormTextField
                    name={getFieldName('link')}
                    placeholder="https://..."
                    fullWidth
                  />
                )}
              />
            </div>
            <div>
              <FormTextarea
                textareaClassName="h-[120px] md:h-[200px]"
                name="description"
                label="Coin description"
                placeholder="Short coin description"
                fullWidth
              />
              <div className="mt-[28px] grid sm:grid-cols-2 gap-[20px] md:gap-[40px]">
                <FormTextField
                  name="telegram"
                  label="Telegram"
                  placeholder="https://t.me/your_channel"
                  fullWidth
                />
                <FormTextField
                  name="reddit"
                  label="Reddit"
                  placeholder="https://reddit.com/r/yourSubreddit"
                  fullWidth
                />
                <FormTextField
                  name="discord"
                  label="Discord"
                  placeholder="https://discord.gg/your-invite"
                  fullWidth
                />
                <FormTextField
                  name="twitter"
                  label="Twitter"
                  placeholder="https://twitter.com/your_handle"
                  fullWidth
                />
                <FormTextField
                  name="website"
                  label="Website link"
                  required
                  placeholder="https://yourdomain.com"
                  fullWidth
                />
                <FormTextField
                  name="telegramUsername"
                  label="Telegram contact"
                  placeholder="@your_username"
                  fullWidth
                />
                <FormTextField
                  name="email"
                  label="Email for communication"
                  required
                  placeholder="name@company.com"
                  fullWidth
                />
                <FormSelect
                  name="category"
                  label="Category"
                  required
                  placeholder="Select category"
                  fullWidth
                />
              </div>
            </div>
          </div>
          <div className="mt-[40px] flex justify-end gap-[20px]">
            <Button onClick={onClose}>
              Cancel
            </Button>
            <Button
              variant="contained"
              type="submit"
            >Send</Button>
          </div>
        </form>
      </FormProvider>
    </Dialog>
  );
};