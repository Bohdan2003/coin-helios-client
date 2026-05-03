'use client';

//hooks
import {
  useRouter,
  useSearchParams
} from 'next/navigation';
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
import { FormTextField } from '@/shared/ui/fields/FormTextField';
import { FormTextarea } from '@/shared/ui/fields/FormTextarea';
import { FormFieldArraySection } from '@/shared/ui/fields/FormFieldArraySection';
import { FormUploadImageField } from '@/shared/ui/fields/FormUploadImage';
import { ChainSelect } from '@/app/[lang]/profile/_ui/dialogs/AddCoinFormDialog/ChainSelect';
import { NetworkSelect } from '@/app/[lang]/profile/_ui/dialogs/AddCoinFormDialog/NetworkSelect';
import { CategorySelect } from '@/app/[lang]/profile/_ui/dialogs/AddCoinFormDialog/CategorySelect';
//icons
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';
//types
import { Resolver } from 'react-hook-form';
import { TCoinSchema } from '@/features/coins/model/addCoinFormValidation';
import { TDictionary } from '@/shared/i18n/dictionaries';
//utils
import { yupResolver } from '@hookform/resolvers/yup';
import { titleCls } from '@/shared/classNames';
import { cn } from '@/shared/lib/cn';
import { getCoinSchema } from '@/features/coins/model/addCoinFormValidation';

export const AddCoinFormDialog: React.FC<{
  dictionary: {
    buttons: TDictionary['buttons'];
    errors: TDictionary['forms']['errors'];
    form: TDictionary['forms']['addCoin'];
    link: TDictionary['links']['privacyPolicy'];
  };
}> = ({ dictionary: d }) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const isOpen = searchParams.get('addCoin') === 'visible';
  const isLgDown = useMediaQuery(useTheme().breakpoints.down('lg'));
  const coinSchema = getCoinSchema(d.errors);

  const methods = useForm({
    mode: 'onBlur',
    reValidateMode: 'onChange',
    resolver: yupResolver(coinSchema) as Resolver<TCoinSchema>,
    defaultValues: {
      name: '',
      icon: null,
      symbol: '',
      chain: '',
      // listings: [{ platform: '', link: '' }],
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

  const handleDialogClose = (): void => {
    const params = new URLSearchParams(searchParams.toString());
    params.set('addCoin', 'hidden');
    router.push(`?${params.toString()}`);
  };

  const handleSubmit = (data: TCoinSchema) => {
    console.log(data);
  };

  return (
    <Dialog
      fullWidth
      maxWidth="lg"
      open={isOpen}
      onClose={handleDialogClose}
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
          onSubmit={methods.handleSubmit(handleSubmit)}
        >
          <div className={cn(
            'grid md:grid-cols-[45%_1fr] gap-[20px] md:gap-[60px] pb-[24px] relative',
            'after:absolute after:left-0 after:right-0 after:bottom-0',
            'after:h-[1px] after:bg-[var(--lightGray)] after:rounded-[1px]',
          )}>
            <div className="flex justify-between items-center gap-[40px]">
              <p className={titleCls}>{ d.form.title }</p>
              <p className="opacity-80 text-[14px] whitespace-pre-line">
                <span className="text-orange">*</span> { d.form.rule }
              </p>
            </div>
            <div className="flex justify-between items-center gap-[40px]">
              <p className="opacity-80 text-[14px] max-w-[400px]">
                { d.form.text }
              </p>
              <IconButton onClick={handleDialogClose}>
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
                      <p>{ d.form.fields.icon }</p>
                      <p>(400x400px)</p>
                    </div>
                  }
                />
                <FormTextField
                  name="name"
                  label={ d.form.fields.coinName.label }
                  placeholder={ d.form.fields.coinName.placeholder }
                  fullWidth
                  required
                />
                <FormTextField
                  name="symbol"
                  label={ d.form.fields.symbol.label }
                  placeholder={ d.form.fields.symbol.placeholder }
                  fullWidth
                  required
                />
                <ChainSelect
                  name="chain"
                  label={ d.form.fields.chain.label }
                  placeholder={ d.form.fields.chain.placeholder }
                />
                <FormTextField
                  name="email"
                  label={ d.form.fields.email.label }
                  placeholder={ d.form.fields.email.placeholder }
                  fullWidth
                  required
                />
                <CategorySelect
                  name="category"
                  label={ d.form.fields.category.label }
                  placeholder={ d.form.fields.category.placeholder }
                />
              </div>
              {/*<FormFieldArraySection<TCoin>*/}
              {/*  className="mt-[50px]"*/}
              {/*  rowClassName="grid sm:grid-cols-2 gap-[12px] sm:gap-[20px]"*/}
              {/*  name="listings"*/}
              {/*  label="Listings"*/}
              {/*  createDefault={() => ({ platform: '', link: '' })}*/}
              {/*  renderRow={(getFieldName) => (*/}
              {/*    <>*/}
              {/*      <FormSelect*/}
              {/*        name={getFieldName('platform')}*/}
              {/*        placeholder="Select platform"*/}
              {/*        fullWidth*/}
              {/*      />*/}
              {/*      <FormTextField*/}
              {/*        name={getFieldName('link')}*/}
              {/*        placeholder="https://coins.com/your-coin"*/}
              {/*        fullWidth*/}
              {/*      />*/}
              {/*    </>*/}
              {/*  )}*/}
              {/*/>*/}
              <FormFieldArraySection<TCoinSchema>
                className="mt-[40px] md:mt-[50px]"
                rowClassName="grid sm:grid-cols-[1fr_200px] gap-[12px] sm:gap-[20px]"
                name="contracts"
                label={ d.form.fields.contracts.label }
                addMoreText={ d.buttons.addMore }
                required
                createDefault={() => ({ address: '', network: '' })}
                renderRow={(getFieldName) => (
                  <>
                    <FormTextField
                      name={getFieldName('address')}
                      placeholder={ d.form.fields.contracts.placeholders.address }
                      fullWidth
                    />
                    <NetworkSelect
                      name={getFieldName('network')}
                      placeholder={ d.form.fields.contracts.placeholders.network }
                    />
                  </>
                )}
              />
              <FormFieldArraySection<TCoinSchema>
                className="mt-[40px] md:mt-[50px]"
                name="otherLinks"
                label={ d.form.fields.otherLinks.label }
                addMoreText={ d.buttons.addMore }
                createDefault={() => ({ link: '' })}
                renderRow={(getFieldName) => (
                  <FormTextField
                    name={getFieldName('link')}
                    placeholder={ d.form.fields.otherLinks.placeholder }
                    fullWidth
                  />
                )}
              />
            </div>
            <div>
              <FormTextarea
                textareaClassName="h-[120px] md:h-[200px]"
                name="description"
                label={ d.form.fields.description.label }
                placeholder={ d.form.fields.description.placeholder }
                fullWidth
              />
              <div className="mt-[28px] grid sm:grid-cols-2 gap-[20px] md:gap-[40px]">
                <FormTextField
                  name="telegram"
                  label={ d.form.fields.telegram.label }
                  placeholder={ d.form.fields.telegram.placeholder }
                  fullWidth
                />
                <FormTextField
                  name="reddit"
                  label={ d.form.fields.reddit.label }
                  placeholder={ d.form.fields.reddit.placeholder }
                  fullWidth
                />
                <FormTextField
                  name="discord"
                  label={ d.form.fields.discord.label }
                  placeholder={ d.form.fields.discord.placeholder }
                  fullWidth
                />
                <FormTextField
                  name="twitter"
                  label={ d.form.fields.twitter.label }
                  placeholder={ d.form.fields.twitter.placeholder }
                  fullWidth
                />
                <FormTextField
                  name="website"
                  label={ d.form.fields.website.label }
                  placeholder={ d.form.fields.website.placeholder }
                  required
                  fullWidth
                />
                <FormTextField
                  name="telegramUsername"
                  label={ d.form.fields.telegramUsername.label }
                  placeholder={ d.form.fields.telegramUsername.placeholder }
                  fullWidth
                />
              </div>
            </div>
          </div>
          <div className="mt-[40px] flex justify-end gap-[20px]">
            <Button onClick={handleDialogClose}>
              { d.buttons.cancel }
            </Button>
            <Button
              variant="contained"
              type="submit"
            >{ d.buttons.send }</Button>
          </div>
        </form>
      </FormProvider>
    </Dialog>
  );
};