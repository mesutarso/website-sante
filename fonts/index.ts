import localFont from 'next/font/local'

export const rocgrotesk = localFont({
    src: [
        {
            path: './Fontspring-DEMO-rocgroteskcomp-black.otf',
            weight: '900',
            style: 'normal',

        }
    ],
    variable: '--font-rocgrotesk',
    display: 'swap',
})