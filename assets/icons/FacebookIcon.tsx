import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
import { memo } from "react"

const SvgComponent = (props: SvgProps) => (
  <Svg data-name="Group 1889" xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <Path data-name="Path 3339" d="M0 0h24v24H0Z" fill="none" />
    <Path
      data-name="Path 3340"
      d="M12 2a10 10 0 0 0-1.562 19.879V14.89H7.9V12h2.54V9.8a3.528 3.528 0 0 1 3.777-3.89 15.393 15.393 0 0 1 2.238.2v2.46h-1.26a1.445 1.445 0 0 0-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989A10 10 0 0 0 12 2Z"
      fill="#1a76d2"
    />
  </Svg>
)

const FacebookIcon = memo(SvgComponent)
export default FacebookIcon
