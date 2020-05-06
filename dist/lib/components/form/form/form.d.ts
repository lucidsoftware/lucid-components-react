/// <reference types="@emotion/core" />
import { LayoutProps, SpaceProps } from 'styled-system';
interface Props extends LayoutProps, SpaceProps {
}
declare const Form: import("@emotion/styled-base").StyledComponent<import("react").DetailedHTMLProps<import("react").FormHTMLAttributes<HTMLFormElement>, HTMLFormElement>, Props, object> & {
    TextInput: import("@emotion/styled-base").StyledComponent<any, import("../text-input/text-input").Props, object>;
    Label: import("@emotion/styled-base").StyledComponent<any, import("../label/label").Props, object>;
    Field: import("@emotion/styled-base").StyledComponent<import("../field/field").Props, import("../field/field").Props & SpaceProps<Required<import("styled-system").Theme<string | number>>, string | number | symbol>, object>;
};
export default Form;
