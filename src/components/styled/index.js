import {
  ArticleBody,
  ArticleTitle,
  FooterNav,
  Timestamp
} from './article';
import { Main } from './main';
import { SiteTitle, Title } from './text';
import { Tooltip, TooltipTrigger } from './tooltip';
import { colors } from './variables';
import SiteWrapper from './site-wrapper';

const lightTheme = {
  primary: colors.primary,
  background: 'white',
  grey: colors.grey,
  codeBg: '#f6f6f6',
  codeString: '#065',
  codeImportant: 'slategrey',
  codeVar: '#2f4550',
  codeFn: '#a70',
  codeComment: 'slategrey',
  codeBoolNum: 'darkslategrey',
  codeKeyword: 'darkslategrey',
};

const darkTheme = {
  primary: colors.invertedPrimary,
  background: colors.invertedBg,
  grey: colors.invertedGrey,
  codeBg: '#303033',
  codeString: '#ff9',
  codeImportant: 'pink',
  codeVar: 'salmon',
  codeFn: '#6dc',
  codeComment: '#aaa',
  codeBoolNum: '#6ba',
  codeKeyword: 'orange',
};

export {
  ArticleBody,
  ArticleTitle,
  FooterNav,
  Main,
  SiteTitle,
  SiteWrapper,
  Timestamp,
  Title,
  Tooltip,
  TooltipTrigger,
  lightTheme,
  darkTheme
};
