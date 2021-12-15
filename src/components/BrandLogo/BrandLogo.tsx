import React, { Fragment } from 'react'

interface BrandLogoProps {
  className?: string;
  type: 'color' | 'white'
}

const logoType = (type:string) => {
  switch (type) {
    case 'color': 
      return (
        <Fragment>
          <path d="M174.777 16.3823L163.829 15.8559C163.149 15.8214 162.561 16.3307 162.493 17.0085L160.091 40.7226C159.992 41.7136 159.391 42.5876 158.504 43.0349C157.811 43.3824 157.148 43.5544 156.515 43.5544C156.083 43.5544 155.67 43.4099 155.282 43.1209C154.894 42.8319 154.551 42.4671 154.265 42.037C153.973 41.6035 153.754 41.1424 153.596 40.6469C153.434 40.1549 153.355 39.7248 153.355 39.3463C153.355 39.1708 153.362 39.0057 153.379 38.8474C153.393 38.6891 153.417 38.524 153.444 38.3485L155.526 17.7208C155.595 17.0533 155.086 16.4649 154.417 16.4339L143.507 15.935C142.888 15.9075 142.352 16.3685 142.291 16.9844L142.28 17.0842C142.023 16.9156 141.758 16.7505 141.473 16.5991C140.477 16.0657 139.446 15.7974 138.378 15.7974C137.34 15.7974 136.365 15.9556 135.455 16.2756C134.548 16.5956 133.703 16.9913 132.923 17.4662C132.143 17.9444 131.442 18.4709 130.824 19.0489C130.202 19.627 129.677 20.1741 129.244 20.6971L129.58 17.2804C129.653 16.5406 129.058 15.9075 128.32 15.935L117.32 16.3238C116.709 16.3444 116.207 16.8158 116.146 17.4249L113.947 39.1433C113.875 39.8624 113.672 40.5712 113.298 41.1872C112.37 42.7011 110.8 43.3824 108.722 43.3824C108.203 43.3824 107.774 43.2964 107.444 43.1209C107.111 42.9454 106.86 42.7183 106.685 42.4258C106.513 42.1368 106.397 41.8031 106.338 41.428C106.283 41.053 106.283 40.6779 106.338 40.2994L108.609 17.9582C108.691 17.1358 108.07 16.4167 107.245 16.3789L96.9053 15.9384C96.1495 15.9075 95.4969 16.4718 95.4213 17.2253L93.0476 40.4336C92.7006 41.3282 92.2609 42.0749 91.7251 42.6667C91.1926 43.2585 90.5365 43.5544 89.7533 43.5544C88.8601 43.5544 88.2453 43.1519 87.9155 42.3398C87.5823 41.5312 87.4723 40.5368 87.5891 39.3498L89.7533 17.7758C89.822 17.0773 89.293 16.4614 88.5922 16.4305L77.7852 15.935C77.1394 15.904 76.5795 16.3857 76.5142 17.0326L74.2504 39.0848C74.2298 39.2844 74.2127 39.4805 74.1989 39.6801C74.144 40.4302 73.742 41.1115 73.0962 41.4968C72.7081 41.7274 72.3061 41.9648 71.8905 42.2056C70.9527 42.7562 69.9118 43.2551 68.7714 43.7024C67.6309 44.1497 66.3668 44.5282 64.9824 44.831C63.5946 45.1338 62.0522 45.2852 60.3484 45.2852C59.5411 45.2852 58.7751 45.1751 58.0537 44.9617C57.3323 44.745 56.7071 44.4043 56.1712 43.9432C55.6388 43.4787 55.2128 42.8869 54.8934 42.1643C54.5739 41.4418 54.4159 40.5747 54.4159 39.5596C54.4159 39.3876 54.4227 39.2121 54.4399 39.0401C54.4537 38.868 54.4777 38.6788 54.5052 38.4758C55.6285 38.3622 56.8857 38.1661 58.2701 37.8908C59.6579 37.6156 61.056 37.2612 62.4713 36.8276C63.8866 36.3941 65.271 35.8883 66.6313 35.3068C67.9882 34.7287 69.187 34.0853 70.2244 33.3765C71.2619 32.6677 72.1 31.8797 72.7321 31.0092C73.3676 30.1421 73.6836 29.2062 73.6836 28.1912C73.6836 26.2265 73.4466 24.4889 72.9691 22.9852C72.4916 21.4816 71.6981 20.2223 70.5886 19.2106C69.479 18.199 68.0122 17.4386 66.195 16.9363C64.3778 16.4305 62.1244 16.1758 59.4415 16.1758C57.1331 16.1758 55.0686 16.4855 53.2479 17.1118C51.4307 17.7345 49.8299 18.5844 48.4421 19.6717C47.0578 20.7556 45.883 22.0424 44.9142 23.5323C43.9455 25.0222 43.152 26.6187 42.5337 28.3254C41.9119 30.032 41.4653 31.8247 41.1905 33.7034C40.9157 35.5821 40.7783 37.4607 40.7783 39.3429V39.3463C40.7783 39.6491 40.713 39.9485 40.5791 40.2168C40.4314 40.5128 40.2493 40.8052 40.0432 41.0977C39.7237 41.545 39.3596 41.951 38.9371 42.3123C38.5214 42.6736 38.0474 42.9695 37.5287 43.2035C37.01 43.4374 36.4328 43.5476 35.7973 43.5476C35.3027 43.5476 34.9076 43.4547 34.6053 43.2688C34.3031 43.0796 34.0489 42.8353 33.8496 42.5291C33.6469 42.2263 33.5095 41.8925 33.4374 41.5312C33.3653 41.1699 33.3275 40.8018 33.3275 40.4267C33.3275 39.7317 33.3996 38.9575 33.5439 38.1042C33.6882 37.2509 33.8393 36.3253 33.9973 35.3274C34.1553 34.3262 34.3065 33.2595 34.4542 32.1172C34.5985 30.9748 34.6672 29.7671 34.6672 28.4974C34.6672 26.5878 34.4714 24.8846 34.0832 23.3775C33.695 21.8738 33.0698 20.6007 32.2213 19.5582C31.366 18.519 30.2633 17.7242 28.9064 17.1737C27.5495 16.6232 25.9041 16.3479 23.9701 16.3479C22.4415 16.3479 21.064 16.5991 19.8376 17.1083C18.6078 17.6141 17.5361 18.3298 16.6086 19.2554C16.7838 17.9823 16.9693 16.4924 17.1719 14.7892C17.3712 13.0826 17.5842 11.3277 17.8006 9.52131C18.0136 7.71488 18.2265 5.95662 18.4258 4.24998C18.4979 3.63751 18.5666 3.05257 18.6319 2.4986C18.7968 1.09475 17.6357 -0.106098 16.2273 0.00744888L7.98291 0.688731C6.43022 0.816041 5.1867 2.03409 5.02181 3.58934L0.00992129 51.1896C-0.100004 52.2322 0.717563 53.144 1.76528 53.144H11.7169C12.6238 53.144 13.383 52.4558 13.4723 51.5543L15.6089 30.2626C15.6708 29.6398 15.8632 29.0342 16.1689 28.4871C16.3681 28.1258 16.6086 27.7783 16.8834 27.4445C17.1582 27.1142 17.4674 26.8321 17.8143 26.6015C18.1613 26.371 18.5357 26.254 18.941 26.254C19.8617 26.254 20.4903 26.6669 20.8235 27.4893C21.1533 28.3116 21.3182 29.3301 21.3182 30.5447C21.3182 31.5597 21.246 32.647 21.1052 33.8204C20.9575 34.9937 20.8098 36.1051 20.6483 37.1614C20.4903 38.2177 20.3392 39.1708 20.1949 40.0242C20.0506 40.8775 19.9785 41.5037 19.9785 41.9097C19.9785 43.0349 20.109 44.2942 20.3701 45.6809C20.6311 47.0709 21.1327 48.3647 21.885 49.5621C22.6338 50.7629 23.7125 51.7677 25.1106 52.5763C26.5121 53.3883 28.3671 53.7909 30.6755 53.7909C32.0633 53.7909 33.4546 53.5294 34.8527 53.0098C36.2542 52.4902 37.5596 51.7814 38.7756 50.8834C39.9882 49.9888 41.0634 48.9255 42.0012 47.6937C42.1799 47.4632 42.3447 47.2258 42.5062 46.9884C43.3925 48.578 44.5432 49.8959 45.962 50.9487C47.5765 52.1496 49.4899 53.0201 51.6987 53.5535C53.9075 54.0868 56.3121 54.3552 58.9091 54.3552C61.2759 54.3552 63.4469 54.073 65.4255 53.5122C67.4042 52.9479 69.2214 52.215 70.884 51.3204C72.4813 50.4602 73.9516 49.483 75.2913 48.406C75.597 49.1114 75.968 49.7548 76.4009 50.3432C77.2115 51.427 78.2558 52.2735 79.5406 52.8825C80.8253 53.4881 82.4055 53.7909 84.2811 53.7909C85.3769 53.7909 86.3731 53.6704 87.2697 53.4227C88.1628 53.1784 88.9598 52.8653 89.6502 52.4902C90.3407 52.1152 90.9315 51.7229 91.4228 51.3169C91.914 50.9109 92.3331 50.5359 92.68 50.1918C93.2846 49.5552 93.8033 48.7879 94.2396 47.8899C94.8133 49.7135 95.8266 51.1518 97.2694 52.2081C98.7122 53.261 100.646 53.7909 103.071 53.7909C104.487 53.7909 105.916 53.5294 107.358 53.0098C108.801 52.4902 110.165 51.7745 111.45 50.8627C111.941 50.5118 112.405 50.1333 112.855 49.741L112.69 51.3651C112.594 52.3148 113.339 53.1371 114.291 53.1371H124.569C125.393 53.1371 126.087 52.5109 126.169 51.6885L128.447 28.9791C128.533 28.5766 128.794 28.1568 129.227 27.7232C129.659 27.2897 130.175 26.8974 130.766 26.5499C131.356 26.2024 131.992 25.9237 132.669 25.7069C133.349 25.4901 133.977 25.3835 134.555 25.3835C135.245 25.3835 135.98 25.4489 136.763 25.5796C137.543 25.7104 138.309 25.8893 139.058 26.1233C139.831 26.3607 140.559 26.6738 141.239 27.066V27.0695L140.006 39.0917C139.92 39.9313 139.876 40.7674 139.876 41.6069C139.876 43.3721 140.058 44.9996 140.418 46.486C140.779 47.9759 141.366 49.2628 142.17 50.3466C142.981 51.4305 144.025 52.2769 145.31 52.8859C146.595 53.495 148.175 53.7943 150.051 53.7943C151.435 53.7943 152.613 53.6876 153.578 53.4709C154.544 53.2541 155.375 52.9651 156.069 52.6038C156.763 52.2425 157.347 51.809 157.821 51.3032C157.989 51.1242 158.154 50.9453 158.315 50.7561C158.597 50.4292 158.889 50.1092 159.185 49.7961C159.161 51.3754 158.491 68.0118 140.157 56.6364C139.292 56.0997 138.161 56.6089 138 57.6171L136.973 64.0686C136.877 64.6638 137.165 65.2488 137.694 65.5413C140.965 67.3374 152.854 73.0491 163.743 67.9395C167.59 66.1331 169.751 62.7955 170.895 59.014C171.16 58.2846 171.386 57.5517 171.572 56.8153C171.802 55.9035 171.987 55.0296 172.135 54.1934C172.279 53.3539 172.396 52.5591 172.479 51.809C172.565 51.0589 172.654 50.3913 172.74 49.8133L175.979 17.8068C176.068 17.0636 175.512 16.4201 174.777 16.3823ZM55.5117 29.829C55.8415 28.7452 56.2331 27.768 56.6831 26.9009C57.1296 26.0338 57.6346 25.3353 58.198 24.7985C58.7613 24.2652 59.3728 23.9968 60.0392 23.9968C60.7606 23.9968 61.2381 24.3065 61.4682 24.9293C61.5163 25.06 61.5644 25.1977 61.6091 25.3387C62.0282 26.6841 61.8392 28.1671 61.0492 29.3335C61.0457 29.3404 61.0388 29.3473 61.0354 29.3542C60.5717 30.0355 60.0186 30.641 59.3694 31.1744C58.7167 31.7111 58.0056 32.1412 57.2258 32.475C56.446 32.8088 55.6216 33.0014 54.756 33.0599C54.9243 31.9933 55.1785 30.9163 55.5117 29.829ZM170.737 39.0814C170.737 39.0883 170.74 39.0883 170.74 39.0986C170.74 39.0951 170.737 39.0883 170.737 39.0814ZM170.758 39.1708C170.758 39.1777 170.761 39.1812 170.761 39.188C170.761 39.1846 170.761 39.1777 170.758 39.1708ZM170.799 39.336C170.799 39.3394 170.802 39.3463 170.802 39.3498C170.799 39.3463 170.799 39.3429 170.799 39.336ZM170.843 39.539C170.847 39.5493 170.847 39.5596 170.85 39.57C170.847 39.5596 170.847 39.5493 170.843 39.539ZM171.139 58.1779C171.139 58.1814 171.139 58.1814 171.135 58.1848C171.139 58.1814 171.139 58.1814 171.139 58.1779ZM170.971 40.1377C170.971 40.1446 170.974 40.1515 170.974 40.1618C170.974 40.1515 170.974 40.1446 170.971 40.1377ZM171.513 56.4816C171.513 56.485 171.513 56.4885 171.51 56.4919C171.513 56.4919 171.513 56.4885 171.513 56.4816Z" fill="url(#paint0_linear_516_31)"/>
          <defs>
            <linearGradient id="paint0_linear_516_31" x1="-11.0004" y1="35.0115" x2="160.971" y2="136.333" gradientUnits="userSpaceOnUse">
              <stop stopColor="#FF7451"/>
              <stop offset="0.921875" stopColor="#E8507B"/>
            </linearGradient>
          </defs>
        </Fragment>
      )
    case 'white':
      return (
        <Fragment>
          <path d="M174.777 16.3823L163.829 15.8559C163.149 15.8214 162.561 16.3307 162.493 17.0085L160.091 40.7226C159.992 41.7136 159.391 42.5876 158.504 43.0349C157.811 43.3824 157.148 43.5544 156.515 43.5544C156.083 43.5544 155.67 43.4099 155.282 43.1209C154.894 42.8319 154.551 42.4671 154.265 42.037C153.973 41.6035 153.754 41.1424 153.596 40.6469C153.434 40.1549 153.355 39.7248 153.355 39.3463C153.355 39.1708 153.362 39.0057 153.379 38.8474C153.393 38.6891 153.417 38.524 153.444 38.3485L155.526 17.7208C155.595 17.0533 155.086 16.4649 154.417 16.4339L143.507 15.935C142.888 15.9075 142.352 16.3685 142.291 16.9844L142.28 17.0842C142.023 16.9156 141.758 16.7505 141.473 16.5991C140.477 16.0657 139.446 15.7974 138.378 15.7974C137.34 15.7974 136.365 15.9556 135.455 16.2756C134.548 16.5956 133.703 16.9913 132.923 17.4662C132.143 17.9444 131.442 18.4709 130.824 19.0489C130.202 19.627 129.677 20.1741 129.244 20.6971L129.58 17.2804C129.653 16.5406 129.058 15.9075 128.32 15.935L117.32 16.3238C116.709 16.3444 116.207 16.8158 116.146 17.4249L113.947 39.1433C113.875 39.8624 113.672 40.5712 113.298 41.1872C112.37 42.7011 110.8 43.3824 108.722 43.3824C108.203 43.3824 107.774 43.2964 107.444 43.1209C107.111 42.9454 106.86 42.7183 106.685 42.4258C106.513 42.1368 106.397 41.8031 106.338 41.428C106.283 41.053 106.283 40.6779 106.338 40.2994L108.609 17.9582C108.691 17.1358 108.07 16.4167 107.245 16.3789L96.9053 15.9384C96.1495 15.9075 95.4969 16.4718 95.4213 17.2253L93.0476 40.4336C92.7006 41.3282 92.2609 42.0749 91.7251 42.6667C91.1926 43.2585 90.5365 43.5544 89.7533 43.5544C88.8601 43.5544 88.2453 43.1519 87.9155 42.3398C87.5823 41.5312 87.4723 40.5368 87.5891 39.3498L89.7533 17.7758C89.822 17.0773 89.293 16.4614 88.5922 16.4305L77.7852 15.935C77.1394 15.904 76.5795 16.3857 76.5142 17.0326L74.2504 39.0848C74.2298 39.2844 74.2127 39.4805 74.1989 39.6801C74.144 40.4302 73.742 41.1115 73.0962 41.4968C72.7081 41.7274 72.3061 41.9648 71.8905 42.2056C70.9527 42.7562 69.9118 43.2551 68.7714 43.7024C67.6309 44.1497 66.3668 44.5282 64.9824 44.831C63.5946 45.1338 62.0522 45.2852 60.3484 45.2852C59.5411 45.2852 58.7751 45.1751 58.0537 44.9617C57.3323 44.745 56.7071 44.4043 56.1712 43.9432C55.6388 43.4787 55.2128 42.8869 54.8934 42.1643C54.5739 41.4418 54.4159 40.5747 54.4159 39.5596C54.4159 39.3876 54.4227 39.2121 54.4399 39.0401C54.4537 38.868 54.4777 38.6788 54.5052 38.4758C55.6285 38.3622 56.8857 38.1661 58.2701 37.8908C59.6579 37.6156 61.056 37.2612 62.4713 36.8276C63.8866 36.3941 65.271 35.8883 66.6313 35.3068C67.9882 34.7287 69.187 34.0853 70.2244 33.3765C71.2619 32.6677 72.1 31.8797 72.7321 31.0092C73.3676 30.1421 73.6836 29.2062 73.6836 28.1912C73.6836 26.2265 73.4466 24.4889 72.9691 22.9852C72.4916 21.4816 71.6981 20.2223 70.5886 19.2106C69.479 18.199 68.0122 17.4386 66.195 16.9363C64.3778 16.4305 62.1244 16.1758 59.4415 16.1758C57.1331 16.1758 55.0686 16.4855 53.2479 17.1118C51.4307 17.7345 49.8299 18.5844 48.4421 19.6717C47.0578 20.7556 45.883 22.0424 44.9142 23.5323C43.9455 25.0222 43.152 26.6187 42.5337 28.3254C41.9119 30.032 41.4653 31.8247 41.1905 33.7034C40.9157 35.5821 40.7783 37.4607 40.7783 39.3429V39.3463C40.7783 39.6491 40.713 39.9485 40.5791 40.2168C40.4314 40.5128 40.2493 40.8052 40.0432 41.0977C39.7237 41.545 39.3596 41.951 38.9371 42.3123C38.5214 42.6736 38.0474 42.9695 37.5287 43.2035C37.01 43.4374 36.4328 43.5476 35.7973 43.5476C35.3027 43.5476 34.9076 43.4547 34.6053 43.2688C34.3031 43.0796 34.0489 42.8353 33.8496 42.5291C33.6469 42.2263 33.5095 41.8925 33.4374 41.5312C33.3653 41.1699 33.3275 40.8018 33.3275 40.4267C33.3275 39.7317 33.3996 38.9575 33.5439 38.1042C33.6882 37.2509 33.8393 36.3253 33.9973 35.3274C34.1553 34.3262 34.3065 33.2595 34.4542 32.1172C34.5985 30.9748 34.6672 29.7671 34.6672 28.4974C34.6672 26.5878 34.4714 24.8846 34.0832 23.3775C33.695 21.8738 33.0698 20.6007 32.2213 19.5582C31.366 18.519 30.2633 17.7242 28.9064 17.1737C27.5495 16.6232 25.9041 16.3479 23.9701 16.3479C22.4415 16.3479 21.064 16.5991 19.8376 17.1083C18.6078 17.6141 17.5361 18.3298 16.6086 19.2554C16.7838 17.9823 16.9693 16.4924 17.1719 14.7892C17.3712 13.0826 17.5842 11.3277 17.8006 9.52131C18.0136 7.71488 18.2265 5.95662 18.4258 4.24998C18.4979 3.63751 18.5666 3.05257 18.6319 2.4986C18.7968 1.09475 17.6357 -0.106098 16.2273 0.00744888L7.98291 0.688731C6.43022 0.816041 5.1867 2.03409 5.02181 3.58934L0.00992129 51.1896C-0.100004 52.2322 0.717563 53.144 1.76528 53.144H11.7169C12.6238 53.144 13.383 52.4558 13.4723 51.5543L15.6089 30.2626C15.6708 29.6398 15.8632 29.0342 16.1689 28.4871C16.3681 28.1258 16.6086 27.7783 16.8834 27.4445C17.1582 27.1142 17.4674 26.8321 17.8143 26.6015C18.1613 26.371 18.5357 26.254 18.941 26.254C19.8617 26.254 20.4903 26.6669 20.8235 27.4893C21.1533 28.3116 21.3182 29.3301 21.3182 30.5447C21.3182 31.5597 21.246 32.647 21.1052 33.8204C20.9575 34.9937 20.8098 36.1051 20.6483 37.1614C20.4903 38.2177 20.3392 39.1708 20.1949 40.0242C20.0506 40.8775 19.9785 41.5037 19.9785 41.9097C19.9785 43.0349 20.109 44.2942 20.3701 45.6809C20.6311 47.0709 21.1327 48.3647 21.885 49.5621C22.6338 50.7629 23.7125 51.7677 25.1106 52.5763C26.5121 53.3883 28.3671 53.7909 30.6755 53.7909C32.0633 53.7909 33.4546 53.5294 34.8527 53.0098C36.2542 52.4902 37.5596 51.7814 38.7756 50.8834C39.9882 49.9888 41.0634 48.9255 42.0012 47.6937C42.1799 47.4632 42.3447 47.2258 42.5062 46.9884C43.3925 48.578 44.5432 49.8959 45.962 50.9487C47.5765 52.1496 49.4899 53.0201 51.6987 53.5535C53.9075 54.0868 56.3121 54.3552 58.9091 54.3552C61.2759 54.3552 63.4469 54.073 65.4255 53.5122C67.4042 52.9479 69.2214 52.215 70.884 51.3204C72.4813 50.4602 73.9516 49.483 75.2913 48.406C75.597 49.1114 75.968 49.7548 76.4009 50.3432C77.2115 51.427 78.2558 52.2735 79.5406 52.8825C80.8253 53.4881 82.4055 53.7909 84.2811 53.7909C85.3769 53.7909 86.3731 53.6704 87.2697 53.4227C88.1628 53.1784 88.9598 52.8653 89.6502 52.4902C90.3407 52.1152 90.9315 51.7229 91.4228 51.3169C91.914 50.9109 92.3331 50.5359 92.68 50.1918C93.2846 49.5552 93.8033 48.7879 94.2396 47.8899C94.8133 49.7135 95.8266 51.1518 97.2694 52.2081C98.7122 53.261 100.646 53.7909 103.071 53.7909C104.487 53.7909 105.916 53.5294 107.358 53.0098C108.801 52.4902 110.165 51.7745 111.45 50.8627C111.941 50.5118 112.405 50.1333 112.855 49.741L112.69 51.3651C112.594 52.3148 113.339 53.1371 114.291 53.1371H124.569C125.393 53.1371 126.087 52.5109 126.169 51.6885L128.447 28.9791C128.533 28.5766 128.794 28.1568 129.227 27.7232C129.659 27.2897 130.175 26.8974 130.766 26.5499C131.356 26.2024 131.992 25.9237 132.669 25.7069C133.349 25.4901 133.977 25.3835 134.555 25.3835C135.245 25.3835 135.98 25.4489 136.763 25.5796C137.543 25.7104 138.309 25.8893 139.058 26.1233C139.831 26.3607 140.559 26.6738 141.239 27.066V27.0695L140.006 39.0917C139.92 39.9313 139.876 40.7674 139.876 41.6069C139.876 43.3721 140.058 44.9996 140.418 46.486C140.779 47.9759 141.366 49.2628 142.17 50.3466C142.981 51.4305 144.025 52.2769 145.31 52.8859C146.595 53.495 148.175 53.7943 150.051 53.7943C151.435 53.7943 152.613 53.6876 153.578 53.4709C154.544 53.2541 155.375 52.9651 156.069 52.6038C156.763 52.2425 157.347 51.809 157.821 51.3032C157.989 51.1242 158.154 50.9453 158.315 50.7561C158.597 50.4292 158.889 50.1092 159.185 49.7961C159.161 51.3754 158.491 68.0118 140.157 56.6364C139.292 56.0997 138.161 56.6089 138 57.6171L136.973 64.0686C136.877 64.6638 137.165 65.2488 137.694 65.5413C140.965 67.3374 152.854 73.0491 163.743 67.9395C167.59 66.1331 169.751 62.7955 170.895 59.014C171.16 58.2846 171.386 57.5517 171.572 56.8153C171.802 55.9035 171.987 55.0296 172.135 54.1934C172.279 53.3539 172.396 52.5591 172.479 51.809C172.565 51.0589 172.654 50.3913 172.74 49.8133L175.979 17.8068C176.068 17.0636 175.512 16.4201 174.777 16.3823ZM55.5117 29.829C55.8415 28.7452 56.2331 27.768 56.6831 26.9009C57.1296 26.0338 57.6346 25.3353 58.198 24.7985C58.7613 24.2652 59.3728 23.9968 60.0392 23.9968C60.7606 23.9968 61.2381 24.3065 61.4682 24.9293C61.5163 25.06 61.5644 25.1977 61.6091 25.3387C62.0282 26.6841 61.8392 28.1671 61.0492 29.3335C61.0457 29.3404 61.0388 29.3473 61.0354 29.3542C60.5717 30.0355 60.0186 30.641 59.3694 31.1744C58.7167 31.7111 58.0056 32.1412 57.2258 32.475C56.446 32.8088 55.6216 33.0014 54.756 33.0599C54.9243 31.9933 55.1785 30.9163 55.5117 29.829ZM170.737 39.0814C170.737 39.0883 170.74 39.0883 170.74 39.0986C170.74 39.0951 170.737 39.0883 170.737 39.0814ZM170.758 39.1708C170.758 39.1777 170.761 39.1812 170.761 39.188C170.761 39.1846 170.761 39.1777 170.758 39.1708ZM170.799 39.336C170.799 39.3394 170.802 39.3463 170.802 39.3498C170.799 39.3463 170.799 39.3429 170.799 39.336ZM170.843 39.539C170.847 39.5493 170.847 39.5596 170.85 39.57C170.847 39.5596 170.847 39.5493 170.843 39.539ZM171.139 58.1779C171.139 58.1814 171.139 58.1814 171.135 58.1848C171.139 58.1814 171.139 58.1814 171.139 58.1779ZM170.971 40.1377C170.971 40.1446 170.974 40.1515 170.974 40.1618C170.974 40.1515 170.974 40.1446 170.971 40.1377ZM171.513 56.4816C171.513 56.485 171.513 56.4885 171.51 56.4919C171.513 56.4919 171.513 56.4885 171.513 56.4816Z" fill="#E0E0E0"/>
        </Fragment>
      )
  }
}



const BrandLogo: React.FC<BrandLogoProps> = ({className, type}) => {
  return (
    <svg className={className || ''} width="176" height="71" viewBox="0 0 176 71" fill="#E0E0E0" xmlns="http://www.w3.org/2000/svg">
      {logoType(type)}
    </svg>
  )
}

export default BrandLogo
