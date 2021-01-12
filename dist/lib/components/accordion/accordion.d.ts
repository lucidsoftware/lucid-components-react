/// <reference types="react" />
declare const Accordion: import("react").FC<Pick<any, string | number | symbol> & {
    theme?: import("@emotion/react").Theme | undefined;
}> & {
    Panel: any;
    Item: any;
    Heading: any;
    Button: any;
};
export default Accordion;
