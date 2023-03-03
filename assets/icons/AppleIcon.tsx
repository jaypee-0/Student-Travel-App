  import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
import { memo } from "react"

const SvgComponent = (props: any) => (
  <Svg data-name="Group 1890" xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <Path data-name="Path 3341" d="M0 0h24v24H0Z" fill="none" />
    <Path
      data-name="Path 3342"
      fill={"currentColor"}
      d="M11.624 7.222c-.876 0-2.232-1-3.66-.96A5.4 5.4 0 0 0 3.38 9.046c-1.956 3.4-.5 8.412 1.4 11.172.936 1.344 2.04 2.856 3.5 2.808 1.4-.06 1.932-.912 3.636-.912s2.172.912 3.66.876c1.512-.024 2.472-1.368 3.4-2.724a12.06 12.06 0 0 0 1.536-3.156 4.9 4.9 0 0 1-2.976-4.488 4.978 4.978 0 0 1 2.4-4.212 5.2 5.2 0 0 0-4.056-2.2c-1.848-.144-3.4 1.008-4.26 1.008Zm3.12-2.832A4.851 4.851 0 0 0 15.9.85a4.99 4.99 0 0 0-3.264 1.68 4.64 4.64 0 0 0-1.176 3.432 4.137 4.137 0 0 0 3.284-1.572Z"
    />
  </Svg>
)


const AppleIcon = memo(SvgComponent)
export default AppleIcon
