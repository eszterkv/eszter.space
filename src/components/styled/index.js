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
};

const darkTheme = {
  primary: colors.invertedPrimary,
  background: colors.invertedBg,
  grey: colors.invertedGrey,
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
