import * as React from 'react';
import { SVGProps } from 'react';

const SvgIcYoutube = (props: SVGProps<SVGSVGElement>) => (
    <svg
        width={32}
        height={32}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path
            d="M29.416 9.253a3.51 3.51 0 0 0-2.475-2.478C24.756 6.187 16 6.187 16 6.187s-8.756 0-10.94.585A3.504 3.504 0 0 0 2.583 9.25C2 11.438 2 16 2 16s0 4.563.584 6.747a3.51 3.51 0 0 0 2.475 2.478c2.185.587 10.941.587 10.941.587s8.756 0 10.94-.587a3.504 3.504 0 0 0 2.476-2.478C30 20.563 30 16 30 16s0-4.563-.584-6.747ZM13.219 20.187v-8.375l7.25 4.157-7.25 4.219Z"
            fill="#fff"
        />
    </svg>
);

export default SvgIcYoutube;
