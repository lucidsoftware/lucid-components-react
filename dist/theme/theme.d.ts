import * as CSS from 'csstype';
import { Theme as DefaultTheme } from 'styled-system';
import { navbar, forms, breadcrumb } from './components';
export interface Theme extends DefaultTheme {
    colors: Record<string, string>;
    radii: Record<string, string | number>;
    navbar: typeof navbar;
    accordion: Record<'button' | 'panel', Record<string, CSS.StandardProperties | object>>;
    forms: typeof forms;
    breadcrumb: typeof breadcrumb;
    buttons: any;
    card?: Record<string, CSS.StandardProperties | object>;
    links: any;
    paper?: Record<string, CSS.StandardProperties | object>;
    headings?: Record<string, CSS.StandardProperties | object>;
}
declare const theme: Theme;
export interface ThemeProps {
    theme: Theme;
}
export default theme;
