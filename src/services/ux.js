const {__} = wp.i18n;
export let LoadingComponent = function () {
    return (<h2>{__('Cargando Datos...')}</h2>);
};

export const InfoIcon = function () {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" height="20pt" version="1.1" viewBox="0 0 937.5 937.5"
             width="20pt">
            <g>
                <path d="M 93.75 62.5 L 93.75 218.75 L 125 218.75 L 125 62.5 C 125 45.238281 138.988281 31.25 156.25 31.25 L 781.25 31.25 C 798.511719 31.25 812.5 45.238281 812.5 62.5 L 843.75 62.5 C 843.75 27.984375 815.765625 0 781.25 0 L 156.25 0 C 121.734375 0 93.75 27.984375 93.75 62.5 Z M 93.75 62.5 "/>
                <path d="M 62.5 937.5 L 781.25 937.5 C 815.765625 937.5 843.75 909.515625 843.75 875 L 843.75 812.5 L 812.5 812.5 L 812.5 875 C 812.5 892.261719 798.511719 906.25 781.25 906.25 C 763.988281 906.25 750 892.261719 750 875 L 750 828.125 C 750 819.492188 743.007812 812.5 734.375 812.5 L 125 812.5 L 125 500 L 93.75 500 L 93.75 812.5 L 15.625 812.5 C 6.992188 812.5 0 819.492188 0 828.125 L 0 875 C 0 909.515625 27.984375 937.5 62.5 937.5 Z M 31.25 843.75 L 718.75 843.75 L 718.75 875 C 718.742188 885.980469 721.625 896.757812 727.144531 906.25 L 62.5 906.25 C 45.238281 906.25 31.25 892.261719 31.25 875 Z M 31.25 843.75 "/>
                <path d="M 15.625 468.75 L 328.125 468.75 C 336.757812 468.75 343.75 461.757812 343.75 453.125 L 343.75 265.625 C 343.75 256.992188 336.757812 250 328.125 250 L 15.625 250 C 6.992188 250 0 256.992188 0 265.625 L 0 453.125 C 0 461.757812 6.992188 468.75 15.625 468.75 Z M 31.25 281.25 L 312.5 281.25 L 312.5 437.5 L 31.25 437.5 Z M 31.25 281.25 "/>
                <path d="M 98.328125 317.078125 L 67.078125 348.328125 C 60.980469 354.433594 60.980469 364.316406 67.078125 370.421875 L 98.328125 401.671875 L 120.421875 379.578125 L 100.21875 359.375 L 120.421875 339.171875 Z M 98.328125 317.078125 "/>
                <path d="M 245.421875 317.078125 L 223.328125 339.171875 L 243.53125 359.375 L 223.328125 379.578125 L 245.421875 401.671875 L 276.671875 370.421875 C 282.769531 364.316406 282.769531 354.433594 276.671875 348.328125 Z M 245.421875 317.078125 "/>
                <path d="M 141.414062 401.308594 L 172.679688 307.546875 L 202.335938 317.4375 L 171.054688 411.191406 Z M 141.414062 401.308594 "/>
                <path d="M 921.875 93.75 L 390.625 93.75 C 381.992188 93.75 375 100.742188 375 109.375 L 375 421.875 C 375 430.507812 381.992188 437.5 390.625 437.5 L 921.875 437.5 C 930.507812 437.5 937.5 430.507812 937.5 421.875 L 937.5 109.375 C 937.5 100.742188 930.507812 93.75 921.875 93.75 Z M 906.25 406.25 L 406.25 406.25 L 406.25 368.21875 L 546.5625 284.03125 L 683.355469 372.5 C 688.054688 375.527344 694.019531 375.820312 698.980469 373.25 L 812.101562 314.65625 L 906.25 368.4375 Z M 906.25 332.453125 L 820.3125 283.3125 C 815.710938 280.671875 810.082031 280.566406 805.371094 283 L 692.765625 341.332031 L 555.421875 252.5 C 550.414062 249.265625 544 249.160156 538.886719 252.234375 L 406.25 331.78125 L 406.25 125 L 906.25 125 Z M 906.25 332.453125 "/>
                <path d="M 742.1875 265.625 C 772.390625 265.625 796.875 241.140625 796.875 210.9375 C 796.875 180.734375 772.390625 156.25 742.1875 156.25 C 711.984375 156.25 687.5 180.734375 687.5 210.9375 C 687.5 241.140625 711.984375 265.625 742.1875 265.625 Z M 742.1875 187.5 C 755.132812 187.5 765.625 197.992188 765.625 210.9375 C 765.625 223.882812 755.132812 234.375 742.1875 234.375 C 729.242188 234.375 718.75 223.882812 718.75 210.9375 C 718.75 197.992188 729.242188 187.5 742.1875 187.5 Z M 742.1875 187.5 "/>
                <path d="M 156.25 515.625 L 156.25 703.125 C 156.25 711.757812 163.242188 718.75 171.875 718.75 L 562.5 718.75 C 571.132812 718.75 578.125 711.757812 578.125 703.125 L 578.125 515.625 C 578.125 506.992188 571.132812 500 562.5 500 L 171.875 500 C 163.242188 500 156.25 506.992188 156.25 515.625 Z M 187.5 531.25 L 546.875 531.25 L 546.875 687.5 L 187.5 687.5 Z M 187.5 531.25 "/>
                <path d="M 218.75 562.5 L 281.25 562.5 L 281.25 593.75 L 218.75 593.75 Z M 218.75 562.5 "/>
                <path d="M 312.5 562.5 L 453.125 562.5 L 453.125 593.75 L 312.5 593.75 Z M 312.5 562.5 "/>
                <path d="M 484.375 562.5 L 515.625 562.5 L 515.625 593.75 L 484.375 593.75 Z M 484.375 562.5 "/>
                <path d="M 218.75 625 L 406.25 625 L 406.25 656.25 L 218.75 656.25 Z M 218.75 625 "/>
                <path d="M 437.5 625 L 515.625 625 L 515.625 656.25 L 437.5 656.25 Z M 437.5 625 "/>
                <path d="M 156.25 62.5 L 187.5 62.5 L 187.5 93.75 L 156.25 93.75 Z M 156.25 62.5 "/>
                <path d="M 218.75 62.5 L 250 62.5 L 250 93.75 L 218.75 93.75 Z M 218.75 62.5 "/>
                <path d="M 281.25 62.5 L 312.5 62.5 L 312.5 93.75 L 281.25 93.75 Z M 281.25 62.5 "/>
                <path d="M 156.25 125 L 343.75 125 L 343.75 156.25 L 156.25 156.25 Z M 156.25 125 "/>
                <path d="M 921.875 562.5 L 625 562.5 C 616.367188 562.5 609.375 569.492188 609.375 578.125 L 609.375 765.625 C 609.375 774.257812 616.367188 781.25 625 781.25 L 921.875 781.25 C 930.507812 781.25 937.5 774.257812 937.5 765.625 L 937.5 578.125 C 937.5 569.492188 930.507812 562.5 921.875 562.5 Z M 906.25 750 L 640.625 750 L 640.625 593.75 L 906.25 593.75 Z M 906.25 750 "/>
                <path d="M 671.875 625 L 703.125 625 L 703.125 656.25 L 671.875 656.25 Z M 671.875 625 "/>
                <path d="M 671.875 687.5 L 703.125 687.5 L 703.125 718.75 L 671.875 718.75 Z M 671.875 687.5 "/>
                <path d="M 734.375 625 L 875 625 L 875 656.25 L 734.375 656.25 Z M 734.375 625 "/>
                <path d="M 734.375 687.5 L 875 687.5 L 875 718.75 L 734.375 718.75 Z M 734.375 687.5 "/>
                <path d="M 812.5 468.75 L 843.75 468.75 L 843.75 531.25 L 812.5 531.25 Z M 812.5 468.75 "/>
            </g>
        </svg>
    );
}