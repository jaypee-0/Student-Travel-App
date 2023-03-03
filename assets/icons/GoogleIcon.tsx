import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
import { memo } from "react"

const SvgComponent = (props: any) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <Path
      data-name="Path 762"
      d="M4.629 12.621 3.9 15.335l-2.657.056a10.461 10.461 0 0 1-.077-9.752l2.366.434 1.036 2.351a6.232 6.232 0 0 0 .059 4.2Z"
      fill="#fff"
    />
    <Path
      data-name="Path 763"
      d="M20.704 8.492a10.439 10.439 0 0 1-3.723 10.095l-2.98-.152-.422-2.633a6.224 6.224 0 0 0 2.678-3.178h-5.584V8.493h10.031Z"
      fill="#fff"
    />
    <Path
      data-name="Path 764"
      d="M16.981 18.587a10.446 10.446 0 0 1-15.736-3.195l3.384-2.77a6.211 6.211 0 0 0 8.95 3.18Z"
      fill="#fff"
    />
    <Path
      data-name="Path 765"
      d="m17.109 2.4-3.383 2.77a6.21 6.21 0 0 0-9.155 3.252l-3.4-2.785A10.445 10.445 0 0 1 17.109 2.4Z"
      fill="#fff"
    />
  </Svg>
)

const GoogleIcon = memo(SvgComponent)
export default GoogleIcon
