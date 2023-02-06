import anaSyfaIcon1 from "../../assets/icons/sidebar/ana-sayfa.svg";
import anaSyfaIcon2 from "../../assets/icons/sidebar/ana-sayfa-2.svg";
import product1 from "../../assets/icons/sidebar/product.svg";
import product2 from "../../assets/icons/sidebar/product-2.svg";
import star1 from "../../assets/icons/sidebar/star.svg";
import star2 from "../../assets/icons/sidebar/star-2.svg";
import bag1 from "../../assets/icons/sidebar/bag.svg";
import bag2 from "../../assets/icons/sidebar/bag-2.svg";
import clipboard1 from "../../assets/icons/sidebar/clipboard.svg";
import clipboard2 from "../../assets/icons/sidebar/clipboard-2.svg";
import map1 from "../../assets/icons/sidebar/map.svg";
import map2 from "../../assets/icons/sidebar/map-2.svg";
import wallet1 from "../../assets/icons/sidebar/wallet.svg";
import wallet2 from "../../assets/icons/sidebar/wallet-2.svg";
import clock1 from "../../assets/icons/sidebar/clock.svg";
import clock2 from "../../assets/icons/sidebar/clock-2.svg";
import accounting1 from "../../assets/icons/sidebar/accounting.svg";
import accounting2 from "../../assets/icons/sidebar/accounting-2.svg";
import shop1 from "../../assets/icons/sidebar/shop.svg";
import shop2 from "../../assets/icons/sidebar/shop-2.svg";
import userFolder1 from "../../assets/icons/sidebar/user-folder.svg";
import userFolder2 from "../../assets/icons/sidebar/user-folder-2.svg";
import groupChat1 from "../../assets/icons/sidebar/group-chat.svg";
import groupChat2 from "../../assets/icons/sidebar/group-chat-2.svg";

const Pages = [
  {
    icon1: anaSyfaIcon1,
    icon2: anaSyfaIcon2,
    title: "Home",
    isToggable: false,
    id: "pages-menu-1",
    link: "Home",
  },
  {
    icon1: bag1,
    icon2: bag2,
    title: "Siparişler",
    isToggable: true,
    id: "pages-menu-2",
    link: "Siparişler",
    childrens: [
      {
        title: "Onay Bekleyenler",
        id: "2-1",
        nb: "3",
        link: "Siparişler/Onay-Bekleyenler",
      },
      {
        title: "Aktif Siparişler",
        id: "2-2",
        nb: "100",
        link: "Siparişler/Aktif-Siparişler",
      },
      {
        title: "Geçmiş Siparişler",
        id: "2-3",
        link: "Siparişler/Geçmiş-Siparişler",
      },
    ],
  },
  {
    icon1: clipboard1,
    icon2: clipboard2,
    title: "Menü İşlemleri",
    isToggable: true,
    id: "pages-menu-3",
    link: "Menü-İşlemleri",
    childrens: [
      { title: "Menü", id: "3-1", link: "Menü-İşlemleri/Menü" },
      { title: "Malzemeler", id: "3-2", link: "Menü-İşlemleri/Malzemeler" },
      { title: "Opsiyonlar", id: "3-3", link: "Menü-İşlemleri/Opsiyonlar" },
    ],
  },
  {
    icon1: shop1,
    icon2: shop2,
    title: "Restoran Bilgileri",
    isToggable: true,
    id: "pages-menu-10",
    link: "Restoran-Bilgileri",
    childrens: [
      {
        title: "Genel Bilgiler",
        id: "10-1",
        link: "Restoran-Bilgileri/Genel-Bilgiler",
      },
      {
        title: "Finanslar Bilgiler",
        id: "10-2",
        link: "Restoran-Bilgileri/Finanslar-Bilgiler",
      },
      {
        title: "Kullanıcılar",
        id: "10-3",
        link: "Restoran-Bilgileri/Kullanıcılar",
      },
      {
        title: "Pos Entegrasyonları",
        id: "10-4",
        link: "Restoran-Bilgileri/Pos-Entegrasyonları",
      },
      { title: "Belgeler", id: "10-5", link: "Restoran-Bilgileri/Belgeler" },
    ],
  },
  // {
  //   icon1: product1,
  //   icon2: product2,
  //   title: "Ürün İşlemleri",
  //   isToggable: false,
  //   id: "pages-menu-4",
  //   link: "Ürün-İşlemleri",
  // },

  {
    icon1: map1,
    icon2: map2,
    title: "Restoran Bölgesi Aç/Kapa",
    isToggable: false,
    id: "pages-menu-6",
    link: "Restoran-Bölgesi-Aç/Kapa",
  },

  {
    icon1: accounting1,
    icon2: accounting2,
    title: "Muhasebe",
    isToggable: true,
    id: "pages-menu-9",
    link: "Muhasebe",
  },
  {
    icon1: clock1,
    icon2: clock2,
    title: "Çalışma Saatleri",
    isToggable: false,
    id: "pages-menu-8",
    link: "Çalışma-aatleri",
  },
  {
    icon1: wallet1,
    icon2: wallet2,
    title: "Ödeme Yöntemleri",
    isToggable: false,
    id: "pages-menu-7",
    link: "Ödeme-Yöntemleri",
  },

  {
    icon1: star1,
    icon2: star2,
    title: "Restaurant Review",
    isToggable: false,
    id: "pages-menu-5",
    link: "Restaurant-Review",
  },
  {
    icon1: userFolder1,
    icon2: userFolder2,
    title: "Talepler",
    isToggable: false,
    id: "pages-menu-11",
    link: "Talepler",
  },
  {
    icon1: groupChat1,
    icon2: groupChat2,
    title: "Canlı Yardım",
    isToggable: false,
    id: "pages-menu-12",
    link: "Canlı-Yardım",
  },
];

export default Pages;
