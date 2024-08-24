import localFont from "next/font/local";

const primary = localFont({
    src: [{
        path: 'media/fonts/BOGLEREGULAR.OTF',
        weight: '400',
        style: 'normal',
    }],
    variable: '--font-bogle',
    subsets: ['latin'],
    display: 'swap',
});
export { primary}