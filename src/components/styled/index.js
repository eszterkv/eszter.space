import {
  Article,
  ArticleBody,
  ArticleTitle,
  FooterNav,
  Timestamp
} from './article';
import SiteWrapper from './site-wrapper';
import { SiteTitle, Title } from './text';
import { Tooltip, TooltipTrigger } from './tooltip';
import { colors } from './variables';

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
  Article,
  ArticleBody,
  ArticleTitle,
  FooterNav,
  SiteTitle,
  SiteWrapper,
  Timestamp,
  Title,
  Tooltip,
  TooltipTrigger,
  lightTheme,
  darkTheme
};
