import * as React from 'react';
import { SVGProps } from 'react';

const SvgIcGithub = (props: SVGProps<SVGSVGElement>) => (
    <svg
        width={32}
        height={32}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M16 3C8.818 3 3 8.818 3 16c0 5.753 3.721 10.611 8.889 12.334.65.114.894-.276.894-.618 0-.309-.017-1.332-.017-2.421-3.266.601-4.111-.796-4.371-1.528-.146-.373-.78-1.527-1.332-1.836-.455-.244-1.106-.845-.017-.861 1.024-.016 1.755.942 1.999 1.332 1.17 1.967 3.039 1.414 3.786 1.073.114-.845.455-1.414.829-1.739-2.893-.325-5.915-1.446-5.915-6.418 0-1.414.504-2.584 1.333-3.494-.13-.325-.585-1.658.13-3.445 0 0 1.088-.341 3.575 1.332a12.063 12.063 0 0 1 3.25-.438c1.104 0 2.21.146 3.25.438 2.486-1.69 3.575-1.332 3.575-1.332.715 1.787.26 3.12.13 3.445.828.91 1.332 2.063 1.332 3.494 0 4.988-3.039 6.093-5.931 6.418.471.406.877 1.186.877 2.405 0 1.739-.016 3.137-.016 3.575 0 .341.244.748.894.618A13.022 13.022 0 0 0 29 16c0-7.182-5.817-13-13-13Z"
            fill="#fff"
        />
    </svg>
);

export default SvgIcGithub;
