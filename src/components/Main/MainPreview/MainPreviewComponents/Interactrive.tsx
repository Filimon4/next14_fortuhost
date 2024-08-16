'use client';

import { FC, useState } from 'react';
import styles from '../MainPreview.module.scss';
import Button from '@/shared/ui/Button/Button';
import Image from 'next/image';
import variables from '@variables';
import { useRouter } from 'next/navigation';

const Interactive: FC = () => {
    const router = useRouter()
    const [isHovered, setIsHovered] = useState(false);

    const onButtonClick = () => {
        router.push('dashboard')
    }

    return (
        <article className={styles.interactive}>
            <Button
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                onClick={onButtonClick}
                className={styles.button}>
                Добавить приложение
            </Button>
            <div className={styles.laptopBox}>
                <Image
                    className={styles.laptop}
                    src="/icons/main/laptop.svg"
                    alt="laptop"
                    width={452}
                    height={412.5}
                />
                {isHovered && (
                    <>
                        <Image
                            className={styles.laptopActive}
                            src="/icons/main/laptop-active.svg"
                            alt="laptop-active"
                            width={452}
                            height={412.5}
                        />
                        <Image
                            className={styles.leftVector}
                            src="/icons/main/vector-left.svg"
                            alt="vector-left"
                            width={154}
                            height={166}
                        />
                        <Image
                            className={styles.rightVector}
                            src="/icons/main/vector-right.svg"
                            alt="vector-right"
                            width={240}
                            height={44}
                        />
                    </>
                )}
                <svg
                    className={styles.hdd}
                    width="181"
                    height="329"
                    viewBox="0 0 181 329"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_2407_12)">
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M179.669 53.2794C179.669 67.3273 169.988 80.2859 153.818 89.8054C137.678 99.307 115.296 105.227 90.5 105.227C65.7043 105.227 43.3209 99.307 27.1817 89.8054C11.0116 80.2859 1.33088 67.3273 1.33088 53.2794C1.33088 39.2315 11.0116 26.2728 27.1817 16.7533C43.3209 7.25169 65.7043 1.33198 90.5 1.33198C115.296 1.33198 137.678 7.25169 153.818 16.7533C169.988 26.2728 179.669 39.2315 179.669 53.2794ZM90.5 106.559C45.8205 106.559 8.70319 87.4974 1.33088 62.4341V79.919C1.33088 93.9669 11.0116 106.926 27.1817 116.445C43.3209 125.947 65.7043 131.866 90.5 131.866C115.296 131.866 137.678 125.947 153.818 116.445C169.988 106.926 179.669 93.9669 179.669 79.919V62.4341C172.297 87.4974 135.179 106.559 90.5 106.559ZM90.5 133.198C126.111 133.198 156.919 121.089 171.69 103.483C170.945 113.042 162.756 122.933 148.819 130.814C134.138 139.115 113.622 144.837 90.7594 145.301C67.9481 145.764 47.0523 140.073 31.8585 131.558C16.5198 122.962 7.54912 111.841 7.3436 101.697C7.33871 101.456 7.33882 101.216 7.34385 100.978C21.21 119.93 53.223 133.198 90.5 133.198ZM178.193 93.1379C177.166 95.5074 175.868 97.8134 174.322 100.044L174.366 100.745C174.384 101.041 174.397 101.339 174.403 101.638C174.638 113.258 165.196 124.613 150.129 133.133C135.017 141.679 114.057 147.493 90.8133 147.965C67.5523 148.436 46.1853 142.641 30.558 133.883C14.9791 125.152 4.91754 113.358 4.68238 101.751C4.65811 100.553 4.73935 99.3813 4.92228 98.2361L5.0405 97.496C4.19434 96.07 3.44824 94.6163 2.80718 93.1379C1.83565 96.204 1.33088 99.3551 1.33088 102.563C1.33088 116.611 11.0116 129.569 27.1817 139.088C43.3209 148.591 65.7043 154.51 90.5 154.51C115.296 154.51 137.678 148.591 153.818 139.088C169.988 129.569 179.669 116.611 179.669 102.563C179.669 99.3551 179.165 96.204 178.193 93.1379ZM178.953 91.2409C180.293 87.5922 181 83.8042 181 79.919V53.2794C181 23.854 140.481 0 90.5 0C40.5182 0 0 23.854 0 53.2794V79.919C0 83.8042 0.706338 87.5921 2.04754 91.2409C0.706338 94.8896 0 98.6776 0 102.563V129.202C0 132.852 0.623187 136.415 1.81033 139.858C0.623188 143.301 0 146.865 0 150.514V177.154C0 180.803 0.623187 184.367 1.81033 187.81C0.623188 191.253 0 194.816 0 198.466V225.105C0 229.228 0.795114 233.24 2.29998 237.093C0.795114 240.947 0 244.958 0 249.081V275.721C0 305.146 40.5182 329 90.5 329C140.481 329 181 305.146 181 275.721V249.081C181 244.958 180.205 240.947 178.7 237.093C180.205 233.24 181 229.228 181 225.105V198.466C181 194.816 180.377 191.253 179.19 187.81C180.377 184.367 181 180.803 181 177.154V150.514C181 146.865 180.377 143.301 179.19 139.858C180.377 136.415 181 132.852 181 129.202V102.563C181 98.6776 180.293 94.8897 178.953 91.2409ZM178.429 141.866C177.367 144.431 175.989 146.923 174.322 149.327L174.366 150.029C174.384 150.325 174.397 150.622 174.403 150.92C174.638 162.542 165.196 173.897 150.129 182.417C135.017 190.963 114.057 196.777 90.8133 197.248C67.5523 197.72 46.1853 191.924 30.558 183.166C14.9791 174.435 4.91754 162.642 4.68238 151.035C4.65811 149.836 4.73935 148.664 4.92228 147.52L5.0405 146.779C4.08856 145.176 3.26327 143.536 2.57169 141.866C1.75421 144.687 1.33088 147.577 1.33088 150.514C1.33088 164.563 11.0116 177.52 27.1817 187.04C43.3209 196.542 65.7043 202.462 90.5 202.462C115.296 202.462 137.678 196.542 153.818 187.04C169.988 177.52 179.669 164.563 179.669 150.514C179.669 147.577 179.246 144.687 178.429 141.866ZM7.34385 150.261C7.33882 150.5 7.33871 150.739 7.3436 150.98C7.54912 161.125 16.5198 172.245 31.8585 180.842C47.0523 189.356 67.9481 195.048 90.7594 194.584C113.622 194.121 134.138 188.398 148.819 180.098C162.756 172.216 170.945 162.326 171.69 152.767C156.919 170.373 126.111 182.482 90.5 182.482C53.223 182.482 21.21 169.214 7.34385 150.261ZM116.805 51.7028C123.51 47.774 127.331 42.5405 127.331 37.0291C127.331 31.5178 123.51 26.2843 116.805 22.3555C110.132 18.4452 100.827 15.9838 90.4758 15.9838C80.1251 15.9838 70.8193 18.4452 64.1465 22.3555C57.4419 26.2843 53.6204 31.5178 53.6204 37.0291C53.6204 42.5405 57.4419 47.774 64.1465 51.7028C70.8193 55.6131 80.1251 58.0745 90.4758 58.0745C100.827 58.0745 110.132 55.6131 116.805 51.7028ZM90.4758 59.4065C108.648 59.4065 123.856 51.9679 127.715 42.0033V48.2178H127.331C127.331 53.7292 123.51 58.9627 116.805 62.8915C110.132 66.8018 100.827 69.2632 90.4758 69.2632C80.1251 69.2632 70.8193 66.8018 64.1465 62.8915C57.4419 58.9627 53.6204 53.7292 53.6204 48.2178H53.2353V42.0006C57.0933 51.9665 72.3019 59.4065 90.4758 59.4065ZM129.046 37.0291H128.662C128.662 24.6705 111.565 14.6518 90.4758 14.6518C69.3861 14.6518 52.2896 24.6705 52.2896 37.0291H51.9044V48.2178H52.2896C52.2896 60.5765 69.3861 70.5951 90.4758 70.5951C111.565 70.5951 128.662 60.5765 128.662 48.2178H129.046V37.0291ZM177.94 238.893C177.146 240.646 176.202 242.362 175.119 244.039L175.237 245.578C175.26 245.874 175.276 246.171 175.287 246.469C175.676 258.085 166.387 269.567 151.434 278.287C136.438 287.035 115.559 293.128 92.323 293.912C69.0705 294.696 47.628 289.186 31.8849 280.638C16.1906 272.116 5.97227 260.459 5.58192 248.856C5.54162 247.658 5.60719 246.486 5.77478 245.338L5.94919 244.145C4.83758 242.434 3.87134 240.681 3.05935 238.893C1.92314 242.199 1.33088 245.606 1.33088 249.081C1.33088 263.129 11.0116 276.087 27.1817 285.607C43.3209 295.109 65.7043 301.028 90.5 301.028C115.296 301.028 137.678 295.109 153.818 285.607C169.988 276.087 179.669 263.129 179.669 249.081C179.669 245.606 179.077 242.199 177.94 238.893ZM8.18972 247.284L8.24963 247.384L8.24273 247.581C8.22902 247.973 8.22878 248.368 8.24217 248.767C8.58333 258.907 17.7019 269.907 33.1541 278.297C48.4605 286.607 69.4305 292.017 92.2335 291.249C115.088 290.479 135.526 284.482 150.094 275.986C164.331 267.682 172.449 257.331 172.633 247.511C158.259 265.741 126.887 278.385 90.5 278.385C53.962 278.385 22.4813 265.638 8.18972 247.284ZM179.669 198.466C179.669 195.529 179.246 192.638 178.429 189.817C177.424 192.243 176.138 194.602 174.592 196.885L174.638 197.612C174.657 197.907 174.669 198.206 174.676 198.504C174.911 210.124 165.469 221.48 150.4 230C135.288 238.545 114.329 244.359 91.0856 244.832C67.8246 245.303 46.4576 239.508 30.8303 230.749C15.2514 222.018 5.18983 210.224 4.95466 198.617C4.9304 197.42 5.01164 196.248 5.19457 195.102L5.20902 195.012C4.18566 193.319 3.30377 191.585 2.57169 189.817C1.75421 192.638 1.33088 195.529 1.33088 198.466C1.33088 212.514 11.0116 225.472 27.1817 234.991C43.3209 244.494 65.7043 250.413 90.5 250.413C115.296 250.413 137.678 244.494 153.818 234.991C169.988 225.472 179.669 212.514 179.669 198.466ZM149.091 227.681C163.008 219.812 171.193 209.941 171.959 200.396C157.294 218.176 126.329 230.433 90.5 230.433C53.465 230.433 21.6259 217.337 7.61624 198.581C7.8314 208.721 16.8007 219.833 32.1308 228.425C47.3246 236.94 68.2204 242.63 91.0317 242.168C113.894 241.704 134.411 235.981 149.091 227.681ZM90.5 302.36C135.179 302.36 172.297 283.298 179.669 258.236V275.721C179.669 289.769 169.988 302.727 153.818 312.246C137.678 321.749 115.296 327.668 90.5 327.668C65.7043 327.668 43.3209 321.749 27.1817 312.246C11.0116 302.727 1.33088 289.769 1.33088 275.721V258.236C8.70319 283.298 45.8205 302.36 90.5 302.36ZM6.90132 248.131C6.90161 247.998 6.90333 247.865 6.90645 247.732L6.9068 247.733C6.90359 247.865 6.90166 247.998 6.90132 248.131ZM6.29412 197.512C6.28943 197.638 6.28604 197.765 6.28392 197.893C6.28609 197.766 6.28935 197.638 6.29412 197.512ZM6.00936 150.517C6.01045 150.32 6.01462 150.124 6.02183 149.928L6.02218 149.929C6.01484 150.124 6.01052 150.32 6.00936 150.517ZM179.669 207.62C172.297 232.683 135.179 251.745 90.5 251.745C45.8205 251.745 8.70319 232.683 1.33088 207.62V225.105C1.33088 239.154 11.0116 252.111 27.1817 261.631C43.3209 271.133 65.7043 277.053 90.5 277.053C115.296 277.053 137.678 271.133 153.818 261.631C169.988 252.111 179.669 239.154 179.669 225.105V207.62ZM90.5 203.794C135.179 203.794 172.297 184.732 179.669 159.669V177.154C179.669 191.202 169.988 204.16 153.818 213.68C137.678 223.182 115.296 229.101 90.5 229.101C65.7043 229.101 43.3209 223.182 27.1817 213.68C11.0116 204.16 1.33088 191.202 1.33088 177.154V159.669C8.70319 184.732 45.8205 203.794 90.5 203.794ZM179.669 111.717C172.297 136.78 135.179 155.842 90.5 155.842C45.8205 155.842 8.70319 136.78 1.33088 111.717V129.202C1.33088 143.251 11.0116 156.208 27.1817 165.728C43.3209 175.23 65.7043 181.15 90.5 181.15C115.296 181.15 137.678 175.23 153.818 165.728C169.988 156.208 179.669 143.251 179.669 129.202V111.717Z"
                            fill={!isHovered ? variables.baseOrange : variables.baseYellow}
                        />
                    </g>
                    <defs>
                        <clipPath id="clip0_2407_12">
                            <rect width="181" height="329" fill="white" />
                        </clipPath>
                    </defs>
                </svg>
                <svg
                    className={styles.server}
                    width="195"
                    height="368"
                    viewBox="0 0 195 368"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M185.936 67.6563C194.448 62.8647 194.444 50.5953 185.93 45.8085L115.656 6.30246C103.821 -0.350871 89.3759 -0.341583 77.5493 6.32696L7.76145 45.6778C-0.784546 50.4966 -0.725009 62.8363 7.86709 67.5722L85.3908 110.303C93.1776 114.595 102.627 114.552 110.376 110.191L185.936 67.6563ZM186.575 44.6585C191.526 47.4418 193.873 52.514 193.617 57.4675V259.274H192.431V62.4311C191.291 64.9888 189.341 67.2529 186.582 68.806L111.021 111.34C102.876 115.926 92.9415 115.97 84.7553 111.458L7.2316 68.7276C4.39791 67.1657 2.40392 64.8555 1.25175 62.2412V259.274H0.0659427V56.1477H0.0767981C0.220379 51.5915 2.56338 47.095 7.11484 44.5285L76.9027 5.17772C89.1301 -1.71687 104.065 -1.72647 116.301 5.15238L186.575 44.6585ZM0.0770835 259.274C-0.0708676 263.907 2.05626 268.604 6.44941 271.395C6.3848 271.795 6.33509 272.196 6.30025 272.598C2.24027 275.219 0.146362 279.466 0.0109468 283.765H0V308.826H0.0111408C-0.145309 313.727 2.24222 318.697 7.16302 321.41L84.764 364.207C92.9491 368.72 102.884 368.678 111.03 364.094L186.607 321.573C191.535 318.8 193.881 313.759 193.647 308.826H193.551V285.087C193.794 280.394 191.701 275.595 187.271 272.736C187.232 272.407 187.183 272.08 187.124 271.755C191.744 268.934 193.941 264.053 193.713 259.274H192.394C192.63 263.757 190.507 268.35 186.027 270.87L110.451 313.392C102.701 317.752 93.2516 317.792 85.4656 313.498L7.86472 270.702C3.3981 268.239 1.23841 263.72 1.39542 259.274H0.0770835ZM7.80124 295.19C-0.271722 290.74 -0.812046 279.577 6.2408 274.248C6.31249 279.3 8.71234 284.318 13.4373 287.13L78.4776 325.824C90.3995 332.917 104.894 332.892 116.801 325.76L180.216 287.777C185.07 284.869 187.462 279.629 187.383 274.425C194.345 279.742 193.842 290.787 185.871 295.275L110.31 337.808C102.562 342.17 93.1118 342.212 85.3249 337.92L7.80124 295.19ZM178.976 285.395C183.376 282.76 185.303 277.785 184.751 273.101L111.096 314.541C102.95 319.125 93.0151 319.167 84.8299 314.653L8.84141 272.746C8.40584 277.347 10.3502 282.173 14.671 284.744L79.7114 323.439C90.8641 330.074 104.424 330.051 115.562 323.38L178.976 285.395ZM192.365 308.826V290.049C191.225 292.606 189.275 294.871 186.516 296.423L110.956 338.958C102.81 343.543 92.8756 343.588 84.6894 339.076L7.16576 296.346C4.33199 294.784 2.33796 292.473 1.18581 289.859V308.826H1.32948C1.17247 313.274 3.33215 317.792 7.79877 320.255L85.3997 363.051C93.1856 367.346 102.636 367.305 110.385 362.946L185.961 320.424C190.441 317.903 192.564 313.31 192.328 308.826H192.365ZM13.1761 92.4204L14.4936 93.1557L81.7059 130.671L81.7063 148.83V150.354L80.3887 149.593L13.1751 110.744L13.1761 93.9305V92.4204ZM14.4927 109.983L14.4935 94.6658L80.3884 131.446L80.3887 148.069L14.4927 109.983ZM14.4936 127.809L13.1761 127.073V128.583L13.1751 145.397L80.3887 184.245L81.7063 185.006V183.483L81.7059 165.324L14.4936 127.809ZM14.4935 129.319L14.4927 144.636L80.3887 182.722L80.3884 166.099L14.4935 129.319ZM13.1761 163.045L14.4936 163.78L81.7059 201.296L81.7063 219.455V220.978L80.3887 220.217L13.1751 181.369L13.1761 164.555V163.045ZM14.4927 180.608L14.4935 165.29L80.3884 202.07L80.3887 218.694L14.4927 180.608ZM14.4936 199.751L13.1761 199.017V200.527L13.1751 217.34L80.3887 256.189L81.7063 256.95V255.426L81.7059 237.268L14.4936 199.751ZM14.4935 201.262L14.4927 216.579L80.3887 254.665L80.3884 238.042L14.4935 201.262ZM13.1761 233.669L14.4936 234.404L81.7059 271.92L81.7063 290.08V291.602L80.3887 290.841L13.1751 251.993L13.1761 235.18V233.669ZM14.4927 251.232L14.4935 235.914L80.3884 272.695L80.3887 289.318L14.4927 251.232Z"
                        fill={!isHovered ? variables.baseOrange : variables.baseYellow}
                    />
                </svg>
            </div>
        </article>
    );
};

export { Interactive };
