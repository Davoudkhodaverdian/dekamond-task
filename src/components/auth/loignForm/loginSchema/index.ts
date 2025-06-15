import * as Yup from 'yup';

export const useLoginSchema = () => {

  return Yup.object().shape({
    phone: Yup.string()
      .required('فیلد شماره تلفن الزامی است.')
      .test('is-valid', 'لطفاً یک شماره موبایل معتبر وارد کنید.', function (value = '') {
        const phoneRegex = /^09\d{9}$/;
        // phone is not valid
        if (!phoneRegex.test(value)) {
          return this.createError({ message: 'شماره موبایل باید با 09 شروع شده و ۱۱ رقم باشد.' });
        }
        return true; // phone is valid
      })
  });

}
