import { Theme as DefaultTheme } from 'styled-system';
import { navbar, accordion, forms, breadcrumb, card, links, paper, headings } from './components';
export interface Theme extends DefaultTheme {
    navbar?: typeof navbar;
    accordion?: typeof accordion;
    forms?: typeof forms;
    breadcrumb?: typeof breadcrumb;
    buttons?: any;
    card?: typeof card;
    links?: typeof links;
    paper?: typeof paper;
    headings?: typeof headings;
}
declare const theme: Theme;
export interface ThemeProps {
    theme: Theme;
}
export default theme;
