import 'emotion-theming';

import { Theme, ThemeProps as DefaultThemeProps } from '../theme/theme';
import colors from '../utils/colors';
import Accordion from './accordion/accordion';
import Box from './box/box';
import Breadcrumb from './breadcrumb/breadcrumb';
import Button, { getButtonStyles } from './button/button';
import Collection from './collection/collection';
import Heading from './heading/heading';
import Card from './card/card';
import Icon, { IconType } from './icon/icon';
import Form from './form/form/form';
import Link, { getLinkStyles, LinkVariant } from './link/link';
import Navbar, { NavbarContext } from './navbar/navbar';
import NavbarWrapper from './navbar/navbar-wrapper';
import Paper from './paper/paper';
import Spacer from './spacer/spacer';
import ThemeProvider from './theme-provider/theme-provider';
import VideoPlayButton from './video-play-button/video-play-button';
import VideoPlayer from './video-player/video-player';

export type DefaultTheme = Theme;
export type ThemeProps = DefaultThemeProps;

export {
  Accordion,
  Box,
  Breadcrumb,
  Button,
  Card,
  Collection,
  colors,
  Heading,
  Form,
  getButtonStyles,
  getLinkStyles,
  Icon,
  IconType,
  Link,
  LinkVariant,
  Navbar,
  NavbarContext,
  NavbarWrapper,
  Paper,
  Spacer,
  ThemeProvider,
  VideoPlayButton,
  VideoPlayer
};
