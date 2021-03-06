import '@emotion/react';

import { Theme } from '../theme/theme';
import Accordion from './components/accordion/accordion';
import Box from './components/box/box';
import Breadcrumb from './components/breadcrumb/breadcrumb';
import Button, { getButtonStyles } from './components/button/button';
import Collection from './components/collection/collection';
import Heading from './components/heading/heading';
import Card from './components/card/card';
import Icon, { IconType } from './components/icon/icon';
import Form from './components/form/form/form';
import Link, { getLinkStyles, LinkVariant } from './components/link/link';
import Navbar from './components/navbar/navbar';
import NavbarWrapper from './components/navbar/navbar-wrapper';
import Paper from './components/paper/paper';
import Spacer from './components/spacer/spacer';
import VideoPlayButton from './components/video-play-button/video-play-button';
import VideoPlayer from './components/video-player/video-player';

export type DefaultTheme = Theme;

export {
  Accordion,
  Box,
  Breadcrumb,
  Button,
  Collection,
  Card,
  Heading,
  Form,
  getButtonStyles,
  getLinkStyles,
  Icon,
  IconType,
  Link,
  LinkVariant,
  Navbar,
  NavbarWrapper,
  Paper,
  Spacer,
  VideoPlayButton,
  VideoPlayer
};
