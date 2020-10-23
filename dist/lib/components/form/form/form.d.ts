/// <reference types="react" />
import { LayoutProps, SpaceProps } from 'styled-system';
interface Props extends LayoutProps, SpaceProps {
}
declare const Form: import("@emotion/styled-base").StyledComponent<import("react").DetailedHTMLProps<import("react").FormHTMLAttributes<HTMLFormElement>, HTMLFormElement>, Props, import("../../../../theme/theme").Theme> & {
    TextInput: import("@emotion/styled-base").StyledComponent<any, import("../text-input/text-input").Props, import("../../../../theme/theme").Theme>;
    Label: import("@emotion/styled-base").StyledComponent<any, import("../label/label").Props, import("../../../../theme/theme").Theme>;
    Field: import("@emotion/styled-base").StyledComponent<import("../field/field").Props, import("../field/field").Props & SpaceProps<Required<import("styled-system").Theme<string | number>>, string | number | symbol>, import("../../../../theme/theme").Theme>;
};
export default Form;
