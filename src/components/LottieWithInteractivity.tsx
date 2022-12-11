import { useLottie, useLottieInteractivity } from "lottie-react";
import { LottieProps } from "../utils/types";

export default function LottieWithInteractivity(props: LottieProps) {
    const lottieObj = useLottie({ animationData: props.animationFile });

    const lottieAnimated = useLottieInteractivity({
        mode: "scroll",
        actions: [props.actions!],
        lottieObj
    });

    return lottieAnimated;
}