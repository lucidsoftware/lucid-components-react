/// <reference types="react" />
interface Props {
    className?: string;
    theme: any;
    placeholder?: string;
    videoUrl?: string;
}
declare const Video: import("react").FunctionComponent<import("emotion-theming/types/helper").AddOptionalTo<Props, "theme">>;
export default Video;
