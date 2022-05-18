const dayjs = require('dayjs')
const jalaliday = require('jalali-dayjs')

dayjs.extend(jalaliday)

const numbers = {
  fa: ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'],
  ar: ['٠', '١', '٢', '٣', '٤', '٥', '٦', '٧', '٨', '٩'],
}

const formatNumber = (value, lang, options = {}) => {
  let newValue = value

  // show decimals
  if (options.fraction) {
    newValue = newValue.toFixed(options.fraction)
  }

  // add comma to number
  if (options.comma) {
    const parts = newValue.toString().split('.')
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',')
    newValue = parts.join('.')
  }

  // convert fa number
  if (lang === 'fa' || lang === 'ar') {
    newValue = newValue.toString().replace(/\d/g, (digit) => numbers[lang][digit])
  }

  if (options.unit) {
    newValue += ` ${options.unit}`
  }

  return newValue
}

const formatDatetime = (value, lang, options = { toFormat: 'YYYY-MM-DD' }) => {
  const date = dayjs(value, options.fromFormat)
  const d = date.locale(lang).format(options.toFormat)
  return lang === 'fa' ? formatNumber(d, lang) : d
}

module.exports = {
  i18n: {
    defaultLocale: 'en',
    locales: ['fa', 'en', 'de'],
    localeDetection: false,

    // custom config
    availableLocales: {
      fa: {
        key: 'fa',
        label: 'فارسی',
        direction: 'rtl',
        fontFamily: ['Peyda'],
      },
      en: {
        key: 'en',
        label: 'English',
        direction: 'ltr',
        fontFamily: ['Ridley', 'Rotunda'],
      },
      de: {
        key: 'de',
        label: 'Dutch',
        direction: 'ltr',
        fontFamily: ['Ridley', 'Rotunda'],
      },
    },
  },
  serializeConfig: false,
  reloadOnPrerender: true,
  interpolation: {
    format: (value, format, lang, options) => {
      let newOptions = { ...options }

      const splittedFormat = format.replace(')', '').split('(')
      const newFormat = splittedFormat[0]
      const optionsFromFormat = splittedFormat[1]

      if (optionsFromFormat) {
        const keyValuePair = optionsFromFormat.split(',')
        keyValuePair.forEach((item) => {
          const keyValue = item.split(':')
          const k = keyValue[0].trim()
          const v = keyValue[1].replace(/'/g, '').trim()

          newOptions = {
            [k]: v,
            ...newOptions,
          }
        })
      }

      if (newFormat === 'number') {
        return formatNumber(value, options.lang || lang, newOptions)
      }

      if (newFormat === 'datetime') {
        return formatDatetime(value, options.lang || lang, newOptions)
      }

      return value
    },
  },
}
